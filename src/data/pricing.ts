import { Bot, Zap, Shield, Rocket, Cloud, Lock } from 'lucide-react';

export interface PricingPlan {
  title: string;
  price: string;
  description: string;
  icon: typeof Bot | typeof Zap | typeof Shield | typeof Rocket | typeof Cloud | typeof Lock;
  features: string[];
  isPopular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: "Starter",
    price: "Custom",
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
    title: "Professional",
    price: "Custom",
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
  {
    title: "Scale",
    price: "Custom",
    description: "For businesses requiring high-volume processing",
    icon: Rocket,
    features: [
      "Everything in Professional",
      "Up to 100 team members",
      "1M API calls/month",
      "Advanced analytics",
      "Priority queue processing",
      "Custom integrations",
      "4-hour response time"
    ]
  },
  {
    title: "Cloud",
    price: "Custom",
    description: "Cloud-optimized solution for distributed teams",
    icon: Cloud,
    features: [
      "Everything in Professional",
      "50 team members",
      "Multi-region deployment",
      "Cloud storage included",
      "Automated backups",
      "Load balancing",
      "99.9% uptime SLA"
    ]
  },
  {
    title: "Security+",
    price: "Custom",
    description: "Enhanced security features for regulated industries",
    icon: Lock,
    features: [
      "Everything in Professional",
      "HIPAA compliance",
      "End-to-end encryption",
      "Audit logging",
      "SSO integration",
      "IP whitelisting",
      "Security assessment"
    ]
  }
];