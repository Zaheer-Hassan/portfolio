"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

        <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-border bg-card overflow-hidden w-64 h-64 mx-auto md:mx-0">
            <Image
              src="/images/zaheer.jpeg"
              alt="Zaheer Ul Hassan"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-heading font-bold mb-4">Zaheer Ul Hassan</h3>
            <p className="text-muted leading-relaxed mb-4">
              Results-driven Sr. Software Engineer with over 5 years of professional experience
              in the fintech industry. I specialize in designing and developing scalable,
              high-performance applications using Vue.js, Node.js, and Laravel. From intuitive
              front-end interfaces to robust back-end systems and complex business workflows.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              I&apos;ve built payment platforms processing millions in transactions, architected
              microservices handling 20K+ daily operations, and integrated with 1,800+ European
              banks. Recently exploring AI with projects in healthcare automation and trading
              analysis. Passionate about solving complex problems and delivering real business value.
            </p>
            <p className="text-muted leading-relaxed mb-2">
              <span className="text-white font-medium">Education:</span> Graduation 2020
            </p>
            <p className="text-muted leading-relaxed mb-2">
              <span className="text-white font-medium">Location:</span> Pakistan
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <span className="text-white font-medium">Interests:</span> Blockchain, AI, Web3, Innovation
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/Zaheer-Hassan" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm border border-border hover:border-accent text-muted hover:text-accent rounded-lg transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/zaheer-ul-hassan-02153a1a7/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm border border-border hover:border-accent text-muted hover:text-accent rounded-lg transition-colors">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
