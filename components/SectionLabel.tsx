"use client";

import { motion } from "framer-motion";

export default function SectionLabel({ text }: { text: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-accent text-sm font-mono tracking-widest uppercase mb-4 text-center"
    >
      {text}
    </motion.p>
  );
}
