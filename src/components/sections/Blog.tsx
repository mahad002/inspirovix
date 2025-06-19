import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, User, Newspaper } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { blogPosts } from '../../data/blog';

const Blog = React.memo(() => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);

  // Memoized section content
  const sectionContent = useMemo(() => ({
    title: "Latest Insights",
    subtitle: "Stay updated with the latest trends and insights in technology and business automation",
    emptyTitle: "Blog Coming Soon",
    emptyDescription: "We're working on bringing you insightful articles about AI, automation, and business innovation. Stay tuned for exciting content!"
  }), []);

  // Memoized blog posts
  const blogPostCards = useMemo(() => 
    blogPosts.map((post, index) => (
      <motion.article
        key={`blog-post-${index}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`group ${styles.background.card} rounded-xl overflow-hidden ${styles.glow.primary}`}
        style={{ willChange: 'transform' }}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            style={{ willChange: 'transform' }}
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              theme === 'dark'
                ? 'bg-violet-500/80 text-white'
                : 'bg-violet-100 text-violet-700'
            }`}>
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className={`text-xl font-semibold ${styles.text.primary} mb-3 group-hover:text-violet-400 transition-colors`}>
            {post.title}
          </h3>
          <p className={`${styles.text.secondary} mb-4 line-clamp-2`}>
            {post.excerpt}
          </p>

          <div className={`flex items-center gap-4 text-sm ${styles.text.secondary} mb-4`}>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>

          <button
            className={`w-full py-2 px-4 rounded-lg ${styles.button.primary} ${styles.text.primary} flex items-center justify-center gap-2 group-hover:gap-3 transition-all`}
          >
            Read More
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.article>
    )), [blogPosts, styles, theme]);

  // Memoized empty state
  const emptyState = useMemo(() => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${styles.background.card} rounded-xl p-12 text-center ${styles.glow.primary}`}
    >
      <div className="flex justify-center mb-6">
        <div className={`w-16 h-16 ${styles.background.secondary} rounded-full flex items-center justify-center`}>
          <Newspaper className={`w-8 h-8 ${styles.text.primary}`} />
        </div>
      </div>
      <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
        {sectionContent.emptyTitle}
      </h3>
      <p className={`${styles.text.secondary} max-w-2xl mx-auto`}>
        {sectionContent.emptyDescription}
      </p>
    </motion.div>
  ), [styles, sectionContent]);

  return (
    <section id="blog" className={`${styles.background.primary} py-20 overflow-hidden`}>
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

        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostCards}
          </div>
        ) : (
          emptyState
        )}
      </div>
    </section>
  );
});

Blog.displayName = 'Blog';

export default Blog;