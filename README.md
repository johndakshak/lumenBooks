This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Lumen Books

A small online bookstore with a seller dashboard, built with Next.js 16 (App Router) to demonstrate every major rendering and data-fetching pattern in the framework: Static Generation, ISR, SSR, Server Actions, Route Handlers, Streaming/Suspense, and Middleware.

**Live deployment:** [https://lumen-books-john.vercel.app/]

---

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- `@phosphor-icons/react` for icons
- `react-hot-toast` for notifications
- `nodemailer` for SMTP email (contact form)

---

## Running Locally

1. Clone the repository and install dependencies:
   ```bash
   git clone <your-repo-url>
   cd lumen-books
   npm install
   ```

2. Create a `.env.local` file in the project root with the following variables:
   ```
   GMAIL_USER=youraddress@gmail.com
   GMAIL_APP_PASSWORD=your16characterapppassword
   ```
   `GMAIL_APP_PASSWORD` is a Gmail **App Password** (requires 2-Step Verification enabled on the account), not your regular Gmail password. Generate one at [myaccount.google.com/security](https://myaccount.google.com/security) under "App passwords."

3. Run the dev server:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`.

**Seller login credentials (hardcoded, per assignment scope):**
- Email: `seller@lumenbooks.com`
- Password: `lumen123`

---

## Rendering Strategy

Every route was deliberately assigned a rendering mode based on what its content actually needs — not defaulted to one mode across the board.

| Route | Mode | Why |
|---|---|---|
| `/` | **Static + ISR** (`revalidate = 3600`) | Featured/bestseller content is the same for every visitor and doesn't need per-request freshness — refreshing once an hour in the background is sufficient. |
| `/books` | **SSR** | Reads `searchParams` (category filter, sort order) on every request. Different query strings genuinely produce different HTML, so this cannot be pre-rendered once and reused. |
| `/books/[slug]` | **SSG with ISR fallback** | `generateStaticParams()` pre-builds a page for every known book at build time. A slug not seen at build time (e.g. a newly added book) renders on first request and is then cached. |
| `/login` | **Dynamic** (Server Action) | Form submission runs a Server Action that validates credentials, sets an `httpOnly` cookie, and returns a result — inherently request-specific. |
| `/dashboard` | **SSR** | Reads the `auth` cookie via `cookies()` to render seller-specific content. Per-user output by definition cannot be statically generated. Gated by `middleware.ts`. |
| `/dashboard/new` | **Dynamic** (Server Action) | Submits a Server Action that mutates the in-memory data store and calls `revalidatePath('/books')` so the catalog reflects the new listing. |
| `/api/books` | **Route Handler** | A `GET` handler returning JSON, optionally filtered by a `?q=` search term. Consumed client-side by the search bars in the Navbar and Hero via `fetch`. |
| `/contact` | **Static UI + Server Action** | The form itself is static; submission is handled by a Server Action that sends an email via Gmail SMTP (Nodemailer). |

### Build Output

```
[Paste the output of `npm run build` here, including the route table with the ○ / ● / ƒ legend]
```

**Per-route justification of the build output:**
- `/` shows `○` (Static) — no `cookies()`, `searchParams`, or other request-time data is read anywhere in its render path.
- `/books` shows `ƒ` (Dynamic) — reading `searchParams` forces dynamic rendering automatically, with no need for `export const dynamic = 'force-dynamic'`.
- `/books/[slug]` shows `●` (SSG) alongside a count of statically generated paths, one per book known at build time.
- `/login`, `/dashboard`, `/dashboard/new` show `ƒ` (Dynamic) — all either read cookies or handle form submissions.

### Demonstrating SSR Freshness

Visiting `/books?sort=price` and `/books?sort=newest` returns differently-ordered HTML for the same route, generated fresh on the server for each request — not served from a cached, pre-built page. The same applies to `/books?category=Cooking` vs. `/books?category=Mystery`. This can be verified by viewing page source on each URL and comparing the order of rendered book cards.

---

## Key Architectural Decisions

- **Server Components by default.** `'use client'` is used only where genuine browser interactivity is required: form inputs with local state (login, contact, add-book), the live search bars, the mobile menu toggle, the error boundary, and small isolated pieces like `AddToCartButton` (which needs `stopPropagation` to coexist inside a clickable card-link without triggering navigation).
- **The Navbar does not read cookies.** Early in development, the Navbar called `cookies()` directly to display the logged-in seller's name, which inadvertently forced *every* page using it — including the static homepage — into dynamic rendering. This was corrected by having only the already-dynamic dashboard pages read the cookie and pass the seller's name down as a prop, restoring `/` to static rendering.
- **Shared search logic via a custom hook.** Both the Navbar's and Hero's search bars call the same `useBookSearch` hook (debounced fetch to `/api/books`, dropdown state, click-outside handling). Each instance is independent — searching in one does not affect the other — which is the correct choice here, as opposed to shared state via Context, since the two search bars have no reason to stay in sync.
- **Per-page Navbar/Footer instead of root layout.** Navbar and Footer are imported individually into each page rather than the root layout, specifically so `/login` can render without the standard site chrome.

---

## Bonus Items Attempted

- **Streaming with Suspense:** the "Recommended for you" section on `/books/[slug]` is deliberately slow (artificial 2-second delay) and wrapped in `<Suspense>` with a skeleton fallback, so the rest of the page renders instantly.
- **Dynamic OG metadata:** `generateMetadata()` on `/books/[slug]` sets a per-book `<title>`, description, and Open Graph image for social sharing. A simpler version is also applied to `/books`, reflecting the active category filter in the title.
- **Live deployment to Vercel.**

Not attempted: Partial Prerendering, parallel/intercepting routes, a real database, `sitemap.ts`/`robots.ts`.

---

## Trade-offs

**In-memory data storage.** `lib/data.ts` holds book data in a plain in-memory array rather than a real database, per the assignment's explicit allowance ("a real DB is a bonus, not a requirement"). The practical cost of this choice is real: on Vercel's serverless infrastructure, a book added via `/dashboard/new` may not persist reliably across requests, since each serverless invocation can run on a fresh instance with no shared memory. A production version of this app would need a real database (Postgres, SQLite) for `addBook` to behave correctly at scale.

**No OS-level dark mode support.** The app uses a fixed white background and explicit Tailwind utility classes everywhere, rather than CSS variables tied to `prefers-color-scheme`. This was a deliberate choice for consistency and control over every page's exact appearance, at the cost of not respecting a visitor's system theme preference.

---

## Project Structure

```
app/
├── layout.tsx              # Root layout (fonts, global Toaster)
├── page.tsx                 # Home (ISR)
├── loading.tsx               # Global loading fallback
├── error.tsx                  # Global error boundary (client component, reset button)
├── not-found.tsx                # Global 404
├── books/
│   ├── page.tsx                   # Catalog (SSR, searchParams-driven)
│   ├── loading.tsx                  # Route-level skeleton
│   ├── FilterBar.tsx                  # Category/sort UI (client component)
│   └── [slug]/
│       ├── page.tsx                      # Book detail (SSG + generateMetadata)
│       ├── RecommendedBooks.tsx             # Slow section (Suspense child)
│       └── RecommendedBooksSkeleton.tsx       # Suspense fallback
├── login/
│   ├── page.tsx
│   ├── actions.ts                  # Server Action: auth check, cookie, sellerName
│   └── LoginForm.tsx, LoginButton.tsx
├── dashboard/
│   ├── page.tsx                   # Protected SSR route
│   ├── actions.ts                   # logout Server Action
│   └── new/
│       ├── page.tsx
│       ├── actions.ts                  # createBook Server Action + revalidatePath
│       └── NewBookForm.tsx
├── contact/
│   ├── page.tsx
│   ├── actions.ts                  # sendMessage Server Action (SMTP)
│   └── ContactForm.tsx, SendMessageButton.tsx
├── api/
│   └── books/
│       └── route.ts                   # GET handler, ?q= search filtering
└── components/                # Shared, site-wide components (Navbar, Footer, etc.)

lib/
├── types.ts                  # Book type
├── data.ts                    # In-memory data + simulated network delay
├── emailService.ts              # Nodemailer/Gmail SMTP setup
└── hooks/
    └── useBookSearch.ts            # Shared search logic (debounce, dropdown state)

middleware.ts                  # Gates /dashboard/** — redirects unauthenticated visitors to /login
```
