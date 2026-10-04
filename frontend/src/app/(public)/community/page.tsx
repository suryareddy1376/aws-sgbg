import { SectionHeader } from "@/components/domain/section-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ExternalLink, MessageSquare } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="container py-24 space-y-12 max-w-4xl">
      <SectionHeader title="Community" subtitle="Connect with fellow builders across campus." kicker="Network" />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-6 bg-card space-y-4">
          <div className="h-12 w-12 rounded-full bg-[#5865F2]/10 flex items-center justify-center text-[#5865F2]"><MessageSquare className="h-6 w-6" /></div>
          <h3 className="font-bold text-xl">Discord Server</h3>
          <p className="text-muted-foreground text-sm">Join our official Discord to ask technical questions, find project teammates, and chat with the core team.</p>
          <Button variant="outline" className="w-full">Join Discord <ExternalLink className="h-4 w-4 ml-2" /></Button>
        </div>
        
        <div className="border rounded-xl p-6 bg-card space-y-4">
          <div className="h-12 w-12 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5]"><MessageSquare className="h-6 w-6" /></div>
          <h3 className="font-bold text-xl">LinkedIn Group</h3>
          <p className="text-muted-foreground text-sm">Connect professionally, share your AWS certifications, and see opportunities posted by KARE alumni.</p>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer"><Button variant="outline" className="w-full mt-4">Follow on LinkedIn <ExternalLink className="h-4 w-4 ml-2" /></Button></a>
        </div>
      </div>
    </div>
  );
}
