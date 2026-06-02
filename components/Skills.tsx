"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML/CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-16"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">
                {skill.name}
              </span>
              <span className="text-xs text-muted">{skill.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
