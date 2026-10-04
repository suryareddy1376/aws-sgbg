import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { db, TABLE_NAME, safeDbCall } from "../client";
import { EventCardProps } from "@/components/domain/event-card";

const MOCK_EVENTS: EventCardProps[] = [
  {
    title: "AWS Serverless Deep Dive",
    date: "2026-10-15T10:00:00Z",
    location: "KARE Main Auditorium",
    category: "Workshop",
    spots: 45
  },
  {
    title: "Cloud Practitioner Study Jam",
    date: "2026-10-22T14:00:00Z",
    location: "Block 3, Lab 4",
    category: "Study",
    spots: 20
  },
  {
    title: "Hackathon: AI on AWS",
    date: "2026-11-05T09:00:00Z",
    location: "Innovation Hub",
    category: "Hackathon",
    spots: 100
  }
];

export async function getUpcomingEvents(): Promise<EventCardProps[]> {
  return safeDbCall(async () => {
    const today = new Date().toISOString().split('T')[0];
    const command = new QueryCommand({
      TableName: TABLE_NAME,
      IndexName: "GSI1",
      KeyConditionExpression: "GSI1PK = :pk AND GSI1SK >= :sk",
      ExpressionAttributeValues: {
        ":pk": "EVENTS",
        ":sk": `published#${today}`
      }
    });
    const response = await db.send(command);
    return (response.Items && response.Items.length > 0 ? response.Items : MOCK_EVENTS) as EventCardProps[];
  }, MOCK_EVENTS);
}

export async function getPastEvents(): Promise<EventCardProps[]> {
  return safeDbCall(async () => {
    const today = new Date().toISOString().split('T')[0];
    const command = new QueryCommand({
      TableName: TABLE_NAME,
      IndexName: "GSI1",
      KeyConditionExpression: "GSI1PK = :pk AND GSI1SK < :sk",
      ExpressionAttributeValues: {
        ":pk": "EVENTS",
        ":sk": `published#${today}`
      }
    });
    const response = await db.send(command);
    return (response.Items || []) as EventCardProps[];
  }, []);
}