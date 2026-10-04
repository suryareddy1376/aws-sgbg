import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Calendar({ className }: { className?: string }) {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  const dates = Array.from({ length: 31 }, (_, i) => i + 1)
  
  return (
    <div className={cn("p-3 border rounded-md bg-card", className)}>
      <div className="flex justify-between items-center mb-4">
        <button className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"><ChevronLeft className="h-4 w-4" /></button>
        <div className="text-sm font-medium">October 2026</div>
        <button className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"><ChevronRight className="h-4 w-4" /></button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-muted-foreground">
        {days.map(d => <div key={d}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1 text-sm">
        {Array.from({length: 4}).map((_, i) => <div key={`empty-${i}`} />)}
        {dates.map(d => (
          <div key={d} className={cn("h-8 w-8 flex items-center justify-center rounded-md cursor-pointer hover:bg-muted", d === 15 ? "bg-primary text-primary-foreground hover:bg-primary" : "")}>
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}