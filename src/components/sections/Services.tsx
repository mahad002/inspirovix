import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Globe, 
  Smartphone, 
  Coins, 
  Share2, 
  Cloud,
  Brain,
  Mic,
  BarChart3,
  Eye,
  FileText,
  ShoppingCart,
  Building2,
  GraduationCap,
  Briefcase,
  Code,
  Monitor,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Camera,
  Megaphone,
  Target,
  PieChart,
  Server,
  GitBranch,
  Activity,
  Lock
} from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';

const Services = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  const services = [
    {
      name: "AI & ML",
      icon: <Brain className="w-6 h-6 text-white" />,
      color: "from-purple-500 to-indigo-500",
      sub_services: [
        { 
          name: "Voice & Speech Automation", 
          icon: <Mic className="w-5 h-5" />,
          solutions: ["Voice bots & IVR systems", "Call-center transcription & auto-response"] 
        },
        { 
          name: "Fine-tuning & Custom LLMs", 
          icon: <Bot className="w-5 h-5" />,
          solutions: ["Domain-specific LLM adaptation (customer support, legal, healthcare)"] 
        },
        { 
          name: "Predictive Analytics & Data Science", 
          icon: <BarChart3 className="w-5 h-5" />,
          solutions: ["Forecasting", "Anomaly detection", "Churn & risk modeling"] 
        },
        { 
          name: "Computer Vision", 
          icon: <Eye className="w-5 h-5" />,
          solutions: ["Image recognition", "Object detection", "Medical imaging"] 
        },
        { 
          name: "Generative AI / NLP", 
          icon: <FileText className="w-5 h-5" />,
          solutions: ["Document summarization", "Code generation", "Content creation"] 
        }
      ]
    },
    {
      name: "Web Development",
      icon: <Globe className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-cyan-500",
      sub_services: [
        { 
          name: "CRM & ERP Systems", 
          icon: <Briefcase className="w-5 h-5" />,
          solutions: ["Web-based platforms for sales, operations, HR, finance"] 
        },
        { 
          name: "E-commerce Platforms", 
          icon: <ShoppingCart className="w-5 h-5" />,
          solutions: ["Magento, Shopify, custom storefronts with secure payments and inventory management"] 
        },
        { 
          name: "Real‑estate Portals", 
          icon: <Building2 className="w-5 h-5" />,
          solutions: ["MLS integration", "Property listings", "Booking/enquiry systems"] 
        },
        { 
          name: "Education / LMS Platforms", 
          icon: <GraduationCap className="w-5 h-5" />,
          solutions: ["Course modules", "Interactive content", "Progress tracking"] 
        },
        { 
          name: "Custom Business Web Apps", 
          icon: <Code className="w-5 h-5" />,
          solutions: ["Sector-specific tools", "Admin dashboards", "Client portals"] 
        }
      ]
    },
    {
      name: "Mobile Development",
      icon: <Smartphone className="w-6 h-6 text-white" />,
      color: "from-green-500 to-emerald-500",
      sub_services: [
        { 
          name: "Native iOS/Android Apps", 
          icon: <Monitor className="w-5 h-5" />,
          solutions: ["Performance-optimized native mobile applications"] 
        },
        { 
          name: "Cross‑platform Apps", 
          icon: <Zap className="w-5 h-5" />,
          solutions: ["Flutter or React Native apps with unified UI/UX"] 
        },
        { 
          name: "Progressive Web Apps", 
          icon: <Globe className="w-5 h-5" />,
          solutions: ["Offline-capable, installable web experiences"] 
        },
        { 
          name: "Mobile‑centric AI Features", 
          icon: <Brain className="w-5 h-5" />,
          solutions: ["On-device ML: image recognition, chatbots, voice assistants"] 
        },
        { 
          name: "Enterprise Mobile Solutions", 
          icon: <Shield className="w-5 h-5" />,
          solutions: ["Field service tools", "Mobile extensions for CRM/ERP"] 
        }
      ]
    },
    {
      name: "Blockchain Web 3.0",
      icon: <Coins className="w-6 h-6 text-white" />,
      color: "from-yellow-500 to-orange-500",
      sub_services: [
        { 
          name: "Smart Contracts & DApps", 
          icon: <Code className="w-5 h-5" />,
          solutions: ["Token systems", "Voting platforms", "Staking mechanisms"] 
        },
        { 
          name: "Decentralized Finance (DeFi)", 
          icon: <TrendingUp className="w-5 h-5" />,
          solutions: ["Flash loans (arbitrage, collateral swaps)", "Liquidity pool interfaces"] 
        },
        { 
          name: "Stablecoin / USDT Integration", 
          icon: <Coins className="w-5 h-5" />,
          solutions: ["USDT payments on Ethereum, Tron, TON for fast transfers"] 
        },
        { 
          name: "Wallet Development & Web3 UX", 
          icon: <Shield className="w-5 h-5" />,
          solutions: ["On-chain wallet", "NFT minting", "Secure authentication"] 
        },
        { 
          name: "Blockchain Consulting & Audits", 
          icon: <Eye className="w-5 h-5" />,
          solutions: ["Security analysis", "DeFi vulnerability assessments"] 
        }
      ]
    },
    {
      name: "Social Media Marketing",
      icon: <Share2 className="w-6 h-6 text-white" />,
      color: "from-pink-500 to-rose-500",
      sub_services: [
        { 
          name: "Social Media Management", 
          icon: <Users className="w-5 h-5" />,
          solutions: ["Content scheduling", "Community engagement", "Multi-channel posting"] 
        },
        { 
          name: "Paid Ad Campaigns", 
          icon: <Target className="w-5 h-5" />,
          solutions: ["Facebook, Instagram, PPC campaigns with ROI tracking"] 
        },
        { 
          name: "Content Creation & Branding", 
          icon: <Camera className="w-5 h-5" />,
          solutions: ["Graphic posts", "Visuals", "Story videos", "Brand messaging"] 
        },
        { 
          name: "Analytics & Reporting", 
          icon: <PieChart className="w-5 h-5" />,
          solutions: ["Social insights", "A/B testing", "Performance dashboards"] 
        },
        { 
          name: "Influencer Outreach & Strategy", 
          icon: <Megaphone className="w-5 h-5" />,
          solutions: ["Campaign strategy", "Influencer vetting", "Partnership management"] 
        }
      ]
    },
    {
      name: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6 text-white" />,
      color: "from-indigo-500 to-purple-500",
      sub_services: [
        { 
          name: "CI/CD & Pipeline Automation", 
          icon: <GitBranch className="w-5 h-5" />,
          solutions: ["Cloud-based CI/CD setup with AWS, Azure, GCP", "Managed pipelines (CircleCI, Azure Pipelines)"] 
        },
        { 
          name: "Infrastructure as Code (IaC)", 
          icon: <Server className="w-5 h-5" />,
          solutions: ["Terraform/CloudFormation", "Kubernetes deployment automation"] 
        },
        { 
          name: "Monitoring, Logging & APM", 
          icon: <Activity className="w-5 h-5" />,
          solutions: ["Centralized logging", "Metrics dashboards", "Alerting and incident management"] 
        },
        { 
          name: "Cloud Migration & Management", 
          icon: <Cloud className="w-5 h-5" />,
          solutions: ["Lift-and-shift to AWS/Azure/GCP", "Multi-cloud optimization"] 
        },
        { 
          name: "Security & Compliance (DevSecOps)", 
          icon: <Lock className="w-5 h-5" />,
          solutions: ["IAM hardening", "Compliance automation (PCI‑DSS, HIPAA, GDPR)"] 
        }
      ]
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
            Comprehensive technology solutions to transform your business operations and drive growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={serviceIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
              className={`${styles.background.card} rounded-2xl p-8 ${styles.glow.primary}`}
            >
              {/* Service Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className={`text-3xl font-bold ${styles.text.primary}`}>
                  {service.name}
                </h3>
              </div>

              {/* Sub-services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.sub_services.map((subService, subIndex) => (
                  <motion.div
                    key={subIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (serviceIndex * 0.1) + (subIndex * 0.05) }}
                    className={`${styles.background.secondary} rounded-xl p-6 border ${styles.border.primary} hover:border-violet-500 transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                        {subService.icon}
                      </div>
                      <h4 className={`text-lg font-semibold ${styles.text.primary}`}>
                        {subService.name}
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {subService.solutions.map((solution, solutionIndex) => (
                        <li
                          key={solutionIndex}
                          className={`text-sm ${styles.text.secondary} flex items-start`}
                        >
                          <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

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
              Let's discuss your project requirements and create a solution that perfectly fits your needs.
            </p>
            <ActionButton
              href={`mailto:${contactInfo.email}?subject=Service Inquiry`}
              icon={<Code className="w-5 h-5" />}
              variant="primary"
            >
              Start Your Project
            </ActionButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;