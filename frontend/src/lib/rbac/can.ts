import { UserContext, Action, Resource, ROLE_HIERARCHY } from './roles';
import { ADMIN_PERMISSIONS } from './permissions';

/**
 * Single policy function used by every route and UI component to verify access.
 * Returns true if the user has permission to perform the action on the resource.
 */
export function can(user: UserContext | null, action: Action, resource: Resource): boolean {
  if (!user) return false;

  // Super admins can do everything
  if (user.adminRoles?.includes('super_admin')) return true;

  // Check specific admin role capabilities
  if (user.adminRoles && user.adminRoles.length > 0) {
    for (const role of user.adminRoles) {
      const allowedActions = ADMIN_PERMISSIONS[role]?.[resource] || [];
      if (allowedActions.includes('manage') || allowedActions.includes(action)) {
        return true;
      }
    }
  }

  // Base user logic (e.g. read access for standard members depending on resource)
  // Most mutating actions require admin roles, but members can read public things.
  // This can be expanded based on specific object-level permissions (e.g. edit own profile).
  if (action === 'read') {
    return true; // All authenticated users can typically read non-admin dashboard resources
  }

  return false;
}
