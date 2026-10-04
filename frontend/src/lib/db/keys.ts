export const Keys = {
  User: (userId: string) => ({ PK: `USER#${userId}`, SK: 'PROFILE' }),
  Event: (eventId: string) => ({ PK: `EVENT#${eventId}`, SK: 'META' }),
  TeamMember: (sortOrder: number, memberId: string) => ({ PK: 'TEAM', SK: `MEMBER#${String(sortOrder).padStart(3, '0')}#${memberId}` }),
  Project: (projectId: string) => ({ PK: `PROJECT#${projectId}`, SK: 'META' }),
  Resource: (resourceId: string) => ({ PK: `RESOURCE#${resourceId}`, SK: 'META' })
};