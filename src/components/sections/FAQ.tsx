import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

const FAQ = () => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = useMemo(() => [
    {
      question: "What services does Inspirovix offer?",
      answer: "We offer comprehensive technology solutions including AI automation, web development, mobile app development, blockchain/Web 3.0, social media marketing, cloud & DevOps, software testing & QA, UI/UX design, and game development. Each service is customized to meet your specific business needs."
    },
    {
      question: "How does your custom pricing work?",
      answer: "Every project has unique requirements, so we provide custom quotes based on your specific needs, project scope, and timeline. We'll analyze your requirements and provide a detailed, transparent quote within 24-48 hours with no hidden fees."
    },
    {
      question: "What is AI automation and how can it help my business?",
      answer: "AI automation uses artificial intelligence to streamline business processes, handle customer interactions, manage orders, and provide 24/7 support. It can reduce operational costs by up to 60%, improve response times by 80%, and increase conversion rates by 40%."
    },
    {
      question: "Do you work with small businesses or only large enterprises?",
      answer: "We work with businesses of all sizes - from startups and small businesses to large enterprises. Our solutions are scalable and can be tailored to fit any budget and business size. We have startup packages as well as enterprise solutions."
    },
    {
      question: "What is your development process?",
      answer: "Our process includes: 1) Requirements analysis and consultation, 2) Custom solution design and architecture, 3) Development with regular updates, 4) Comprehensive testing and quality assurance, 5) Deployment and launch, 6) Ongoing support and maintenance."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Simple websites may take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the quote process and keep you updated throughout development."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! We provide ongoing support and maintenance for all our projects. This includes bug fixes, updates, security patches, and technical support. Support periods vary by project type and are included in our quotes."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! We specialize in seamless integration with existing tools, platforms, and systems. Whether it's CRM systems, payment gateways, APIs, or databases, we ensure smooth integration without disrupting your current operations."
    },
    {
      question: "What technologies do you use?",
      answer: "We use cutting-edge technologies including React, Node.js, Python, AI/ML frameworks, blockchain technologies, cloud platforms (AWS, Azure, GCP), and mobile development frameworks. We choose the best technology stack for each project's specific requirements."
    },
    {
      question: "How do I get started with Inspirovix?",
      answer: "Getting started is easy! Contact us through our website, email, or phone. We'll schedule a consultation to discuss your needs, provide a custom quote, and outline the next steps. Our team is ready to help transform your business with innovative technology solutions."
    }
  ], []);

  return (
    <section id="faq" className={`${styles.background.primary} py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className={`w-8 h-8 ${styles.text.primary}`} />
            <h2 className={`text-4xl font-bold ${styles.text.primary}`}>
              Frequently Asked Questions
            </h2>
          </div>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
            Find answers to common questions about our services, processes, and how we can help your business
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.background.card} rounded-xl ${styles.glow.primary} overflow-hidden`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-opacity-80 transition-all duration-200"
              >
                <h3 className={`text-lg font-semibold ${styles.text.primary} pr-4`}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 ${styles.text.secondary}`}>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`px-6 pb-6 ${styles.text.secondary} leading-relaxed`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mt-16 text-center ${styles.background.card} rounded-xl p-8 ${styles.glow.primary}`}
        >
          <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
            Still Have Questions?
          </h3>
          <p className={`${styles.text.secondary} text-lg mb-6`}>
            Our team is here to help! Contact us for personalized answers to your specific questions.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-8 py-3 ${styles.button.primary} rounded-lg ${styles.text.primary} font-semibold ${styles.glow.primary}`}
          >
            <HelpCircle className="w-5 h-5" />
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;