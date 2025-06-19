import { Bot, Zap, Shield, Rocket, Cloud, Lock, Globe, Smartphone, Brain, Blocks, Share2, TestTube, Palette, Gamepad2 } from 'lucide-react';

export interface PricingPlan {
  title: string;
  price: string;
  description: string;
  icon: typeof Bot | typeof Zap | typeof Shield | typeof Rocket | typeof Cloud | typeof Lock | typeof Globe | typeof Smartphone | typeof Brain | typeof Blocks | typeof Share2 | typeof TestTube | typeof Palette | typeof Gamepad2;
  features: string[];
  isPopular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: "AI Automation Starter",
    price: "Custom",
    description: "Perfect for small businesses starting their AI automation journey",
    icon: Bot,
    features: [
      "AI-powered chatbot integration",
      "Basic workflow automation",
      "Customer service automation",
      "Email automation setup",
      "Basic analytics dashboard",
      "3 months support included"
    ]
  },
  {
    title: "Web Development Pro",
    price: "Custom",
    description: "Comprehensive web development solutions for modern businesses",
    icon: Globe,
    features: [
      "Responsive web design & development",
      "SEO optimization & performance",
      "E-commerce integration",
      "Custom CMS development",
      "Cross-browser compatibility",
      "6 months maintenance included"
    ],
    isPopular: true
  },
  {
    title: "Mobile App Development",
    price: "Custom",
    description: "Native and cross-platform mobile solutions with AI integration",
    icon: Smartphone,
    features: [
      "Native iOS & Android development",
      "Cross-platform React Native/Flutter",
      "UI/UX design included",
      "App store deployment assistance",
      "Push notifications setup",
      "API integration & backend"
    ]
  },
  {
    title: "AI & Machine Learning",
    price: "Custom",
    description: "Advanced AI solutions with custom model development",
    icon: Brain,
    features: [
      "Custom AI model development",
      "Natural Language Processing",
      "Computer vision solutions",
      "Predictive analytics implementation",
      "AI integration with existing systems",
      "Model training & optimization"
    ]
  },
  {
    title: "Blockchain Web 3.0",
    price: "Custom",
    description: "Decentralized applications and blockchain solutions",
    icon: Blocks,
    features: [
      "Smart contract development",
      "DeFi protocol creation",
      "NFT marketplace development",
      "Web3 integration & wallet connect",
      "Blockchain consulting",
      "Security audits included"
    ]
  },
  {
    title: "Social Media Marketing",
    price: "Custom",
    description: "Complete social media management and marketing solutions",
    icon: Share2,
    features: [
      "Social media strategy development",
      "Content creation & management",
      "Paid advertising campaigns",
      "Community management",
      "Analytics & performance tracking",
      "Brand reputation management"
    ]
  },
  {
    title: "Cloud & DevOps",
    price: "Custom",
    description: "Infrastructure automation and cloud optimization solutions",
    icon: Cloud,
    features: [
      "Cloud infrastructure setup (AWS/Azure/GCP)",
      "DevOps & CI/CD pipeline implementation",
      "Infrastructure as Code (Terraform)",
      "Monitoring & logging setup",
      "Security & compliance automation",
      "24/7 infrastructure support"
    ]
  },
  {
    title: "Software Testing & QA",
    price: "Custom",
    description: "Comprehensive quality assurance and testing solutions",
    icon: TestTube,
    features: [
      "Automated testing framework setup",
      "Manual testing & quality assurance",
      "Performance & load testing",
      "Security testing & vulnerability assessment",
      "Mobile app testing across devices",
      "Continuous testing integration"
    ]
  },
  {
    title: "UI/UX Design",
    price: "Custom",
    description: "User-centered design solutions for exceptional experiences",
    icon: Palette,
    features: [
      "User experience research & design",
      "User interface design & prototyping",
      "Mobile app design (iOS/Android)",
      "Web design & responsive layouts",
      "Design system creation",
      "Usability testing & optimization"
    ]
  },
  {
    title: "Game Development",
    price: "Custom",
    description: "End-to-end game development for multiple platforms",
    icon: Gamepad2,
    features: [
      "Mobile game development (Unity/Unreal)",
      "Web-based game development",
      "PC & console game development",
      "Game art & character design",
      "Multiplayer backend systems",
      "Game analytics & monetization"
    ]
  },
  {
    title: "Enterprise Solution",
    price: "Custom",
    description: "Comprehensive enterprise-grade solutions with full support",
    icon: Shield,
    features: [
      "Multi-service integration package",
      "Dedicated project manager",
      "Custom solution architecture",
      "Enterprise security implementation",
      "Scalable infrastructure design",
      "12 months premium support"
    ]
  },
  {
    title: "Startup Package",
    price: "Custom",
    description: "Complete technology stack for startups and growing businesses",
    icon: Rocket,
    features: [
      "MVP development (Web + Mobile)",
      "Cloud infrastructure setup",
      "Basic AI automation integration",
      "Social media presence setup",
      "Analytics & monitoring tools",
      "Growth-focused development approach"
    ]
  }
];