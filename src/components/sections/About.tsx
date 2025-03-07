import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Cpu } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

const About = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  const stats = [
    { icon: <Users />, value: "100+", label: "Clients Worldwide" },
    { icon: <Award />, value: "98%", label: "Client Satisfaction" },
    { icon: <Globe />, value: "24/7", label: "Support Available" },
    { icon: <Cpu />, value: "1M+", label: "AI Predictions" }
  ];

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
            <h2 className={`text-4xl font-bold ${styles.text.primary} mb-6`}>
              Transforming Businesses Through Innovation
            </h2>
            <div className={`space-y-4 ${styles.text.secondary}`}>
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
                className={`${styles.background.card} rounded-xl p-6 text-center ${styles.glow.primary}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-fuchsia-400">
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold ${styles.text.primary} mb-2`}>{stat.value}</div>
                <div className={styles.text.secondary}>{stat.label}</div>
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
            {[
              {
                title: "Innovation First",
                description: "Constantly pushing boundaries with cutting-edge AI solutions"
              },
              {
                title: "Client Success",
                description: "Your growth and success are our top priorities"
              },
              {
                title: "Excellence",
                description: "Delivering the highest quality in everything we do"
              }
            ].map((value, index) => (
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
      </div>
    </section>
  );
};

export default About;