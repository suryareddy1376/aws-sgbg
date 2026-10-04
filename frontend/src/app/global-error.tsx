"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  React.useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground flex items-center justify-center min-h-screen">
        <div className="text-center space-y-6 max-w-md p-8 border border-border bg-card rounded-2xl shadow-xl">
          <div className="h-16 w-16 bg-destructive/10 rounded-full flex items-center justify-center text-destructive mx-auto">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Something went wrong!</h1>
            <p className="text-muted-foreground text-sm">A critical error occurred while trying to render this page.</p>
          </div>
          <Button onClick={() => reset()} className="w-full">Try again</Button>
        </div>
      </body>
    </html>
  )
}
