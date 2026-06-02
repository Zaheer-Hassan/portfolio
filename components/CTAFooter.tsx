"use client";

import { motion } from "framer-motion";
import Highlight from "./Highlight";

export default function CTAFooter() {
  return (
    <section id="contact">
      <div className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to Build Something?{" "}
            <Highlight>Let&apos;s Talk</Highlight>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-muted text-lg mb-10">
            Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
          </motion.p>
          <motion.a initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} href="mailto:zaheerulhassan08@gmail.com" className="inline-block px-10 py-4 bg-accent hover:bg-accent-light text-black font-medium text-lg rounded-lg transition-colors">
            Get Started
          </motion.a>
        </div>
      </div>

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dim text-sm">
            &copy; {new Date().getFullYear()} Zaheer. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/Zaheer-Hassan" target="_blank" rel="noopener noreferrer" className="text-dim hover:text-accent transition-colors text-sm">GitHub</a>
            <a href="https://linkedin.com/in/zaheer" target="_blank" rel="noopener noreferrer" className="text-dim hover:text-accent transition-colors text-sm">LinkedIn</a>
            <a href="mailto:zaheerulhassan08@gmail.com" className="text-dim hover:text-accent transition-colors text-sm">Email</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
