import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "SleepyCoFounder.tools — MCP Directory for Autonomous Companies",
  description:
    "The home for AI agents that run your company while you sleep. Browse, submit and discover MCP servers for Polsia-style autonomous businesses.",
  keywords: ["MCP", "Model Context Protocol", "Polsia", "autonomous agents", "AI company", "cursor directory"],
  authors: [{ name: "SleepyCoFounder" }],
  openGraph: {
    title: "SleepyCoFounder.tools",
    description: "MCP Directory for Polsia-style Autonomous Companies",
    url: "https://sleepycofounder.tools",
    siteName: "SleepyCoFounder.tools",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SleepyCoFounder.tools",
    description: "MCP Directory for Polsia-style Autonomous Companies",
    images: ["/og.png"],
  },
  metadataBase: new URL("https://sleepycofounder.tools"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col" style={{ background: "#060608" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
