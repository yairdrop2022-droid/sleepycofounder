"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, Copy, Check, ExternalLink, Zap, Shield } from "lucide-react";
import type { MCP } from "@/lib/data";
import { formatStars } from "@/lib/utils";

const CATEGORY_COLORS: Record<string, string> = {
  Marketing: "#a855f7",
  Finance: "#22c55e",
  Operations: "#3b82f6",
  Inbox: "#f59e0b",
  "Social Media": "#ec4899",
  Analytics: "#06b6d4",
  DevOps: "#f97316",
  CRM: "#8b5cf6",
  Automation: "#14b8a6",
  Database: "#6366f1",
};

export function MCPCard({ mcp, onCopyConfig }: { mcp: MCP; onCopyConfig: (config: string) => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const config = JSON.stringify(mcp.mcp_config, null, 2);
    onCopyConfig(config);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const catColor = CATEGORY_COLORS[mcp.category] || "#a855f7";

  return (
    <div
      className="mcp-card relative rounded-xl p-5 flex flex-col gap-3"
      style={{
        background: "rgba(13,13,18,0.8)",
        border: "1px solid rgba(168,85,247,0.12)",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{
                background: `${catColor}15`,
                color: catColor,
                border: `1px solid ${catColor}30`,
              }}
            >
              {mcp.category}
            </span>
            {mcp.is_featured && (
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium badge-live"
                style={{
                  background: "rgba(168,85,247,0.15)",
                  color: "#a855f7",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                ★ Featured
              </span>
            )}
            {mcp.is_polsia_compatible && (
              <span
                className="text-xs px-2 py-0.5 rounded-full flex items-center gap-1"
                style={{
                  background: "rgba(59,130,246,0.1)",
                  color: "#60a5fa",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                <Shield size={10} />
                Polsia
              </span>
            )}
          </div>
          <h3
            className="mt-2 font-semibold text-white text-base leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {mcp.name}
          </h3>
        </div>
        {mcp.stars && (
          <div className="flex items-center gap-1 shrink-0" style={{ color: "#6060a0" }}>
            <Star size={12} />
            <span className="text-xs">{formatStars(mcp.stars)}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "#9090b0" }}>
        {mcp.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {mcp.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-md"
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "#6060a0",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {tag}
          </span>
        ))}
        {mcp.tags.length > 4 && (
          <span className="text-xs px-2 py-0.5 rounded-md" style={{ color: "#4040a0" }}>
            +{mcp.tags.length - 4}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex items-center gap-1.5">
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              background: mcp.price_type === "free" ? "rgba(34,197,94,0.1)" : "rgba(168,85,247,0.1)",
              color: mcp.price_type === "free" ? "#4ade80" : "#a855f7",
            }}
          >
            {mcp.price_type === "free" ? "Free" : mcp.price_type === "paid" ? "Paid" : "Subscription"}
          </span>
          <span className="text-xs" style={{ color: "#3a3a6a" }}>
            by {mcp.author}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
            style={{
              background: copied ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.04)",
              color: copied ? "#4ade80" : "#7070a0",
              border: `1px solid ${copied ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.06)"}`,
            }}
            title="Copy MCP config"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? "Copied!" : "Copy"}
          </button>
          {mcp.github_url && (
            <a
              href={mcp.github_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
              style={{
                background: "rgba(168,85,247,0.08)",
                color: "#a855f7",
                border: "1px solid rgba(168,85,247,0.2)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(168,85,247,0.15)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(168,85,247,0.08)")}
            >
              <ExternalLink size={12} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function MCPCardSkeleton() {
  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-3"
      style={{ background: "rgba(13,13,18,0.8)", border: "1px solid rgba(168,85,247,0.06)" }}
    >
      <div className="shimmer h-5 w-24 rounded-full" />
      <div className="shimmer h-5 w-3/4 rounded-lg" />
      <div className="shimmer h-4 w-full rounded-lg" />
      <div className="shimmer h-4 w-2/3 rounded-lg" />
      <div className="flex gap-2 mt-1">
        <div className="shimmer h-5 w-16 rounded-md" />
        <div className="shimmer h-5 w-16 rounded-md" />
        <div className="shimmer h-5 w-16 rounded-md" />
      </div>
    </div>
  );
}
