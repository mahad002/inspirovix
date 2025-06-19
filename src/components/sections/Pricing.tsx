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
        shadow-lg hover:shadow-xl transition-all duration-200 p-3 rounded-full`}
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
            Service-Based Custom Pricing
          </h2>
          <p className={`text-lg ${styles.text.secondary} max-w-3xl mx-auto`}>
            Every project is unique. We provide custom quotes based on your specific requirements, 
            project scope, and business objectives. All our pricing is transparent and tailored to deliver maximum value.
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
                  <PopularPricingCard {...plan} delay={index * 0.1} />
                ) : (
                  <RegularPricingCard {...plan} delay={index * 0.1} />
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

        {/* Pricing Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className={`${styles.background.card} rounded-xl p-6 text-center ${styles.glow.primary}`}>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className={`text-xl font-bold ${styles.text.primary} mb-2`}>
              Transparent Pricing
            </h3>
            <p className={`${styles.text.secondary} text-sm`}>
              No hidden fees. Clear, upfront pricing based on project scope and requirements.
            </p>
          </div>

          <div className={`${styles.background.card} rounded-xl p-6 text-center ${styles.glow.primary}`}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className={`text-xl font-bold ${styles.text.primary} mb-2`}>
              Flexible Payment
            </h3>
            <p className={`${styles.text.secondary} text-sm`}>
              Milestone-based payments, flexible terms, and payment plans available for larger projects.
            </p>
          </div>

          <div className={`${styles.background.card} rounded-xl p-6 text-center ${styles.glow.primary}`}>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className={`text-xl font-bold ${styles.text.primary} mb-2`}>
              Value-Driven
            </h3>
            <p className={`${styles.text.secondary} text-sm`}>
              Competitive pricing focused on delivering maximum ROI and long-term business value.
            </p>
          </div>
        </motion.div>

        {/* Custom Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mt-16 text-center ${styles.background.card} rounded-xl p-8 ${styles.glow.primary}`}
        >
          <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
            Ready to Get Your Custom Quote?
          </h3>
          <p className={`${styles.text.secondary} text-lg mb-6 max-w-2xl mx-auto`}>
            Contact us with your project details and requirements. We'll provide a detailed, 
            transparent quote within 24 hours, including project timeline and deliverables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ActionButton
              href={`mailto:${contactInfo.email}?subject=Custom Quote Request`}
              icon={<Star className="w-5 h-5" />}
              variant="primary"
            >
              Get Custom Quote
            </ActionButton>
            <ActionButton
              href="#contact"
              icon={<Star className="w-5 h-5" />}
              variant="secondary"
            >
              Schedule Consultation
            </ActionButton>
          </div>
        </motion.div>

        {/* Pricing FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className={`text-2xl font-bold ${styles.text.primary} text-center mb-8`}>
            Pricing FAQ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Why is all pricing custom?",
                answer: "Every project has unique requirements, complexity, and scope. Custom pricing ensures you pay exactly for what you need and get maximum value."
              },
              {
                question: "How quickly can I get a quote?",
                answer: "We provide detailed quotes within 24 hours of receiving your project requirements. Complex projects may take up to 48 hours for accurate estimation."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes! We offer milestone-based payments and flexible payment plans for larger projects to help manage your cash flow effectively."
              },
              {
                question: "What's included in the pricing?",
                answer: "Our quotes include development, testing, deployment, documentation, and specified support period. No hidden fees or surprise charges."
              }
            ].map((faq, index) => (
              <div key={index} className={`${styles.background.card} rounded-lg p-6 ${styles.glow.primary}`}>
                <h4 className={`font-semibold ${styles.text.primary} mb-2`}>
                  {faq.question}
                </h4>
                <p className={`${styles.text.secondary} text-sm`}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;