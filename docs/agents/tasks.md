
# LeClematis Incremental Development Roadmap

## Development Rule

Build in small, reviewable phases.

Do not add Stripe before the catalog and cart are stable.

Do not add Supabase before mock data and UI are working.

Do not add admin features before public pages are stable.

## Phase 1: Project Foundation

Goal:

Create a clean, working frontend foundation.

Tasks:

- Confirm folder structure
- Configure routing
- Create App.tsx
- Create layout components
- Create Home, Shop, Nature, Vintage, Photography, About, Contact pages
- Add global styles
- Add logo and favicon
- Add README

Completion criteria:

- App runs with `npm run dev`
- Navigation works
- Pages render without errors
- No default Vite demo files remain

## Phase 2: Static Brand Experience

Goal:

Create the first visual version of the LeClematis brand.

Tasks:

- Build homepage hero section
- Build three experience sections
- Build footer
- Add brand copy
- Add image placeholders
- Make layout responsive

Completion criteria:

- Homepage communicates Nature + Vintage + Photography clearly
- Layout works on desktop and mobile
- Images have alt text

## Phase 3: Mock Catalog

Goal:

Create a product catalog using mock data.

Tasks:

- Create product types
- Create mockProducts.ts
- Build ProductCard
- Build ProductGrid
- Build ShopPage
- Build category pages
- Build ProductDetailsPage
- Add sold state
- Add price formatting

Completion criteria:

- Products display correctly
- Product categories work
- Product detail route works
- Sold products are visually clear

## Phase 4: Cart with Redux Toolkit

Goal:

Add shopping cart state.

Tasks:

- Install Redux Toolkit
- Configure store
- Create typed hooks
- Create cartSlice
- Add add/remove/update quantity
- Add cart drawer
- Add cart summary
- Enforce inventory rules

Completion criteria:

- Add to cart works
- Remove from cart works
- Cart total works
- One-of-one items cannot exceed quantity 1

## Phase 5: Photography and Inquiries

Goal:

Support photography portfolio and contact/booking interest.

Tasks:

- Build photography gallery components
- Build ContactForm
- Build BookingInquiryForm
- Add validation
- Add success/error states

Completion criteria:

- Photography page displays gallery
- Contact form validates input
- Booking inquiry form validates input

## Phase 6: Supabase Integration

Goal:

Replace mock data with real data.

Tasks:

- Create Supabase project
- Add environment variables
- Create supabaseClient.ts
- Define products table
- Define inquiries tables
- Enable RLS
- Fetch products from Supabase
- Submit inquiries to Supabase

Completion criteria:

- Products load from Supabase
- Public users can read published products
- Public users can submit inquiries
- Public users cannot update products

## Phase 7: Stripe Checkout

Goal:

Add secure payments.

Tasks:

- Create backend/serverless checkout function
- Create pending order
- Create Stripe Checkout Session
- Redirect to Stripe Checkout
- Add Stripe webhook
- Verify webhook signature
- Update order after payment
- Mark one-of-one items as sold

Completion criteria:

- Checkout works in test mode
- Webhook confirms payment
- Frontend does not mark orders as paid
- Inventory updates securely

## Phase 8: Production Readiness

Goal:

Prepare for real users.

Tasks:

- Add tests
- Improve accessibility
- Add loading and error states
- Add SEO basics
- Add deployment config
- Review security
- Review performance

Completion criteria:

- App builds successfully
- Key business rules are tested
- No secrets are exposed
- Site is deployable