import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

const CaseStudies = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  const caseStudies = [
    {
      title: "E-commerce Revenue Growth",
      client: "Fashion Retailer",
      metrics: [
        { label: "Sales Increase", value: "156%" },
        { label: "Customer Satisfaction", value: "98%" },
        { label: "Response Time", value: "< 1min" }
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
      tags: ["AI Voice Agent", "Order Automation"]
    },
    {
      title: "Healthcare Efficiency",
      client: "Medical Center",
      metrics: [
        { label: "Wait Time Reduction", value: "75%" },
        { label: "Patient Satisfaction", value: "96%" },
        { label: "Staff Productivity", value: "+45%" }
      ],
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=1200",
      tags: ["Appointment Scheduling", "Patient Portal"]
    },
    {
      title: "Logistics Optimization",
      client: "Global Shipping Company",
      metrics: [
        { label: "Delivery Speed", value: "+60%" },
        { label: "Cost Reduction", value: "32%" },
        { label: "Route Efficiency", value: "+85%" }
      ],
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=1200",
      tags: ["Route Optimization", "Fleet Management"]
    }
  ];

  return (
    <section id="case-studies" className={`${styles.background.primary} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            Success Stories
          </h2>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
            Real results from real clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group ${styles.background.card} rounded-xl overflow-hidden ${styles.glow.primary}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1 text-white/80 text-sm mb-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    {study.client}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text`}>
                        {metric.value}
                      </div>
                      <div className={`text-sm ${styles.text.secondary}`}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-sm px-3 py-1 rounded-full ${
                        theme === 'dark'
                          ? 'bg-violet-500/20 text-violet-300'
                          : 'bg-violet-100 text-violet-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className={`mt-6 w-full py-2 px-4 rounded-lg ${styles.button.primary} ${styles.text.primary} flex items-center justify-center gap-2 group-hover:gap-3 transition-all`}
                >
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;