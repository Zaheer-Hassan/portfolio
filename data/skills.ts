export interface Skill {
  name: string;
  description: string;
  category: string;
}

export const skills: Skill[] = [
  { name: "Problem Solving", description: "Breaking complex business challenges into scalable technical solutions", category: "Core" },
  { name: "System Design", description: "Architecting distributed systems that handle millions in transactions", category: "Core" },
  { name: "Microservices", description: "Building modular, independently deployable services for fintech scale", category: "Core" },
  { name: "Vue.js / React", description: "Building responsive, data-driven frontends for complex dashboards", category: "Frontend" },
  { name: "Node.js / Laravel", description: "High-performance backend systems powering payment platforms", category: "Backend" },
  { name: "PostgreSQL / MySQL", description: "Designing databases optimized for high-volume financial data", category: "Backend" },
  { name: "RESTful APIs", description: "Designing clean, scalable APIs integrating 1,800+ banks and services", category: "Backend" },
  { name: "AI / ML", description: "Building AI agents with Whisper, Groq LLM, and real-time automation", category: "AI" },
  { name: "AWS / Docker", description: "Cloud deployment, containerization, and production infrastructure", category: "DevOps" },
  { name: "Blockchain", description: "Crypto wallets, NFT platforms, and chargeback solutions", category: "Specialization" },
];
