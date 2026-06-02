"use client";

import { motion } from "framer-motion";
import Highlight from "./Highlight";
import SectionLabel from "./SectionLabel";

const steps = [
  { number: "01", title: "Discovery & Planning", description: "Understanding your goals, requirements, and target audience to create a solid project roadmap." },
  { number: "02", title: "Design & Architecture", description: "Designing the system architecture, database schema, and UI/UX for optimal performance." },
  { number: "03", title: "Development & Testing", description: "Writing clean, tested code with regular updates and progress demos along the way." },
  { number: "04", title: "Deployment & Support", description: "Launching your project and providing ongoing maintenance and support as needed." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function MyProcess() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="// PROCESS" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          My Simple & <Highlight>Smart Process</Highlight>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-muted text-center mb-16 max-w-xl mx-auto">
          A streamlined workflow to take your project from idea to launch.
        </motion.p>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <motion.div key={step.number} variants={item} className="p-8 rounded-2xl border border-border bg-card hover:border-border-light transition-colors group">
              <span className="text-accent text-4xl font-heading font-bold opacity-40 mb-4 block">{step.number}</span>
              <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-accent transition-colors">{step.title}</h3>
              <p className="text-muted text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
