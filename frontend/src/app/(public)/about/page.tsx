import { SectionHeader } from "@/components/domain/section-header";
import { StepFlow } from "@/components/ui/step-flow";

export default function AboutPage() {
  return (
    <div className="container py-24 space-y-24">
      <SectionHeader title="About Us" subtitle="The AWS Student Builder Group at KARE is dedicated to empowering students with real-world cloud computing skills." kicker="Our Mission" align="center" />
      
      <section className="max-w-3xl mx-auto space-y-8 text-lg text-muted-foreground">
        <p>
          We bridge the gap between academic learning and industry requirements by providing hands-on experience with Amazon Web Services (AWS).
        </p>
        <p>
          Our vision is to create a thriving ecosystem of cloud-native developers on campus, preparing them for careers in tech through collaborative projects and peer-to-peer learning.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-12">
        <SectionHeader title="The Builder Journey" align="center" />
        <StepFlow steps={['Discover', 'Join', 'Learn', 'Build', 'Lead']} currentStep={3} />
      </section>
    </div>
  );
}
