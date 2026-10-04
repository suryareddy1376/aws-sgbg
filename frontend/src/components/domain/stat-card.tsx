import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

export function StatCard({ title, value, description, icon: Icon }: { title: string; value: string; description: string; icon: LucideIcon }) {
  return (
    <Card>
      <CardContent className="p-6 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}