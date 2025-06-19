import { MessageSquare, ShoppingCart, Bot, Calendar, Zap, Shield, Smartphone, Blocks, Share2, Cloud } from 'lucide-react';

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

export const additionalServices = [
  {
    name: "Mobile Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile solutions with AI integration",
    sub_services: [
      { 
        name: "Native iOS/Android Apps", 
        solutions: ["Performance-optimized native mobile applications"] 
      },
      { 
        name: "Cross‑platform Apps", 
        solutions: ["Flutter or React Native apps with unified UI/UX"] 
      },
      { 
        name: "Progressive Web Apps", 
        solutions: ["Offline-capable, installable web experiences"] 
      },
      { 
        name: "Mobile‑centric AI Features", 
        solutions: ["On-device ML: image recognition, chatbots, voice assistants"] 
      },
      { 
        name: "Enterprise Mobile Solutions", 
        solutions: ["Field service tools", "Mobile extensions for CRM/ERP"] 
      }
    ]
  },
  {
    name: "Blockchain Web 3.0",
    icon: Blocks,
    description: "Decentralized applications and blockchain solutions",
    sub_services: [
      { 
        name: "Smart Contracts & DApps", 
        solutions: ["Token systems", "Voting platforms", "Staking mechanisms"] 
      },
      { 
        name: "Decentralized Finance (DeFi)", 
        solutions: ["Flash loans (arbitrage, collateral swaps)", "Liquidity pool interfaces"] 
      },
      { 
        name: "Stablecoin / USDT Integration", 
        solutions: ["USDT payments on Ethereum, Tron, TON for fast transfers"] 
      },
      { 
        name: "Wallet Development & Web3 UX", 
        solutions: ["On-chain wallet", "NFT minting", "Secure authentication"] 
      },
      { 
        name: "Blockchain Consulting & Audits", 
        solutions: ["Security analysis", "DeFi vulnerability assessments"] 
      }
    ]
  },
  {
    name: "Social Media Marketing",
    icon: Share2,
    description: "Comprehensive social media management and marketing solutions",
    sub_services: [
      { 
        name: "Social Media Management", 
        solutions: ["Content scheduling", "Community engagement", "Multi-channel posting"] 
      },
      { 
        name: "Paid Ad Campaigns", 
        solutions: ["Facebook, Instagram, PPC campaigns with ROI tracking"] 
      },
      { 
        name: "Content Creation & Branding", 
        solutions: ["Graphic posts", "Visuals", "Story videos", "Brand messaging"] 
      },
      { 
        name: "Analytics & Reporting", 
        solutions: ["Social insights", "A/B testing", "Performance dashboards"] 
      },
      { 
        name: "Influencer Outreach & Strategy", 
        solutions: ["Campaign strategy", "Influencer vetting", "Partnership management"] 
      }
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    description: "Infrastructure automation and cloud optimization",
    sub_services: [
      { 
        name: "CI/CD & Pipeline Automation", 
        solutions: ["Cloud-based CI/CD setup with AWS, Azure, GCP", "Managed pipelines (CircleCI, Azure Pipelines)"] 
      },
      { 
        name: "Infrastructure as Code (IaC)", 
        solutions: ["Terraform/CloudFormation", "Kubernetes deployment automation"] 
      },
      { 
        name: "Monitoring, Logging & APM", 
        solutions: ["Centralized logging", "Metrics dashboards", "Alerting and incident management"] 
      },
      { 
        name: "Cloud Migration & Management", 
        solutions: ["Lift-and-shift to AWS/Azure/GCP", "Multi-cloud optimization"] 
      },
      { 
        name: "Security & Compliance (DevSecOps)", 
        solutions: ["IAM hardening", "Compliance automation (PCI‑DSS, HIPAA, GDPR)"] 
      }
    ]
  }
];