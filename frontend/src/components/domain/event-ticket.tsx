"use client"
import * as React from "react"
import Link from "next/link"
import { Reveal } from "@/components/ui/reveal"

export interface EventCardProps {
  title: string;
  date: string; // e.g. "2026-10-15"
  location: string;
  category: string;
  spots: number;
  isPast?: boolean;
}

export function EventTicket({ title, date, location, category, spots, isPast }: EventCardProps) {
  const d = new Date(date)
  const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const day = d.getDate().toString().padStart(2, '0')

  return (
    <div className="flex flex-col sm:flex-row w-full bg-surface border border-border group hover:border-primary/50 transition-colors">
      <div className="flex sm:flex-col items-center justify-center p-6 bg-background/50 border-b sm:border-b-0 sm:border-r border-dashed border-border min-w-[120px]">
        <span className="font-mono text-primary text-sm tracking-widest mr-2 sm:mr-0">{month}</span>
        <span className="font-display text-4xl sm:text-5xl font-bold">{day}</span>
      </div>
      <div className="flex-1 p-6 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5">{category}</span>
          {!isPast && <span className="font-mono text-xs text-accent">{spots} spots left</span>}
        </div>
        <h3 className="font-display text-2xl font-bold tracking-tight mb-2">{title}</h3>
        <p className="text-muted-foreground font-mono text-sm">{location}</p>
      </div>
      <div className="p-6 flex items-center justify-center border-t sm:border-t-0 sm:border-l border-dashed border-border bg-background/50">
        <Link 
          href="/events" 
          className="font-mono text-sm uppercase tracking-wider text-primary hover:text-accent transition-colors underline underline-offset-4 decoration-primary/30 hover:decoration-accent"
        >
          {isPast ? "Recap" : "Register"}
        </Link>
      </div>
    </div>
  )
}

export function EventTicketEmpty() {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-transparent border border-border relative overflow-hidden group">
      {/* Shimmer sweep */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
      <div className="flex sm:flex-col items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-dashed border-border min-w-[120px] opacity-50">
        <span className="font-mono text-muted-foreground text-sm tracking-widest">TBA</span>
      </div>
      <div className="flex-1 p-6 flex flex-col justify-center opacity-50">
        <h3 className="font-display text-2xl font-bold tracking-tight text-muted-foreground">Next session planning</h3>
        <p className="text-muted-foreground font-mono text-sm">Location: Cloud</p>
      </div>
      <div className="p-6 flex items-center justify-center border-t sm:border-t-0 sm:border-l border-dashed border-border">
        <Link 
          href="/join" 
          className="font-mono text-sm uppercase tracking-wider text-accent hover:text-primary transition-colors underline underline-offset-4 decoration-accent/30"
        >
          Get Notified
        </Link>
      </div>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}
