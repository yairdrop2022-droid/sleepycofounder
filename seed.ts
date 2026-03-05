/**
 * Seed script for SleepyCoFounder.tools
 * Run with: npx tsx seed.ts
 *
 * Required env vars:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY  (use service role for seed, not anon)
 *
 * Supabase table SQL (run in Supabase SQL editor first):
 *
 * create table mcps (
 *   id uuid primary key default gen_random_uuid(),
 *   created_at timestamptz default now(),
 *   name text not null,
 *   slug text unique not null,
 *   description text,
 *   long_description text,
 *   github_url text,
 *   mcp_config jsonb default '{}',
 *   tags text[] default '{}',
 *   category text,
 *   author text,
 *   author_twitter text,
 *   is_featured boolean default false,
 *   is_polsia_compatible boolean default false,
 *   price_type text default 'free' check (price_type in ('free','paid','subscription'))
 * );
 *
 * -- Enable full text search
 * alter table mcps add column fts tsvector
 *   generated always as (
 *     to_tsvector('english', coalesce(name, '') || ' ' || coalesce(description, '') || ' ' || coalesce(category, ''))
 *   ) stored;
 * create index mcps_fts_idx on mcps using gin(fts);
 *
 * -- RLS (allow read for everyone, insert for authenticated)
 * alter table mcps enable row level security;
 * create policy "Anyone can read" on mcps for select using (true);
 * create policy "Authenticated can insert" on mcps for insert with check (true);
 */

import { createClient } from "@supabase/supabase-js";
import { SEED_MCPS } from "./lib/data";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !serviceKey) {
  console.error("❌ Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey);

async function seed() {
  console.log("🌱 Seeding SleepyCoFounder.tools MCPs...\n");

  const records = SEED_MCPS.map(({ id: _id, created_at: _ca, stars: _s, ...rest }) => rest);

  const { data, error } = await supabase
    .from("mcps")
    .upsert(records, { onConflict: "slug" })
    .select();

  if (error) {
    console.error("❌ Seed failed:", error.message);
    process.exit(1);
  }

  console.log(`✅ Seeded ${data?.length ?? 0} MCPs successfully!\n`);
  data?.forEach((m) => console.log(`   • ${m.name} (${m.category})`));
}

seed();
