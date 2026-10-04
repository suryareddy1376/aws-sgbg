"use client"
import * as React from "react"
import { SectionHeader } from "@/components/domain/section-header";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/form";
import Link from "next/link";
import { Cloud, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login delay
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-50 -z-10" />
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 border border-primary/20 shadow-sm">
            <Cloud className="h-8 w-8" />
          </div>
          <SectionHeader title="Welcome Back" subtitle="Sign in to the KARE AWS SBG Portal" align="center" as="h1" />
        </div>
        
        <div className="bg-card/80 backdrop-blur-md border border-border p-8 rounded-2xl shadow-xl space-y-6">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="student@kare.edu.in" required disabled={isLoading} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-primary hover:underline focus-visible:ring-2 focus-visible:ring-accent rounded-sm">Forgot password?</Link>
              </div>
              <Input id="password" type="password" required disabled={isLoading} />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 border-0" disabled={isLoading}>
              {isLoading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-2 bg-card text-muted-foreground">Or continue with</span></div>
          </div>

          <Button variant="outline" className="w-full bg-background" disabled={isLoading}>
            <Cloud className="w-5 h-5 mr-2 text-muted-foreground" />
            Sign in with Google
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account? <Link href="/signup" className="font-medium text-primary hover:underline focus-visible:ring-2 focus-visible:ring-accent rounded-sm">Register now</Link>
        </p>
      </div>
    </div>
  );
}
