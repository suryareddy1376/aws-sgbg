import { SectionHeader } from "@/components/domain/section-header";
import { StatCard } from "@/components/domain/stat-card";
import { Users, Calendar, Rocket, Award } from "lucide-react";
import { requireAuth } from "@/lib/auth/session";

export default async function AdminDashboardPage() {
  await requireAuth().catch(() => null);

  return (
    <div className="space-y-8 max-w-7xl">
      <div className="flex justify-between items-end">
        <SectionHeader title="Overview" subtitle="Platform health and recent metrics." />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Members" value="1,245" description="+42 this week" icon={Users} />
        <StatCard title="Upcoming Events" value="3" description="1 requires approval" icon={Calendar} />
        <StatCard title="Pending Projects" value="14" description="Awaiting review" icon={Rocket} />
        <StatCard title="Certificates Issued" value="892" description="+120 this month" icon={Award} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="border rounded-xl bg-card p-6">
          <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground pb-4 border-b">New user registered: <strong>student1@kare.edu.in</strong></div>
            <div className="text-sm text-muted-foreground pb-4 border-b">Project submitted: <strong>AI Chatbot</strong></div>
            <div className="text-sm text-muted-foreground">Event updated: <strong>AWS Cloud Practitioner</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}
