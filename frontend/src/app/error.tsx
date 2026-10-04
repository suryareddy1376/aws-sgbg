"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function ErrorBoundary({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  React.useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md p-8 border border-border bg-card rounded-2xl shadow-xl">
          <div className="h-16 w-16 bg-destructive/10 rounded-full flex items-center justify-center text-destructive mx-auto">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Something went wrong!</h1>
            <p className="text-muted-foreground text-sm">An error occurred while loading this section.</p>
          </div>
          <Button onClick={() => reset()} className="w-full">Try again</Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

