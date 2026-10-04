"use client"
import * as React from "react"
import Link from "next/link"
import { Menu, LogOut } from "lucide-react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MobileSidebar({ navItems, shortName }: { navItems: any[]; shortName: string }) {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isOpen])

  const visibleItems = navItems.slice(0, 4)
  const moreItems = navItems.slice(4)

  return (
    <>
      {/* Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border flex justify-around items-center pb-[env(safe-area-inset-bottom)]">
        {visibleItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1 p-3 text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent flex-1"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] font-medium">{item.label.replace('My ', '')}</span>
          </Link>
        ))}
        <button
          onClick={() => setIsOpen(true)}
          className="flex flex-col items-center gap-1 p-3 text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent flex-1"
        >
          <Menu className="h-5 w-5" />
          <span className="text-[10px] font-medium">More</span>
        </button>
      </div>

      {/* "More" Bottom Sheet */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end" aria-modal="true" role="dialog">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative z-50 bg-background border-t border-border rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom-full pb-[env(safe-area-inset-bottom)] max-h-[90dvh] overflow-y-auto">
            <div className="w-12 h-1.5 bg-muted rounded-full mx-auto my-4" />
            <div className="px-6 pb-2 border-b border-border">
              <span className="font-bold gradient-text">{shortName} Portal</span>
            </div>
            <nav className="flex flex-col p-4 gap-2">
              {moreItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 rounded-xl px-4 py-4 text-muted-foreground transition-all hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium text-base">{item.label}</span>
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-border">
              <button className="flex w-full items-center gap-4 rounded-xl px-4 py-4 font-medium text-destructive transition-all hover:bg-muted focus-visible:ring-2 focus-visible:ring-destructive">
                <LogOut className="h-5 w-5" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
