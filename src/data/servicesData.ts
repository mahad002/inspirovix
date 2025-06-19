import { Brain, Globe, Smartphone, Blocks, Share2, Cloud } from 'lucide-react';

export interface ServiceSolution {
  name: string;
  solutions: string[];
}

export interface Service {
  name: string;
  sub_services: ServiceSolution[];
}

export interface ServicesData {
  company: string;
  services: Service[];
}

// Icon mapping for services
export const serviceIcons = {
  "AI & ML": Brain,
  "Web Development": Globe,
  "Mobile Development": Smartphone,
  "Blockchain Web 3.0": Blocks,
  "Social Media Marketing": Share2,
  "Cloud & DevOps": Cloud
};

export const servicesData: ServicesData = {
  "company": "Inspirovix",
  "services": [
    {
      "name": "AI & ML",
      "sub_services": [
        { "name": "Voice & Speech Automation", "solutions": ["Voice bots & IVR systems", "Call-center transcription & auto-response"] },
        { "name": "Fine-tuning & Custom LLMs", "solutions": ["Domain-specific LLM adaptation (customer support, legal, healthcare)"] },
        { "name": "Predictive Analytics & Data Science", "solutions": ["Forecasting", "Anomaly detection", "Churn & risk modeling"] },
        { "name": "Computer Vision", "solutions": ["Image recognition", "Object detection", "Medical imaging"] },
        { "name": "Generative AI / NLP", "solutions": ["Document summarization", "Code generation", "Content creation"] }
      ]
    },
    {
      "name": "Web Development",
      "sub_services": [
        { "name": "CRM & ERP Systems", "solutions": ["Web-based platforms for sales, operations, HR, finance"] },
        { "name": "E-commerce Platforms", "solutions": ["Magento, Shopify, custom storefronts with secure payments and inventory management"] },
        { "name": "Real‑estate Portals", "solutions": ["MLS integration", "Property listings", "Booking/enquiry systems"] },
        { "name": "Education / LMS Platforms", "solutions": ["Course modules", "Interactive content", "Progress tracking"] },
        { "name": "Custom Business Web Apps", "solutions": ["Sector-specific tools", "Admin dashboards", "Client portals"] }
      ]
    },
    {
      "name": "Mobile Development",
      "sub_services": [
        { "name": "Native iOS/Android Apps", "solutions": ["Performance-optimized native mobile applications"] },
        { "name": "Cross‑platform Apps", "solutions": ["Flutter or React Native apps with unified UI/UX"] },
        { "name": "Progressive Web Apps", "solutions": ["Offline-capable, installable web experiences"] },
        { "name": "Mobile‑centric AI Features", "solutions": ["On-device ML: image recognition, chatbots, voice assistants"] },
        { "name": "Enterprise Mobile Solutions", "solutions": ["Field service tools", "Mobile extensions for CRM/ERP"] }
      ]
    },
    {
      "name": "Blockchain Web 3.0",
      "sub_services": [
        { "name": "Smart Contracts & DApps", "solutions": ["Token systems", "Voting platforms", "Staking mechanisms"] },
        { "name": "Decentralized Finance (DeFi)", "solutions": ["Flash loans (arbitrage, collateral swaps)", "Liquidity pool interfaces"] },
        { "name": "Stablecoin / USDT Integration", "solutions": ["USDT payments on Ethereum, Tron, TON for fast transfers"] },
        { "name": "Wallet Development & Web3 UX", "solutions": ["On-chain wallet", "NFT minting", "Secure authentication"] },
        { "name": "Blockchain Consulting & Audits", "solutions": ["Security analysis", "DeFi vulnerability assessments"] }
      ]
    },
    {
      "name": "Social Media Marketing",
      "sub_services": [
        { "name": "Social Media Management", "solutions": ["Content scheduling", "Community engagement", "Multi-channel posting"] },
        { "name": "Paid Ad Campaigns", "solutions": ["Facebook, Instagram, PPC campaigns with ROI tracking"] },
        { "name": "Content Creation & Branding", "solutions": ["Graphic posts", "Visuals", "Story videos", "Brand messaging"] },
        { "name": "Analytics & Reporting", "solutions": ["Social insights", "A/B testing", "Performance dashboards"] },
        { "name": "Influencer Outreach & Strategy", "solutions": ["Campaign strategy", "Influencer vetting", "Partnership management"] }
      ]
    },
    {
      "name": "Cloud & DevOps",
      "sub_services": [
        { "name": "CI/CD & Pipeline Automation", "solutions": ["Cloud-based CI/CD setup with AWS, Azure, GCP", "Managed pipelines (CircleCI, Azure Pipelines)"] },
        { "name": "Infrastructure as Code (IaC)", "solutions": ["Terraform/CloudFormation", "Kubernetes deployment automation"] },
        { "name": "Monitoring, Logging & APM", "solutions": ["Centralized logging", "Metrics dashboards", "Alerting and incident management"] },
        { "name": "Cloud Migration & Management", "solutions": ["Lift-and-shift to AWS/Azure/GCP", "Multi-cloud optimization"] },
        { "name": "Security & Compliance (DevSecOps)", "solutions": ["IAM hardening", "Compliance automation (PCI‑DSS, HIPAA, GDPR)"] }
      ]
    }
  ]
};