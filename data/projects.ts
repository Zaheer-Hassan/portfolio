export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of what this project does and the problem it solves.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/zaheer/project-one",
    image: "/images/project-1.png",
    stats: [{ label: "Performance", value: "95%" }, { label: "Load Time", value: "1.2s" }],
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of what this project does and the problem it solves.",
    tech: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/zaheer/project-two",
    image: "/images/project-2.png",
    stats: [{ label: "Users", value: "500+" }, { label: "Uptime", value: "99.9%" }],
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of what this project does and the problem it solves.",
    tech: ["Python", "FastAPI", "MongoDB"],
    githubUrl: "https://github.com/zaheer/project-three",
    image: "/images/project-3.png",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of what this project does and the problem it solves.",
    tech: ["React Native", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/zaheer/project-four",
    image: "/images/project-4.png",
  },
];
