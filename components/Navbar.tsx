"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Moon, Zap } from "lucide-react";

const links = [
  { href: "/mcp", label: "Browse MCPs" },
  { href: "/submit", label: "Submit" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        background: "rgba(6,6,8,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(168,85,247,0.12)",
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
                boxShadow: "0 0 16px rgba(168,85,247,0.4)",
              }}
            >
              <Moon size={16} className="text-white" />
            </div>
            <span
              className="font-display font-bold text-white text-sm sm:text-base"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
            >
              SleepyCoFounder
              <span style={{ color: "#a855f7" }}>.tools</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm rounded-lg transition-all duration-200"
                style={{ color: "#9090b0", fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#fff";
                  (e.target as HTMLElement).style.background = "rgba(168,85,247,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "#9090b0";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/submit"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 0 20px rgba(168,85,247,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(168,85,247,0.5)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(168,85,247,0.3)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <Zap size={14} />
              Submit MCP
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#9090b0" }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-4 pb-4 pt-2"
          style={{ borderTop: "1px solid rgba(168,85,247,0.1)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-sm"
              style={{ color: "#9090b0", fontFamily: "'DM Sans', sans-serif" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/submit"
            className="mt-3 block text-center py-3 rounded-lg text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
              color: "#fff",
            }}
            onClick={() => setOpen(false)}
          >
            Submit MCP
          </Link>
        </div>
      )}
    </nav>
  );
}
