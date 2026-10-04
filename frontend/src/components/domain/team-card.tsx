import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, User } from "lucide-react"

export interface TeamCardProps {
  name: string;
  role: string;
  department: string;
  image?: string;
  github?: string;
  linkedin?: string;
}

export function TeamCard({ name, role, department, image, github, linkedin }: TeamCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <Card className="overflow-hidden flex flex-col group bg-card border-border hover:border-primary/50 transition-colors">
      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
        <div className="h-24 w-24 rounded-full overflow-hidden bg-muted flex items-center justify-center border-2 border-border group-hover:border-primary transition-colors">
          {image ? (
            <img src={image} alt={name} className="h-full w-full object-cover" />
          ) : (
            <span className="text-2xl font-bold text-muted-foreground">{initials}</span>
          )}
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm font-medium text-primary">{role}</p>
          <p className="text-xs text-muted-foreground">{department}</p>
        </div>
        <div className="flex items-center gap-4 mt-2">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent rounded-sm" aria-label={`${name}'s LinkedIn`}>
              <User className="h-5 w-5" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent rounded-sm" aria-label={`${name}'s GitHub`}>
              <Code className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
