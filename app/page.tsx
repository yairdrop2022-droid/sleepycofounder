"use client";

import { useState } from "react";
import { Search, ChevronDown, Zap, Shield, TrendingUp, Star, ExternalLink, Copy, Check } from "lucide-react";
import { SEED_MCPS, CATEGORIES } from "@/lib/data";
import { MCPCard } from "@/components/MCPCard";
import Link from "next/link";

const STATS = [
  { label: "MCP Servers", value: "105+", icon: Zap },
  { label: "Categories", value: "14", icon: Shield },
  { label: "Polsia Compatible", value: "105", icon: TrendingUp },
  { label: "Companies Powered", value: "500+", icon: Star },
];

const POLSIA_STACK = [
  { name: "Git", description: "Version control integration", icon: "📚" },
  { name: "Filesystem", description: "File system operations", icon: "📁" },
  { name: "Fetch", description: "HTTP requests", icon: "🌐" },
  { name: "Memory", description: "Agent memory", icon: "🧠" },
  { name: "Twitter Read", description: "Social media monitoring", icon: "🐦" },
  { name: "Sequential Thinking", description: "Step-by-step reasoning", icon: "🔄" },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredMcps = SEED_MCPS.filter((mcp) => {
    const matchesSearch = mcp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mcp.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || mcp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredMcps = filteredMcps.filter(m => m.is_featured).slice(0, 3);
  const latestMcps = filteredMcps.slice(0, 6);

  const handleCopyConfig = (config: string) => {
    navigator.clipboard.writeText(config);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
            🌙 Agents that work while you sleep
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            MCP Directory for{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Polsia-style
            </span>{" "}
            Autonomous Companies
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The home for AI agents that run your company while you sleep. Discover, integrate, and scale with Polsia-compatible MCPs.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mt-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for a business MCP or autonomous tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-500"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="p-4 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-purple-500/50 transition">
                  <Icon className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                  <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured MCPs Section */}
      {featuredMcps.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            ⭐ Featured MCPs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMcps.map((mcp) => (
              <MCPCard key={mcp.id} mcp={mcp} onCopyConfig={handleCopyConfig} />
            ))}
          </div>
        </section>
      )}

      {/* Polsia Stack Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-gray-800">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
            🟣 Polsia Stack{" "}
            <span className="text-sm font-normal bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
              Seen in live demo
            </span>
          </h2>
          <p className="text-gray-400">
            The core MCPs that power Polsia's autonomous companies — as seen in their live demonstrations.{" "}
            <a href="https://polsia.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
              Learn more about Polsia →
            </a>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {POLSIA_STACK.map((tool) => (
            <div key={tool.name} className="p-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-lg hover:border-purple-500/60 transition">
              <div className="text-3xl mb-2">{tool.icon}</div>
              <h3 className="font-semibold mb-1">{tool.name}</h3>
              <p className="text-sm text-gray-400">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Category */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
              className={`p-4 rounded-lg border transition ${
                selectedCategory === cat.name
                  ? "bg-purple-500/20 border-purple-500"
                  : "bg-gray-900/30 border-gray-800 hover:border-purple-500/50"
              }`}
            >
              <div className="text-2xl mb-2">{cat.icon}</div>
              <p className="font-semibold text-sm">{cat.name}</p>
              <p className="text-xs text-gray-400 mt-1">{SEED_MCPS.filter(m => m.category === cat.name).length} tools</p>
            </button>
          ))}
        </div>
      </section>

      {/* Latest MCPs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Latest MCPs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestMcps.map((mcp) => (
            <MCPCard key={mcp.id} mcp={mcp} onCopyConfig={handleCopyConfig} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 border-t border-gray-800">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Submit CTA */}
          <Link href="/submit" className="group p-8 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-lg hover:border-purple-500/60 hover:bg-purple-500/20 transition">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              📤 Submit your MCP
            </h3>
            <p className="text-gray-400 mb-4">
              Have a tool that integrates with Polsia-style autonomous companies? Submit it to our directory.
            </p>
            <span className="text-purple-400 font-medium group-hover:gap-2 inline-flex items-center gap-1 transition">
              Submit now →
            </span>
          </Link>

          {/* Sponsor CTA */}
          <Link href="/sponsor" className="group p-8 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-lg hover:border-blue-500/60 hover:bg-blue-500/20 transition">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              💰 Become a Sponsor
            </h3>
            <p className="text-gray-400 mb-4">
              Feature your MCP to thousands of founders building autonomous companies.
            </p>
            <span className="text-blue-400 font-medium group-hover:gap-2 inline-flex items-center gap-1 transition">
              See plans →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
