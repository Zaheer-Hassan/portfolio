"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import Highlight from "./Highlight";
import SectionLabel from "./SectionLabel";

const tileVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function BentoProject({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <div className="mb-24">
      {/* Project number + title header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-6"
      >
        <span className="text-accent text-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
        </span>
        <div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold">{project.title}</h3>
          <p className="text-accent text-sm">{project.role}</p>
        </div>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {/* Image — spans 2 cols, 2 rows */}
        <motion.div variants={tileVariants} transition={{ duration: 0.5 }} className="md:col-span-2 md:row-span-2 rounded-2xl border border-border bg-card p-3 overflow-hidden hover:border-accent/30 transition-colors">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="w-full h-auto rounded-xl"
          />
        </motion.div>

        {/* Description */}
        <motion.div variants={tileVariants} transition={{ duration: 0.5 }} className="md:col-span-2 rounded-2xl border border-border bg-card p-5 hover:border-accent/30 transition-colors">
          <p className="text-accent text-xs font-mono uppercase tracking-wider mb-2">About</p>
          <p className="text-muted text-sm leading-relaxed">{project.description}</p>
        </motion.div>

        {/* Stats + Links */}
        <motion.div variants={tileVariants} transition={{ duration: 0.5 }} className="md:col-span-2 rounded-2xl border border-border bg-card p-5 flex items-center justify-between hover:border-accent/30 transition-colors">
          <div className="flex gap-6">
            {project.stats?.map((stat) => (
              <div key={stat.label}>
                <span className="text-2xl font-heading font-bold text-accent">{stat.value}</span>
                <p className="text-dim text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={project.githubUrl || "https://github.com/Zaheer-Hassan"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-border hover:border-accent text-white rounded-lg transition-colors"
            >
              GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-accent hover:bg-accent-light text-black rounded-lg transition-colors font-medium"
              >
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* My Contribution */}
        <motion.div variants={tileVariants} transition={{ duration: 0.5 }} className="md:col-span-2 rounded-2xl border border-border bg-card p-5 hover:border-accent/30 transition-colors">
          <p className="text-accent text-xs font-mono uppercase tracking-wider mb-2">My Contribution</p>
          <p className="text-muted text-sm leading-relaxed">{project.contribution}</p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={tileVariants} transition={{ duration: 0.5 }} className="md:col-span-2 rounded-2xl border border-border bg-card p-5 hover:border-accent/30 transition-colors">
          <p className="text-accent text-xs font-mono uppercase tracking-wider mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs bg-accent/10 text-accent border border-accent/20 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Sub Services — only if present */}
        {project.subServices && (
          <motion.div variants={tileVariants} transition={{ duration: 0.5 }} className="md:col-span-2 rounded-2xl border border-border bg-card p-5 hover:border-accent/30 transition-colors">
            <p className="text-accent text-xs font-mono uppercase tracking-wider mb-3">Services</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.subServices.map((sub) => (
                <div key={sub.title} className="p-3 rounded-xl border border-border bg-background">
                  <p className="text-white text-xs font-medium mb-1">{sub.title}</p>
                  <p className="text-dim text-[11px] leading-relaxed">{sub.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <SectionLabel text="// PROJECTS" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-heading font-bold text-center mb-4"
      >
        Success Stories to <Highlight>Inspire</Highlight>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-muted text-center mb-16 max-w-xl mx-auto"
      >
        Each project is a story of solving real problems with code.
      </motion.p>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <BentoProject key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
