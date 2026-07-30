"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.04]"
    >
      <button
        onClick={() => onSelect(project)}
        className="relative aspect-[16/10] w-full overflow-hidden text-left"
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 flex translate-y-2 items-center gap-2 text-sm font-medium text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          View details <ArrowUpRight className="size-4" />
        </div>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <span className="shrink-0 text-xs text-muted-foreground">{project.year}</span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="default" className="text-[11px]">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-border pt-4 text-sm">
          <button
            onClick={() => onSelect(project)}
            className="font-medium text-foreground transition-colors hover:text-accent"
          >
            Read case study
          </button>
          <span className="text-border">•</span>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-accent"
            >
              Live <ArrowUpRight className="size-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="ml-auto text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
