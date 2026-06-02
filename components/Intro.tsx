"use client";

import { motion } from "framer-motion";
import Highlight from "./Highlight";

export default function Intro() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-heading leading-relaxed text-muted"
        >
          I find what&apos;s <Highlight>unique</Highlight>, what your{" "}
          <Highlight>vision</Highlight> is & how to bring it to life with{" "}
          <Highlight>code</Highlight>. My work is also{" "}
          <Highlight>remarkable</Highlight>.
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="#projects"
          className="inline-block mt-8 text-accent hover:text-accent-light text-sm transition-colors"
        >
          See my work →
        </motion.a>
      </div>
    </section>
  );
}
