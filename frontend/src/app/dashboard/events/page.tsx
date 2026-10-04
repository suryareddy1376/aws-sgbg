import { SectionHeader } from "@/components/domain/section-header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { EmptyState } from "@/components/ui/empty-state";
import { Calendar } from "lucide-react";
import { requireAuth } from "@/lib/auth/session";

export default async function MyEventsPage() {
  await requireAuth().catch(() => null);

  return (
    <div className="space-y-8 max-w-5xl">
      <SectionHeader title="My Events" subtitle="Track your registrations and attendance." />
      
      <Tabs defaultValue="registered">
        <TabsList>
          <TabsTrigger value="registered">Registered</TabsTrigger>
          <TabsTrigger value="attended">Attended</TabsTrigger>
        </TabsList>
        <TabsContent value="registered" className="mt-6">
          <EmptyState icon={Calendar} title="No active registrations" description="You haven't registered for any upcoming events." actionLabel="Browse Events" />
        </TabsContent>
        <TabsContent value="attended" className="mt-6">
          <EmptyState icon={Calendar} title="No events attended" description="Your event attendance history will appear here after your QR code is scanned." />
        </TabsContent>
      </Tabs>
    </div>
  );
}
