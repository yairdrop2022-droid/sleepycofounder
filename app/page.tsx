"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap, Star, TrendingUp, Shield, Search, ArrowRight,
  Mail, BarChart2, Code, ShoppingCart, Users, Headphones, Bot,
  DollarSign, Globe, Database, Share2, Settings
} from "lucide-react";
import { mcps, CATEGORIES } from "@/lib/data";
import MCPCard from "@/components/MCPCard";

const STATS = [
  { label: "MCP Servers", value: "105+", icon: Zap },
  { label: "Categories", value: "14", icon: Shield },
  { label: "Polsia Compatible", value: "105", icon: TrendingUp },
  { label: "Companies Powered", value: "500+", icon: Star },
];

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Marketing: TrendingUp,
  Operations: Settings,
  Finance: DollarSign,
  Inbox: Mail,
  Analytics: BarChart2,
  DevOps: Code,
  Database: Database,
  CRM: Users,
  Automation: Zap,
  "Social Media": Share2,
  "E-Commerce": ShoppingCart,
  "HR & Recruiting": Users,
  "Customer Support": Headphones,
  "AI & Agents": Bot,
};

const POLSIA_STACK = mcps.filter((m) =>
  ["Git Operations MCP", "Filesystem MCP", "Fetch / Web MCP", "Memory / Knowledge Graph MCP", "Sequential Thinking MCP", "Polsia Twitter Read MCP"].includes(m.name)
);

const FEATURED = mcps.filter((m) => m.is_featured).slice(0, 6);
const LATEST = mcps.slice(0, 6);

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? mcps.filter(
        (m) =>
          m.name.toLowerCase().includes(search.toLowerCase()) ||
          m.description.toLowerCase().includes(search.toLowerCase()) ||
          m.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      )
    : null;

  return (
    <div style={{ background: "#080810", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 px-4 sm:px-6">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(168,85,247,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-medium"
            style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)", color: "#c084fc" }}>
            <Zap size={12} />
            The MCP Directory for Autonomous Companies
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}>
            MCP Directory for{" "}
            <span style={{ background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Autonomous Companies
            </span>
          </h1>

          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#7070a0", fontFamily: "'DM Sans', sans-serif" }}>
            Polsia-style MCPs for marketing, finance, ops, inbox & more. The home for AI agents that run your company while you sleep.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto mb-10">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#5050a0" }} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a business MCP or autonomous tool..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-sm"
              style={{
                background: "rgba(13,13,18,0.9)",
                border: "1px solid rgba(168,85,247,0.2)",
                color: "#e2e2f0",
                outline: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {STATS.map((s) => (
              <div key={s.label} className="p-4 rounded-xl text-center"
                style={{ background: "rgba(13,13,18,0.8)", border: "1px solid rgba(168,85,247,0.1)" }}>
                <div className="text-2xl font-black text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "#5050a0" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search results */}
      {filtered && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <p className="text-sm mb-4" style={{ color: "#5050a0" }}>{filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{search}"</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((mcp) => <MCPCard key={mcp.id} mcp={mcp} />)}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p style={{ color: "#5050a0" }}>No MCPs found. <Link href="/submit" className="text-purple-400 underline">Submit yours?</Link></p>
            </div>
          )}
        </section>
      )}

      {!filtered && (
        <>
          {/* Polsia Stack */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                    🟣 Polsia Stack
                  </h2>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ background: "rgba(168,85,247,0.1)", color: "#c084fc", border: "1px solid rgba(168,85,247,0.2)" }}>
                    Seen in live demo
                  </span>
                </div>
                <p className="text-sm" style={{ color: "#5050a0" }}>
                  MCPs used by Polsia to run autonomous companies.{" "}
                  <a href="https://polsia.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">polsia.com →</a>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {POLSIA_STACK.map((mcp) => <MCPCard key={mcp.id} mcp={mcp} />)}
            </div>
          </section>

          {/* Featured */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                ⭐ Featured MCPs
              </h2>
              <Link href="/mcp" className="text-sm flex items-center gap-1 hover:text-purple-400 transition-colors" style={{ color: "#5050a0" }}>
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FEATURED.map((mcp) => <MCPCard key={mcp.id} mcp={mcp} />)}
            </div>
          </section>

          {/* Categories */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
              {CATEGORIES.map((cat) => {
                const Icon = CATEGORY_ICONS[cat] || Globe;
                const count = mcps.filter((m) => m.category === cat).length;
                return (
                  <Link
                    key={cat}
                    href={`/mcp?category=${encodeURIComponent(cat)}`}
                    className="p-4 rounded-xl flex flex-col items-center gap-2 text-center transition-all duration-200 hover:scale-105"
                    style={{
                      background: "rgba(13,13,18,0.8)",
                      border: "1px solid rgba(168,85,247,0.1)",
                    }}
                  >
                    <Icon size={20} style={{ color: "#a855f7" }} />
                    <span className="text-xs font-medium text-white">{cat}</span>
                    <span className="text-xs" style={{ color: "#5050a0" }}>{count}</span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Latest */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                🆕 Latest MCPs
              </h2>
              <Link href="/mcp" className="text-sm flex items-center gap-1 hover:text-purple-400 transition-colors" style={{ color: "#5050a0" }}>
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {LATEST.map((mcp) => <MCPCard key={mcp.id} mcp={mcp} />)}
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/submit"
                className="p-8 rounded-2xl flex items-center justify-between group transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)" }}>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>Submit Your MCP</h3>
                  <p className="text-sm" style={{ color: "#7070a0" }}>Free listing, forever. Share your tools with 500+ builders.</p>
                </div>
                <ArrowRight size={20} style={{ color: "#a855f7" }} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/sponsor"
                className="p-8 rounded-2xl flex items-center justify-between group transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>Become a Sponsor</h3>
                  <p className="text-sm" style={{ color: "#7070a0" }}>Reach founders building autonomous companies. From $99/mo.</p>
                </div>
                <ArrowRight size={20} style={{ color: "#3b82f6" }} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
