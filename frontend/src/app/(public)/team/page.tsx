import { SectionHeader } from "@/components/domain/section-header";
import { getTeamMembers } from "@/lib/db/operations/team";
import { EmptyState } from "@/components/ui/empty-state";
import { TeamCard } from "@/components/domain/team-card";
import { Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the Core Team and Volunteers behind the AWS SBG at KARE.",
}

export default async function TeamPage() {
  const currentYear = new Date().getFullYear().toString();
  const team = await getTeamMembers(currentYear);

  const faculty = team.filter(m => m.group === 'Faculty Support');
  const leader = team.filter(m => m.group === 'Student Builder Group Leader');
  const core = team.filter(m => m.group === 'Core Team');
  const volunteers = team.filter(m => m.group === 'Volunteers');

  return (
    <div className="container py-16 md:py-24 space-y-24">
      <SectionHeader title="Our Team" subtitle="The leadership behind AWS SBG KARE." kicker="Core Members" as="h1" align="center" />
      
      {team.length > 0 ? (
        <div className="space-y-24">
          
          {faculty.length > 0 && (
            <section className="space-y-8">
              <SectionHeader title="Faculty Support" as="h2" />
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {faculty.map(member => <TeamCard key={member.email} {...member} />)}
              </div>
            </section>
          )}

          {leader.length > 0 && (
            <section className="space-y-8">
              <SectionHeader title="Student Builder Group Leader" subtitle="Official AWS Program Representative" as="h2" />
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {leader.map(member => <TeamCard key={member.email} {...member} />)}
              </div>
            </section>
          )}

          {core.length > 0 && (
            <section className="space-y-8">
              <SectionHeader title="Core Team" subtitle="KARE Club Executive Board" as="h2" />
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {core.map(member => <TeamCard key={member.email} {...member} />)}
              </div>
            </section>
          )}

          {volunteers.length > 0 && (
            <section className="space-y-8">
              <SectionHeader title="Volunteers" as="h2" />
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {volunteers.map(member => <TeamCard key={member.email} {...member} />)}
              </div>
            </section>
          )}

        </div>
      ) : (
        <EmptyState icon={Users} title="Team not announced" description="The core team for this academic year has not been published yet." />
      )}
    </div>
  );
}
