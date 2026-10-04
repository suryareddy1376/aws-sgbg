"use client"
import * as React from "react"
import { useInView } from "@/hooks/use-animation"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "left" | "right" | "down" | "none"
  as?: React.ElementType
  className?: string
}

export function Reveal({ children, delay = 0, direction = "up", as: Component = "div", className }: RevealProps) {
  return (
    <Component
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards"
      }}
      className={cn(
        "opacity-0 animate-fade-up",
        className
      )}
    >
      {children}
    </Component>
  )
}
