"use client";

import Link from "next/link";
import { Moon, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="mt-32"
      style={{ borderTop: "1px solid rgba(168,85,247,0.12)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)" }}
              >
                <Moon size={14} className="text-white" />
              </div>
              <span
                className="font-bold text-white text-sm"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                SleepyCoFounder<span style={{ color: "#a855f7" }}>.tools</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "#6060a0" }}>
              The home for MCP servers that power autonomous AI companies.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://twitter.com/sleepycofounder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors"
                style={{ color: "#6060a0", background: "rgba(255,255,255,0.03)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#a855f7")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6060a0")}
              >
                <Twitter size={14} />
              </a>
              <a
                href="https://github.com/sleepycofounder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors"
                style={{ color: "#6060a0", background: "rgba(255,255,255,0.03)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#a855f7")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6060a0")}
              >
                <Github size={14} />
              </a>
            </div>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#4040a0" }}>
              Directory
            </h4>
            <ul className="space-y-2">
              {["Browse MCPs", "Featured", "Marketing", "Finance", "DevOps"].map((item) => (
                <li key={item}>
                  <Link
                    href="/mcp"
                    className="text-sm transition-colors"
                    style={{ color: "#6060a0" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#a855f7")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#6060a0")}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#4040a0" }}>
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Submit MCP", href: "/submit" },
                { label: "Sponsor Us", href: "/sponsor" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors"
                    style={{ color: "#6060a0" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#a855f7")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#6060a0")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#4040a0" }}>
              Ecosystem
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Polsia", href: "https://polsia.com" },
                { label: "MCPHub", href: "https://mcphub.polsia.app" },
                { label: "cursor.directory", href: "https://cursor.directory" },
                { label: "MCP Protocol", href: "https://modelcontextprotocol.io" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors"
                    style={{ color: "#6060a0" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#a855f7")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#6060a0")}
                  >
                    {item.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid rgba(168,85,247,0.08)" }}
        >
          <p className="text-xs" style={{ color: "#3a3a6a" }}>
            © 2026 SleepyCoFounder.tools — Built for autonomous founders
          </p>
          <p className="text-xs" style={{ color: "#3a3a6a" }}>
            Inspired by{" "}
            <a href="https://cursor.directory" className="hover:text-violet-400 transition-colors" style={{ color: "#5050a0" }}>
              cursor.directory
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
