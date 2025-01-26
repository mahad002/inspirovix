import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { sendPricingInquiryEmail } from '../../utils/emailService';
import type { PricingPlan } from '../../data/pricing';

type RegularPricingCardProps = PricingPlan & { delay?: number };

const RegularPricingCard: React.FC<RegularPricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  icon: Icon, 
  delay = 0 
}) => {
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
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 min-w-[300px] min-h-[580px] flex flex-col border border-gray-800 overflow-hidden"
    >
      {/* Card Content */}
      <div className="transition-opacity duration-300 group-hover:opacity-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-500/20">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>

        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold text-white">{price}</span>
            <span className="text-gray-400 text-lg">/month</span>
          </div>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
              <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Form */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 to-purple-900/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <h4 className="text-xl font-bold text-white text-center mb-4">Get Started with {title}</h4>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            disabled={status === 'sending'}
          />
          
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full px-4 py-3 rounded-lg text-white font-semibold transition-all duration-200 ${
              status === 'sending' 
                ? 'bg-purple-500/50 cursor-not-allowed' 
                : 'bg-purple-500 hover:bg-purple-600'
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