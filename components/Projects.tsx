"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import Highlight from "./Highlight";
import SectionLabel from "./SectionLabel";

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[0];
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const topOffset = 80 + index * 20;

  return (
    <div ref={cardRef} className="h-[70vh]" style={{ zIndex: total - index }}>
      <motion.div
        style={{ scale, top: `${topOffset}px` }}
        className="sticky w-full max-w-4xl mx-auto rounded-2xl border border-border bg-card p-6 md:p-8 shadow-2xl hover:border-accent/30 transition-colors"
      >
        <div className="w-full h-48 md:h-64 bg-background rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-border">
          <span className="text-dim text-sm">Project Screenshot</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-2xl font-heading font-bold mb-2">{project.title}</h3>
            <p className="text-muted mb-4 text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs bg-accent/10 text-accent border border-accent/20 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.stats && (
              <div className="flex gap-6">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="text-2xl font-heading font-bold text-accent">{stat.value}</span>
                    <p className="text-dim text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-3 md:flex-col">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-accent hover:bg-accent-light text-black rounded-lg transition-colors text-center font-medium"
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm border border-border hover:border-accent text-white rounded-lg transition-colors text-center"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
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
        A collection of projects that showcase my skills and expertise.
      </motion.p>

      <div className="max-w-4xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
