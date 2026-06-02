"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";

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

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.9, 1]
  );

  const topOffset = 80 + index * 20;

  return (
    <div ref={cardRef} className="h-[70vh]" style={{ zIndex: total - index }}>
      <motion.div
        style={{
          scale,
          top: `${topOffset}px`,
        }}
        className="sticky w-full max-w-4xl mx-auto rounded-2xl border border-border bg-card p-6 md:p-8 shadow-2xl"
      >
        {/* Project image placeholder */}
        <div className="w-full h-48 md:h-64 bg-background rounded-xl mb-6 flex items-center justify-center overflow-hidden">
          <span className="text-muted text-sm">Project Screenshot</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-2xl font-heading font-bold mb-2">
              {project.title}
            </h3>
            <p className="text-muted mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 md:flex-col">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors text-center"
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm border border-border hover:border-primary text-white rounded-lg transition-colors text-center"
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
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-heading font-bold text-center mb-16"
      >
        My Projects
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
