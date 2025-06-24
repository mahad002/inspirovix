import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Sparkles } from 'lucide-react';
import { sendPricingInquiryEmail } from '../../utils/emailService';
import type { PricingPlan } from '../../data/pricing';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

type PopularPricingCardProps = PricingPlan & { delay?: number };

const PopularPricingCard: React.FC<PopularPricingCardProps> = React.memo(({ 
  title, 
  price, 
  description, 
  features, 
  icon: Icon, 
  delay = 0 
}) => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('sending');
    setErrorMessage('');
    
    try {
      const result = await sendPricingInquiryEmail({
        planName: title,
        price,
        features: features.join('\n'),
        email
      });
      
      if (result.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to send inquiry');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  }, [title, price, features, email]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  // Memoized feature list
  const featureList = useMemo(() => 
    features.map((feature, index) => (
      <li key={index} className={`flex items-center gap-2 ${styles.text.secondary} text-sm`}>
        <Check className="w-4 h-4 text-pink-500 flex-shrink-0" />
        <span>{feature}</span>
      </li>
    )), [features, styles.text.secondary]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group relative ${theme === 'dark' ? 'bg-gradient-to-b from-white/10 to-purple-900/30' : 'bg-gradient-to-b from-purple-50 to-white'} backdrop-blur-lg rounded-2xl p-6 min-w-[300px] min-h-[580px] flex flex-col border-2 border-purple-500 scale-[1.02] overflow-hidden ${styles.glow.accent}`}
      style={{ willChange: 'transform' }}
    >
      {/* Popular Tag */}
      <div className="absolute -top0 left-1/2 -translate-x-1/2 z10000">
        <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center justify-center gap-1.5 shadow-lg whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5" />
          Most Popular
          <Star className="w-3.5 h-3.5 fill-current" />
        </div>
      </div>

      {/* Card Content */}
      <div className="transition-opacity duration-300 group-hover:opacity-10 mt-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
            <Icon className="w-6 h-6 text-white animate-pulse" />
          </div>
          <h3 className={`text-2xl font-bold ${styles.text.primary}`}>{title}</h3>
        </div>

        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              {price}
            </span>
            <span className={styles.text.secondary}>/project</span>
          </div>
          <p className={`${styles.text.secondary} text-sm`}>{description}</p>
        </div>

        <ul className="space-y-3 mb-6">
          {featureList}
        </ul>
      </div>

      {/* Hover Form - Optimized */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-navy-900/95 to-purple-900/95' : 'bg-gradient-to-b from-white/95 to-purple-50/95'} backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6`}>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <h4 className={`text-xl font-bold ${styles.text.primary} text-center mb-4`}>Get Started with {title}</h4>
          
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
            maxLength={254}
            className={`w-full px-4 py-3 ${styles.background.secondary} border ${styles.border.primary} rounded-lg focus:ring-2 focus:ring-purple-500 ${styles.text.primary} placeholder-gray-400`}
            disabled={status === 'sending'}
            autoComplete="email"
          />
          
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full px-4 py-3 rounded-lg ${styles.text.primary} font-semibold transition-all duration-200 ${
              status === 'sending'
                ? 'bg-gradient-to-r from-purple-600/50 to-pink-600/50 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
            }`}
          >
            {status === 'sending' ? 'Sending...' : 'Get Quote'}
          </button>

          {status === 'success' && (
            <p className="text-green-500 text-sm text-center">✅ Inquiry sent! We'll contact you soon.</p>
          )}
          
          {status === 'error' && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
        </form>
      </div>
    </motion.div>
  );
});

PopularPricingCard.displayName = 'PopularPricingCard';

export default PopularPricingCard;