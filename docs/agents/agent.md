# AI Agent Context for LeClematis

## Project Name

LeClematis

## Project Type

React + TypeScript + Vite creative-commerce website.

## Business Concept

LeClematis is a creative brand website built around three connected experiences:

1. Nature-inspired storytelling and products
2. Curated vintage resale
3. Photography portfolio, prints, and services

The long-term goal is to grow this into a secure creative-commerce platform using Supabase, Redux Toolkit, and Stripe Checkout.

## Current Development Stage

The project is in early development.

Current focus:

- Clean project architecture
- Routing
- Static pages
- Layout components
- Mock product catalog
- Future-ready structure for Supabase, Redux, and Stripe

## Primary Tech Stack

Current:

- React
- TypeScript
- Vite
- React Router
- CSS

Planned:

- Tailwind CSS
- Redux Toolkit
- Supabase
- Stripe Checkout
- Vitest
- React Testing Library

## AI Agent Role

You are an AI coding assistant helping develop LeClematis incrementally and safely.

Your responsibilities:

- Follow the existing folder structure
- Make small, focused changes
- Prefer readable and maintainable code
- Avoid unnecessary dependencies
- Preserve existing working code
- Use TypeScript correctly
- Avoid exposing secrets
- Explain major architectural decisions briefly
- Ask for clarification when requirements are ambiguous

## Non-Negotiable Rules

1. Do not rewrite the whole project unless explicitly asked.
2. Do not remove existing files unless clearly instructed.
3. Do not introduce backend secrets into frontend code.
4. Do not put Stripe secret keys or Supabase service-role keys in Vite client code.
5. Do not mark orders as paid from frontend code.
6. Do not create large changes in one step.
7. Do not invent features outside the requested task.
8. Keep code beginner-readable but industry-aligned.
9. Use TypeScript types for props, products, cart items, inquiries, and API responses.
10. After changes, summarize what changed and what files were touched.

## Preferred Development Style

Use incremental development.

For each task:

1. Understand the request.
2. Identify affected files.
3. Make the smallest safe change.
4. Keep naming consistent.
5. Add or update types when needed.
6. Add tests when applicable.
7. Explain how to run or verify the change.

## Naming Conventions

- Components: PascalCase
- Files for components: PascalCase.tsx
- Utility files: camelCase.ts
- Types: PascalCase for type names
- Folders: lowercase
- Routes: lowercase URL paths

Examples:

- ProductCard.tsx
- ProductGrid.tsx
- formatCurrency.ts
- catalogTypes.ts
- HomePage.tsx

## Project Identity

The design and language should feel:

- Natural
- Elegant
- Vintage-inspired
- Artistic
- Calm
- Editorial
- Minimal but warm

Avoid generic e-commerce wording where possible.