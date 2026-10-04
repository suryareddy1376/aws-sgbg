"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollProgress } from "@/hooks/use-animation"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const navRef = React.useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const scrollProgress = useScrollProgress()

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-0.5 bg-accent z-50 transition-all duration-150 ease-out" 
        style={{ width: `${scrollProgress}%` }} 
      />
      <header className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        scrolled ? "h-16 bg-background/90 backdrop-blur-md border-b border-border" : "h-20 bg-transparent border-transparent"
      )}>
        <div className="container flex h-full items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center space-x-2 focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
              <span className="font-display font-bold text-xl tracking-tight uppercase">{siteConfig.shortName}</span>
            </Link>
            <nav className="hidden gap-8 md:flex relative">
              {siteConfig.nav.main.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
                return (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className={cn(
                      "text-sm font-mono transition-colors focus-visible:ring-2 focus-visible:ring-accent px-1 py-1 relative group",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <span className={cn(
                      "absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ease-out",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-4">
              <Link href="/login" tabIndex={-1}><Button variant="ghost" size="sm">Sign In</Button></Link>
              <Link href={siteConfig.nav.cta.href} tabIndex={-1}><Button size="sm">{siteConfig.nav.cta.label}</Button></Link>
            </div>
            <button 
              className="md:hidden p-2 -mr-2 text-foreground focus-visible:ring-2 focus-visible:ring-accent" 
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
                  {isOpen && (
            <div className="fixed inset-0 top-[64px] z-40 bg-background md:hidden flex flex-col h-[calc(100dvh-64px)] overflow-y-auto">
              <nav className="container flex-1 flex flex-col pt-8 pb-32 gap-6">
                {siteConfig.nav.main.map((item, i) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="flex items-center gap-4 text-3xl font-display font-bold tracking-tight py-2 focus-visible:ring-2 focus-visible:ring-accent opacity-0 animate-in fade-in slide-in-from-bottom-4" 
                    style={{ animationFillMode: 'forwards', animationDelay: `${i * 60}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-mono text-sm text-muted-foreground font-normal tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              <div className="sticky bottom-0 border-t border-border bg-background p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] flex flex-col gap-3 mt-auto shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.5)]">
                <Link href="/login" onClick={() => setIsOpen(false)} className="w-full">
                  <Button variant="outline" className="w-full h-12 text-base">Sign In</Button>
                </Link>
                <Link href={siteConfig.nav.cta.href} onClick={() => setIsOpen(false)} className="w-full">
                  <Button className="w-full h-12 text-base">{siteConfig.nav.cta.label}</Button>
                </Link>
              </div>
            </div>
          )}
      </header>
    </>
  )
}