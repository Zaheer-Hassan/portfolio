"use client";

import { motion } from "framer-motion";
import Highlight from "./Highlight";
import SectionLabel from "./SectionLabel";
import { plans } from "@/data/pricing";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Pricing() {
  return (
    <section id="hire" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="// HIRE ME" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Flexible Plans for <Highlight>Everyone</Highlight>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-muted text-center mb-16 max-w-xl mx-auto">
          Choose the plan that fits your project needs.
        </motion.p>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={item} className={`p-8 rounded-2xl border bg-card flex flex-col ${plan.highlighted ? "border-accent shadow-lg shadow-accent/10 scale-[1.02]" : "border-border"}`}>
              {plan.highlighted && (
                <span className="text-accent text-xs font-mono uppercase tracking-widest mb-4">Most Popular</span>
              )}
              <h3 className="text-xl font-heading font-bold mb-1">{plan.name}</h3>
              <p className="text-dim text-sm mb-4">{plan.description}</p>
              <p className="text-4xl font-heading font-bold mb-6">{plan.price}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-accent mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`block text-center px-6 py-3 rounded-lg font-medium transition-colors ${plan.highlighted ? "bg-accent hover:bg-accent-light text-black" : "border border-border hover:border-accent text-white"}`}>
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
