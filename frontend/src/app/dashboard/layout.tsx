import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { requireAuth } from "@/lib/auth/session"
import { LayoutDashboard, User, Calendar, Rocket, Award, Bookmark, ShieldAlert, LogOut } from "lucide-react"
import { MobileSidebar } from "@/components/layout/mobile-sidebar"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Enforce authentication for the entire /dashboard route group
  const session = await requireAuth().catch(() => null);
  
  if (!session) {
    return (
      <div className="flex h-[100dvh] items-center justify-center">
        <div className="text-center space-y-4">
          <ShieldAlert className="h-12 w-12 text-destructive mx-auto" />
          <h2 className="text-2xl font-bold">Access Denied</h2>
          <p className="text-muted-foreground">You must be logged in to access the dashboard.</p>
          <Link href="/login" className="text-primary hover:underline">Go to Login</Link>
        </div>
      </div>
    );
  }

  const navItems = [
    { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { label: 'My Profile', href: '/dashboard/profile', icon: User },
    { label: 'My Events', href: '/dashboard/events', icon: Calendar },
    { label: 'My Projects', href: '/dashboard/projects', icon: Rocket },
    { label: 'Certificates', href: '/dashboard/certificates', icon: Award },
    { label: 'Saved Resources', href: '/dashboard/resources', icon: Bookmark },
  ];

  return (
    <div className="flex min-h-[100dvh] bg-muted/20">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r bg-background md:block">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="font-bold gradient-text">{siteConfig.shortName} Portal</Link>
        </div>
        <div className="py-4">
          <nav className="grid gap-1 px-4 text-sm font-medium">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground">
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-0 w-64 p-4 border-t bg-background">
          <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-destructive transition-all hover:bg-muted">
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-[100dvh] overflow-hidden relative">
        <header className="flex h-16 items-center justify-between md:justify-end border-b bg-background px-6">
          <Link href="/" className="md:hidden font-bold gradient-text">{siteConfig.shortName}</Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">{session.email}</span>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
              {session.email[0].toUpperCase()}
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6 md:p-8 pb-24 md:pb-8">
          {children}
        </div>
        <MobileSidebar navItems={navItems} shortName={siteConfig.shortName} />
      </main>
    </div>
  )
}

