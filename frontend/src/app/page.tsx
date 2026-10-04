import { Hero } from "@/components/domain/hero";
import { Marquee } from "@/components/domain/marquee";
import { EditorialList } from "@/components/domain/editorial-list";
import { SectionHeader } from "@/components/domain/section-header";
import { EventTicket, EventTicketEmpty } from "@/components/domain/event-ticket";
import { ProjectBento } from "@/components/domain/project-bento";
import { JoinCta } from "@/components/domain/join-cta";
import { getUpcomingEvents } from "@/lib/db/operations/events";
import { getFeaturedProjects } from "@/lib/db/operations/projects";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Home",
}

export default async function HomePage() {
  const upcomingEvents = await getUpcomingEvents();
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <Marquee />
        
        {/* What We Do */}
        <section className="container py-16 md:py-24 lg:py-32">
          <SectionHeader title="What We Do" subtitle="We build cloud skills through hands-on experience and community learning." kicker="01 / Foundation" />
          <EditorialList />
        </section>

        {/* Upcoming Events */}
        <section className="container py-16 md:py-24 lg:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <SectionHeader title="Upcoming Sessions" subtitle="Workshops, builds, and meetups." kicker="02 / Calendar" className="pb-0" />
            <Link 
              href="/events" 
              className="group flex items-center text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="relative">
                View full schedule
                <span className="absolute -bottom-1 left-0 h-px bg-foreground w-0 group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="flex flex-col gap-4">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, i) => (
                <Reveal key={event.title} delay={i * 100}>
                  <EventTicket {...event} />
                </Reveal>
              ))
            ) : (
              <Reveal>
                <EventTicketEmpty />
              </Reveal>
            )}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="bg-surface py-16 md:py-24 lg:py-32 border-y border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <SectionHeader title="Featured Builds" subtitle="Architecture and projects shipped by members." kicker="03 / Showcase" className="pb-0" />
              <Link 
                href="/projects" 
                className="group flex items-center text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="relative">
                  View all projects
                  <span className="absolute -bottom-1 left-0 h-px bg-foreground w-0 group-hover:w-full transition-all duration-300" />
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <ProjectBento projects={featuredProjects as any[]} />
          </div>
        </section>

        {/* Why Join */}
        <section className="container py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <SectionHeader title="Why Join?" kicker="04 / Benefits" className="pb-0" />
            </div>
            <div className="lg:col-span-7 flex flex-col pt-4">
              {[
                "Gain hands-on experience with production AWS environments.",
                "Build a portfolio of open-source cloud architectures.",
                "Network with industry professionals and KARE alumni.",
                "Prepare for AWS Certifications with peer study groups.",
                "Lead workshops and develop public speaking skills."
              ].map((benefit, i) => (
                <Reveal key={i} delay={i * 100} className="w-full">
                  <div className="py-8 hairline-t text-xl md:text-2xl text-muted-foreground font-medium hover:text-foreground transition-colors">
                    {benefit}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <JoinCta />
      </main>
      <Footer />
    </div>
  );
}

