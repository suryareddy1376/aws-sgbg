import { SectionHeader } from "@/components/domain/section-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="container max-w-2xl py-24 space-y-12 text-center">
      <SectionHeader title="Join the Community" subtitle="Ready to start your cloud journey?" kicker="Membership" align="center" />
      
      <div className="bg-card border rounded-xl p-8 space-y-6 text-left">
        <h3 className="text-xl font-semibold">Membership Benefits</h3>
        <ul className="space-y-4 text-muted-foreground list-disc pl-5">
          <li>Access to exclusive AWS hands-on labs and workshops.</li>
          <li>Earn verifiable digital certificates for event attendance.</li>
          <li>Submit projects and build your public cloud portfolio.</li>
          <li>Network with industry professionals and peers.</li>
        </ul>
        <div className="pt-6 border-t flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">Membership is strictly available to students of {siteConfig.institution.shortName}. A valid college email address is required.</p>
          <Link href="/register"><Button className="w-full" size="lg">Create Account</Button></Link>
        </div>
      </div>
    </div>
  );
}
