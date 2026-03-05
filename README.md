# SleepyCoFounder.tools 🌙

> The cursor.directory for Polsia-style autonomous companies.
> MCP directory for AI agents that run your company while you sleep.

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** + custom dark theme
- **Supabase** (Postgres + auth)
- **Vercel** (deployment)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy env vars
cp .env.example .env.local
# Fill in your Supabase credentials

# 3. Run dev server
npm run dev

# 4. Seed the database (after setting up Supabase table)
npm run seed
```

## Supabase Setup

Run this SQL in your Supabase SQL editor:

```sql
create table mcps (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  slug text unique not null,
  description text,
  long_description text,
  github_url text,
  mcp_config jsonb default '{}',
  tags text[] default '{}',
  category text,
  author text,
  author_twitter text,
  is_featured boolean default false,
  is_polsia_compatible boolean default false,
  price_type text default 'free' check (price_type in ('free','paid','subscription'))
);

-- Full text search
alter table mcps add column fts tsvector
  generated always as (
    to_tsvector('english', coalesce(name, '') || ' ' || coalesce(description, '') || ' ' || coalesce(category, ''))
  ) stored;
create index mcps_fts_idx on mcps using gin(fts);

-- Row Level Security
alter table mcps enable row level security;
create policy "Anyone can read" on mcps for select using (true);
create policy "Authenticated can insert" on mcps for insert with check (true);
```

## Monetization

Inspired by cursor.directory (35k$/month MRR):

- `/sponsor` → Featured ($99/mo), Spotlight ($299 one-time), Premium Partner ($799/mo)
- Email `sponsor@sleepycofounder.tools`
- Integrate Stripe or Polar.sh for payments

## Deploy

```bash
vercel deploy
```

Add your env vars in the Vercel dashboard.

## Project Structure

```
sleepycofounder/
├── app/
│   ├── layout.tsx       # Root layout + Navbar + Footer
│   ├── page.tsx         # Homepage (hero, featured, categories, latest)
│   ├── globals.css      # Dark theme, animations, fonts
│   ├── mcp/
│   │   └── page.tsx     # Browse all MCPs with filters
│   ├── submit/
│   │   └── page.tsx     # Submit form → Supabase
│   ├── sponsor/
│   │   └── page.tsx     # 3-tier pricing page
│   └── about/
│       └── page.tsx     # About + ecosystem links
├── components/
│   ├── Navbar.tsx       # Sticky nav
│   ├── Footer.tsx       # Footer with links
│   ├── MCPCard.tsx      # Card + Copy MCP config button
│   └── SearchBar.tsx    # Full-text search input
├── lib/
│   ├── data.ts          # 15 seed MCPs + types + categories
│   ├── supabase.ts      # Supabase client
│   └── utils.ts         # cn(), formatStars(), slugify()
├── seed.ts              # One-time seed script
└── .env.example
```
