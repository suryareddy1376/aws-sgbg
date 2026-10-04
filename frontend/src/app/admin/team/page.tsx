import { SectionHeader } from "@/components/domain/section-header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/data-table";
import { requireAuth } from "@/lib/auth/session";

export default async function AdminTeamPage() {
  await requireAuth().catch(() => null);

  return (
    <div className="space-y-8 max-w-7xl">
      <SectionHeader title="Team" subtitle="Manage team across the platform." />
      
      <div className="border rounded-xl bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>\n              <TableHead>Position</TableHead>\n              <TableHead>Department</TableHead>\n              <TableHead>Year</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                No data available.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
