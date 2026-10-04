import { SectionHeader } from "@/components/domain/section-header";
import { EmptyState } from "@/components/ui/empty-state";
import { Briefcase } from "lucide-react";
import { requireAuth } from "@/lib/auth/session";

export default async function OpportunitiesPage() {
  await requireAuth().catch(() => null);

  return (
    <div className="space-y-8 max-w-5xl">
      <SectionHeader title="Opportunities" subtitle="Exclusive internships, hackathons, and roles." />
      <EmptyState icon={Briefcase} title="No current opportunities" description="Check back later for new opportunities from our partners and the core team." />
    </div>
  );
}
