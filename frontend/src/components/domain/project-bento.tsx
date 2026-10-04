"use client"
import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/ui/reveal"
import { useSpotlight } from "@/hooks/use-spotlight"

export interface ProjectCardProps {
  id: string;
  title: string;
  services: string[];
  slug: string;
}

function BentoCard({ project, colSpan }: { project: ProjectCardProps, colSpan: string }) {
  const spotlightRef = useSpotlight()
  
  return (
    <div 
      ref={spotlightRef as React.RefObject<HTMLDivElement>} 
      className={cn("group relative bg-surface border border-border hover:border-primary transition-colors overflow-hidden p-6 flex flex-col justify-end spotlight", colSpan)}
    >
      <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {project.title}</span>
      </Link>
      
      <div className="absolute top-6 right-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary z-20">
        <ArrowRight className="h-6 w-6" />
      </div>

      <div className="flex flex-wrap gap-2 mb-4 z-20 relative">
        {(project.services || []).slice(0, 3).map(service => (
          <span key={service} className="font-mono text-xs uppercase tracking-wider text-muted-foreground bg-background px-2 py-1 border border-border">
            {service}
          </span>
        ))}
      </div>
      <h3 className={cn("font-display font-bold tracking-tight text-foreground group-hover:text-primary transition-colors z-20 relative", colSpan.includes("md:row-span-2") ? "text-3xl md:text-5xl" : "text-xl md:text-2xl")}>
        {project.title}
      </h3>
    </div>
  )
}

export function ProjectBento({ projects }: { projects: ProjectCardProps[] }) {
  if (!projects || projects.length === 0) {
    return <ProjectBentoEmpty />
  }

  const getColSpan = (index: number) => {
    if (index === 0) return "md:col-span-8 md:row-span-2"
    if (index === 1) return "md:col-span-4"
    if (index === 2) return "md:col-span-4"
    return "md:col-span-4"
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
      {projects.slice(0, 3).map((project, i) => (
        <Reveal key={project.id} delay={i * 100} className={getColSpan(i)}>
          <BentoCard project={project} colSpan="h-full" />
        </Reveal>
      ))}
    </div>
  )
}

function ProjectBentoEmpty() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
      <div className="md:col-span-8 md:row-span-2 border border-dashed border-border flex items-center justify-center p-6 bg-background/30">
        <span className="font-mono text-muted-foreground tracking-widest text-sm">{`// First builds land here.`}</span>
      </div>
      <div className="md:col-span-4 border border-dashed border-border bg-background/30" />
      <div className="md:col-span-4 border border-dashed border-border bg-background/30" />
    </div>
  )
}
