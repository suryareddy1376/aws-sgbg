import { SectionHeader } from "@/components/domain/section-header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input, Label, Textarea, Select } from "@/components/ui/form";
import { requireAuth } from "@/lib/auth/session";
import { Send, Bell } from "lucide-react";

export default async function AdminAnnouncementsPage() {
  await requireAuth().catch(() => null);

  const pastAnnouncements = [
    { id: 1, title: 'Hackathon Registrations Open!', audience: 'All Members', date: 'Oct 23, 2023', sent: 1245 },
    { id: 2, title: 'Core Team Applications', audience: 'Volunteers', date: 'Sep 10, 2023', sent: 45 },
  ];

  return (
    <div className="space-y-12 max-w-7xl">
      <SectionHeader title="Announcements" subtitle="Broadcast updates to the community via SES." />

      <div className="grid lg:grid-cols-2 gap-8">
        <form className="border rounded-xl bg-card p-8 space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <Bell className="text-primary h-5 w-5" />
            <h3 className="font-semibold text-lg">Compose Message</h3>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="audience">Target Audience</Label>
              <Select id="audience">
                <option>All Verified Members</option>
                <option>Core Team & Faculty Only</option>
                <option>Specific Event Attendees...</option>
                <option>Unverified Students</option>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject Line</Label>
              <Input id="subject" placeholder="e.g. Action Required: AWS certification vouchers" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message Body (Markdown supported)</Label>
              <Textarea id="message" className="min-h-[200px]" placeholder="Type your announcement here..." required />
            </div>
          </div>

          <div className="pt-4 border-t flex justify-end">
            <Button type="submit"><Send className="mr-2 h-4 w-4" /> Send Broadcast</Button>
          </div>
        </form>

        <div className="space-y-6">
          <h3 className="font-semibold text-lg px-2">Recent Broadcasts</h3>
          <div className="border rounded-xl bg-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Audience</TableHead>
                  <TableHead>Sent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pastAnnouncements.map(msg => (
                  <TableRow key={msg.id}>
                    <TableCell className="font-medium">
                      {msg.title}
                      <div className="text-xs text-muted-foreground mt-1">{msg.date}</div>
                    </TableCell>
                    <TableCell><Badge variant="secondary">{msg.audience}</Badge></TableCell>
                    <TableCell className="font-mono text-sm">{msg.sent}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
