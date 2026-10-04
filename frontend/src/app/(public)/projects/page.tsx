import { SectionHeader } from "@/components/domain/section-header";
import { EmptyState } from "@/components/ui/empty-state";
import { Rocket } from "lucide-react";

export default async function ProjectsPage() {
  return (
    <div className="container py-24 space-y-12">
      <SectionHeader title="Projects" subtitle="Real-world cloud solutions built by our community." kicker="Showcase" />
      
      <div className="space-y-8">
        <EmptyState 
          icon={Rocket} 
          title="No projects yet" 
          description="Be the first to submit a project! Submissions require an active KARE student account."
          actionLabel="Submit a Project" 
        />
      </div>
    </div>
  );
}
