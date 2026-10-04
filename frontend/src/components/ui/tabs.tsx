"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

const TabsContext = React.createContext<{ activeTab: string; setActiveTab: (v: string) => void } | null>(null)

export function Tabs({ defaultValue, className, children }: { defaultValue: string; className?: string; children: React.ReactNode }) {
  const [activeTab, setActiveTab] = React.useState(defaultValue)
  return <TabsContext.Provider value={{ activeTab, setActiveTab }}><div className={cn("w-full", className)}>{children}</div></TabsContext.Provider>
}

export function TabsList({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)}>{children}</div>
}

export function TabsTrigger({ value, className, children }: { value: string; className?: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) return null
  const isActive = ctx.activeTab === value
  return (
    <button
      onClick={() => ctx.setActiveTab(value)}
      className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", isActive ? "bg-background text-foreground shadow-sm" : "hover:text-foreground", className)}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, className, children }: { value: string; className?: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext)
  if (!ctx || ctx.activeTab !== value) return null
  return <div className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}>{children}</div>
}