"use client"
import * as React from "react"
import Link from "next/link"
import { Menu, LogOut } from "lucide-react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MobileSidebar({ navItems, shortName }: { navItems: any[]; shortName: string }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const navRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <div className="md:hidden flex items-center">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 -ml-2 text-foreground focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        aria-expanded={isOpen}
        aria-label="Toggle Dashboard Menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex" aria-modal="true" role="dialog">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          {/* Drawer */}
          <div ref={navRef} className="relative z-50 w-3/4 max-w-sm bg-background border-r h-full flex flex-col shadow-2xl animate-in slide-in-from-left-full">
            <div className="flex h-16 items-center border-b px-6">
              <span className="font-bold gradient-text">{shortName} Portal</span>
            </div>
            <div className="flex-1 py-4 overflow-y-auto">
              <nav className="grid gap-1 px-4 text-sm font-medium">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-3 text-muted-foreground transition-all hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="p-4 border-t bg-background">
              <button className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-destructive transition-all hover:bg-muted focus-visible:ring-2 focus-visible:ring-destructive">
                <LogOut className="h-5 w-5" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
