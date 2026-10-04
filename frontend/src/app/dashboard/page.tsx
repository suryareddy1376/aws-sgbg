import { requireAuth } from "@/lib/auth/session";
import { SectionHeader } from "@/components/domain/section-header";
import { StatCard } from "@/components/domain/stat-card";
import { Calendar, Rocket, Award, Star } from "lucide-react";

export default async function DashboardOverviewPage() {
  const session = await requireAuth().catch(() => null);
  if (!session) return null;

  return (
    <div className="space-y-8 max-w-5xl">
      <SectionHeader title="Dashboard Overview" subtitle={`Welcome back, ${session.email.split('@')[0]}`} />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Events Attended" value="0" description="No events yet" icon={Calendar} />
        <StatCard title="Projects Submitted" value="0" description="Start building" icon={Rocket} />
        <StatCard title="Certificates Earned" value="0" description="Verify attendance to earn" icon={Award} />
        <StatCard title="Community Points" value="0" description="Engage to earn" icon={Star} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border rounded-xl bg-card p-6 space-y-4">
          <h3 className="font-semibold text-lg">Next Upcoming Event</h3>
          <div className="p-4 border border-dashed rounded-md text-center text-sm text-muted-foreground">
            You haven't registered for any upcoming events.
          </div>
        </div>
        
        <div className="border rounded-xl bg-card p-6 space-y-4">
          <h3 className="font-semibold text-lg">Recent Announcements</h3>
          <div className="p-4 border border-dashed rounded-md text-center text-sm text-muted-foreground">
            No new announcements.
          </div>
        </div>
      </div>
    </div>
  );
}
