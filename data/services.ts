export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  { icon: "🖥️", title: "Frontend Development", description: "Building responsive, fast, and interactive user interfaces with modern frameworks." },
  { icon: "⚙️", title: "Backend Development", description: "Scalable server-side applications with robust APIs and secure authentication." },
  { icon: "🔗", title: "API Development", description: "RESTful and GraphQL APIs designed for performance and developer experience." },
  { icon: "📱", title: "Mobile App Development", description: "Cross-platform mobile applications with React Native and smooth UX." },
  { icon: "🗄️", title: "Database Design", description: "Efficient database architecture with PostgreSQL, MongoDB, and Redis." },
  { icon: "🚀", title: "DevOps & Deployment", description: "CI/CD pipelines, Docker containers, and cloud deployment on Vercel & AWS." },
];
