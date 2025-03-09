import { Bot, Zap, Shield, Rocket, Cloud, Lock, Globe, Smartphone, Monitor } from 'lucide-react';

export interface PricingPlan {
  category: "Automation" | "Web Development" | "Mobile Development" | "Desktop Development";
  title: string;
  price: string;
  description: string;
  icon: typeof Bot | typeof Zap | typeof Shield | typeof Rocket | typeof Cloud | typeof Lock | typeof Globe | typeof Smartphone | typeof Monitor;
  features: string[];
  isPopular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  // Automation Plans
  {
    category: "Automation",
    title: "Starter",
    price: "$99",
    description: "Perfect for small businesses starting their automation journey",
    icon: Bot,
    features: [
      "AI-powered chatbot",
      "Basic workflow automation",
      "5 team members",
      "8/5 support",
      "1,000 API calls/month"
    ]
  },
  {
    category: "Automation",
    title: "Professional",
    price: "$299",
    description: "Ideal for growing companies with advanced needs",
    icon: Zap,
    features: [
      "Everything in Starter",
      "Advanced AI integrations",
      "20 team members",
      "24/7 priority support",
      "50,000 API calls/month",
      "Custom workflow builder"
    ],
    isPopular: true
  },
  {
    category: "Automation",
    title: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    icon: Shield,
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Dedicated account manager",
      "Custom AI model training",
      "Unlimited API calls",
      "SLA guarantee",
      "On-premise deployment"
    ]
  },

  // Web Development Plans
  {
    category: "Web Development",
    title: "Basic",
    price: "$499",
    description: "A simple yet effective website for your business",
    icon: Globe,
    features: [
      "5-page static website",
      "Mobile-friendly design",
      "Basic SEO optimization",
      "Contact form",
      "1 revision"
    ]
  },
  {
    category: "Web Development",
    title: "Professional",
    price: "$1,499",
    description: "For businesses needing dynamic & interactive websites",
    icon: Globe,
    features: [
      "Everything in Basic",
      "15-page dynamic website (React, Next.js, or Angular)",
      "CMS integration (WordPress, Strapi, or Sanity)",
      "Advanced SEO",
      "Blog setup",
      "3 revisions"
    ],
    isPopular: true
  },
  {
    category: "Web Development",
    title: "Enterprise",
    price: "$3,999+",
    description: "Complete web application solutions for enterprises",
    icon: Globe,
    features: [
      "Everything in Professional",
      "Full-stack web application (MERN, PERN, NestJS)",
      "Authentication (OAuth, JWT)",
      "Payment gateway integration",
      "Real-time database (Firebase, Supabase)",
      "Performance optimization",
      "Unlimited revisions"
    ]
  },

  // Mobile Development Plans
  {
    category: "Mobile Development",
    title: "Basic",
    price: "$999",
    description: "Launch your first mobile app with core features",
    icon: Smartphone,
    features: [
      "Flutter or React Native app",
      "Up to 3 screens",
      "Simple UI/UX",
      "Basic API integration",
      "1 revision"
    ]
  },
  {
    category: "Mobile Development",
    title: "Professional",
    price: "$2,499",
    description: "Scalable mobile apps for growing businesses",
    icon: Smartphone,
    features: [
      "Everything in Basic",
      "Up to 10 screens",
      "Authentication (Google, Facebook, Email)",
      "Push notifications",
      "3 revisions"
    ],
    isPopular: true
  },
  {
    category: "Mobile Development",
    title: "Enterprise",
    price: "$5,999+",
    description: "High-end mobile apps with AI and payment features",
    icon: Smartphone,
    features: [
      "Everything in Professional",
      "Fully scalable app",
      "Advanced AI features (chatbots, recommendation systems)",
      "Payment processing (Stripe, PayPal)",
      "Offline mode & caching",
      "Unlimited revisions"
    ]
  },

  // Desktop Development Plans
  {
    category: "Desktop Development",
    title: "Basic",
    price: "$799",
    description: "A simple desktop app with core features",
    icon: Monitor,
    features: [
      "JavaFX, C#, or Electron.js",
      "Up to 5 screens",
      "Simple UI/UX",
      "SQLite or local file storage",
      "1 revision"
    ]
  },
  {
    category: "Desktop Development",
    title: "Professional",
    price: "$2,199",
    description: "Multi-platform applications with cloud integration",
    icon: Monitor,
    features: [
      "Everything in Basic",
      "Multi-platform (Windows, Mac, Linux)",
      "Advanced UI (Material UI, Tailwind)",
      "Cloud integration (Firebase, Supabase)",
      "3 revisions"
    ],
    isPopular: true
  },
  {
    category: "Desktop Development",
    title: "Enterprise",
    price: "$4,999+",
    description: "Enterprise-grade desktop applications with security & database",
    icon: Monitor,
    features: [
      "Everything in Professional",
      "Enterprise-grade security",
      "Database support (Postgres, MySQL)",
      "Offline mode with sync",
      "Payment & licensing system",
      "Unlimited revisions"
    ]
  }
];
