import { SectionHeader } from "@/components/domain/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { verifyCertificate } from "@/lib/db/operations/certificates";
import { CheckCircle, XCircle, AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function VerifyCertificatePage({ params }: { params: { id: string } }) {
  const certificate = await verifyCertificate(params.id);

  if (!certificate) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center bg-background py-12 px-4">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="h-20 w-20 bg-destructive/10 rounded-full flex items-center justify-center text-destructive mx-auto">
            <XCircle className="h-10 w-10" />
          </div>
          <h1 className="text-3xl font-bold">Invalid Certificate</h1>
          <p className="text-muted-foreground">
            The certificate ID <strong>{params.id}</strong> could not be found in our cryptographic registry. This certificate may be forged or incorrectly typed.
          </p>
          <Link href="/"><Button>Return Home</Button></Link>
        </div>
      </div>
    );
  }

  const isValid = certificate.status === 'valid';

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-muted/10 py-12 px-4">
      <div className="max-w-2xl w-full space-y-8">
        
        <div className="text-center space-y-4">
          <div className={`h-24 w-24 rounded-full flex items-center justify-center mx-auto ${isValid ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
            {isValid ? <ShieldCheck className="h-12 w-12" /> : <AlertTriangle className="h-12 w-12" />}
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            {isValid ? 'Certificate Verified' : 'Certificate Revoked'}
          </h1>
          <p className="text-muted-foreground">
            {isValid 
              ? "This document is a recognized, authentic credential issued by the KARE AWS Student Builder Group."
              : "This credential has been explicitly revoked by the issuing administrators and is no longer valid."}
          </p>
        </div>

        <div className="bg-card border shadow-lg rounded-2xl p-8 md:p-12 space-y-8">
          <div className="flex justify-between items-start border-b pb-6">
            <div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Credential ID</p>
              <p className="font-mono text-lg">{certificate.id}</p>
            </div>
            <Badge variant={isValid ? 'success' : 'warning'} className="uppercase text-xs tracking-wider px-3 py-1">
              {certificate.status}
            </Badge>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Issued To</p>
              <p className="text-2xl font-bold">{certificate.recipientName}</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-1">For Participation In</p>
              <p className="text-xl">{certificate.eventName}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Issue Date</p>
                <p className="font-medium">{certificate.issueDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Type</p>
                <p className="font-medium capitalize">{certificate.type}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/"><Button variant="outline">Back to AWS SBG KARE</Button></Link>
        </div>
      </div>
    </div>
  );
}
