#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MainStack } from '../lib/main-stack';

const app = new cdk.App();

// Environment configuration
const account = process.env.CDK_DEFAULT_ACCOUNT;
const region = process.env.CDK_DEFAULT_REGION || 'ap-south-1';

// Developer stack
new MainStack(app, 'KareSbgDevStack', {
  stage: 'dev',
  env: { account, region },
  description: 'KARE AWS SBG Platform - Development Environment',
});

// Staging stack
new MainStack(app, 'KareSbgStagingStack', {
  stage: 'staging',
  env: { account, region },
  description: 'KARE AWS SBG Platform - Staging Environment',
});

// Production stack
new MainStack(app, 'KareSbgProdStack', {
  stage: 'prod',
  env: { account, region },
  description: 'KARE AWS SBG Platform - Production Environment',
});
