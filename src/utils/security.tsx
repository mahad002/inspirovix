import React from 'react';

// Security utilities for form validation and protection
export class SecurityValidator {
  // SQL Injection patterns to detect and block
  private static readonly SQL_INJECTION_PATTERNS = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/gi,
    /'|\\';|\\;|\||\\*|%|<|>|\{|\}|\[|\]|\(|\)/gi,
    /((\%3D)|(=))[^\n]*((\%27)|(\')|(\-\-)|(\%3B)|(;))/gi,
    /((\%27)|(\'))((\%6F)|o|(\%4F))((\%72)|r|(\%52))/gi,
    /exec(\s|\+)+(s|x)p\w+/gi,
    /UNION(?:\s+ALL)?\s+SELECT/gi
  ];

  // XSS patterns to detect and block
  private static readonly XSS_PATTERNS = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<img[^>]+src[\\s]*=[\\s]*["\']javascript:/gi,
    /eval\s*\(/gi,
    /expression\s*\(/gi
  ];

  // Rate limiting storage
  private static attempts: Map<string, { count: number; lastAttempt: number }> = new Map();
  private static readonly MAX_ATTEMPTS = 5;
  private static readonly RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes

  /**
   * Validates and sanitizes input to prevent SQL injection
   */
  static validateInput(input: string): { isValid: boolean; sanitized: string; errors: string[] } {
    const errors: string[] = [];
    let sanitized = input.trim();

    // Check for SQL injection patterns
    for (const pattern of this.SQL_INJECTION_PATTERNS) {
      if (pattern.test(input)) {
        errors.push('Potentially malicious SQL patterns detected');
        break;
      }
    }

    // Check for XSS patterns
    for (const pattern of this.XSS_PATTERNS) {
      if (pattern.test(input)) {
        errors.push('Potentially malicious script patterns detected');
        break;
      }
    }

    // Sanitize input
    sanitized = this.sanitizeString(sanitized);

    // Additional validation
    if (sanitized.length > 10000) {
      errors.push('Input too long');
    }

    if (sanitized.length === 0 && input.length > 0) {
      errors.push('Input contains only invalid characters');
    }

    return {
      isValid: errors.length === 0,
      sanitized,
      errors
    };
  }

  /**
   * Validates email format with additional security checks
   */
  static validateEmail(email: string): { isValid: boolean; sanitized: string; errors: string[] } {
    const errors: string[] = [];
    let sanitized = email.trim().toLowerCase();

    // Basic email regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(sanitized)) {
      errors.push('Invalid email format');
    }

    // Check for suspicious patterns
    if (sanitized.includes('..') || sanitized.includes('--')) {
      errors.push('Email contains suspicious patterns');
    }

    // Length validation
    if (sanitized.length > 254) {
      errors.push('Email too long');
    }

    // Domain validation
    const domain = sanitized.split('@')[1];
    if (domain && (domain.includes('..') || domain.startsWith('.') || domain.endsWith('.'))) {
      errors.push('Invalid email domain');
    }

    return {
      isValid: errors.length === 0,
      sanitized,
      errors
    };
  }

  /**
   * Rate limiting to prevent spam and brute force attacks
   */
  static checkRateLimit(identifier: string): { allowed: boolean; remainingAttempts: number; resetTime: number } {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier);

    if (!userAttempts) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      return { allowed: true, remainingAttempts: this.MAX_ATTEMPTS - 1, resetTime: now + this.RATE_LIMIT_WINDOW };
    }

    // Reset if window has passed
    if (now - userAttempts.lastAttempt > this.RATE_LIMIT_WINDOW) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      return { allowed: true, remainingAttempts: this.MAX_ATTEMPTS - 1, resetTime: now + this.RATE_LIMIT_WINDOW };
    }

    // Check if limit exceeded
    if (userAttempts.count >= this.MAX_ATTEMPTS) {
      return { 
        allowed: false, 
        remainingAttempts: 0, 
        resetTime: userAttempts.lastAttempt + this.RATE_LIMIT_WINDOW 
      };
    }

    // Increment attempts
    userAttempts.count++;
    userAttempts.lastAttempt = now;
    this.attempts.set(identifier, userAttempts);

    return { 
      allowed: true, 
      remainingAttempts: this.MAX_ATTEMPTS - userAttempts.count, 
      resetTime: userAttempts.lastAttempt + this.RATE_LIMIT_WINDOW 
    };
  }

  /**
   * Validates HTTP request authenticity
   */
  static validateRequest(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Check if request is from a real browser
    if (typeof window === 'undefined') {
      errors.push('Request not from browser environment');
      return { isValid: false, errors };
    }

    // Check for basic browser features
    if (!window.navigator || !window.document) {
      errors.push('Invalid browser environment');
    }

    // Check referrer (should be from same origin or empty)
    if (document.referrer && !document.referrer.includes(window.location.hostname) && document.referrer !== '') {
      // Allow empty referrer for direct access
      if (document.referrer.trim() !== '') {
        errors.push('Suspicious request origin');
      }
    }

    // Check for automated requests (basic bot detection)
    if (window.navigator.webdriver) {
      errors.push('Automated request detected');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Generates a simple CSRF-like token for form validation
   */
  static generateFormToken(): string {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2);
    return btoa(`${timestamp}-${random}`).substring(0, 16);
  }

  /**
   * Validates form token (basic CSRF protection)
   */
  static validateFormToken(token: string): boolean {
    try {
      const decoded = atob(token);
      const [timestamp] = decoded.split('-');
      const tokenAge = Date.now() - parseInt(timestamp);
      
      // Token valid for 1 hour
      return tokenAge < 60 * 60 * 1000;
    } catch {
      return false;
    }
  }

  /**
   * Sanitizes string input
   */
  private static sanitizeString(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
      .trim();
  }

  /**
   * Validates form data comprehensively
   */
  static validateFormData(data: Record<string, string>): {
    isValid: boolean;
    sanitizedData: Record<string, string>;
    errors: Record<string, string[]>;
    globalErrors: string[];
  } {
    const sanitizedData: Record<string, string> = {};
    const errors: Record<string, string[]> = {};
    const globalErrors: string[] = [];

    // Validate request authenticity
    const requestValidation = this.validateRequest();
    if (!requestValidation.isValid) {
      globalErrors.push(...requestValidation.errors);
    }

    // Validate each field
    for (const [key, value] of Object.entries(data)) {
      if (key === 'email') {
        const emailValidation = this.validateEmail(value);
        if (!emailValidation.isValid) {
          errors[key] = emailValidation.errors;
        }
        sanitizedData[key] = emailValidation.sanitized;
      } else {
        const inputValidation = this.validateInput(value);
        if (!inputValidation.isValid) {
          errors[key] = inputValidation.errors;
        }
        sanitizedData[key] = inputValidation.sanitized;
      }
    }

    return {
      isValid: Object.keys(errors).length === 0 && globalErrors.length === 0,
      sanitizedData,
      errors,
      globalErrors
    };
  }
}

// Honeypot field component for bot detection
export const HoneypotField: React.FC = () => {
  return (
    <input
      type="text"
      name="website"
      tabIndex={-1}
      autoComplete="off"
      style={{
        position: 'absolute',
        left: '-9999px',
        width: '1px',
        height: '1px',
        opacity: 0,
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    />
  );
};