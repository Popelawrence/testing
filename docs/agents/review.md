
# AI Code Review Checklist for LeClematis

Use this checklist after every AI-generated change.

## Scope Review

- Did the change solve the requested task?
- Did it avoid unrelated changes?
- Did it avoid rewriting working code unnecessarily?
- Are modified files clearly related to the task?

## Architecture Review

- Does the code follow the project folder structure?
- Are reusable components placed in `components/`?
- Are business-specific files placed in `features/`?
- Are route-level files placed in `pages/`?
- Are service/config files placed in `lib/`?
- Are utilities placed in `utils/`?

## TypeScript Review

- Are props typed?
- Are business models typed?
- Is `any` avoided?
- Are union types used for fixed values?
- Are optional fields clearly marked?

## React Review

- Are components focused?
- Is business logic kept out of UI when possible?
- Are hooks used correctly?
- Are lists rendered with stable keys?
- Are forms controlled or intentionally uncontrolled?
- Are imports clean?

## Styling Review

- Does the UI match the LeClematis brand direction?
- Is the layout responsive or prepared for responsiveness?
- Are class names readable?
- Is styling not duplicated excessively?

## Security Review

- Are secrets avoided?
- Are `.env` values not hardcoded?
- Are Stripe secret keys absent from frontend code?
- Are Supabase service role keys absent from frontend code?
- Is payment status not updated from frontend code?
- Is user input handled safely?

## Accessibility Review

- Do images have useful alt text?
- Are buttons actual `<button>` elements when clickable?
- Are links used for navigation?
- Are form labels present?
- Is heading order logical?

## Testing Review

- Are important business rules tested?
- Are utility functions tested when added?
- Are cart rules tested when added?
- Are form validation rules tested when added?

## Final Review Questions

Before accepting the change, ask:

1. Can I explain what changed?
2. Can I undo the change easily?
3. Does the app still run?
4. Does this move the project forward incrementally?
5. Did the AI agent respect the project requirements?