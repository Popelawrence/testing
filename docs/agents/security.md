
# Security Guide for LeClematis

## Primary Security Principle

Never trust the frontend for sensitive actions.

The frontend can display data and collect user input, but secure actions must happen through Supabase policies, serverless functions, or backend logic.


## Secrets

Never commit real secrets.

Do not place these in client-side code:

```env
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=