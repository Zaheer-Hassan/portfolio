export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const plans: PricingPlan[] = [
  { name: "Basic", price: "$50", description: "Perfect for small projects and quick fixes", features: ["Single page website", "Responsive design", "Basic SEO setup", "1 revision round", "3-day delivery"], cta: "Get Started", highlighted: false },
  { name: "Standard", price: "$90", description: "Ideal for full websites and web applications", features: ["Multi-page website or web app", "Custom design & animations", "Database integration", "API development", "3 revision rounds", "7-day delivery"], cta: "Get Started", highlighted: true },
  { name: "Custom", price: "Custom", description: "For complex enterprise-level projects", features: ["Full-stack application", "Complex integrations", "Performance optimization", "Ongoing maintenance", "Unlimited revisions", "Dedicated support"], cta: "Let's Talk", highlighted: false },
];
