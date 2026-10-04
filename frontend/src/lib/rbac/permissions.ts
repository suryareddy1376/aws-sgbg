import { AdminRole, Resource, Action } from './roles';

// The full permission matrix mapped exactly as defined in the system spec
export const ADMIN_PERMISSIONS: Record<AdminRole, Record<Resource, Action[]>> = {
  super_admin: {
    settings: ['manage'], events: ['manage'], projects: ['manage'], 
    resources: ['manage'], blog: ['manage'], gallery: ['manage'], 
    opportunities: ['manage'], members: ['manage'], team: ['manage'], 
    certificates: ['manage'], analytics: ['read'], audit_log: ['read']
  },
  site_admin: {
    settings: ['manage'], events: [], projects: [], 
    resources: ['manage'], blog: ['manage'], gallery: ['manage'], 
    opportunities: ['manage'], members: [], team: [], 
    certificates: [], analytics: ['read'], audit_log: []
  },
  events_admin: {
    settings: [], events: ['manage', 'create', 'update', 'delete', 'read'], projects: [], 
    resources: [], blog: [], gallery: [], 
    opportunities: [], members: [], team: [], 
    certificates: [], analytics: ['read'], audit_log: []
  },
  content_admin: {
    settings: [], events: [], projects: ['review', 'read'], 
    resources: ['manage'], blog: ['manage'], gallery: ['manage'], 
    opportunities: ['manage'], members: [], team: [], 
    certificates: [], analytics: ['read'], audit_log: []
  },
  community_admin: {
    settings: [], events: [], projects: [], 
    resources: [], blog: [], gallery: [], 
    opportunities: [], members: ['manage', 'verify', 'read'], team: ['manage'], 
    certificates: [], analytics: ['read'], audit_log: []
  },
  certificate_admin: {
    settings: [], events: [], projects: [], 
    resources: [], blog: [], gallery: [], 
    opportunities: [], members: [], team: [], 
    certificates: ['manage', 'create', 'update', 'delete'], analytics: ['read'], audit_log: []
  }
};
