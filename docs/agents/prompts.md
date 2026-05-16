# Reusable AI Prompts for LeClematis

## General Coding Prompt

You are working on the LeClematis React + TypeScript + Vite project.

Before making changes, read:

- docs/ai/agent.md
- docs/ai/instructions.md
- docs/ai/architecture.md
- docs/ai/security.md
- docs/ai/review.md

Task:

[WRITE TASK HERE]

Rules:

- Make the smallest safe change.
- Follow the existing folder structure.
- Do not rewrite unrelated files.
- Do not introduce unnecessary dependencies.
- Use TypeScript.
- Keep code beginner-readable and industry-aligned.
- Do not expose secrets.
- After the change, summarize modified files and how to verify.

## Feature Implementation Prompt

Implement the following feature incrementally:

[FEATURE NAME]

Requirements:

[LIST REQUIREMENTS]

Project context:

- React + TypeScript + Vite
- Feature-based architecture
- LeClematis has Nature, Vintage Resale, and Photography experiences
- Use mock data unless the task explicitly asks for Supabase
- Do not add Stripe unless explicitly requested

Expected output:

- Files to create or modify
- Code changes
- Explanation of design choices
- Manual verification steps

## Review Prompt

Review the following code changes using:

- docs/ai/review.md
- docs/ai/security.md
- docs/ai/tests.md

Focus on:

- Scope control
- Architecture
- TypeScript correctness
- React correctness
- Security
- Accessibility
- Maintainability
- Tests

Return:

- Issues found
- Suggested fixes
- Whether the change is safe to accept

## Debug Prompt

Debug this issue in the LeClematis project:

[PASTE ERROR]

Context:

- React + TypeScript + Vite
- Feature-based architecture
- Current task: [TASK]
- Relevant files: [FILES]

Rules:

- Identify the likely cause.
- Suggest the smallest fix.
- Do not rewrite unrelated code.
- Explain how to verify the fix.

## Supabase Prompt

Add Supabase functionality for:

[FEATURE]

Rules:

- Use `src/lib/supabaseClient.ts`
- Use `src/lib/env.ts`
- Use only `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in frontend code
- Do not use service role keys in frontend
- Mention required RLS policies
- Keep data access logic outside UI components when possible

## Stripe Prompt

Add Stripe Checkout support for:

[FEATURE]

Rules:

- Do not put Stripe secret keys in frontend code.
- Do not create custom card input forms.
- Use Stripe Checkout.
- Create payment sessions through backend/serverless logic only.
- Use webhooks to confirm payment.
- Do not mark orders as paid from frontend code.
- Protect one-of-one vintage inventory.

## Test Prompt

Add tests for:

[FEATURE OR FILE]

Rules:

- Use Vitest and React Testing Library.
- Test behavior, not implementation details.
- Prioritize business rules.
- Include manual verification steps.