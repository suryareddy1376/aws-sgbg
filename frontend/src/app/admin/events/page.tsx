import { SectionHeader } from "@/components/domain/section-header";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { getUpcomingEvents, getPastEvents } from "@/lib/db/operations/events";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function AdminEventsPage() {
  const upcoming = await getUpcomingEvents();
  const past = await getPastEvents();
  const allEvents = [...upcoming, ...past];

  return (
    <div className="space-y-8 max-w-7xl">
      <div className="flex justify-between items-end">
        <SectionHeader title="Events Management" subtitle="Create, edit, and manage all sessions." />
        <Link href="/admin/events/create">
          <Button><Plus className="mr-2 h-4 w-4" /> Create Event</Button>
        </Link>
      </div>

      <div className="border rounded-xl bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Spots</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allEvents.length > 0 ? allEvents.map((event, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{event.title}</TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell>{event.category}</TableCell>
                <TableCell>{event.spots}</TableCell>
                <TableCell>
                  <Badge variant={event.isPast ? "secondary" : "success"}>
                    {event.isPast ? "Past" : "Upcoming"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                  No events found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
