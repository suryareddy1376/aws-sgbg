import { SectionHeader } from "@/components/domain/section-header";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AdminCreateEventPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <Link href="/admin/events" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
      </Link>
      
      <SectionHeader title="Create Event" subtitle="Draft a new workshop or hackathon." />

      <form className="border rounded-xl bg-card p-8 space-y-8">
        <div className="space-y-4">
          <h3 className="font-semibold border-b pb-2">Basic Details</h3>
          <div className="space-y-2">
            <Label htmlFor="title">Event Title</Label>
            <Input id="title" placeholder="e.g. AWS Serverless Hackathon" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select id="category">
                <option>Workshop</option>
                <option>Hackathon</option>
                <option>Certification Session</option>
                <option>Hands-on Lab</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="spots">Capacity (Spots)</Label>
              <Input id="spots" type="number" placeholder="50" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Event details..." required />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold border-b pb-2">Schedule & Location</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Venue / Location</Label>
            <Input id="location" placeholder="e.g. Lab 3, CSE Block" required />
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4 border-t">
          <Link href="/admin/events"><Button variant="outline">Cancel</Button></Link>
          <Button type="submit">Create Event</Button>
        </div>
      </form>
    </div>
  );
}
