export type UserRole = 'visitor' | 'student' | 'member' | 'core_member' | 'volunteer' | 'faculty';
export type AdminRole = 'super_admin' | 'site_admin' | 'events_admin' | 'content_admin' | 'community_admin' | 'certificate_admin';

export interface UserContext {
  id: string;
  email: string;
  role: UserRole;
  adminRoles: AdminRole[];
}

export type Action = 'create' | 'read' | 'update' | 'delete' | 'manage' | 'verify' | 'review';
export type Resource = 'events' | 'projects' | 'resources' | 'blog' | 'gallery' | 'opportunities' | 'members' | 'team' | 'certificates' | 'settings' | 'analytics' | 'audit_log';

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  visitor: 0,
  student: 1,
  member: 2,
  volunteer: 3,
  core_member: 4,
  faculty: 5 // Faculty has high standard permissions but no implicit admin rights
};
