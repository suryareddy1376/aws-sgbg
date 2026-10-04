import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input, Label, Select, Textarea } from '@/components/ui/form';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar } from '@/components/ui/calendar';
import { EmptyState } from '@/components/ui/empty-state';
import { StepFlow } from '@/components/ui/step-flow';
import { LineChart, BarChart, DonutChart } from '@/components/ui/charts';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/data-table';
import { SectionHeader } from '@/components/domain/section-header';
import { Hero } from '@/components/domain/hero';
import { EventCard } from '@/components/domain/event-card';
import { StatCard } from '@/components/domain/stat-card';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Rocket, Users, Activity } from 'lucide-react';

export default function StyleguidePage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      <div className="container py-10 space-y-24 mt-10">
        <SectionHeader 
          title="Design System & Styleguide" 
          subtitle="A comprehensive overview of all bespoke components built for the KARE AWS SBG platform." 
          kicker="Phase 1" 
        />

        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b pb-2">1. Primitives</h3>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-muted-foreground">Buttons</h4>
            <div className="flex flex-wrap gap-4 items-center p-6 border rounded-xl bg-card">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-muted-foreground">Badges</h4>
            <div className="flex flex-wrap gap-4 items-center p-6 border rounded-xl bg-card">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b pb-2">2. Forms & Inputs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader><CardTitle>Standard Form</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="student@kare.edu.in" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select id="role">
                    <option>Student</option>
                    <option>Core Member</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about yourself..." />
                </div>
                <Button className="w-full">Submit</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b pb-2">3. Complex UI</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Card>
                <CardHeader><CardTitle>Tabs & StepFlow</CardTitle></CardHeader>
                <CardContent className="space-y-8">
                  <Tabs defaultValue="learn">
                    <TabsList>
                      <TabsTrigger value="learn">Learn</TabsTrigger>
                      <TabsTrigger value="build">Build</TabsTrigger>
                      <TabsTrigger value="lead">Lead</TabsTrigger>
                    </TabsList>
                    <TabsContent value="learn" className="p-4 bg-muted/50 rounded-md mt-2">Attend workshops.</TabsContent>
                    <TabsContent value="build" className="p-4 bg-muted/50 rounded-md mt-2">Build projects.</TabsContent>
                    <TabsContent value="lead" className="p-4 bg-muted/50 rounded-md mt-2">Lead the community.</TabsContent>
                  </Tabs>

                  <StepFlow steps={['Register', 'Verify Email', 'Complete Profile']} currentStep={1} />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader><CardTitle>Empty State & Skeleton</CardTitle></CardHeader>
                <CardContent className="space-y-8">
                  <EmptyState icon={Rocket} title="No projects yet" description="Start building to showcase your skills." actionLabel="Create Project" />
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader><CardTitle>Data Visualization</CardTitle></CardHeader>
                <CardContent>
                  <Tabs defaultValue="line">
                    <TabsList className="mb-4">
                      <TabsTrigger value="line">Line</TabsTrigger>
                      <TabsTrigger value="bar">Bar</TabsTrigger>
                      <TabsTrigger value="donut">Donut</TabsTrigger>
                    </TabsList>
                    <TabsContent value="line" className="flex justify-center py-4"><LineChart data={[10, 25, 40, 30, 60, 50, 80]} /></TabsContent>
                    <TabsContent value="bar" className="flex justify-center py-4"><BarChart data={[10, 25, 40, 30, 60, 50, 80]} /></TabsContent>
                    <TabsContent value="donut" className="flex justify-center py-4"><DonutChart data={[{value: 30, color: '#7B2ABF'}, {value: 50, color: '#FF9900'}, {value: 20, color: '#C190DA'}]} /></TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <Calendar />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b pb-2">4. Domain Components</h3>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-muted-foreground">Hero Section</h4>
            <div className="border rounded-xl overflow-hidden bg-background">
              <Hero />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-muted-foreground">Cards</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <EventCard title="AWS Cloud Practitioner Bootcamp" date="Oct 20, 2026" location="Auditorium" category="Certification" spots={45} />
              <EventCard title="Serverless Hackathon" date="Sept 15, 2026" location="Lab 3" category="Hackathon" spots={0} isPast />
              <div className="space-y-6">
                <StatCard title="Active Members" value="1,245" description="+12% from last month" icon={Users} />
                <StatCard title="Projects Deployed" value="84" description="across 12 categories" icon={Activity} />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold border-b pb-2">5. Data Table</h3>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Intro to EC2</TableCell>
                  <TableCell>Workshop</TableCell>
                  <TableCell>Oct 10, 2026</TableCell>
                  <TableCell className="text-right"><Badge variant="success">Published</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">GenAI Build Sprint</TableCell>
                  <TableCell>Build Sprint</TableCell>
                  <TableCell>Nov 05, 2026</TableCell>
                  <TableCell className="text-right"><Badge variant="warning">Draft</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </section>

      </div>
      <Footer />
    </div>
  )
}
