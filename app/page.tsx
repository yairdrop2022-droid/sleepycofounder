"use client";

import { useState } from "react";
import { Zap, Check, AlertCircle, ChevronDown } from "lucide-react";
import { CATEGORIES, ALL_TAGS } from "@/lib/data";
import { slugify } from "@/lib/utils";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type FormState = "idle" | "loading" | "success" | "error";

const INPUT_STYLE = {
  background: "rgba(13,13,18,0.9)",
  border: "1px solid rgba(168,85,247,0.15)",
  color: "#e2e2f0",
  fontFamily: "'DM Sans', sans-serif",
  borderRadius: "10px",
  padding: "12px 16px",
  fontSize: "14px",
  width: "100%",
  outline: "none",
};

const LABEL_STYLE = {
  fontSize: "13px",
  fontWeight: "500",
  color: "#8080a0",
  fontFamily: "'DM Sans', sans-serif",
  marginBottom: "6px",
  display: "block",
};

export default function SubmitPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    github_url: "",
    mcp_config_json: "",
    category: "",
    author_name: "",
    author_twitter: "",
    is_polsia_compatible: false,
  });

  const handleChange = (key: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      // Parse JSON config
      let mcp_config = {};
      if (formData.mcp_config_json) {
        try {
          mcp_config = JSON.parse(formData.mcp_config_json);
        } catch {
          throw new Error("Invalid JSON in MCP config — please check the format.");
        }
      }

      const payload = {
        name: formData.name,
        slug: slugify(formData.name),
        description: formData.description,
        long_description: formData.description,
        github_url: formData.github_url,
        mcp_config,
        tags: selectedTags,
        category: formData.category,
        author: formData.author_name,
        author_twitter: formData.author_twitter,
        is_polsia_compatible: formData.is_polsia_compatible,
        is_featured: false,
        price_type: "free",
      };

      const { error } = await supabase.from("mcps").insert(payload);

      if (error) {
        // Handle duplicate slug
        if (error.code === "23505") {
          throw new Error("An MCP with this name already exists. Please choose a different name.");
        }
        throw new Error(error.message);
      }

      setState("success");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(message);
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}
        >
          <Check size={24} style={{ color: "#4ade80" }} />
        </div>
        <h2
          className="text-2xl font-bold text-white mb-3"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          MCP Submitted! 🎉
        </h2>
        <p className="text-sm mb-8" style={{ color: "#7070a0" }}>
          Your MCP is now saved and under review. We'll publish it within 24 hours if it meets our guidelines.
        </p>
        <button
          onClick={() => {
            setState("idle");
            setErrorMsg("");
            setFormData({
              name: "",
              description: "",
              github_url: "",
              mcp_config_json: "",
              category: "",
              author_name: "",
              author_twitter: "",
              is_polsia_compatible: false,
            });
            setSelectedTags([]);
          }}
          className="px-6 py-3 rounded-xl text-sm font-semibold"
          style={{
            background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
            color: "#fff",
          }}
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
          style={{
            background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
            boxShadow: "0 0 24px rgba(168,85,247,0.4)",
          }}
        >
          <Zap size={20} className="text-white" />
        </div>
        <h1
          className="text-3xl font-bold text-white mb-3"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
        >
          Submit Your MCP
        </h1>
        <p className="text-sm" style={{ color: "#7070a0" }}>
          Share your MCP server with 500+ autonomous company builders. Free listing, forever.
        </p>
      </div>

      {state === "error" && (
        <div
          className="flex items-center gap-3 p-4 rounded-xl mb-6"
          style={{
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.2)",
          }}
        >
          <AlertCircle size={16} style={{ color: "#f87171" }} />
          <p className="text-sm" style={{ color: "#f87171" }}>
            {errorMsg || "Something went wrong. Please check your JSON and try again."}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div
          className="p-6 rounded-2xl space-y-5"
          style={{
            background: "rgba(13,13,18,0.8)",
            border: "1px solid rgba(168,85,247,0.12)",
          }}
        >
          <h3
            className="text-sm font-semibold text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Basic Information
          </h3>

          <div>
            <label style={LABEL_STYLE}>
              MCP Name <span style={{ color: "#a855f7" }}>*</span>
            </label>
            <input
              style={INPUT_STYLE}
              type="text"
              required
              placeholder="e.g. Stripe Payments MCP"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div>
            <label style={LABEL_STYLE}>
              Description <span style={{ color: "#a855f7" }}>*</span>
            </label>
            <textarea
              style={{ ...INPUT_STYLE, resize: "vertical", minHeight: "80px" }}
              required
              placeholder="What does this MCP do for autonomous companies?"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          <div>
            <label style={LABEL_STYLE}>
              GitHub URL <span style={{ color: "#a855f7" }}>*</span>
            </label>
            <input
              style={INPUT_STYLE}
              type="url"
              required
              placeholder="https://github.com/your-org/your-mcp"
              value={formData.github_url}
              onChange={(e) => handleChange("github_url", e.target.value)}
            />
          </div>

          <div>
            <label style={LABEL_STYLE}>
              Category <span style={{ color: "#a855f7" }}>*</span>
            </label>
            <div className="relative">
              <select
                style={{ ...INPUT_STYLE, appearance: "none", cursor: "pointer" }}
                required
                value={formData.category}
                onChange={(e) => handleChange("category", e.target.value)}
              >
                <option value="">Select a category...</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: "#6060a0" }}
              />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div
          className="p-6 rounded-2xl"
          style={{
            background: "rgba(13,13,18,0.8)",
            border: "1px solid rgba(168,85,247,0.12)",
          }}
        >
          <h3
            className="text-sm font-semibold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Tags
            <span className="ml-2 text-xs font-normal" style={{ color: "#5050a0" }}>
              ({selectedTags.length} selected)
            </span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((tag) => {
              const isActive = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className="text-xs px-3 py-1.5 rounded-lg transition-all duration-150"
                  style={{
                    background: isActive
                      ? "rgba(168,85,247,0.15)"
                      : "rgba(255,255,255,0.04)",
                    color: isActive ? "#a855f7" : "#6060a0",
                    border: `1px solid ${
                      isActive
                        ? "rgba(168,85,247,0.3)"
                        : "rgba(255,255,255,0.06)"
                    }`,
                  }}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* MCP Config */}
        <div
          className="p-6 rounded-2xl"
          style={{
            background: "rgba(13,13,18,0.8)",
            border: "1px solid rgba(168,85,247,0.12)",
          }}
        >
          <h3
            className="text-sm font-semibold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            MCP Config JSON
            <span className="ml-2 text-xs font-normal" style={{ color: "#5050a0" }}>
              (optional but recommended)
            </span>
          </h3>
          <textarea
            style={{
              ...INPUT_STYLE,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              minHeight: "140px",
              resize: "vertical",
            }}
            placeholder={`{
  "mcpServers": {
    "my-mcp": {
      "command": "npx",
      "args": ["-y", "@my-org/my-mcp"],
      "env": { "API_KEY": "YOUR_KEY" }
    }
  }
}`}
            value={formData.mcp_config_json}
            onChange={(e) => handleChange("mcp_config_json", e.target.value)}
          />
          <p className="text-xs mt-2" style={{ color: "#4040a0" }}>
            This config is what users copy to connect your MCP to their agents.
          </p>
        </div>

        {/* Author */}
        <div
          className="p-6 rounded-2xl space-y-5"
          style={{
            background: "rgba(13,13,18,0.8)",
            border: "1px solid rgba(168,85,247,0.12)",
          }}
        >
          <h3
            className="text-sm font-semibold text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Author
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label style={LABEL_STYLE}>Your Name / Org</label>
              <input
                style={INPUT_STYLE}
                type="text"
                placeholder="e.g. Polsia Inc"
                value={formData.author_name}
                onChange={(e) => handleChange("author_name", e.target.value)}
              />
            </div>
            <div>
              <label style={LABEL_STYLE}>Twitter / X Handle</label>
              <input
                style={INPUT_STYLE}
                type="text"
                placeholder="@yourhandle"
                value={formData.author_twitter}
                onChange={(e) =>
                  handleChange("author_twitter", e.target.value)
                }
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded"
                style={{ accentColor: "#a855f7" }}
                checked={formData.is_polsia_compatible}
                onChange={(e) =>
                  handleChange("is_polsia_compatible", e.target.checked)
                }
              />
              <div>
                <span
                  className="text-sm text-white"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Polsia Compatible
                </span>
                <p className="text-xs mt-0.5" style={{ color: "#5050a0" }}>
                  I've tested this MCP with Polsia or similar agentic loop
                  systems
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200"
          style={{
            background:
              state === "loading"
                ? "rgba(168,85,247,0.3)"
                : "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
            color: "#fff",
            boxShadow:
              state === "loading" ? "none" : "0 0 32px rgba(168,85,247,0.3)",
            cursor: state === "loading" ? "not-allowed" : "pointer",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {state === "loading" ? (
            <>
              <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Zap size={16} />
              Submit MCP to Directory
            </>
          )}
        </button>

        <p className="text-xs text-center" style={{ color: "#4040a0" }}>
          Free listing. We review all submissions within 24h. No spam, ever.
        </p>
      </form>
    </div>
  );
}
