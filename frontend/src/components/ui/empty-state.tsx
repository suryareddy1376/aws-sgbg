import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { Button } from "./button"

export function EmptyState({ icon: Icon, title, description, actionLabel, onAction, className }: { icon: LucideIcon; title: string; description: string; actionLabel?: string; onAction?: () => void; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50", className)}>
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <Icon className="h-10 w-10 text-muted-foreground" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} className="mt-4">{actionLabel}</Button>
      )}
    </div>
  )
}