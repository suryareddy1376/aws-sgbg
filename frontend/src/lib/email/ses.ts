// Stub for Amazon SES Email Notifications
export async function sendEmailNotification(to: string, subject: string, body: string) {
  // In production, this uses @aws-sdk/client-ses
  console.log(`[SES MOCK] Sending email to: ${to}`);
  console.log(`[SES MOCK] Subject: ${subject}`);
  console.log(`[SES MOCK] Body: ${body}`);
  return true;
}

export async function notifyProjectStatus(email: string, projectTitle: string, status: 'approved' | 'rejected', reason?: string) {
  const subject = `Your Project Submission: ${projectTitle} has been ${status}`;
  const body = `Hello,
  
Your project "${projectTitle}" has been ${status}.
${reason ? `\nReason: ${reason}\n` : ''}
  
Thanks,
AWS SBG KARE Team`;

  return sendEmailNotification(email, subject, body);
}
