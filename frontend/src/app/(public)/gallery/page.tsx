import { SectionHeader } from "@/components/domain/section-header";
import { EmptyState } from "@/components/ui/empty-state";
import { Image as ImageIcon } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="container py-24 space-y-12">
      <SectionHeader title="Event Gallery" subtitle="Memories from our workshops and hackathons." kicker="Look Back" />
      <EmptyState icon={ImageIcon} title="Gallery empty" description="Photos will be uploaded after our first event." />
    </div>
  );
}
