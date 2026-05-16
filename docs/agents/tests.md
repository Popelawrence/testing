# Testing Guide for LeClematis

## Testing Goal

Tests should protect important business behavior, not just implementation details.

LeClematis should especially test:

- Product display
- Cart behavior
- Inventory rules
- Form validation
- Utility functions
- Routing behavior
- Supabase integration later

## Planned Test Tools

Use:

- Vitest
- React Testing Library
- jest-dom

## Test File Naming

Use:

```text
ComponentName.test.tsx
utilityName.test.ts
featureName.test.ts