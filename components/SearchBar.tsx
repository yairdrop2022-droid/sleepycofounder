"use client";

import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

export function SearchBar({ placeholder = "Search for a business MCP or autonomous tool..." }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [isPending, startTransition] = useTransition();

  const handleSearch = (value: string) => {
    setQuery(value);
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set("q", value);
      } else {
        params.delete("q");
      }
      router.push(`/mcp?${params.toString()}`);
    });
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-xl blur-xl opacity-30"
        style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}
      />
      <div className="relative flex items-center">
        <Search
          size={18}
          className="absolute left-4 z-10"
          style={{ color: "#6060a0" }}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-4 rounded-xl text-sm"
          style={{
            background: "rgba(13,13,18,0.9)",
            border: "1px solid rgba(168,85,247,0.25)",
            color: "#e2e2f0",
            fontFamily: "'DM Sans', sans-serif",
          }}
        />
        {query && (
          <button
            onClick={() => handleSearch("")}
            className="absolute right-4 z-10 transition-colors"
            style={{ color: "#6060a0" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#a855f7")}
            onMouseLeave={e => (e.currentTarget.style.color = "#6060a0")}
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
