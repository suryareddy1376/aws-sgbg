export const EVENT_CATEGORIES = [
  'Workshops',
  'Hands-on Labs', 
  'Tech Talks',
  'Build Sprints',
  'Hackathons',
  'Certification Sessions',
  'Meetups',
  'Career Sessions',
] as const;

export const PROJECT_CATEGORIES = [
  'AI',
  'GenAI',
  'Cloud',
  'Serverless',
  'DevOps',
  'Web',
  'Data',
  'Security',
] as const;

export const OPPORTUNITY_TYPES = [
  'Hackathons',
  'Internships', 
  'Competitions',
  'Certifications',
  'Scholarships',
  'Projects',
] as const;

export const VISIBILITY_OPTIONS = ['public', 'members', 'private'] as const;

export const SUBMISSION_STATUSES = ['pending', 'approved', 'changes_requested', 'rejected'] as const;

export const EVENT_STATUSES = ['draft', 'preview', 'published', 'registration_open', 'registration_closed', 'live', 'past', 'archived'] as const;

export const MEMBER_STATUSES = ['unverified', 'student', 'member'] as const;

export const USER_ROLES = ['visitor', 'student', 'member', 'core_member', 'volunteer', 'faculty'] as const;

export const ADMIN_ROLES = ['super_admin', 'site_admin', 'events_admin', 'content_admin', 'community_admin', 'certificate_admin'] as const;

export const RESOURCE_VISIBILITY = ['public', 'members', 'admin'] as const;

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'] as const;

export const ALLOWED_DOC_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'] as const;

export const PAGINATION_DEFAULT = 20;
export const PAGINATION_MAX = 100;
