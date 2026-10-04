import { SectionHeader } from "@/components/domain/section-header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth/session";
import { can } from "@/lib/rbac/can";
import { redirect } from "next/navigation";
import { CertificateRecord } from "@/lib/db/operations/certificates";

export default async function AdminCertificatesPage() {
  const session = await requireAuth().catch(() => null);
  if (!can(session, 'manage', 'certificates')) {
    redirect('/admin');
  }

  const certs: CertificateRecord[] = [
    { id: 'AWS-SBG-001', userId: 'usr_123', recipientName: 'Student User', eventName: 'Serverless Fundamentals', issueDate: '2023-09-15', type: 'attendance', status: 'valid' },
    { id: 'REVOKED-002', userId: 'usr_456', recipientName: 'Another User', eventName: 'Cloud Practitioner', issueDate: '2023-08-10', type: 'completion', status: 'revoked' },
  ];

  return (
    <div className="space-y-8 max-w-7xl">
      <div className="flex justify-between items-end">
        <SectionHeader title="Certificates" subtitle="Issue, manage, and revoke credentials." />
        <Button>Issue Certificates</Button>
      </div>
      
      <div className="border rounded-xl bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {certs.map(cert => (
              <TableRow key={cert.id}>
                <TableCell className="font-mono text-xs">{cert.id}</TableCell>
                <TableCell className="font-medium">{cert.recipientName}</TableCell>
                <TableCell>{cert.eventName}</TableCell>
                <TableCell>
                  <Badge variant={cert.status === 'valid' ? 'success' : 'warning'}>{cert.status}</Badge>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm">View</Button>
                  {cert.status === 'valid' && <Button variant="outline" size="sm" className="text-destructive border-destructive">Revoke</Button>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
