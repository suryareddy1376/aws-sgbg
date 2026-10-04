import { SectionHeader } from "@/components/domain/section-header";
import { EventCard } from "@/components/domain/event-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { getUpcomingEvents, getPastEvents } from "@/lib/db/operations/events";
import { Calendar } from "lucide-react";

export default async function EventsPage() {
  const upcomingEvents = await getUpcomingEvents();
  const pastEvents = await getPastEvents();

  return (
    <div className="container py-24 space-y-12">
      <SectionHeader title="Events" subtitle="Workshops, hackathons, and study sessions." kicker="Learn & Build" />
      
      <div className="grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3 space-y-8">
          <Tabs defaultValue="upcoming">
            <div className="sticky top-[56px] z-30 bg-background/95 backdrop-blur py-4 -mx-4 px-4 md:mx-0 md:px-0">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="upcoming" className="mt-8">
              {upcomingEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {upcomingEvents.map(event => <EventCard key={event.title} {...event} />)}
                </div>
              ) : (
                <EmptyState icon={Calendar} title="No upcoming events" description="Check back soon for new workshops and sessions." />
              )}
            </TabsContent>
            
            <TabsContent value="past" className="mt-8">
              {pastEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {pastEvents.map(event => <EventCard key={event.title} {...event} isPast />)}
                </div>
              ) : (
                <EmptyState icon={Calendar} title="No past events" description="We haven't hosted any events yet." />
              )}
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold mb-4">Calendar</h3>
            <CalendarComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
