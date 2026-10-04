import { SectionHeader } from "@/components/domain/section-header";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea, Select } from "@/components/ui/form";
import { requireAuth } from "@/lib/auth/session";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function SubmitProjectPage() {
  await requireAuth().catch(() => null);

  return (
    <div className="space-y-8 max-w-3xl">
      <Link href="/dashboard/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to My Projects
      </Link>
      
      <SectionHeader title="Submit a Project" subtitle="Share what you've built using AWS." />

      <form className="border rounded-xl bg-card p-8 space-y-8">
        <div className="space-y-4">
          <h3 className="font-semibold border-b pb-2">Project Overview</h3>
          <div className="space-y-2">
            <Label htmlFor="title">Project Title</Label>
            <Input id="title" placeholder="e.g. Serverless Image Processor" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Primary Category</Label>
            <Select id="category">
              <option>AI / Machine Learning</option>
              <option>Web / App Development</option>
              <option>Data & Analytics</option>
              <option>Security</option>
              <option>DevOps</option>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Problem & Solution Description</Label>
            <Textarea id="description" placeholder="Describe the problem you solved and how your application works..." required className="min-h-[120px]" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold border-b pb-2">Technical Details</h3>
          <div className="space-y-2">
            <Label htmlFor="awsServices">AWS Services Used</Label>
            <Input id="awsServices" placeholder="e.g. Lambda, S3, DynamoDB, API Gateway" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="architectureUrl">Architecture Diagram URL (Optional)</Label>
            <Input id="architectureUrl" placeholder="Link to an image or diagram of your architecture" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold border-b pb-2">Links & Team</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="github">GitHub Repository</Label>
              <Input id="github" type="url" placeholder="https://github.com/..." required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo">Live Demo / Video URL (Optional)</Label>
              <Input id="demo" type="url" placeholder="https://..." />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="team">Team Members</Label>
            <Input id="team" placeholder="Comma-separated emails of co-creators (they must be registered members)" />
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            By submitting, you agree that this project is your original work. Submissions are reviewed by the core team before appearing on the public showcase.
          </p>
          <div className="flex justify-end space-x-4">
            <Link href="/dashboard/projects"><Button variant="outline">Cancel</Button></Link>
            <Button type="submit">Submit for Review</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
