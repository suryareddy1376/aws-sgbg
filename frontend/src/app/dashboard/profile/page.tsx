import { SectionHeader } from "@/components/domain/section-header";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { requireAuth } from "@/lib/auth/session";

export default async function ProfilePage() {
  const session = await requireAuth().catch(() => null);
  if (!session) return null;

  return (
    <div className="space-y-8 max-w-3xl">
      <SectionHeader title="My Profile" subtitle="Manage your personal information and visibility settings." />
      
      <div className="bg-card border rounded-xl p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Account Status</h3>
            <p className="text-sm text-muted-foreground">Current membership tier</p>
          </div>
          <Badge variant="success" className="capitalize px-3 py-1 text-sm">{session.role.replace('_', ' ')}</Badge>
        </div>

        <div className="border-t pt-6 space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input disabled value={session.email} />
              <p className="text-xs text-muted-foreground">Linked to your college domain.</p>
            </div>
            <div className="space-y-2">
              <Label>GitHub Username</Label>
              <Input placeholder="Enter username" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Bio</Label>
            <textarea className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Tell the community about your cloud journey..."></textarea>
          </div>
          
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
