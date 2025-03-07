import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, User } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

const Blog = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  const posts = [
    {
      title: "The Future of AI in Business Automation",
      excerpt: "Explore how artificial intelligence is revolutionizing business processes and what it means for your company.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
      author: "Sarah Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI & Automation"
    },
    {
      title: "Building Scalable Software Solutions",
      excerpt: "Learn the best practices for creating software that grows with your business needs.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      author: "Michael Roberts",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Development"
    },
    {
      title: "Voice AI: The Next Frontier in Customer Service",
      excerpt: "Discover how voice AI is transforming customer interactions and improving satisfaction rates.",
      image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&q=80&w=1200",
      author: "Emily Watson",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Customer Service"
    }
  ];

  return (
    <section id="blog" className={`${styles.background.primary} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            Latest Insights
          </h2>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
            Stay updated with the latest trends and insights in technology and business automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group ${styles.background.card} rounded-xl overflow-hidden ${styles.glow.primary}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;