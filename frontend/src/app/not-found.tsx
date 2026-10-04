import { Button } from "@/components/ui/button"
import { CloudOff } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center text-muted-foreground mx-auto">
            <CloudOff className="h-10 w-10" />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight">404</h1>
            <h2 className="text-xl font-semibold">Page not found</h2>
            <p className="text-muted-foreground">The page you are looking for doesn't exist or has been moved.</p>
          </div>
          <div className="pt-4">
            <Link href="/">
              <Button className="w-full bg-gradient-to-r from-primary to-accent border-0">Back to Home</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

