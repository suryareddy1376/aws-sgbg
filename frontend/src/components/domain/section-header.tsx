import * as React from "react"
import { cn } from "@/lib/utils"

export function SectionHeader({ 
  title, 
  subtitle, 
  kicker, 
  as = "h2", 
  className,
  withHairline = false,
  align
}: { 
  title: string; 
  subtitle?: string; 
  kicker?: string; 
  as?: "h1" | "h2"; 
  className?: string;
  withHairline?: boolean;
  align?: "left" | "center" | "right";
}) {
  const Tag = as;
  return (
    <div className={cn("flex flex-col items-start pb-6", withHairline && "hairline-b", className)}>
      {kicker && <span className="section-kicker">{kicker}</span>}
      <Tag className={cn("font-display font-black tracking-tighter text-foreground", as === "h1" ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl")}>
        {title}
      </Tag>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}