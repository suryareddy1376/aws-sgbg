import { SectionHeader } from "@/components/domain/section-header";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { requireAuth } from "@/lib/auth/session";
import { can } from "@/lib/rbac/can";
import { redirect } from "next/navigation";

export default async function AdminProjectsPage() {
  const session = await requireAuth().catch(() => null);
  if (!can(session, 'manage', 'projects') && !can(session, 'review', 'projects')) {
    redirect('/admin');
  }

  // Mock data for the approval engine
  const pendingProjects = [
    { id: '1', title: 'Serverless Notes App', author: 'student1@kare.edu.in', date: '2023-10-24', status: 'pending' },
    { id: '2', title: 'AWS Bedrock RAG Bot', author: 'student2@kare.edu.in', date: '2023-10-25', status: 'pending' },
  ];

  return (
    <div className="space-y-8 max-w-7xl">
      <SectionHeader title="Project Submissions" subtitle="Review and approve member projects for the public showcase." />

      <div className="border rounded-xl bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Title</TableHead>
              <TableHead>Submitted By</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pendingProjects.map((proj) => (
              <TableRow key={proj.id}>
                <TableCell className="font-medium">{proj.title}</TableCell>
                <TableCell>{proj.author}</TableCell>
                <TableCell>{proj.date}</TableCell>
                <TableCell>
                  <Badge variant="warning" className="capitalize">{proj.status}</Badge>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm">Review</Button>
                  <Button size="sm">Approve</Button>
                </TableCell>
              </TableRow>
            ))}
            {pendingProjects.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  No pending submissions.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
