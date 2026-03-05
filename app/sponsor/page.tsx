"use client";

import { Check, Zap, Star, Crown, ArrowRight, TrendingUp, Users, Eye } from "lucide-react";
import Link from "next/link";

const TIERS = [
  {
    name: "Featured",
    price: "99",
    period: "/month",
    description: "Get your MCP at the top of the directory with a Featured badge.",
    icon: Star,
    color: "#a855f7",
    glow: "rgba(168,85,247,0.3)",
    popular: false,
    features: [
      "Featured badge on your MCP card",
      "Top-of-grid placement in all relevant categories",
      "Highlighted in Featured MCPs section on homepage",
      "Bold listing in search results",
      "Monthly performance report",
    ],
    cta: "Book Featured Slot",
    href: "#contact",
  },
  {
    name: "Spotlight",
    price: "299",
    period: " one-time",
    description: "7-day homepage hero placement. Maximum visibility for a launch.",
    icon: Zap,
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.3)",
    popular: true,
    features: [
      "Homepage hero banner for 7 days",
      "\"Sponsored\" label (clearly marked)",
      "Link to your GitHub / landing page",
      "Pinned to top of Browse MCPs page",
      "Social post announcement",
      "1 month Featured listing included",
    ],
    cta: "Book Spotlight",
    href: "#contact",
  },
  {
    name: "Premium Partner",
    price: "799",
    period: "/month",
    description: "Full partnership. Logo in footer, newsletter, and dedicated category page.",
    icon: Crown,
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.3)",
    popular: false,
    features: [
      "Logo in site footer (permanent while active)",
      "Feature in weekly newsletter (2k+ subscribers)",
      "Dedicated category page sponsorship",
      "Custom landing page on SleepyCoFounder.tools",
      "Quarterly strategy call",
      "All Featured benefits included",
    ],
    cta: "Become a Partner",
    href: "#contact",
  },
];

const STATS = [
  { label: "Monthly visitors", value: "10k+", icon: Eye },
  { label: "MCP builders", value: "500+", icon: Users },
  { label: "Autonomous companies", value: "1k+", icon: TrendingUp },
  { label: "MCP servers listed", value: "15+", icon: Zap },
];

export default function SponsorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
          style={{
            background: "rgba(168,85,247,0.1)",
            border: "1px solid rgba(168,85,247,0.25)",
            color: "#a855f7",
          }}
        >
          <Star size={12} />
          Advertising — No tracking, no BS
        </div>
        <h1
          className="text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
        >
          Reach Autonomous
          <br />
          Company Builders
        </h1>
        <p className="text-base max-w-lg mx-auto" style={{ color: "#7070a0", lineHeight: "1.7" }}>
          SleepyCoFounder.tools is the go-to directory for developers and founders building with Polsia-style autonomous agents.
          Reach them where they discover MCPs.
        </p>
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6 rounded-2xl"
        style={{ background: "rgba(13,13,18,0.8)", border: "1px solid rgba(168,85,247,0.12)" }}
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <stat.icon size={18} className="mx-auto mb-2" style={{ color: "#a855f7" }} />
            <div
              className="text-2xl font-bold text-white mb-1"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {stat.value}
            </div>
            <div className="text-xs" style={{ color: "#5050a0" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Pricing tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className="relative rounded-2xl p-6 flex flex-col"
            style={{
              background: tier.popular
                ? "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(168,85,247,0.08) 100%)"
                : "rgba(13,13,18,0.8)",
              border: `1px solid ${tier.popular ? "rgba(59,130,246,0.4)" : "rgba(168,85,247,0.12)"}`,
              boxShadow: tier.popular ? `0 0 40px ${tier.glow}` : "none",
            }}
          >
            {tier.popular && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #a855f7)",
                  color: "#fff",
                }}
              >
                Most Popular
              </div>
            )}

            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}30` }}
            >
              <tier.icon size={18} style={{ color: tier.color }} />
            </div>

            <h3
              className="text-lg font-bold text-white mb-1"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {tier.name}
            </h3>

            <div className="flex items-baseline gap-1 mb-3">
              <span
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                ${tier.price}
              </span>
              <span className="text-sm" style={{ color: "#6060a0" }}>
                {tier.period}
              </span>
            </div>

            <p className="text-sm mb-6 leading-relaxed" style={{ color: "#7070a0" }}>
              {tier.description}
            </p>

            <ul className="space-y-3 flex-1 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}30` }}
                  >
                    <Check size={10} style={{ color: tier.color }} />
                  </div>
                  <span className="text-sm" style={{ color: "#8080a0" }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:sponsor@sleepycofounder.tools"
              className="w-full py-3 rounded-xl text-sm font-semibold text-center flex items-center justify-center gap-2 transition-all duration-200"
              style={{
                background: tier.popular
                  ? "linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)"
                  : `${tier.color}15`,
                color: tier.popular ? "#fff" : tier.color,
                border: tier.popular ? "none" : `1px solid ${tier.color}30`,
                boxShadow: tier.popular ? "0 0 24px rgba(59,130,246,0.3)" : "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {tier.cta}
              <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>

      {/* FAQ / Info */}
      <div
        className="p-8 rounded-2xl mb-10"
        style={{ background: "rgba(13,13,18,0.8)", border: "1px solid rgba(168,85,247,0.12)" }}
      >
        <h2
          className="text-xl font-bold text-white mb-6"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm" style={{ color: "#7070a0" }}>
          <div>
            <h4 className="text-white font-medium mb-2">No hidden trackers</h4>
            <p>We don't serve programmatic ads or share your data with ad networks. Sponsorship is direct — you pay us, we give you visibility.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Clearly labeled</h4>
            <p>All sponsored placements are marked as "Sponsored" or "Featured". We believe in transparency with our community.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Audience quality</h4>
            <p>Our visitors are actively building or deploying autonomous agents. High intent, technical founders — exactly who you want to reach.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Easy booking</h4>
            <p>Email us at sponsor@sleepycofounder.tools with your MCP name and desired tier. We'll confirm within 48h and invoice via Stripe.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-sm mb-4" style={{ color: "#5050a0" }}>
          Questions? Want a custom arrangement?
        </p>
        <a
          href="mailto:sponsor@sleepycofounder.tools"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
          style={{
            background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
            color: "#fff",
            boxShadow: "0 0 32px rgba(168,85,247,0.3)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <Star size={16} />
          Contact Us About Sponsorship
        </a>
      </div>
    </div>
  );
}
