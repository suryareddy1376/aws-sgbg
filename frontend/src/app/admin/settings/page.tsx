import { SectionHeader } from "@/components/domain/section-header";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/form";
import { requireAuth } from "@/lib/auth/session";
import { can } from "@/lib/rbac/can";
import { redirect } from "next/navigation";

export default async function AdminSettingsPage() {
  const session = await requireAuth().catch(() => null);
  if (!can(session, 'manage', 'settings')) {
    redirect('/admin');
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <SectionHeader title="Settings" subtitle="Global platform configuration." />
      
      <form className="border rounded-xl bg-card p-8 space-y-8">
        <div className="space-y-4">
          <h3 className="font-semibold border-b pb-2">Institution Config</h3>
          <div className="space-y-2">
            <Label htmlFor="allowedDomains">Allowed College Domains</Label>
            <Input id="allowedDomains" defaultValue="@kare.edu.in" />
            <p className="text-xs text-muted-foreground">Comma-separated email domains permitted for member registration.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="academicYear">Current Academic Year</Label>
            <Input id="academicYear" defaultValue="2023-2024" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold border-b pb-2">Features</h3>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="registrations" defaultChecked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
            <Label htmlFor="registrations">Allow new event registrations</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="projects" defaultChecked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
            <Label htmlFor="projects">Allow project submissions</Label>
          </div>
        </div>

        <div className="pt-4 border-t flex justify-end">
          <Button type="submit">Save Configuration</Button>
        </div>
      </form>
    </div>
  );
}
