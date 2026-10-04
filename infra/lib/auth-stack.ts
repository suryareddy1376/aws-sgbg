import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cognito from 'aws-cdk-lib/aws-cognito';

export interface AuthStackProps extends cdk.NestedStackProps {
  stage: string;
}

export class AuthStack extends cdk.NestedStack {
  public readonly userPool: cognito.UserPool;
  public readonly userPoolClient: cognito.UserPoolClient;

  constructor(scope: Construct, id: string, props: AuthStackProps) {
    super(scope, id, props);

    // User Pool
    this.userPool = new cognito.UserPool(this, 'UserPool', {
      userPoolName: `kare-sbg-users-${props.stage}`,
      selfSignUpEnabled: true,
      signInAliases: { email: true },
      autoVerify: { email: true },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: true,
      },
      customAttributes: {
        department: new cognito.StringAttribute({ mutable: true }),
        year: new cognito.StringAttribute({ mutable: true }),
        memberStatus: new cognito.StringAttribute({ mutable: true }),
      },
      removalPolicy: props.stage === 'prod' ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY,
    });

    // User Groups
    const groups = [
      'student',
      'member',
      'core_member',
      'volunteer',
      'faculty',
      'super_admin',
      'site_admin',
      'events_admin',
      'content_admin',
      'community_admin',
      'certificate_admin',
    ];

    groups.forEach((group) => {
      new cognito.CfnUserPoolGroup(this, `${group}Group`, {
        userPoolId: this.userPool.userPoolId,
        groupName: group,
      });
    });

    // User Pool Client
    this.userPoolClient = new cognito.UserPoolClient(this, 'UserPoolClient', {
      userPool: this.userPool,
      userPoolClientName: `kare-sbg-client-${props.stage}`,
      authFlows: {
        userSrp: true,
        custom: true,
      },
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
          implicitCodeGrant: false,
        },
        scopes: [cognito.OAuthScope.EMAIL, cognito.OAuthScope.OPENID, cognito.OAuthScope.PROFILE],
      },
    });

    // User Pool Domain
    this.userPool.addDomain('CognitoDomain', {
      cognitoDomain: {
        domainPrefix: `kare-sbg-${props.stage}`,
      },
    });
  }
}
