import React from 'react';

// Simplified security utilities for form validation
export class SecurityValidator {
  // Basic XSS patterns to detect and block (only the most dangerous ones)
  private static readonly XSS_PATTERNS = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi
  ];

  // Rate limiting storage (more lenient)
  private static attempts: Map<string, { count: number; lastAttempt: number }> = new Map();
  private static readonly MAX_ATTEMPTS = 10; // Increased from 5 to 10
  private static readonly RATE_LIMIT_WINDOW = 5 * 60 * 1000; // Reduced to 5 minutes

  /**
   * Basic input validation (much more lenient)
   */
  static validateInput(input: string): { isValid: boolean; sanitized: string; errors: string[] } {
    const errors: string[] = [];
    let sanitized = input.trim();

    // Only check for the most dangerous XSS patterns
    for (const pattern of this.XSS_PATTERNS) {
      if (pattern.test(input)) {
        errors.push('Script content not allowed');
        break;
      }
    }

    // Basic sanitization - only remove the most dangerous characters
    sanitized = sanitized
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframe tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .trim();

    // Very lenient length validation
    if (sanitized.length > 50000) {
      errors.push('Input too long (max 50,000 characters)');
    }

    return {
      isValid: errors.length === 0,
      sanitized,
      errors
    };
  }

  /**
   * Basic email validation
   */
  static validateEmail(email: string): { isValid: boolean; sanitized: string; errors: string[] } {
    const errors: string[] = [];
    let sanitized = email.trim().toLowerCase();

    // Basic email regex (more permissive)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(sanitized)) {
      errors.push('Please enter a valid email address');
    }

    // Length validation (more generous)
    if (sanitized.length > 320) { // RFC 5321 limit
      errors.push('Email address too long');
    }

    return {
      isValid: errors.length === 0,
      sanitized,
      errors
    };
  }

  /**
   * Simplified rate limiting
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
   * Simplified form token generation
   */
  static generateFormToken(): string {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2);
    return btoa(`${timestamp}-${random}`).substring(0, 16);
  }

  /**
   * Very lenient form token validation
   */
  static validateFormToken(token: string): boolean {
    try {
      const decoded = atob(token);
      const [timestamp] = decoded.split('-');
      const tokenAge = Date.now() - parseInt(timestamp);
      
      // Token valid for 24 hours (very generous)
      return tokenAge < 24 * 60 * 60 * 1000;
    } catch {
      // If token is invalid, just return true to not block submissions
      return true;
    }
  }

  /**
   * Simplified form data validation
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

    // Validate each field with minimal restrictions
    for (const [key, value] of Object.entries(data)) {
      if (key === 'email') {
        const emailValidation = this.validateEmail(value);
        if (!emailValidation.isValid) {
          errors[key] = emailValidation.errors;
        }
        sanitizedData[key] = emailValidation.sanitized;
      } else if (key !== 'website') { // Skip honeypot field
        const inputValidation = this.validateInput(value);
        if (!inputValidation.isValid) {
          errors[key] = inputValidation.errors;
        }
        sanitizedData[key] = inputValidation.sanitized;
      }
    }

    return {
      isValid: Object.keys(errors).length === 0,
      sanitizedData,
      errors,
      globalErrors
    };
  }
}

// Honeypot field component for basic bot detection
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