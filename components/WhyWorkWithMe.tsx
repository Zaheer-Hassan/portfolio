"use client";

import { motion } from "framer-motion";
import Highlight from "./Highlight";
import SectionLabel from "./SectionLabel";

const points = [
  "Clean, maintainable code following best practices",
  "On-time delivery with regular progress updates",
  "Clear communication throughout the project",
  "Post-launch support and maintenance",
  "Modern tech stack for future-proof solutions",
  "Performance-optimized applications",
];

export default function WhyWorkWithMe() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="// WHY ME" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
          Why Choose Me <Highlight>Over Others</Highlight>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-muted">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-border bg-card p-12 flex items-center justify-center">
            <div className="text-center">
              <p className="text-6xl font-heading font-bold text-accent mb-2">5+</p>
              <p className="text-muted text-sm">Years Experience</p>
              <div className="mt-6 h-px bg-border w-24 mx-auto" />
              <p className="text-4xl font-heading font-bold text-white mt-6 mb-2">10+</p>
              <p className="text-muted text-sm">Fintech Projects Delivered</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
