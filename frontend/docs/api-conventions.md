# API Conventions

## Response Format
All API responses must follow a standard JSON format:

```json
{
  "success": true,
  "data": { ... },
  "error": null,
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100
  }
}
```

## Error Codes
- `400 Bad Request`: Validation errors.
- `401 Unauthorized`: Missing or invalid authentication token.
- `403 Forbidden`: Authenticated, but lacks required permissions.
- `404 Not Found`: Requested resource does not exist.
- `500 Internal Server Error`: Unhandled backend errors.

## Pagination
Use cursor-based pagination for DynamoDB queries.
Requests should accept a `nextToken` parameter, and responses should include `meta.nextToken` if there are more results.
