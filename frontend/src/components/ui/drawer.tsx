"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

export function Drawer({ isOpen, onClose, title, children, side = "right" }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode; side?: "left" | "right" }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className={cn("fixed inset-y-0 z-50 flex h-auto flex-col border-border bg-background shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out sm:max-w-sm", side === "left" ? "left-0 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left" : "right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right")}>
        <div className="flex items-center justify-between border-b px-4 py-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"><X className="h-4 w-4" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  )
}