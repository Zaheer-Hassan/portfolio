export interface Skill {
  name: string;
  description: string;
  category: string;
}

export const skills: Skill[] = [
  { name: "React", description: "Component-based UI library", category: "Frontend" },
  { name: "Next.js", description: "Full-stack React framework", category: "Frontend" },
  { name: "TypeScript", description: "Type-safe JavaScript", category: "Frontend" },
  { name: "Tailwind CSS", description: "Utility-first CSS framework", category: "Frontend" },
  { name: "Node.js", description: "Server-side JavaScript runtime", category: "Backend" },
  { name: "Python", description: "Versatile programming language", category: "Backend" },
  { name: "PostgreSQL", description: "Relational database system", category: "Database" },
  { name: "MongoDB", description: "NoSQL document database", category: "Database" },
  { name: "Docker", description: "Container platform", category: "Tools" },
  { name: "Git", description: "Version control system", category: "Tools" },
  { name: "REST APIs", description: "HTTP-based API design", category: "Backend" },
  { name: "GraphQL", description: "Query language for APIs", category: "Backend" },
];
