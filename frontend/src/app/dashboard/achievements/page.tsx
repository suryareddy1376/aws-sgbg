import { SectionHeader } from "@/components/domain/section-header";
import { EmptyState } from "@/components/ui/empty-state";
import { Trophy } from "lucide-react";
import { requireAuth } from "@/lib/auth/session";

export default async function AchievementsPage() {
  await requireAuth().catch(() => null);

  return (
    <div className="space-y-8 max-w-5xl">
      <SectionHeader title="Achievements" subtitle="Your milestones in the AWS SBG community." />
      <EmptyState icon={Trophy} title="No achievements yet" description="Complete learning paths, win hackathons, and contribute to unlock achievements." />
    </div>
  );
}
