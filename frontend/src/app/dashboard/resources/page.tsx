import { SectionHeader } from "@/components/domain/section-header";
import { EmptyState } from "@/components/ui/empty-state";
import { Bookmark } from "lucide-react";
import { requireAuth } from "@/lib/auth/session";

export default async function SavedResourcesPage() {
  await requireAuth().catch(() => null);

  return (
    <div className="space-y-8 max-w-5xl">
      <SectionHeader title="Saved Resources" subtitle="Your bookmarked study materials." />
      <EmptyState icon={Bookmark} title="No saved resources" description="Browse the resources library and bookmark items to save them here." actionLabel="Browse Resources" />
    </div>
  );
}
