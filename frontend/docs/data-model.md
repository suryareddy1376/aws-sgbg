# KARE AWS SBG - Data Model

## DynamoDB Single-Table Design

The platform uses DynamoDB with a single-table design for cost efficiency and scalability.

### Entity Table Layout

| Entity | PK | SK | GSI1PK | GSI1SK | GSI2PK | GSI2SK | GSI3PK | GSI3SK |
|--------|----|----|--------|--------|--------|--------|--------|--------|
| User | `USER#{userId}` | `PROFILE` | | | | | | |
| Event | `EVENT#{eventId}` | `META` | `EVENTS` | `{status}#{date}` | `CATEGORY#{category}` | `{date}` | | |
| Registration | `EVENT#{eventId}` | `REG#{userId}` | | | | | `USER#{userId}` | `REG#{eventId}` |
| Attendance | `EVENT#{eventId}` | `ATT#{userId}` | | | | | `USER#{userId}` | `ATT#{eventId}` |
| TeamMember | `TEAM` | `MEMBER#{sortOrder}#{memberId}` | `TEAM#{termYear}` | `{sortOrder}` | | | | |
| Project | `PROJECT#{projectId}` | `META` | `PROJECTS` | `{status}#{date}` | `PROJCAT#{category}` | `{date}` | | |
| ProjectMember | `PROJECT#{projectId}` | `MEMBER#{userId}` | | | | | | |
| Resource | `RESOURCE#{resourceId}` | `META` | `RESOURCES` | `{type}#{date}` | | | | |
| BlogPost | `BLOG#{postId}` | `META` | `BLOGS` | `{status}#{date}` | | | | |
| Album | `ALBUM#{albumId}` | `META` | | | | | | |
| Photo | `ALBUM#{albumId}` | `PHOTO#{photoId}` | | | | | | |
| Opportunity | `OPP#{oppId}` | `META` | `OPPORTUNITIES` | `{type}#{deadline}` | | | | |
| Announcement | `ANN#{annId}` | `META` | `ANNOUNCEMENTS` | `{audience}#{date}` | | | | |
| Certificate | `CERT#{certId}` | `META` | | | | | `USER#{userId}` | `CERT#{certId}` |
| CertTemplate | `CERTTEMPL#{templateId}` | `META` | | | | | | |
| Submission | `SUB#{submissionId}` | `META` | | | `SUBMISSIONS#{type}` | `{status}#{date}` | | |
| SiteSetting | `SETTINGS` | `{settingKey}` | | | | | | |

*Note: For the Opportunity entity, a `ttl` field is included for automatic expiration.*

### Access Patterns Table

| Pattern Name | Table / Index | Key Condition | Filter | Example Use Case |
|--------------|---------------|---------------|--------|------------------|
| Get User Profile | Main Table | `PK=USER#{userId}`, `SK=PROFILE` | - | Load user details |
| Get Event Details | Main Table | `PK=EVENT#{eventId}`, `SK=META` | - | Display event page |
| Get Event Attendees | Main Table | `PK=EVENT#{eventId}`, `SK begins_with "REG#"` | - | Export attendee list |
| List Events by Status | GSI1 | `GSI1PK=EVENTS`, `GSI1SK begins_with "{status}#"` | - | Show upcoming events |
| List Events by Category | GSI2 | `GSI2PK=CATEGORY#{category}` | - | Filter events by topic |
| Get User Registrations | GSI3 | `GSI3PK=USER#{userId}`, `GSI3SK begins_with "REG#"` | - | Dashboard user schedule |
| Get User Attendance | GSI3 | `GSI3PK=USER#{userId}`, `GSI3SK begins_with "ATT#"` | - | Display user history |
| List Team Members | GSI1 | `GSI1PK=TEAM#{termYear}` | - | About Us page |
| List Projects by Status | GSI1 | `GSI1PK=PROJECTS`, `GSI1SK begins_with "{status}#"` | - | Project showcase |
| List Resources by Type | GSI1 | `GSI1PK=RESOURCES`, `GSI1SK begins_with "{type}#"` | - | Resource library |
| List Blogs by Status | GSI1 | `GSI1PK=BLOGS`, `GSI1SK begins_with "{status}#"` | - | Blog index |
| List Photos in Album | Main Table | `PK=ALBUM#{albumId}`, `SK begins_with "PHOTO#"` | - | Gallery view |
| List Active Opportunities | GSI1 | `GSI1PK=OPPORTUNITIES`, `GSI1SK begins_with "{type}#"` | - | Job board |
| List Announcements | GSI1 | `GSI1PK=ANNOUNCEMENTS`, `GSI1SK begins_with "{audience}#"` | - | Homepage alerts |
| Get User Certificates | GSI3 | `GSI3PK=USER#{userId}`, `GSI3SK begins_with "CERT#"` | - | User profile certificates |
| List Submissions | GSI2 | `GSI2PK=SUBMISSIONS#{type}`, `GSI2SK begins_with "{status}#"` | - | Admin review panel |
| Get Site Settings | Main Table | `PK=SETTINGS` | - | Global site config |
