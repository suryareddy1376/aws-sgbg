import { SectionHeader } from "@/components/domain/section-header";
import { EmptyState } from "@/components/ui/empty-state";
import { Rocket } from "lucide-react";
import { requireAuth } from "@/lib/auth/session";

export default async function MyProjectsPage() {
  await requireAuth().catch(() => null);

  return (
    <div className="space-y-8 max-w-5xl">
      <SectionHeader title="My Projects" subtitle="Manage your portfolio and project submissions." />
      <EmptyState icon={Rocket} title="No projects submitted" description="Submit your first cloud project to showcase it to the community." actionLabel="Submit New Project" />
    </div>
  );
}
