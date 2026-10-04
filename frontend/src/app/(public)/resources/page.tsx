import { SectionHeader } from "@/components/domain/section-header";
import { EmptyState } from "@/components/ui/empty-state";
import { BookOpen } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="container py-24 space-y-12">
      <SectionHeader title="Resources" subtitle="Study materials, lab guides, and cheat sheets." kicker="Learning Library" />
      <EmptyState icon={BookOpen} title="Resource library empty" description="Admin users are curating the best AWS learning paths for you." />
    </div>
  );
}
