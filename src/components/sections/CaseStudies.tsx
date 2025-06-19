import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { caseStudies } from '../../data/caseStudies';

const CaseStudies = React.memo(() => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);

  // Memoized section content
  const sectionContent = useMemo(() => ({
    title: "Success Stories",
    subtitle: "Real results from real clients"
  }), []);

  // Memoized case study cards
  const caseStudyCards = useMemo(() => 
    caseStudies.map((study, index) => (
      <motion.div
        key={`case-study-${index}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`group ${styles.background.card} rounded-xl overflow-hidden ${styles.glow.primary}`}
        style={{ willChange: 'transform' }}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            style={{ willChange: 'transform' }}
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
                <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">
                  {metric.value}
                </div>
                <div className={`text-sm ${styles.text.secondary}`}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
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

          <a
            href={study.slug}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-2 px-4 rounded-lg ${styles.button.primary} ${styles.text.primary} flex items-center justify-center gap-2 group-hover:gap-3 transition-all`}
          >
            View Case Study
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    )), [caseStudies, styles, theme]);

  return (
    <section id="case-studies" className={`${styles.background.primary} py-20 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            {sectionContent.title}
          </h2>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
            {sectionContent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudyCards}
        </div>
      </div>
    </section>
  );
});

CaseStudies.displayName = 'CaseStudies';

export default CaseStudies;