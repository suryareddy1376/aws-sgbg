import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ses from 'aws-cdk-lib/aws-ses';

export interface EmailStackProps extends cdk.NestedStackProps {
  stage: string;
}

export class EmailStack extends cdk.NestedStack {
  constructor(scope: Construct, id: string, props: EmailStackProps) {
    super(scope, id, props);

    // Configuration Set
    const configSet = new ses.ConfigurationSet(this, 'EmailConfigSet', {
      configurationSetName: `kare-sbg-config-${props.stage}`,
    });

    // Note: Email Identity requires domain verification, which is typically done
    // manually or through Route53 if the domain is hosted there. 
    // This is a placeholder for the verified identity.
    // Replace 'example.com' with the actual domain.
    /*
    const identity = new ses.EmailIdentity(this, 'EmailIdentity', {
      identity: ses.Identity.domain('example.com'),
      configurationSet: configSet,
    });
    */
    
    // Welcome Email Template
    new ses.CfnTemplate(this, 'WelcomeTemplate', {
      template: {
        templateName: `WelcomeEmail-${props.stage}`,
        subjectPart: 'Welcome to KARE AWS Student Builder Group!',
        htmlPart: '<h1>Welcome, {{name}}!</h1><p>Thanks for joining KARE AWS SBG.</p>',
        textPart: 'Welcome, {{name}}! Thanks for joining KARE AWS SBG.',
      },
    });

    // Event Registration Template
    new ses.CfnTemplate(this, 'EventRegistrationTemplate', {
      template: {
        templateName: `EventRegistration-${props.stage}`,
        subjectPart: 'Registration Confirmed: {{eventName}}',
        htmlPart: '<h1>Registration Confirmed</h1><p>You are registered for {{eventName}} on {{eventDate}}.</p>',
        textPart: 'Registration Confirmed. You are registered for {{eventName}} on {{eventDate}}.',
      },
    });
    
    // Certificate Issued Template
    new ses.CfnTemplate(this, 'CertificateTemplate', {
      template: {
        templateName: `CertificateIssued-${props.stage}`,
        subjectPart: 'Your Certificate for {{eventName}} is Ready!',
        htmlPart: '<h1>Congratulations!</h1><p>Your certificate for {{eventName}} is now available. Log in to download it.</p>',
        textPart: 'Congratulations! Your certificate for {{eventName}} is now available. Log in to download it.',
      },
    });
  }
}
