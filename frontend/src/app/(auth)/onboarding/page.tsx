import { SectionHeader } from "@/components/domain/section-header";
import { Button } from "@/components/ui/button";
import { Input, Label, Select } from "@/components/ui/form";
import { StepFlow } from "@/components/ui/step-flow";

export default function OnboardingPage() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-background py-12 px-4">
      <div className="max-w-xl w-full space-y-12">
        <SectionHeader title="Complete Profile" subtitle="Just a few more details before you can join events and submit projects." align="center" />
        
        <StepFlow steps={['Register', 'Verify Email', 'Complete Profile']} currentStep={2} />

        <div className="bg-card border p-8 rounded-xl shadow-sm space-y-6">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select id="department" required>
                  <option value="">Select Department</option>
                  <option value="CSE">Computer Science & Engineering</option>
                  <option value="IT">Information Technology</option>
                  <option value="ECE">Electronics & Communication</option>
                  <option value="OTHER">Other</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year of Study</Label>
                <Select id="year" required>
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="github">GitHub Profile (Optional)</Label>
              <Input id="github" placeholder="https://github.com/username" />
            </div>

            <Button type="submit" className="w-full">Complete Setup</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

