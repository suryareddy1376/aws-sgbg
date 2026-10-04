"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { ArchitectureDiagram } from "./architecture-diagram"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const words = ["Learn.", "Build.", "Lead."]

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 blueprint-grid opacity-50 -z-10" />
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (7) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          <div 
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground border border-border px-3 py-1 bg-surface/50 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            {`// KARE · Krishnan Kovil`}
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            {words.map((word, i) => (
              <span 
                key={word} 
                className="block animate-fade-up"
                style={{ animationDelay: `${120 * i + 100}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-xl font-medium leading-relaxed animate-fade-up"
            style={{ animationDelay: "500ms" }}
          >
            We&apos;re students at KARE learning cloud by building on AWS. Workshops, labs, hackathons, and projects, run by us, for us.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto items-start sm:items-center animate-fade-up"
            style={{ animationDelay: "650ms" }}
          >
            <Link href={siteConfig.nav.cta.href} tabIndex={-1} className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto group">
                Join the community
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link 
              href="/events" 
              className="group flex items-center text-sm font-mono font-semibold uppercase tracking-wider hover:text-accent transition-colors"
            >
              <span className="relative">
                See upcoming events
                <span className="absolute -bottom-1 left-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Column (5) */}
        <div 
          className="lg:col-span-5 w-full flex justify-center lg:justify-end animate-fade-up"
          style={{ animationDelay: "800ms" }}
        >
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  )
}