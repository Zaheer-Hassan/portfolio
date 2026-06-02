"use client";

import { motion } from "framer-motion";
import Highlight from "./Highlight";
import SectionLabel from "./SectionLabel";

const techItems = [
  "React", "Next.js", "Node.js", "TypeScript", "Python",
  "PostgreSQL", "MongoDB", "Docker", "Git", "Tailwind CSS",
  "GraphQL", "Redis",
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1, transition: { duration: 0.3 } } };

export default function TechStack() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="// TECH STACK" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Seamless <Highlight>Integrations</Highlight>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-muted text-center mb-16 max-w-xl mx-auto">
          Technologies I work with daily to build robust applications.
        </motion.p>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap justify-center gap-4">
          {techItems.map((tech) => (
            <motion.div key={tech} variants={item} className="px-6 py-3 rounded-full border border-border bg-card text-muted hover:text-accent hover:border-accent/30 transition-colors text-sm">
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
