import { SectionHeader } from "@/components/domain/section-header";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/form";
import Link from "next/link";
import { Users } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
            <Users className="h-8 w-8" />
          </div>
          <SectionHeader title="Create Account" subtitle="Join the AWS SBG KARE community." align="center" />
        </div>
        
        <div className="bg-card/80 backdrop-blur-md border border-border p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
          <Button variant="outline" className="w-full h-14 text-base font-medium bg-background hover:bg-surface border-border shadow-sm">
            <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24"><path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-2 bg-card text-muted-foreground uppercase tracking-wider font-mono text-xs">Or register with email</span></div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" autoComplete="given-name" required className="h-12 text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" autoComplete="family-name" required className="h-12 text-base" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">College Email Address</Label>
              <Input id="email" type="email" placeholder="student@kare.edu.in" autoComplete="email" inputMode="email" required className="h-12 text-base" />
              <p className="text-xs text-muted-foreground">You must use a valid KARE domain email to access member features.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" autoComplete="new-password" required className="h-12 text-base" />
            </div>
            <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary-hover border-0 text-base shadow-[0_4px_0_0_#13101A] active:shadow-none active:translate-y-1 transition-all">Create Account</Button>
          </form>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account? <Link href="/login" className="font-medium text-primary hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

