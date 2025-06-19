import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Building2, Briefcase, GraduationCap, HeartPulse, Truck, Blocks, Cloud, Coins, Shield } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

const Solutions = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  const industries = [
    {
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      title: "E-commerce",
      description: "Automate order processing, inventory management, and customer support.",
      features: ["Order automation", "Inventory tracking", "Customer service bots"]
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: "Real Estate",
      description: "Streamline property management and tenant communications.",
      features: ["Property listings", "Tenant portals", "Maintenance tracking"]
    },
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Professional Services",
      description: "Enhance client management and service delivery.",
      features: ["Client portals", "Appointment scheduling", "Document automation"]
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Education",
      description: "Transform learning experiences with smart technology.",
      features: ["Learning platforms", "Student tracking", "Course management"]
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-white" />,
      title: "Healthcare",
      description: "Improve patient care with intelligent systems.",
      features: ["Patient portals", "Appointment scheduling", "Health records"]
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "Logistics",
      description: "Optimize supply chain and delivery operations.",
      features: ["Route optimization", "Inventory tracking", "Delivery management"]
    },
    {
      icon: <Blocks className="w-6 h-6 text-white" />,
      title: "Blockchain & Web3",
      description: "Decentralized solutions for transparency and security.",
      features: ["Smart contracts", "DeFi platforms", "NFT marketplaces"]
    },
    {
      icon: <Cloud className="w-6 h-6 text-white" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses.",
      features: ["Cloud migration", "DevOps automation", "Infrastructure as Code"]
    }
  ];

  const blockchainExamples = [
    {
      icon: <Coins className="w-5 h-5 text-white" />,
      title: "DeFi Trading Platform",
      description: "Built a decentralized exchange with automated market making, yield farming, and cross-chain swaps.",
      technologies: ["Ethereum", "Solidity", "Web3.js", "IPFS"],
      results: ["$50M+ TVL", "10K+ users", "99.9% uptime"]
    },
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      title: "Supply Chain Transparency",
      description: "Blockchain-based tracking system for pharmaceutical supply chain with immutable audit trails.",
      technologies: ["Hyperledger", "Smart Contracts", "QR Codes", "Mobile App"],
      results: ["100% traceability", "Zero counterfeits", "Regulatory compliance"]
    }
  ];

  const cloudExamples = [
    {
      icon: <Cloud className="w-5 h-5 text-white" />,
      title: "Multi-Cloud Architecture",
      description: "Migrated enterprise infrastructure to hybrid cloud with auto-scaling and disaster recovery.",
      technologies: ["AWS", "Azure", "Kubernetes", "Terraform"],
      results: ["60% cost reduction", "99.99% availability", "Global deployment"]
    },
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      title: "Serverless Microservices",
      description: "Built scalable serverless architecture handling millions of requests with real-time analytics.",
      technologies: ["Lambda", "API Gateway", "DynamoDB", "CloudWatch"],
      results: ["10x scalability", "50% faster deployment", "Zero server management"]
    }
  ];

  return (
    <section id="solutions" className={`${styles.background.primary} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            Industry Solutions
          </h2>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
            Tailored solutions for your industry's unique challenges
          </p>
        </motion.div>

        {/* Blockchain Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className={`text-3xl font-bold ${styles.text.primary} text-center mb-4`}>
            Blockchain & Web3 Success Stories
          </h3>
          <p className={`text-lg ${styles.text.secondary} text-center mb-12 max-w-3xl mx-auto`}>
            Real-world blockchain implementations that deliver transparency, security, and decentralization
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blockchainExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary} border-l-4 border-violet-500`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
                    {example.icon}
                  </div>
                  <h4 className={`text-xl font-semibold ${styles.text.primary}`}>
                    {example.title}
                  </h4>
                </div>
                
                <p className={`${styles.text.secondary} mb-4`}>
                  {example.description}
                </p>
                
                <div className="mb-4">
                  <h5 className={`text-sm font-semibold ${styles.text.primary} mb-2`}>Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {example.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs px-2 py-1 rounded-full ${
                          theme === 'dark' 
                            ? 'bg-violet-500/20 text-violet-300' 
                            : 'bg-violet-100 text-violet-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className={`text-sm font-semibold ${styles.text.primary} mb-2`}>Key Results:</h5>
                  <div className="grid grid-cols-3 gap-2">
                    {example.results.map((result, resultIndex) => (
                      <div key={resultIndex} className={`text-center p-2 ${styles.background.secondary} rounded-lg`}>
                        <div className={`text-sm font-bold ${styles.text.primary}`}>
                          {result}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cloud Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className={`text-3xl font-bold ${styles.text.primary} text-center mb-4`}>
            Cloud Infrastructure Transformations
          </h3>
          <p className={`text-lg ${styles.text.secondary} text-center mb-12 max-w-3xl mx-auto`}>
            Enterprise-grade cloud solutions that scale, perform, and deliver exceptional reliability
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cloudExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary} border-l-4 border-blue-500`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    {example.icon}
                  </div>
                  <h4 className={`text-xl font-semibold ${styles.text.primary}`}>
                    {example.title}
                  </h4>
                </div>
                
                <p className={`${styles.text.secondary} mb-4`}>
                  {example.description}
                </p>
                
                <div className="mb-4">
                  <h5 className={`text-sm font-semibold ${styles.text.primary} mb-2`}>Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {example.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs px-2 py-1 rounded-full ${
                          theme === 'dark' 
                            ? 'bg-blue-500/20 text-blue-300' 
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className={`text-sm font-semibold ${styles.text.primary} mb-2`}>Key Results:</h5>
                  <div className="grid grid-cols-3 gap-2">
                    {example.results.map((result, resultIndex) => (
                      <div key={resultIndex} className={`text-center p-2 ${styles.background.secondary} rounded-lg`}>
                        <div className={`text-sm font-bold ${styles.text.primary}`}>
                          {result}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4">
                {industry.icon}
              </div>
              <h3 className={`text-xl font-semibold ${styles.text.primary} mb-2`}>
                {industry.title}
              </h3>
              <p className={`${styles.text.secondary} mb-4`}>
                {industry.description}
              </p>
              <ul className="space-y-2">
                {industry.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`text-sm ${styles.text.secondary} flex items-center`}
                  >
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;