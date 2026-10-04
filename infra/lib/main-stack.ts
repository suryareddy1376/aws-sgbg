import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DatabaseStack } from './database-stack';
import { StorageStack } from './storage-stack';
import { AuthStack } from './auth-stack';
import { EmailStack } from './email-stack';

export interface MainStackProps extends cdk.StackProps {
  stage: string;
}

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: MainStackProps) {
    super(scope, id, props);

    const { stage } = props;

    // Database Stack
    new DatabaseStack(this, 'Database', { stage });

    // Storage Stack
    new StorageStack(this, 'Storage', { stage });

    // Auth Stack
    new AuthStack(this, 'Auth', { stage });

    // Email Stack
    new EmailStack(this, 'Email', { stage });

    // Cross-stack references can be wired here, e.g., passing DB table names to lambdas, etc.
  }
}
