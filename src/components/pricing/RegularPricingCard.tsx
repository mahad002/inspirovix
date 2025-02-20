import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { sendPricingInquiryEmail } from '../../utils/emailService';
import type { PricingPlan } from '../../data/pricing';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

type RegularPricingCardProps = PricingPlan & { delay?: number };

const RegularPricingCard: React.FC<RegularPricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  icon: Icon, 
  delay = 0 
}) => {
  const { theme } = useTheme();
  const styles = themes[theme];
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
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
        throw new Error('Failed to send inquiry');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group relative ${styles.background.card} rounded-2xl p-6 min-w-[300px] min-h-[580px] flex flex-col border ${styles.border.primary} overflow-hidden ${styles.glow.primary}`}
    >
      {/* Card Content */}
      <div className="transition-opacity duration-300 group-hover:opacity-10">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
            <Icon className={`w-6 h-6 ${styles.text.primary}`} />
          </div>
          <h3 className={`text-2xl font-bold ${styles.text.primary}`}>{title}</h3>
        </div>

        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-2">
            <span className={`text-4xl font-bold ${styles.text.primary}`}>{price}</span>
            <span className={styles.text.secondary}>/month</span>
          </div>
          <p className={`${styles.text.secondary} text-sm`}>{description}</p>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-center gap-2 ${styles.text.secondary} text-sm`}>
              <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Form */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-navy-900/95 to-purple-900/95' : 'bg-gradient-to-b from-white/95 to-purple-50/95'} backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6`}>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <h4 className={`text-xl font-bold ${styles.text.primary} text-center mb-4`}>Get Started with {title}</h4>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className={`w-full px-4 py-3 ${styles.background.secondary} border ${styles.border.primary} rounded-lg focus:ring-2 focus:ring-purple-500 ${styles.text.primary} placeholder-gray-400`}
            disabled={status === 'sending'}
          />
          
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full px-4 py-3 rounded-lg ${styles.text.primary} font-semibold transition-all duration-200 ${
              status === 'sending' 
                ? `${styles.button.primary} opacity-50 cursor-not-allowed`
                : styles.button.primary
            }`}
          >
            {status === 'sending' ? 'Sending...' : 'Get Started'}
          </button>

          {status === 'success' && (
            <p className="text-green-500 text-sm text-center">We'll contact you soon!</p>
          )}
          
          {status === 'error' && (
            <p className="text-red-500 text-sm text-center">Failed to send. Please try again.</p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default RegularPricingCard;