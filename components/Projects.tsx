"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { projects, Project } from "@/data/projects";
import Highlight from "./Highlight";
import SectionLabel from "./SectionLabel";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      variants={item}
      onClick={onClick}
      className="rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/30 transition-colors cursor-pointer group flex flex-col"
    >
      <div className="p-3">
        <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-auto rounded-xl" />
      </div>
      <div className="px-5 pb-5 flex flex-col flex-1">
        <h3 className="text-lg font-heading font-bold mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-accent text-xs mb-2">{project.role}</p>
        <p className="text-muted text-xs leading-relaxed line-clamp-2 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 text-[10px] bg-accent/10 text-accent border border-accent/20 rounded-full">{t}</span>
          ))}
          {project.tech.length > 4 && <span className="px-2 py-0.5 text-[10px] text-dim">+{project.tech.length - 4}</span>}
        </div>
        <div className="mt-auto pt-3 border-t border-border">
          <span className="text-accent text-xs font-medium group-hover:underline">View Details →</span>
        </div>
      </div>
    </motion.div>
  );
}

function FullPageDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background overflow-y-auto"
    >
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={onClose} className="text-muted hover:text-accent transition-colors text-sm flex items-center gap-2">
            ← Back to Projects
          </button>
          <div className="flex gap-3">
            <a href={project.githubUrl || "https://github.com/Zaheer-Hassan"} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm border border-border hover:border-accent text-white rounded-lg transition-colors">GitHub</a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm bg-accent hover:bg-accent-light text-black rounded-lg transition-colors font-medium">Live Demo</a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className="text-accent text-sm mb-2">{project.role}</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">{project.title}</h1>
        </motion.div>

        {/* Image */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-border bg-card p-3 mb-10">
          <Image src={project.image} alt={project.title} width={1200} height={700} className="w-full h-auto rounded-xl" />
        </motion.div>

        {/* Stats */}
        {project.stats && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="flex gap-8 mb-10">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <span className="text-3xl font-heading font-bold text-accent">{stat.value}</span>
                <p className="text-dim text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* About */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="mb-10">
          <h2 className="text-accent text-xs font-mono uppercase tracking-wider mb-3">About</h2>
          <p className="text-muted text-base leading-relaxed">{project.description}</p>
        </motion.div>

        {/* My Contribution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }} className="mb-10">
          <h2 className="text-accent text-xs font-mono uppercase tracking-wider mb-3">My Contribution</h2>
          <p className="text-muted text-base leading-relaxed">{project.contribution}</p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="mb-10">
          <h2 className="text-accent text-xs font-mono uppercase tracking-wider mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-4 py-2 text-sm bg-accent/10 text-accent border border-accent/20 rounded-full">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Sub Services */}
        {project.subServices && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }} className="mb-10">
            <h2 className="text-accent text-xs font-mono uppercase tracking-wider mb-4">Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.subServices.map((sub) => (
                <div key={sub.title} className="p-5 rounded-2xl border border-border bg-card">
                  <p className="text-white text-sm font-medium mb-2">{sub.title}</p>
                  <p className="text-muted text-sm leading-relaxed">{sub.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <SectionLabel text="// PROJECTS" />
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
        Success Stories to <Highlight>Inspire</Highlight>
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-muted text-center mb-16 max-w-xl mx-auto">
        Click any project to explore the full story.
      </motion.p>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && <FullPageDetail project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
