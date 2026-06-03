"use client";

import { motion } from "framer-motion";
import Highlight from "./Highlight";
import SectionLabel from "./SectionLabel";
import { skills } from "@/data/skills";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="// SKILLS" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          What I Bring to the <Highlight>Table</Highlight>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-muted text-center mb-16 max-w-xl mx-auto">
          I don&apos;t just write code. I solve problems, design systems, and deliver results.
        </motion.p>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={item} className="p-6 rounded-2xl border border-border bg-card hover:border-border-light transition-colors group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-heading font-bold text-white group-hover:text-accent transition-colors">{skill.name}</h3>
                <span className="text-accent/50 text-[10px] font-mono uppercase">{skill.category}</span>
              </div>
              <p className="text-muted text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
