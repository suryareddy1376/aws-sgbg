import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import Image from "next/image"

export interface EventCardProps { title: string; date: string; location: string; category: string; spots: number; image?: string; isPast?: boolean }

export function EventCard({ title, date, location, category, spots, image, isPast }: EventCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col group bg-card border-border hover:border-primary/50 transition-colors">
      <div className="h-48 bg-muted relative overflow-hidden">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover transition-transform group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
        )}
        <Badge className="absolute top-4 left-4 shadow-sm" variant={isPast ? "secondary" : "default"}>{category}</Badge>
      </div>
      <CardContent className="flex-1 p-6 flex flex-col gap-4">
        <h3 className="font-bold text-xl line-clamp-2">{title}</h3>
        <div className="space-y-2 text-sm text-muted-foreground flex-1">
          <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> <span>{date}</span></div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> <span>{location}</span></div>
          {!isPast && <div className="flex items-center gap-2"><Users className="h-4 w-4" /> <span>{spots} spots left</span></div>}
        </div>
        <Button variant={isPast ? "outline" : "default"} className={isPast ? "w-full mt-auto" : "w-full mt-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 border-0"}>
          {isPast ? "View Recap" : "Register Now"}
        </Button>
      </CardContent>
    </Card>
  )
}