"use client";

import Link from "next/link";
import { Moon, Zap, Globe, Code, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{
            background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
            boxShadow: "0 0 40px rgba(168,85,247,0.4)",
          }}
        >
          <Moon size={28} className="text-white" />
        </div>
        <h1
          className="text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
        >
          About SleepyCoFounder.tools
        </h1>
        <p className="text-base" style={{ color: "#7070a0", lineHeight: "1.8" }}>
          The cursor.directory for autonomous company builders.
        </p>
      </div>

      {/* Story */}
      <div
        className="p-8 rounded-2xl mb-8"
        style={{ background: "rgba(13,13,18,0.8)", border: "1px solid rgba(168,85,247,0.12)" }}
      >
        <h2 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          The Story
        </h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#8080a0" }}>
          <p>
            In early 2026, Polsia launched and showed the world something wild: a single AI system that could run entire companies autonomously — shipping code, managing ops, handling outreach, analyzing metrics — while founders slept.
          </p>
          <p>
            Polsia and systems like it are powered by <strong className="text-white">Model Context Protocol (MCP)</strong> — a standard for connecting AI agents to real-world tools like GitHub, Stripe, Gmail, Slack, and thousands more.
          </p>
          <p>
            But there was no central place to discover MCPs designed for <em className="text-violet-400">business-first, agent-first</em> use cases. cursor.directory nailed this for Cursor IDE rules. We built SleepyCoFounder.tools to do the same for autonomous companies.
          </p>
        </div>
      </div>

      {/* What we are */}
      <div
        className="p-8 rounded-2xl mb-8"
        style={{ background: "rgba(13,13,18,0.8)", border: "1px solid rgba(168,85,247,0.12)" }}
      >
        <h2 className="text-lg font-bold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
          What we are
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              icon: Globe,
              title: "Open directory",
              desc: "Anyone can submit an MCP. We review and publish within 24h. Free, forever.",
            },
            {
              icon: Zap,
              title: "Business-focused",
              desc: "We specifically curate MCPs for autonomous business operations: marketing, finance, ops, inbox, CRM.",
            },
            {
              icon: Code,
              title: "Polsia-compatible tags",
              desc: "We test and tag MCPs that work seamlessly with Polsia-style agentic loops.",
            },
            {
              icon: Heart,
              title: "Community-built",
              desc: "Inspired by cursor.directory. Built lean, no VC, high-margin. For builders, by a builder.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)" }}
              >
                <item.icon size={14} style={{ color: "#a855f7" }} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6060a0" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ecosystem */}
      <div
        className="p-8 rounded-2xl mb-12"
        style={{ background: "rgba(13,13,18,0.8)", border: "1px solid rgba(168,85,247,0.12)" }}
      >
        <h2 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          The Ecosystem
        </h2>
        <div className="space-y-3">
          {[
            {
              name: "Polsia",
              desc: "AI that runs your company while you sleep",
              href: "https://polsia.com",
              badge: "Inspiration",
            },
            {
              name: "MCPHub",
              desc: "Official Polsia MCP marketplace (85% to creators)",
              href: "https://mcphub.polsia.app",
              badge: "Marketplace",
            },
            {
              name: "cursor.directory",
              desc: "The OG — community rules for Cursor IDE",
              href: "https://cursor.directory",
              badge: "Inspiration",
            },
            {
              name: "Model Context Protocol",
              desc: "The open standard powering all of this",
              href: "https://modelcontextprotocol.io",
              badge: "Protocol",
            },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.3)";
                (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.05)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
              }}
            >
              <div>
                <span className="text-sm font-medium text-white">{link.name}</span>
                <p className="text-xs mt-0.5" style={{ color: "#5050a0" }}>{link.desc}</p>
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: "rgba(168,85,247,0.1)", color: "#a855f7" }}
              >
                {link.badge}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/submit"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
          style={{
            background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
            color: "#fff",
            boxShadow: "0 0 24px rgba(168,85,247,0.3)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <Zap size={14} />
          Submit Your MCP
        </Link>
        <Link
          href="/sponsor"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
          style={{
            background: "rgba(255,255,255,0.04)",
            color: "#e2e2f0",
            border: "1px solid rgba(168,85,247,0.2)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Become a Sponsor
        </Link>
      </div>
    </div>
  );
}
