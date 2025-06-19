import { MessageSquare, ShoppingCart, Bot, Calendar, Zap, Shield, Smartphone, Blocks, Share2, Cloud } from 'lucide-react';
import { TestTube, Palette, Gamepad2 } from 'lucide-react';

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

export const newServices = [
  {
    name: "Software Testing & QA",
    icon: TestTube,
    description: "Comprehensive quality assurance and testing solutions",
    sub_services: [
      { 
        name: "Automated Testing", 
        solutions: ["Unit testing", "Integration testing", "End-to-end testing", "Performance testing"] 
      },
      { 
        name: "Manual Testing", 
        solutions: ["Functional testing", "Usability testing", "Exploratory testing", "Regression testing"] 
      },
      { 
        name: "Security Testing", 
        solutions: ["Vulnerability assessment", "Penetration testing", "Security audits"] 
      },
      { 
        name: "Performance Testing", 
        solutions: ["Load testing", "Stress testing", "Volume testing", "Scalability testing"] 
      },
      { 
        name: "Mobile App Testing", 
        solutions: ["Device compatibility", "OS testing", "App store compliance"] 
      }
    ]
  },
  {
    name: "UI & UX Design",
    icon: Palette,
    description: "User-centered design solutions for exceptional experiences",
    sub_services: [
      { 
        name: "User Experience (UX) Design", 
        solutions: ["User research", "Information architecture", "User journey mapping", "Wireframing"] 
      },
      { 
        name: "User Interface (UI) Design", 
        solutions: ["Visual design", "Interactive prototypes", "Design systems", "Component libraries"] 
      },
      { 
        name: "Mobile App Design", 
        solutions: ["iOS design guidelines", "Android material design", "Cross-platform consistency"] 
      },
      { 
        name: "Web Design", 
        solutions: ["Responsive design", "Landing pages", "E-commerce interfaces", "Dashboard design"] 
      },
      { 
        name: "Design Research & Testing", 
        solutions: ["Usability testing", "A/B testing", "User feedback analysis", "Design validation"] 
      }
    ]
  },
  {
    name: "Game Development",
    icon: Gamepad2,
    description: "End-to-end game development for multiple platforms",
    sub_services: [
      { 
        name: "Mobile Game Development", 
        solutions: ["iOS games", "Android games", "Cross-platform mobile games", "Casual & hyper-casual games"] 
      },
      { 
        name: "Web Game Development", 
        solutions: ["HTML5 games", "WebGL games", "Browser-based multiplayer", "Progressive web games"] 
      },
      { 
        name: "PC & Console Games", 
        solutions: ["Unity development", "Unreal Engine", "Steam integration", "Console porting"] 
      },
      { 
        name: "Game Design & Art", 
        solutions: ["Game mechanics design", "2D/3D art assets", "Character design", "Environment design"] 
      },
      { 
        name: "Game Backend & Multiplayer", 
        solutions: ["Real-time multiplayer", "Leaderboards", "In-app purchases", "Analytics integration"] 
      }
    ]
  }
];