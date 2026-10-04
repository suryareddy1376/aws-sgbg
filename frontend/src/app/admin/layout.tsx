import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { requireAuth } from "@/lib/auth/session"
import { can } from "@/lib/rbac/can"
import { ShieldAlert, LayoutDashboard, Calendar, Users, Briefcase, FileText, Image as ImageIcon, Settings, LogOut, Award, BarChart, Bell, ClipboardList, PenTool, Shield } from "lucide-react"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAuth().catch(() => null);
  
  // Basic admin check: user must have at least one admin role to even see the portal
  if (!session || !session.adminRoles || session.adminRoles.length === 0) {
    return (
      <div className="flex h-[100dvh] items-center justify-center bg-muted/20">
        <div className="text-center space-y-4 max-w-sm">
          <ShieldAlert className="h-16 w-16 text-destructive mx-auto" />
          <h2 className="text-2xl font-bold">Admin Access Required</h2>
          <p className="text-muted-foreground text-sm">You do not have the necessary permissions to access the KARE AWS SBG management portal.</p>
          <Link href="/dashboard" className="text-primary hover:underline block mt-4">Return to Member Dashboard</Link>
        </div>
      </div>
    );
  }

  const adminNav = [
    { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { label: 'Events', href: '/admin/events', icon: Calendar },
    { label: 'Registrations', href: '/admin/registrations', icon: ClipboardList },
    { label: 'Members', href: '/admin/members', icon: Users },
    { label: 'Team', href: '/admin/team', icon: Shield },
    { label: 'Projects', href: '/admin/projects', icon: Briefcase },
    { label: 'Resources', href: '/admin/resources', icon: FileText },
    { label: 'Blog', href: '/admin/blog', icon: PenTool },
    { label: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
    { label: 'Opportunities', href: '/admin/opportunities', icon: Briefcase },
    { label: 'Announcements', href: '/admin/announcements', icon: Bell },
    { label: 'Certificates', href: '/admin/certificates', icon: Award },
    { label: 'Analytics', href: '/admin/analytics', icon: BarChart },
    { label: 'Settings', href: '/admin/settings', icon: Settings },
    { label: 'Audit Log', href: '/admin/audit-log', icon: FileText },
  ];

  return (
    <div className="flex min-h-[100dvh] bg-muted/10">
      <aside className="hidden w-64 flex-col border-r bg-background md:flex">
        <div className="flex h-16 items-center border-b px-6 bg-muted/30">
          <Link href="/" className="font-bold text-sm">AWS SBG <span className="text-primary">Admin</span></Link>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="grid gap-1 px-3 text-sm font-medium">
            {adminNav.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary">
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t p-4">
          <div className="mb-4 flex items-center gap-3 px-2">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
              {session.email[0].toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold">{session.email.split('@')[0]}</span>
              <span className="text-[10px] text-muted-foreground uppercase">{session.adminRoles[0]?.replace('_', ' ')}</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-[100dvh] overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b bg-background px-6">
          <div className="md:hidden font-bold">Admin Portal</div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <button className="text-sm text-muted-foreground hover:text-foreground">View Public Site</button>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

