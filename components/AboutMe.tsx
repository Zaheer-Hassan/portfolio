"use client";

import { motion } from "framer-motion";
import Highlight from "./Highlight";
import SectionLabel from "./SectionLabel";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="// ABOUT" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
          Get to Know <Highlight>Me</Highlight>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-border bg-card w-full h-80 flex items-center justify-center">
            <span className="text-dim text-sm">Your Photo Here</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-heading font-bold mb-4">Zaheer Hassan</h3>
            <p className="text-muted leading-relaxed mb-4">
              I&apos;m a passionate Full Stack Developer who loves building web applications
              that are fast, accessible, and beautiful. I focus on writing clean,
              maintainable code and creating smooth user experiences.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              With experience across the full development stack, I bring ideas to life —
              from concept to deployment. I believe in continuous learning and staying
              up-to-date with the latest technologies.
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/Zaheer-Hassan" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm border border-border hover:border-accent text-muted hover:text-accent rounded-lg transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/zaheer" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm border border-border hover:border-accent text-muted hover:text-accent rounded-lg transition-colors">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
