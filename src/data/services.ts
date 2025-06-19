import { MessageSquare, ShoppingCart, Bot, Calendar, Zap, Shield, Smartphone, Blocks, Share2, Cloud } from 'lucide-react';
import { TestTube, Palette, Gamepad2, Globe, Brain, Code } from 'lucide-react';

export const services = [
  {
    icon: MessageSquare,
    title: "AI-Powered Customer Interaction",
    description: "Advanced text-to-speech and speech-to-text models for seamless customer communication."
  },
  {
    icon: ShoppingCart,
    title: "Smart Order Management",
    description: "Efficient order processing with automated confirmations and fraud detection."
  },
  {
    icon: Bot,
    title: "Automated Support System",
    description: "24/7 AI-powered customer support with intelligent escalation."
  },
  {
    icon: Calendar,
    title: "Calendar Integration",
    description: "Seamless scheduling and meeting management across platforms."
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "End-to-end automation of repetitive business tasks."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with regulatory compliance."
  }
];

export const allServices = [
  {
    name: "Web Development",
    icon: Globe,
    description: "Modern, responsive web applications with cutting-edge technologies",
    divisions: [
      {
        name: "Frontend Development",
        specializations: ["React.js", "Vue.js", "Angular", "Next.js", "TypeScript"]
      },
      {
        name: "Backend Development", 
        specializations: ["Node.js", "Python", "PHP", "Java", "C#"]
      },
      {
        name: "Full-Stack Development",
        specializations: ["MERN Stack", "MEAN Stack", "Django", "Laravel", "ASP.NET"]
      },
      {
        name: "E-commerce Solutions",
        specializations: ["Shopify", "WooCommerce", "Magento", "Custom E-commerce"]
      },
      {
        name: "CMS Development",
        specializations: ["WordPress", "Drupal", "Strapi", "Custom CMS"]
      }
    ]
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile solutions with AI integration",
    divisions: [
      {
        name: "Native iOS Development",
        specializations: ["Swift", "Objective-C", "SwiftUI", "UIKit", "Core Data"]
      },
      {
        name: "Native Android Development",
        specializations: ["Kotlin", "Java", "Jetpack Compose", "Android SDK", "Room"]
      },
      {
        name: "Cross-Platform Development",
        specializations: ["React Native", "Flutter", "Xamarin", "Ionic", "Cordova"]
      },
      {
        name: "Progressive Web Apps",
        specializations: ["PWA", "Service Workers", "Web App Manifest", "Offline Support"]
      },
      {
        name: "Mobile Backend Services",
        specializations: ["Firebase", "AWS Amplify", "Custom APIs", "Push Notifications"]
      }
    ]
  },
  {
    name: "AI & Machine Learning",
    icon: Brain,
    description: "Intelligent solutions powered by artificial intelligence and machine learning",
    divisions: [
      {
        name: "Natural Language Processing",
        specializations: ["Text Analysis", "Sentiment Analysis", "Chatbots", "Language Translation"]
      },
      {
        name: "Computer Vision",
        specializations: ["Image Recognition", "Object Detection", "Facial Recognition", "OCR"]
      },
      {
        name: "Predictive Analytics",
        specializations: ["Data Mining", "Forecasting", "Recommendation Systems", "Risk Assessment"]
      },
      {
        name: "Deep Learning",
        specializations: ["Neural Networks", "TensorFlow", "PyTorch", "Keras", "Custom Models"]
      },
      {
        name: "AI Integration",
        specializations: ["API Development", "Model Deployment", "Cloud AI Services", "Edge Computing"]
      }
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    description: "Infrastructure automation and cloud optimization solutions",
    divisions: [
      {
        name: "Cloud Infrastructure",
        specializations: ["AWS", "Azure", "Google Cloud", "Multi-cloud", "Hybrid Cloud"]
      },
      {
        name: "DevOps & CI/CD",
        specializations: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes"]
      },
      {
        name: "Infrastructure as Code",
        specializations: ["Terraform", "CloudFormation", "Ansible", "Pulumi", "ARM Templates"]
      },
      {
        name: "Monitoring & Logging",
        specializations: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "New Relic"]
      },
      {
        name: "Security & Compliance",
        specializations: ["IAM", "Security Audits", "Compliance Automation", "Vulnerability Scanning"]
      }
    ]
  },
  {
    name: "Blockchain Web 3.0",
    icon: Blocks,
    description: "Decentralized applications and blockchain solutions",
    divisions: [
      {
        name: "Smart Contract Development",
        specializations: ["Solidity", "Ethereum", "Polygon", "Binance Smart Chain", "Avalanche"]
      },
      {
        name: "DeFi Solutions",
        specializations: ["DEX", "Lending Protocols", "Yield Farming", "Liquidity Pools", "Staking"]
      },
      {
        name: "NFT Development",
        specializations: ["NFT Marketplaces", "Minting Platforms", "Gaming NFTs", "Art Collections"]
      },
      {
        name: "Web3 Integration",
        specializations: ["Wallet Integration", "dApp Development", "IPFS", "MetaMask", "WalletConnect"]
      },
      {
        name: "Blockchain Consulting",
        specializations: ["Tokenomics", "Security Audits", "Architecture Design", "Compliance"]
      }
    ]
  },
  {
    name: "Social Media Marketing",
    icon: Share2,
    description: "Comprehensive social media management and marketing solutions",
    divisions: [
      {
        name: "Social Media Strategy",
        specializations: ["Content Planning", "Brand Strategy", "Audience Analysis", "Competitor Research"]
      },
      {
        name: "Content Creation",
        specializations: ["Graphic Design", "Video Production", "Copywriting", "Photography", "Animation"]
      },
      {
        name: "Paid Advertising",
        specializations: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Twitter Ads", "TikTok Ads"]
      },
      {
        name: "Community Management",
        specializations: ["Engagement", "Customer Support", "Reputation Management", "Crisis Management"]
      },
      {
        name: "Analytics & Reporting",
        specializations: ["Performance Tracking", "ROI Analysis", "A/B Testing", "Social Listening"]
      }
    ]
  },
  {
    name: "Software Testing & QA",
    icon: TestTube,
    description: "Comprehensive quality assurance and testing solutions",
    divisions: [
      {
        name: "Automated Testing",
        specializations: ["Selenium", "Cypress", "Jest", "Playwright", "TestComplete"]
      },
      {
        name: "Manual Testing",
        specializations: ["Functional Testing", "Usability Testing", "Exploratory Testing", "Regression Testing"]
      },
      {
        name: "Performance Testing",
        specializations: ["Load Testing", "Stress Testing", "Volume Testing", "JMeter", "LoadRunner"]
      },
      {
        name: "Security Testing",
        specializations: ["Penetration Testing", "Vulnerability Assessment", "OWASP", "Security Audits"]
      },
      {
        name: "Mobile Testing",
        specializations: ["Device Testing", "OS Compatibility", "App Store Guidelines", "Responsive Testing"]
      }
    ]
  },
  {
    name: "UI & UX Design",
    icon: Palette,
    description: "User-centered design solutions for exceptional experiences",
    divisions: [
      {
        name: "User Experience Design",
        specializations: ["User Research", "Information Architecture", "User Journey Mapping", "Wireframing"]
      },
      {
        name: "User Interface Design",
        specializations: ["Visual Design", "Prototyping", "Design Systems", "Component Libraries"]
      },
      {
        name: "Mobile App Design",
        specializations: ["iOS Design Guidelines", "Material Design", "Cross-platform Design", "Responsive Design"]
      },
      {
        name: "Web Design",
        specializations: ["Landing Pages", "E-commerce Design", "Dashboard Design", "Accessibility Design"]
      },
      {
        name: "Design Research",
        specializations: ["Usability Testing", "A/B Testing", "User Feedback", "Design Validation"]
      }
    ]
  },
  {
    name: "Game Development",
    icon: Gamepad2,
    description: "End-to-end game development for multiple platforms",
    divisions: [
      {
        name: "Mobile Game Development",
        specializations: ["Unity", "Unreal Engine", "Cocos2d", "Casual Games", "Hyper-casual Games"]
      },
      {
        name: "Web Game Development",
        specializations: ["HTML5 Games", "WebGL", "Three.js", "Phaser", "Browser Games"]
      },
      {
        name: "PC & Console Games",
        specializations: ["Steam Integration", "PlayStation", "Xbox", "Nintendo Switch", "Cross-platform"]
      },
      {
        name: "Game Art & Design",
        specializations: ["2D Art", "3D Modeling", "Character Design", "Environment Design", "Animation"]
      },
      {
        name: "Game Backend",
        specializations: ["Multiplayer Systems", "Leaderboards", "In-app Purchases", "Analytics", "Cloud Save"]
      }
    ]
  }
];