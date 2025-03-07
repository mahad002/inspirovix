import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';
import { pricingPlans } from '../../data/pricing';
import RegularPricingCard from './../pricing/RegularPricingCard';
import PopularPricingCard from './../pricing/PopularPricingCard';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

const ScrollButton: React.FC<{
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}> = ({ direction, onClick, disabled }) => {
  const { theme } = useTheme();
  const styles = themes[theme];

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 
        ${direction === 'left' ? 'left-4' : 'right-4'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
        ${styles.button.primary} ${styles.text.primary}
        shadow-lg hover:shadow-xl transition-all duration-200`}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-6 h-6" />
      ) : (
        <ChevronRight className="w-6 h-6" />
      )}
    </motion.button>
  );
};

const Pricing = () => {
  const { theme } = useTheme();
  const styles = themes[theme];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollContainerRef });
  const opacity = useTransform(scrollXProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className={`${styles.background.primary} py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            Simple, Transparent Pricing
          </h2>
          <p className={`text-lg ${styles.text.secondary} max-w-2xl mx-auto`}>
            Choose the perfect plan for your business needs with our straightforward pricing options
          </p>
        </motion.div>

        <div className="relative">
          <ScrollButton
            direction="left"
            onClick={() => handleScroll('left')}
            disabled={scrollXProgress.get() === 0}
          />
          
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 px-4 snap-x snap-mandatory hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              minHeight: '650px'
            }}
          >
            {pricingPlans.map((plan, index) => (
              <div key={index} className="snap-center">
                {plan.isPopular ? (
                  <PopularPricingCard {...plan} delay={index * 0.2} />
                ) : (
                  <RegularPricingCard {...plan} delay={index * 0.2} />
                )}
              </div>
            ))}
          </div>

          <ScrollButton
            direction="right"
            onClick={() => handleScroll('right')}
            disabled={scrollXProgress.get() === 1}
          />

          <motion.div
            style={{ opacity }}
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full`}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mt-16 text-center ${styles.background.card} rounded-xl p-8 ${styles.glow.primary}`}
        >
          <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
            Need a Custom Solution?
          </h3>
          <p className={`${styles.text.secondary} text-lg mb-6 max-w-2xl mx-auto`}>
            Contact us for a tailored package that meets your specific requirements and scales with your business
          </p>
          <ActionButton
            href={`mailto:${contactInfo.email}?subject=Custom Solution Inquiry`}
            icon={<Star className="w-5 h-5" />}
            variant="primary"
          >
            Contact Sales
          </ActionButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;