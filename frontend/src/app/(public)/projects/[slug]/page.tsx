import { SectionHeader } from "@/components/domain/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Users } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// In a real app, fetch from DB
async function getProject(id: string) {
  // Stub
  if (id === '1') {
    return {
      id: '1',
      title: 'Serverless Image Processor',
      category: 'Serverless',
      description: 'A fully automated pipeline that resizes and compresses images uploaded to an S3 bucket using AWS Lambda and EventBridge.',
      awsServices: ['S3', 'Lambda', 'EventBridge', 'CloudWatch'],
      team: ['Alex M.', 'Sarah K.'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    };
  }
  return null;
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="container py-24 space-y-12 max-w-4xl">
      <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">← Back to Projects</Link>
      
      <div className="space-y-6">
        <div className="flex gap-2">
          <Badge>{project.category}</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <a href={project.github} target="_blank" rel="noreferrer">
            <Button variant="outline"><Code className="mr-2 h-4 w-4" /> View Source</Button>
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              <Button><ExternalLink className="mr-2 h-4 w-4" /> Live Demo</Button>
            </a>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12 border-t pt-12">
        <div className="md:col-span-2 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">About the Project</h2>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Architecture</h2>
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border border-dashed">
              <span className="text-muted-foreground">Architecture Diagram</span>
            </div>
          </section>
        </div>

        <div className="space-y-8 border-l pl-8">
          <section className="space-y-4">
            <h3 className="font-semibold flex items-center"><Users className="mr-2 h-4 w-4" /> Team</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {project.team.map(member => <li key={member}>{member}</li>)}
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="font-semibold">AWS Services</h3>
            <div className="flex flex-wrap gap-2">
              {project.awsServices.map(service => (
                <Badge key={service} variant="secondary" className="font-mono text-xs">{service}</Badge>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
