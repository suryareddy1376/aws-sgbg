import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function JoinCta() {
  return (
    <section className="w-full bg-[#EAE8F0] text-[#0C0A10] py-24 md:py-32">
      <div className="container flex flex-col items-center text-center gap-8">
        <h2 className="font-display font-black text-5xl md:text-7xl tracking-tighter max-w-2xl">
          Ready to start building?
        </h2>
        <p className="font-mono text-sm uppercase tracking-widest opacity-80 max-w-lg mb-4">
          Join the KARE AWS Student Builder Group today.
        </p>
        <Link href={siteConfig.nav.cta.href} tabIndex={-1}>
          <Button size="lg" className="bg-primary text-white border-0 hover:bg-primary-hover shadow-none transform hover:-translate-y-1 hover:shadow-[0_8px_0_0_#13101A] transition-all duration-200">
            Apply Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
