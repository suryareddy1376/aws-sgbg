import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Camera, User, MessageCircle, Code } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8 overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
        
        {/* Brand & Description */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
          <Link href="/" className="font-display font-black text-3xl focus-visible:ring-2 focus-visible:ring-accent w-fit uppercase">
            {siteConfig.shortName}
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{siteConfig.description}</p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="font-mono text-xs font-bold text-foreground mb-6 uppercase tracking-widest text-border">Explore</h4>
          <ul className="space-y-4 text-sm font-medium">
            {siteConfig.nav.footer.map(item => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent w-fit block">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Community & Socials */}
        <div>
          <h4 className="font-mono text-xs font-bold text-foreground mb-6 uppercase tracking-widest text-border">Community</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent w-fit">
                <Camera className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent w-fit">
                <User className="h-4 w-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://chat.whatsapp.com/example" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent w-fit">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href="https://github.com/awsclubkare" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent w-fit">
                <Code className="h-4 w-4" /> GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-mono text-xs font-bold text-foreground mb-6 uppercase tracking-widest text-border">Contact</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <a href="mailto:awsclub@kare.edu.in" className="text-muted-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent">
                awsclub@kare.edu.in
              </a>
            </li>
            <li className="text-muted-foreground">
              Kalasalingam Academy of Research and Education,<br/>
              Krishnankoil, Tamil Nadu 626126
            </li>
          </ul>
        </div>

      </div>

      {/* Oversized Wordmark */}
      <div className="w-full flex justify-center py-8 opacity-5 select-none pointer-events-none">
        <span className="font-display font-black text-[12vw] leading-none whitespace-nowrap outline-text tracking-tighter">
          AWS SBG KARE
        </span>
      </div>

      <div className="container">
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <p>&copy; {currentYear} {siteConfig.name}.</p>
          <p className="max-w-xl text-center md:text-right leading-relaxed">{siteConfig.trademark}</p>
        </div>
      </div>
      <style>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 2px var(--color-foreground);
        }
      `}</style>
    </footer>
  )
}