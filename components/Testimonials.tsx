"use client";

import { motion } from "framer-motion";
import Highlight from "./Highlight";
import SectionLabel from "./SectionLabel";
import { testimonials } from "@/data/testimonials";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="// TESTIMONIALS" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Trusted by <Highlight>Clients</Highlight>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-muted text-center mb-16 max-w-xl mx-auto">
          What my clients say about working with me.
        </motion.p>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={item} className="p-8 rounded-2xl border border-border bg-card">
              <p className="text-accent text-4xl font-heading mb-4">&ldquo;</p>
              <p className="text-muted text-sm leading-relaxed">{t.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
