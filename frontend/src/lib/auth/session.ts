import { cookies } from "next/headers";
import { UserContext } from "../rbac/roles";

export async function getSession(): Promise<UserContext | null> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('session_token');
  
  // Dev bypass for previewing the admin portal
  if (process.env.NODE_ENV === 'development') {
    return {
      id: 'usr_999',
      email: 'admin@kare.edu.in',
      role: 'core_member',
      adminRoles: ['super_admin']
    };
  }

  // In a real app with Cognito, this verifies the JWT token.
  // For now, if the token exists, we mock a user.
  if (sessionToken?.value === 'mock-token') {
    return {
      id: 'usr_123',
      email: 'student@kare.edu.in',
      role: 'member',
      adminRoles: []
    };
  }

  if (sessionToken?.value === 'admin-token') {
    return {
      id: 'usr_999',
      email: 'admin@kare.edu.in',
      role: 'core_member',
      adminRoles: ['super_admin']
    };
  }

  return null;
}

export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    throw new Error('Unauthorized'); // Next.js middleware typically handles redirects
  }
  return session;
}
