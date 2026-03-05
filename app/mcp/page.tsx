"use client";

import { useState, useMemo, Suspense } from "react";
import { Filter, SlidersHorizontal, X, Shield, Star } from "lucide-react";
import { MCPCard, MCPCardSkeleton } from "@/components/MCPCard";
import { SearchBar } from "@/components/SearchBar";
import { SEED_MCPS, CATEGORIES, ALL_TAGS } from "@/lib/data";
import { useSearchParams } from "next/navigation";

function BrowseContent() {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") || "";
  const urlCategory = searchParams.get("category") || "";
  const urlFeatured = searchParams.get("featured") === "true";

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    urlCategory ? [urlCategory] : []
  );
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [polsiaOnly, setPolsiaOnly] = useState(false);
  const [priceFilter, setPriceFilter] = useState<"all" | "free" | "paid">("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return SEED_MCPS.filter((mcp) => {
      const q = urlQuery.toLowerCase();
      if (
        q &&
        !mcp.name.toLowerCase().includes(q) &&
        !mcp.description.toLowerCase().includes(q) &&
        !mcp.tags.some((t) => t.includes(q)) &&
        !mcp.category.toLowerCase().includes(q)
      ) {
        return false;
      }
      if (urlFeatured && !mcp.is_featured) return false;
      if (selectedCategories.length > 0 && !selectedCategories.includes(mcp.category)) return false;
      if (selectedTags.length > 0 && !selectedTags.some((t) => mcp.tags.includes(t))) return false;
      if (polsiaOnly && !mcp.is_polsia_compatible) return false;
      if (priceFilter !== "all" && mcp.price_type !== priceFilter) return false;
      return true;
    });
  }, [urlQuery, urlFeatured, selectedCategories, selectedTags, polsiaOnly, priceFilter]);

  const toggleCategory = (cat: string) =>
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setPolsiaOnly(false);
    setPriceFilter("all");
  };

  const hasFilters =
    selectedCategories.length > 0 || selectedTags.length > 0 || polsiaOnly || priceFilter !== "all";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-3xl font-bold text-white mb-2"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
        >
          Browse MCPs
        </h1>
        <p className="text-sm" style={{ color: "#6060a0" }}>
          {filtered.length} MCP server{filtered.length !== 1 ? "s" : ""} for autonomous companies
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <SearchBar placeholder="Search MCPs by name, category, or tag..." />
      </div>

      {/* Mobile filter toggle */}
      <button
        className="md:hidden flex items-center gap-2 px-4 py-2 rounded-lg text-sm mb-4"
        style={{ background: "rgba(168,85,247,0.1)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.2)" }}
        onClick={() => setShowFilters(!showFilters)}
      >
        <SlidersHorizontal size={14} />
        Filters {hasFilters && `(${selectedCategories.length + selectedTags.length + (polsiaOnly ? 1 : 0)})`}
      </button>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside
          className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-56 shrink-0`}
        >
          <div className="sticky top-24 space-y-6">
            {hasFilters && (
              <button
                onClick={clearAll}
                className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg"
                style={{ color: "#a855f7", border: "1px solid rgba(168,85,247,0.2)", background: "rgba(168,85,247,0.05)" }}
              >
                <X size={12} /> Clear all filters
              </button>
            )}

            {/* Polsia Compatible */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4040a0" }}>
                Compatibility
              </h3>
              <button
                onClick={() => setPolsiaOnly(!polsiaOnly)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm w-full text-left"
                style={{
                  background: polsiaOnly ? "rgba(59,130,246,0.1)" : "transparent",
                  color: polsiaOnly ? "#60a5fa" : "#7070a0",
                  border: `1px solid ${polsiaOnly ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.05)"}`,
                }}
              >
                <Shield size={13} />
                Polsia Compatible
              </button>
            </div>

            {/* Price */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4040a0" }}>
                Pricing
              </h3>
              <div className="space-y-1">
                {(["all", "free", "paid"] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPriceFilter(p)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm w-full text-left capitalize"
                    style={{
                      background: priceFilter === p ? "rgba(168,85,247,0.1)" : "transparent",
                      color: priceFilter === p ? "#a855f7" : "#7070a0",
                    }}
                  >
                    {p === "all" ? "All" : p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4040a0" }}>
                Categories
              </h3>
              <div className="space-y-1">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategories.includes(cat);
                  const count = SEED_MCPS.filter((m) => m.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => toggleCategory(cat)}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-sm w-full text-left"
                      style={{
                        background: isActive ? "rgba(168,85,247,0.1)" : "transparent",
                        color: isActive ? "#a855f7" : "#7070a0",
                      }}
                    >
                      <span>{cat}</span>
                      <span className="text-xs" style={{ color: isActive ? "#a855f7" : "#3a3a6a" }}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Popular Tags */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4040a0" }}>
                Tags
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {ALL_TAGS.slice(0, 12).map((tag) => {
                  const isActive = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className="text-xs px-2 py-1 rounded-md"
                      style={{
                        background: isActive ? "rgba(168,85,247,0.15)" : "rgba(255,255,255,0.04)",
                        color: isActive ? "#a855f7" : "#6060a0",
                        border: `1px solid ${isActive ? "rgba(168,85,247,0.3)" : "rgba(255,255,255,0.06)"}`,
                      }}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1 min-w-0">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                No MCPs found
              </h3>
              <p className="text-sm" style={{ color: "#6060a0" }}>
                Try adjusting your filters or{" "}
                <button onClick={clearAll} style={{ color: "#a855f7" }} className="underline">
                  clear all
                </button>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((mcp) => (
                <MCPCard key={mcp.id} mcp={mcp} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MCPBrowsePage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => <MCPCardSkeleton key={i} />)}
      </div>
    }>
      <BrowseContent />
    </Suspense>
  );
}
