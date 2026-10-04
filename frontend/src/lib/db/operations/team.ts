import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { db, TABLE_NAME, safeDbCall } from "../client";
import { TeamCardProps } from "@/components/domain/team-card";

export type TeamMember = TeamCardProps & { email: string; group: string };

export async function getTeamMembers(year: string): Promise<TeamMember[]> {
  return safeDbCall(async () => {
    const command = new QueryCommand({
      TableName: TABLE_NAME,
      IndexName: "GSI1",
      KeyConditionExpression: "GSI1PK = :pk",
      ExpressionAttributeValues: {
        ":pk": `TEAM#${year}`
      }
    });
    const response = await db.send(command);
    return (response.Items || []) as TeamMember[];
  }, []);
}