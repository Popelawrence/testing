
# LeClematis

LeClematis is a creative brand website centered around three connected experiences:

- Nature-inspired storytelling and products
- Curated vintage resale
- Photography portfolio, prints, and services

The project is being built as a modern React application using TypeScript, Vite, and a scalable feature-based folder architecture. The long-term goal is to develop LeClematis into a polished creative-commerce platform with catalog management, cart functionality, Supabase integration, and secure payments through Stripe.

---

## Project Vision

LeClematis blends nature, vintage aesthetics, and photography into one cohesive digital experience.

The website is designed to support:

- A nature-inspired brand identity
- A vintage resale product catalog
- Photography galleries and portfolio pages
- Photography print sales
- Contact and booking inquiries
- Newsletter signups
- Future shopping cart functionality
- Future Supabase-powered backend
- Future Stripe Checkout payment flow

---

## Core Concept

LeClematis is structured around three connected experiences:

'''Nature-inspired storytelling and products'''
LeClematis
├── Nature
├── Vintage Resale
└── Photography


### Nature

The nature experience represents the emotional and visual foundation of the brand. 
It may include:

Nature-inspired products
Botanical visuals
Seasonal collections
Nature photography
Editorial or journal-style storytelling
Vintage Resale

The vintage resale experience supports curated one-of-one items.

It may include:

Vintage clothing
Vintage objects or accessories
Condition notes
Measurements
Product availability
Sold status
Collection drops
Photography

The photography experience acts as both a portfolio and a product/service offering.

It may include:

Photography galleries
Photo prints
Creative sessions
Product photography
Booking inquiries
Tech Stack
Current Stack
React
TypeScript
Vite
React Router
CSS
Feature-based project architecture
Planned Stack
Redux Toolkit for cart, filters, wishlist, and UI state
Supabase for database, storage, authentication, and inquiries
Stripe Checkout for secure payments
Tailwind CSS for styling
Vitest and React Testing Library for testing
Vercel or Netlify for deployment



## Development Principles
This project follows these principles:
  Keep components reusable
  Keep business logic out of UI components when possible
  Use TypeScript types for important data structures
  Use feature folders for scalable organization
  Start with mock data before connecting the backend
  Keep secrets out of the frontend
  Use Supabase for data and storage
  Use Stripe for secure payment processing later
  Build incrementally instead of adding everything at once

## Planned Supabase Tables:
  products
  product_images
  collections
  photo_galleries
  photo_images
  contact_messages
  booking_inquiries
  newsletter_subscribers
  orders
  order_items
  profiles



## License
Private project

