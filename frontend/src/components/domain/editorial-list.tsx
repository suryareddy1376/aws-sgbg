"use client"
import * as React from "react"
import { Reveal } from "@/components/ui/reveal"
import { ArrowUpRight } from "lucide-react"

const ITEMS = [
  { num: "01", title: "Learn", desc: "Workshops and study sessions to master AWS services." },
  { num: "02", title: "Build", desc: "Apply knowledge in hands-on labs, sprints, and hackathons." },
  { num: "03", title: "Connect", desc: "Join a community of students, network, and find opportunities." },
]

export function EditorialList() {
  return (
    <div className="w-full hairline-t mt-12">
      {ITEMS.map((item, i) => (
        <Reveal key={item.num} delay={i * 150} direction="up" className="w-full">
          <div className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-10 hairline-b hover:bg-surface transition-colors duration-200 cursor-default">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 flex-1">
              <span className="font-mono text-4xl md:text-5xl text-border group-hover:text-primary transition-colors duration-200">
                {item.num}
              </span>
              <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight transform transition-transform duration-300 group-hover:translate-x-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-lg md:ml-auto md:text-right">
                {item.desc}
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:ml-12 flex justify-end">
              <ArrowUpRight className="h-10 w-10 text-muted-foreground group-hover:text-foreground transform transition-all duration-300 group-hover:rotate-45" />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
