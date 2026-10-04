import { SectionHeader } from "@/components/domain/section-header";
import { LineChart, BarChart, DonutChart } from "@/components/ui/charts";
import { requireAuth } from "@/lib/auth/session";

export default async function AdminAnalyticsPage() {
  await requireAuth().catch(() => null);

  const growthData = [12, 45, 120, 310, 480, 750, 1245];
  const attendanceData = [50, 120, 80, 200, 150];
  const breakdownData = [
    { value: 65, color: '#FF9900' }, // Members
    { value: 20, color: '#146EB4' }, // Students
    { value: 15, color: '#37475A' }, // Core
  ];

  return (
    <div className="space-y-8 max-w-7xl">
      <SectionHeader title="Analytics" subtitle="Platform metrics and engagement tracking." />
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border rounded-xl bg-card p-6 space-y-8">
          <div>
            <h3 className="font-semibold text-lg">User Growth (YTD)</h3>
            <p className="text-sm text-muted-foreground">Cumulative registered users over time.</p>
          </div>
          <div className="flex justify-center">
            <LineChart data={growthData} width={400} height={200} />
          </div>
        </div>

        <div className="border rounded-xl bg-card p-6 space-y-8">
          <div>
            <h3 className="font-semibold text-lg">Event Attendance</h3>
            <p className="text-sm text-muted-foreground">Check-ins per recent events.</p>
          </div>
          <div className="flex justify-center">
            <BarChart data={attendanceData} width={400} height={200} />
          </div>
        </div>

        <div className="border rounded-xl bg-card p-6 space-y-8">
          <div>
            <h3 className="font-semibold text-lg">Audience Breakdown</h3>
            <p className="text-sm text-muted-foreground">Distribution of active user roles.</p>
          </div>
          <div className="flex justify-center items-center gap-8">
            <DonutChart data={breakdownData} size={200} />
            <div className="space-y-2">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#FF9900]"></div><span className="text-sm">Members (65%)</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#146EB4]"></div><span className="text-sm">Students (20%)</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#37475A]"></div><span className="text-sm">Core Team (15%)</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
