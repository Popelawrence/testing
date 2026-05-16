
# LeClematis Architecture Guide

## Architecture Style

LeClematis uses a feature-based frontend architecture.

The goal is to support growth from a simple React site into a secure creative-commerce platform.

## Main Layers

UI Layer:
React components, pages, layouts

State Layer:
Redux Toolkit for cart, filters, wishlist, and UI state

Data Layer:
Mock data first, Supabase later

Business Layer:
Inventory rules, sold status, product categories, inquiry rules

Payment Layer:
Stripe Checkout later

Security Layer:
Environment variables, Supabase RLS, backend-only secrets