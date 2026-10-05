import { LayoutDashboard, User, Calendar, Rocket, Award, Bookmark } from "lucide-react";

export const dashboardNavItems = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { label: 'My Profile', href: '/dashboard/profile', icon: User },
  { label: 'My Events', href: '/dashboard/events', icon: Calendar },
  { label: 'My Projects', href: '/dashboard/projects', icon: Rocket },
  { label: 'Certificates', href: '/dashboard/certificates', icon: Award },
  { label: 'Saved Resources', href: '/dashboard/resources', icon: Bookmark },
];