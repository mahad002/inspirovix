import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { stats, values, sustainability } from '../../data/about';

const About = () => {
  const { theme } = useTheme();
  const styles = themes[theme];


  return (
    <section id="about" className={`${styles.background.primary} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl sm:text-4xl font-bold ${styles.text.primary} mb-4 sm:mb-6`}>
              Transforming Businesses Through Innovation
            </h2>
            <div className={`space-y-3 sm:space-y-4 ${styles.text.secondary} text-sm sm:text-base`}>
              <p>
                At Inspirovex, we're passionate about revolutionizing how businesses operate. Our AI-powered solutions are designed to streamline operations, enhance customer experiences, and drive growth.
              </p>
              <p>
                Founded with a vision to make enterprise-grade automation accessible to businesses of all sizes, we've helped hundreds of companies transform their operations and achieve unprecedented efficiency.
              </p>
              <p>
                Our team of experts combines deep industry knowledge with cutting-edge AI technology to deliver solutions that make a real difference.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.background.card} rounded-xl p-4 sm:p-6 text-center ${styles.glow.primary}`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 text-fuchsia-400">
                  <stat.icon />
                </div>
                <div className={`text-2xl sm:text-3xl font-bold ${styles.text.primary} mb-1 sm:mb-2`}>{stat.value}</div>
                <div className={`${styles.text.secondary} text-sm sm:text-base`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className={`text-3xl font-bold ${styles.text.primary} text-center mb-12`}>Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.background.card} rounded-xl p-6 text-center ${styles.glow.primary}`}
              >
                <h4 className={`text-xl font-semibold ${styles.text.primary} mb-4`}>{value.title}</h4>
                <p className={styles.text.secondary}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className={`text-3xl font-bold ${styles.text.primary} text-center mb-12`}>Our Commitment to Sustainability</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainability.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className={`text-xl font-semibold ${styles.text.primary} mb-4`}>{item.title}</h4>
                <p className={styles.text.secondary}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;