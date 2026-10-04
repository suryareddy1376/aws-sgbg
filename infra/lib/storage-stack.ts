import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface StorageStackProps extends cdk.NestedStackProps {
  stage: string;
}

export class StorageStack extends cdk.NestedStack {
  public readonly uploadsBucket: s3.Bucket;
  public readonly publicBucket: s3.Bucket;
  public readonly distribution: cloudfront.Distribution;

  constructor(scope: Construct, id: string, props: StorageStackProps) {
    super(scope, id, props);

    // Private Uploads Bucket
    this.uploadsBucket = new s3.Bucket(this, 'UploadsBucket', {
      bucketName: `kare-sbg-uploads-${props.stage}`,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      versioned: true,
      removalPolicy: props.stage === 'prod' ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: props.stage !== 'prod',
      lifecycleRules: [
        {
          transitions: [
            {
              storageClass: s3.StorageClass.INFREQUENT_ACCESS,
              transitionAfter: cdk.Duration.days(90),
            },
          ],
        },
      ],
      cors: [
        {
          allowedMethods: [s3.HttpMethods.PUT, s3.HttpMethods.POST, s3.HttpMethods.GET],
          allowedOrigins: ['*'], // In production, restrict to app domains
          allowedHeaders: ['*'],
        },
      ],
    });

    // Public Assets Bucket
    this.publicBucket = new s3.Bucket(this, 'PublicBucket', {
      bucketName: `kare-sbg-public-${props.stage}`,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // Handled by CloudFront OAI
      versioned: true,
      removalPolicy: props.stage === 'prod' ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: props.stage !== 'prod',
    });

    // CloudFront Distribution
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, 'OAI');
    this.publicBucket.grantRead(originAccessIdentity);

    this.distribution = new cloudfront.Distribution(this, 'PublicDistribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(this.publicBucket, { originAccessIdentity }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        responseHeadersPolicy: cloudfront.ResponseHeadersPolicy.SECURITY_HEADERS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
      comment: `KARE AWS SBG Public Assets - ${props.stage}`,
    });
  }
}
