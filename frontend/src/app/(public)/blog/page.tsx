import { SectionHeader } from "@/components/domain/section-header";
import { EmptyState } from "@/components/ui/empty-state";
import { PenTool } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="container py-24 space-y-12">
      <SectionHeader title="Builder Blog" subtitle="Stories, tutorials, and insights from our members." kicker="Read" />
      <EmptyState icon={PenTool} title="No posts yet" description="Members can submit technical blog posts from their dashboard. Coming soon!" />
    </div>
  );
}
