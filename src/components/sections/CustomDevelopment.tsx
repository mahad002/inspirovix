import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, LampDesk as Desktop, Globe, Database, Shield, Brain, MessageSquare, Bot, Mic, Cpu, Network, Cloud, Share2, Blocks } from 'lucide-react';
import { TestTube, Palette, Gamepad2 } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';
import { additionalServices, newServices } from '../../data/services';

const CustomDevelopment = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  const webServices = [
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Web Development",
      description: "Modern, responsive web applications with cutting-edge technologies.",
      technologies: ["React", "Node.js", "TypeScript", "Next.js"]
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: <Desktop className="w-6 h-6 text-white" />,
      title: "Desktop Applications",
      description: "High-performance desktop software for Windows, macOS, and Linux.",
      technologies: ["Electron", "Qt", "C++", ".NET"]
    },
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: "Backend Systems",
      description: "Scalable server infrastructure and database solutions.",
      technologies: ["PostgreSQL", "MongoDB", "AWS", "Docker"]
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs with comprehensive documentation.",
      technologies: ["GraphQL", "REST", "OpenAPI", "WebSocket"]
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Security & DevOps",
      description: "Secure deployment pipelines and infrastructure management.",
      technologies: ["CI/CD", "Kubernetes", "Security Audits"]
    }
  ];

  const aiServices = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Custom LLM Development",
      description: "Tailored language models trained on your specific domain and data.",
      technologies: ["GPT Fine-tuning", "Custom Models", "Domain Adaptation"]
    },
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      title: "Conversational AI",
      description: "Advanced chatbots and virtual assistants with natural language understanding.",
      technologies: ["NLP", "Dialog Management", "Context Handling"]
    },
    {
      icon: <Mic className="w-6 h-6 text-white" />,
      title: "Voice AI Solutions",
      description: "Custom voice agents with speech recognition and synthesis capabilities.",
      technologies: ["Speech-to-Text", "Text-to-Speech", "Voice Cloning"]
    },
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: "AI Model Training",
      description: "Custom AI model development and training for specific use cases.",
      technologies: ["Deep Learning", "Transfer Learning", "Model Optimization"]
    },
    {
      icon: <Network className="w-6 h-6 text-white" />,
      title: "AI Integration",
      description: "Seamless integration of AI capabilities into existing systems.",
      technologies: ["API Development", "System Integration", "Cloud Deployment"]
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Natural Language Processing",
      description: "Custom NLP solutions for text analysis and understanding.",
      technologies: ["Text Analytics", "Sentiment Analysis", "Entity Recognition"]
    }
  ];

  return (
    <section id="services" className={`${styles.background.primary} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            Our Services
          </h2>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
            Comprehensive technology solutions from concept to deployment, 
            driving business growth and operational excellence.
          </p>
        </motion.div>

        {/* Main Service Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 mb-16">
          {[
            { name: "Web Development", icon: Globe, color: "from-blue-500 to-cyan-500" },
            { name: "Mobile Development", icon: Smartphone, color: "from-green-500 to-emerald-500" },
            { name: "Cloud & DevOps", icon: Cloud, color: "from-purple-500 to-violet-500" },
            { name: "Social Media Marketing", icon: Share2, color: "from-pink-500 to-rose-500" },
            { name: "Blockchain", icon: Blocks, color: "from-orange-500 to-amber-500" },
            { name: "AI & ML", icon: Brain, color: "from-indigo-500 to-purple-500" },
            { name: "Software Testing & QA", icon: TestTube, color: "from-red-500 to-pink-500" },
            { name: "UI & UX Design", icon: Palette, color: "from-teal-500 to-cyan-500" },
            { name: "Game Development", icon: Gamepad2, color: "from-yellow-500 to-orange-500" }
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.background.card} rounded-xl p-4 text-center ${styles.glow.primary} group hover:scale-105 transition-all duration-300`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-sm font-semibold ${styles.text.primary} group-hover:text-violet-400 transition-colors leading-tight`}>
                {category.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Detailed Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={`text-3xl font-bold ${styles.text.primary} text-center mb-12`}>Service Divisions & Specializations</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.background.card} rounded-xl p-8 ${styles.glow.primary} border-l-4 border-violet-500`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`text-2xl font-bold ${styles.text.primary}`}>
                      {service.name}
                    </h4>
                    <p className={`${styles.text.secondary} text-sm`}>
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {service.sub_services.map((subService, subIndex) => (
                    <div key={subIndex} className={`${styles.background.secondary} rounded-lg p-4 hover:bg-violet-500/10 transition-colors`}>
                      <h5 className={`font-semibold ${styles.text.primary} mb-2`}>
                        {subService.name}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {subService.solutions.map((solution, solutionIndex) => (
                          <span
                            key={solutionIndex}
                            className={`text-xs px-3 py-1 rounded-full ${
                              theme === 'dark' 
                                ? 'bg-violet-500/20 text-violet-300' 
                                : 'bg-violet-100 text-violet-700'
                            }`}
                          >
                            {solution}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI & ML Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className={`text-2xl font-bold ${styles.text.primary} mb-8`}>AI & Machine Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary} group hover:scale-105 transition-all duration-300`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold ${styles.text.primary} mb-2 group-hover:text-indigo-400 transition-colors`}>
                  {service.title}
                </h3>
                <p className={`${styles.text.secondary} mb-4`}>
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`text-sm px-3 py-1 rounded-full ${
                        theme === 'dark' 
                          ? 'bg-indigo-500/20 text-indigo-300' 
                          : 'bg-indigo-100 text-indigo-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Web Development Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className={`text-2xl font-bold ${styles.text.primary} mb-8`}>Web Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary} group hover:scale-105 transition-all duration-300`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold ${styles.text.primary} mb-2 group-hover:text-blue-400 transition-colors`}>
                  {service.title}
                </h3>
                <p className={`${styles.text.secondary} mb-4`}>
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`text-sm px-3 py-1 rounded-full ${
                        theme === 'dark' 
                          ? 'bg-blue-500/20 text-blue-300' 
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className={`text-3xl font-bold ${styles.text.primary} text-center mb-12`}>
            Our Development Process
          </h3>
          <div className="relative">
            <div className={`absolute top-1/2 left-0 right-0 h-1 ${styles.background.card}`} />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Discovery",
                  description: "Understanding your needs and project requirements"
                },
                {
                  step: "2",
                  title: "Planning",
                  description: "Detailed project roadmap and architecture design"
                },
                {
                  step: "3",
                  title: "Development",
                  description: "Agile development with regular updates"
                },
                {
                  step: "4",
                  title: "Delivery",
                  description: "Testing, deployment, and ongoing support"
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${styles.background.card} rounded-xl p-6 relative ${styles.glow.primary}`}
                >
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Phase {phase.step}
                  </div>
                  <div className="mt-4">
                    <h4 className={`text-xl font-semibold ${styles.text.primary} mb-2`}>
                      {phase.title}
                    </h4>
                    <p className={styles.text.secondary}>
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className={`${styles.background.card} rounded-xl p-8 ${styles.glow.primary}`}>
            <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
              Ready to Transform Your Business?
            </h3>
            <p className={`${styles.text.secondary} text-lg mb-6 max-w-2xl mx-auto`}>
              Let's discuss your requirements and create solutions that perfectly fit your business needs across all our service areas.
            </p>
            <ActionButton
              href={`mailto:${contactInfo.email}?subject=Services Inquiry`}
              icon={<Code className="w-5 h-5" />}
              variant="primary"
            >
              Get Started Today
            </ActionButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomDevelopment;