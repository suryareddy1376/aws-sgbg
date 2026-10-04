import { SectionHeader } from "@/components/domain/section-header";
import { EmptyState } from "@/components/ui/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Download, ExternalLink } from "lucide-react";
import { requireAuth } from "@/lib/auth/session";
import { getMemberCertificates } from "@/lib/db/operations/certificates";
import Link from "next/link";

export default async function CertificatesPage() {
  const session = await requireAuth().catch(() => null);
  if (!session) return null;

  const certificates = await getMemberCertificates(session.id);

  return (
    <div className="space-y-8 max-w-5xl">
      <SectionHeader title="Certificates" subtitle="Verifiable proofs of your learning." />
      
      {certificates.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map(cert => (
            <div key={cert.id} className="bg-card border rounded-xl overflow-hidden flex flex-col">
              <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-b flex-1">
                <div className="flex justify-between items-start mb-6">
                  <Award className="h-8 w-8 text-primary" />
                  <Badge variant={cert.status === 'valid' ? 'success' : 'warning'} className="uppercase">
                    {cert.status}
                  </Badge>
                </div>
                <h3 className="font-bold text-lg mb-2">{cert.eventName}</h3>
                <p className="text-sm text-muted-foreground">Issued: {cert.issueDate}</p>
                <p className="text-xs font-mono text-muted-foreground mt-4">ID: {cert.id}</p>
              </div>
              <div className="p-4 bg-muted/30 border-t flex justify-between items-center">
                <Button variant="outline" size="sm" disabled={cert.status === 'revoked'}>
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
                <Link href={`/verify/${cert.id}`} target="_blank">
                  <Button variant="ghost" size="sm">
                    Verify <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState icon={Award} title="No certificates yet" description="Attend our hands-on workshops and certification sessions to earn digital certificates." />
      )}
    </div>
  );
}
