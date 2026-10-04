import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { db, TABLE_NAME, safeDbCall } from "../client";

const MOCK_PROJECTS = [
  {
    id: "proj_1",
    title: "KARE Cloud File Share",
    services: ["S3", "Cognito", "Lambda"],
    slug: "kare-cloud-file-share"
  },
  {
    id: "proj_2",
    title: "Serverless Attendance Tracker",
    services: ["DynamoDB", "API Gateway", "Lambda"],
    slug: "serverless-attendance"
  },
  {
    id: "proj_3",
    title: "AI Resume Analyzer",
    services: ["Bedrock", "Textract", "S3"],
    slug: "ai-resume-analyzer"
  }
];

export async function getFeaturedProjects() {
  return safeDbCall(async () => {
    const command = new QueryCommand({
      TableName: TABLE_NAME,
      IndexName: "GSI1",
      KeyConditionExpression: "GSI1PK = :pk AND begins_with(GSI1SK, :sk)",
      ExpressionAttributeValues: {
        ":pk": "PROJECTS",
        ":sk": "published#"
      },
      Limit: 3
    });
    const response = await db.send(command);
    return response.Items && response.Items.length > 0 ? response.Items : MOCK_PROJECTS;
  }, MOCK_PROJECTS);
}