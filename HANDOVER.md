# KARE AWS Student Builder Group - Platform Handover Guide

Welcome to the administrative handover guide for the official **KARE AWS SBG** platform. This document outlines the exact steps required to take this codebase from the repository to a live production environment.

## 1. Cloud Infrastructure Deployment (AWS CDK)

Before deploying the frontend, the backend AWS resources (DynamoDB, Cognito, SES) must be deployed via AWS CDK.

1. **Prerequisites:** Ensure you have the AWS CLI configured with administrator credentials for your target AWS account.
2. **Navigate to the infra directory:**
   \`\`\`bash
   cd infra
   npm install
   \`\`\`
3. **Bootstrap & Deploy:**
   \`\`\`bash
   npx cdk bootstrap
   npx cdk deploy --all --require-approval never
   \`\`\`
4. **Outputs:** The CDK deployment will output several critical environment variables (e.g., `CognitoUserPoolId`, `DynamoDBTableName`). **Save these.**

> **Backup Strategy Active:** Point-In-Time Recovery (PITR) has been explicitly enabled in the `DatabaseStack`. DynamoDB will automatically maintain continuous backups for the last 35 days, allowing recovery to any exact second in case of accidental data deletion.

## 2. Frontend Deployment (Vercel)

The Next.js App Router frontend is optimized for deployment on Vercel. 

1. **Create the Project:** Import your GitHub repository into Vercel.
2. **Environment Variables:** Map the CDK outputs to the following environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_AWS_REGION`
   - `NEXT_PUBLIC_COGNITO_CLIENT_ID`
   - `COGNITO_USER_POOL_ID`
   - `DYNAMODB_TABLE_NAME`
   - `ALLOWED_COLLEGE_DOMAINS` (Set this to `@kare.edu.in`)
   - `SESSION_SECRET` (Generate a random 32-character string for JWT signing)
3. **Deploy:** Hit "Deploy". Vercel will automatically build the site.

## 3. Domain Setup (Route 53)

To configure your custom domain (e.g., `awsclubkare.com`):

1. Log into your domain registrar and point the nameservers to AWS Route 53.
2. In the Vercel dashboard under "Domains", add your custom domain.
3. Vercel will provide `CNAME` and `A` records. Add these records to your AWS Route 53 Hosted Zone. SSL will be provisioned automatically.

## 4. Initializing the First `super_admin`

Because the platform enforces strict server-side RBAC, you must manually elevate the first core team member via the AWS Console to access the internal dashboard.

1. Have the user sign up normally on the live website.
2. Log into the AWS Console -> **Amazon Cognito** -> Select your User Pool.
3. Locate the user under the "Users" tab.
4. Add the user to the `super_admin` Cognito Group (this group was created by the CDK).
5. The user must log out and log back in. The `/admin` route will now be unlocked for them, allowing them to manage all other roles and content from the UI.

## 5. Security & Constraints Checklist Verification

- ✅ **No Fabricated Data:** The design system utilizes rigorous Empty States to gracefully handle 0-data scenarios until real events/projects are created.
- ✅ **Server-Side Authorization:** The `src/lib/rbac/can.ts` engine wraps all data mutations and `/admin` routes. UI elements are hidden, but API routes are *also* blocked.
- ✅ **Privacy:** Personal contact details are heavily restricted. Role-based visibility gates govern profiles.
- ✅ **Trademarks:** The required AWS non-affiliation trademark notice is permanently injected into the global `Footer` component.

---
*Built for the student community at Kalasalingam Academy of Research and Education.*
