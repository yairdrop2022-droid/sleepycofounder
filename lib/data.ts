export type MCP = {
  id: string;
  created_at: string;
  name: string;
  slug: string;
  description: string;
  long_description: string;
  github_url: string;
  mcp_config: Record<string, unknown>;
  tags: string[];
  category: string;
  author: string;
  author_twitter: string;
  is_featured: boolean;
  is_polsia_compatible: boolean;
  price_type: "free" | "paid" | "subscription";
  stars?: number;
};

export const CATEGORIES = [
  "Marketing", "Operations", "Finance", "Inbox", "Social Media",
  "Analytics", "DevOps", "CRM", "Automation", "Database",
  "E-Commerce", "HR & Recruiting", "Customer Support", "AI & Agents",
];

export const ALL_TAGS = [
  "twitter", "linkedin", "email", "stripe", "github", "notion",
  "postgres", "analytics", "calendar", "automation", "crm", "inbox",
  "payments", "outreach", "reporting", "scheduling", "git", "deployment",
  "slack", "zapier", "hubspot", "seo", "monitoring", "polsia-stack",
  "search", "browser", "memory", "filesystem", "xero", "shopify",
  "ecommerce", "airtable", "jira", "asana", "figma", "google-drive",
  "gmail", "whatsapp", "discord", "telegram", "twilio", "sendgrid",
  "mailchimp", "salesforce", "intercom", "zendesk", "freshdesk",
  "bamboohr", "gusto", "quickbooks", "docusign", "aws", "cloudflare",
  "supabase", "redis", "mongodb", "elasticsearch", "openai", "vector",
];

export const SEED_MCPS: MCP[] = [
  {
    id: "1",
    created_at: "2026-01-30T10:00:00Z",
    name: "Polsia Twitter Read MCP",
    slug: "polsia-twitter-read",
    description: "Official Polsia-Inc MCP. Real-time X/Twitter metrics: impressions, engagement, mentions. Seen live in the Polsia demo.",
    long_description: "The only MCP officially published by Polsia-Inc on GitHub. Connects your agents to X/Twitter to read engagement metrics, account mentions, and tweet performance. Tested in production in the Polsia live demo. Available on LobeHub.",
    github_url: "https://github.com/Polsia-Inc/twitter-read-mcp",
    mcp_config: {
      "mcpServers": {
            "polsia-inc-twitter-read-mcp": {
                  "command": "node",
                  "args": [
                        "/path/to/twitter-read-mcp/build/index.js"
                  ],
                  "env": {
                        "TWITTER_BEARER_TOKEN": "YOUR_BEARER_TOKEN"
                  }
            }
      }
},
    tags: ["twitter", "social media", "analytics", "outreach", "polsia-stack"],
    category: "Social Media",
    author: "Polsia Inc",
    author_twitter: "@polsia",
    is_featured: true,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 847,
  },
  {
    id: "2",
    created_at: "2026-02-01T10:00:00Z",
    name: "Git Operations MCP",
    slug: "git-operations",
    description: "Seen in the Polsia live demo: git log, diff, status, commit. Essential for any autonomous dev agent.",
    long_description: "Directly used by Polsia in its live demo. Lets agents read git history, create commits, inspect branches and track code changes autonomously. Official MCP reference.",
    github_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/git",
    mcp_config: {
      "mcpServers": {
            "git": {
                  "command": "uvx",
                  "args": [
                        "mcp-server-git",
                        "--repository",
                        "/path/to/repo"
                  ]
            }
      }
},
    tags: ["git", "devops", "code", "repository", "polsia-stack"],
    category: "DevOps",
    author: "Anthropic",
    author_twitter: "@anthropic",
    is_featured: true,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 4201,
  },
  {
    id: "3",
    created_at: "2026-02-01T10:00:00Z",
    name: "Filesystem MCP",
    slug: "filesystem",
    description: "Seen in the Polsia live demo: tail -f logs, find, read configs. The Swiss army knife of any autonomous stack.",
    long_description: "The filesystem MCP is Polsia's Swiss army knife: read logs in real time (tail -f), search files (find), read configs, write reports. Visible in every Polsia demo.",
    github_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem",
    mcp_config: {
      "mcpServers": {
            "filesystem": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@modelcontextprotocol/server-filesystem",
                        "/allowed/path"
                  ]
            }
      }
},
    tags: ["filesystem", "files", "logs", "shell", "polsia-stack"],
    category: "Operations",
    author: "Anthropic",
    author_twitter: "@anthropic",
    is_featured: true,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 5892,
  },
  {
    id: "4",
    created_at: "2026-02-01T10:00:00Z",
    name: "Fetch / Web MCP",
    slug: "fetch-web",
    description: "Seen in the Polsia live demo: scrape competitors, read docs, monitor your site. HTML to Markdown for agents.",
    long_description: "Lets Polsia agents browse the web autonomously: scrape competitor pages, read technical docs, check site status, extract public data. Auto-converts HTML to Markdown.",
    github_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/fetch",
    mcp_config: {
      "mcpServers": {
            "fetch": {
                  "command": "uvx",
                  "args": [
                        "mcp-server-fetch"
                  ]
            }
      }
},
    tags: ["web", "scraping", "fetch", "monitoring", "polsia-stack"],
    category: "Operations",
    author: "Anthropic",
    author_twitter: "@anthropic",
    is_featured: true,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 3412,
  },
  {
    id: "5",
    created_at: "2026-02-02T10:00:00Z",
    name: "Memory / Knowledge Graph MCP",
    slug: "memory-knowledge-graph",
    description: "Persistent memory for agents via graph. Your agents remember everything across Polsia sessions.",
    long_description: "Knowledge-graph-based persistent memory system. Stores facts, relationships and business context between sessions. Lets Polsia agents remember past decisions, customers, and company history.",
    github_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/memory",
    mcp_config: {
      "mcpServers": {
            "memory": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@modelcontextprotocol/server-memory"
                  ]
            }
      }
},
    tags: ["memory", "knowledge-graph", "persistence", "agents", "polsia-stack"],
    category: "AI & Agents",
    author: "Anthropic",
    author_twitter: "@anthropic",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1876,
  },
  {
    id: "6",
    created_at: "2026-02-02T10:00:00Z",
    name: "Sequential Thinking MCP",
    slug: "sequential-thinking",
    description: "Dynamic multi-step reasoning for agents. Boost planning and complex problem solving in your autonomous loops.",
    long_description: "Official Anthropic MCP for improving agent reasoning. Break down complex problems into steps, revise reasoning, and plan multi-step actions. Essential for high-level Polsia agents.",
    github_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking",
    mcp_config: {
      "mcpServers": {
            "sequential-thinking": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@modelcontextprotocol/server-sequential-thinking"
                  ]
            }
      }
},
    tags: ["reasoning", "agents", "planning", "thinking", "polsia-stack"],
    category: "AI & Agents",
    author: "Anthropic",
    author_twitter: "@anthropic",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 2934,
  },
  {
    id: "7",
    created_at: "2026-02-10T10:00:00Z",
    name: "Stripe Payments MCP",
    slug: "stripe-payments",
    description: "Autonomous billing: charges, subscriptions, invoices, MRR/ARR. Polsia MCPHub curated. Your AI CFO.",
    long_description: "Full control of payment operations. Create charges, manage subscriptions, generate invoices, handle refunds, track MRR/ARR. Listed among the 12 official curated MCPs on MCPHub by Polsia.",
    github_url: "https://github.com/stripe/agent-toolkit",
    mcp_config: {
      "mcpServers": {
            "stripe": {
                  "url": "mcp.market/stripe/v2"
            }
      }
},
    tags: ["stripe", "payments", "billing", "finance", "subscriptions"],
    category: "Finance",
    author: "Stripe",
    author_twitter: "@stripe",
    is_featured: true,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 2341,
  },
  {
    id: "8",
    created_at: "2026-02-10T10:00:00Z",
    name: "Xero Accounting MCP",
    slug: "xero-accounting",
    description: "Xero accounting data for agents. Invoices, expenses, P&L reports — your autonomous AI accountant.",
    long_description: "Integrates Xero to give your agents full access to company accounting. Read invoices, create expenses, generate profit & loss reports, track cash flow.",
    github_url: "https://github.com/XeroAPI/xero-mcp-server",
    mcp_config: {
      "mcpServers": {
            "xero": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@xero/mcp-server"
                  ],
                  "env": {
                        "XERO_CLIENT_ID": "YOUR_ID",
                        "XERO_CLIENT_SECRET": "YOUR_SECRET"
                  }
            }
      }
},
    tags: ["xero", "accounting", "finance", "invoicing", "reporting"],
    category: "Finance",
    author: "Xero",
    author_twitter: "@xero",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 634,
  },
  {
    id: "9",
    created_at: "2026-02-11T10:00:00Z",
    name: "QuickBooks MCP",
    slug: "quickbooks",
    description: "Automated bookkeeping, invoicing, payroll and financial reporting via QuickBooks.",
    long_description: "Full QuickBooks integration for autonomous companies. Handle bookkeeping, create invoices, run payroll calculations, generate financial reports and reconcile accounts.",
    github_url: "https://github.com/community/quickbooks-mcp",
    mcp_config: {
      "mcpServers": {
            "quickbooks": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/quickbooks-mcp"
                  ],
                  "env": {
                        "QB_CLIENT_ID": "YOUR_ID",
                        "QB_CLIENT_SECRET": "YOUR_SECRET"
                  }
            }
      }
},
    tags: ["quickbooks", "accounting", "finance", "payroll", "invoicing"],
    category: "Finance",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 412,
  },
  {
    id: "10",
    created_at: "2026-02-11T10:00:00Z",
    name: "Midday Finance MCP",
    slug: "midday-finance",
    description: "Financial management for founders and startups. Transactions, reports, time tracking — all autonomous.",
    long_description: "Midday unifies financial management for founders and startups: transactions, invoices, time tracking and financial reports. Featured on cursor.directory.",
    github_url: "https://github.com/midday-ai/midday-mcp",
    mcp_config: {
      "mcpServers": {
            "midday": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@midday/mcp-server"
                  ],
                  "env": {
                        "MIDDAY_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["finance", "invoicing", "time-tracking", "startup", "freelance"],
    category: "Finance",
    author: "Midday",
    author_twitter: "@middayai",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 567,
  },
  {
    id: "11",
    created_at: "2026-02-11T10:00:00Z",
    name: "Mercado Pago MCP",
    slug: "mercado-pago",
    description: "Official Mercado Pago payments for LATAM markets. Charges, refunds, reporting for autonomous companies.",
    long_description: "Official Mercado Pago MCP for autonomous companies targeting Latin American markets. Payment processing, refunds, financial reporting — the Stripe of LATAM accessible via MCP.",
    github_url: "https://github.com/mercadopago/mcp-server",
    mcp_config: {
      "mcpServers": {
            "mercado-pago": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@mercadopago/mcp-server"
                  ],
                  "env": {
                        "MP_ACCESS_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["payments", "latam", "finance", "mercadopago", "billing"],
    category: "Finance",
    author: "Mercado Pago",
    author_twitter: "@mercadopago",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 734,
  },
  {
    id: "12",
    created_at: "2026-02-12T10:00:00Z",
    name: "Lemon Squeezy MCP",
    slug: "lemon-squeezy",
    description: "Payments, subscriptions and licensing for SaaS. The Stripe alternative for indie makers.",
    long_description: "Lemon Squeezy integration for autonomous SaaS billing. Create checkouts, manage subscriptions, handle licensing, process refunds and generate revenue reports.",
    github_url: "https://github.com/community/lemon-squeezy-mcp",
    mcp_config: {
      "mcpServers": {
            "lemon-squeezy": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/lemon-squeezy-mcp"
                  ],
                  "env": {
                        "LEMON_SQUEEZY_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["payments", "subscriptions", "saas", "licensing", "finance"],
    category: "Finance",
    author: "Community",
    author_twitter: "@lmsqueezy",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 876,
  },
  {
    id: "13",
    created_at: "2026-02-12T10:00:00Z",
    name: "Stripe Connect MCP",
    slug: "stripe-connect",
    description: "Marketplace and platform payments via Stripe Connect. Split payments, manage sub-accounts autonomously.",
    long_description: "Stripe Connect integration for marketplace and platform businesses. Onboard sellers, split payments, manage sub-accounts, handle payouts and track platform revenue.",
    github_url: "https://github.com/stripe/stripe-connect-mcp",
    mcp_config: {
      "mcpServers": {
            "stripe-connect": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@stripe/connect-mcp"
                  ],
                  "env": {
                        "STRIPE_SECRET_KEY": "sk_live_YOUR_KEY"
                  }
            }
      }
},
    tags: ["stripe", "marketplace", "payments", "platform", "finance"],
    category: "Finance",
    author: "Stripe",
    author_twitter: "@stripe",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1456,
  },
  {
    id: "14",
    created_at: "2026-02-13T10:00:00Z",
    name: "Neon Postgres MCP",
    slug: "neon-postgres",
    description: "Serverless Postgres for agents. Polsia MCPHub curated. Queries, schemas, reports in natural language.",
    long_description: "Direct database access for your agents. Execute queries, manage schemas, insert data, build reports — all in natural language. Curated by Polsia MCPHub.",
    github_url: "https://github.com/neondatabase/mcp-server-neon",
    mcp_config: {
      "mcpServers": {
            "postgres": {
                  "url": "mcp.market/neon-db/v1"
            }
      }
},
    tags: ["postgres", "database", "sql", "neon", "serverless"],
    category: "Database",
    author: "Neon",
    author_twitter: "@neondatabase",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 892,
  },
  {
    id: "15",
    created_at: "2026-02-13T10:00:00Z",
    name: "Postgres MCP",
    slug: "postgres-readonly",
    description: "Read-only Postgres access. Analyze your business data risk-free. Perfect for reporting agents.",
    long_description: "Secure read-only access to any Postgres database. Ideal for reporting agents that need to read business data without risk of modification.",
    github_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/postgres",
    mcp_config: {
      "mcpServers": {
            "postgres": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@modelcontextprotocol/server-postgres",
                        "postgresql://user:pass@host/db"
                  ]
            }
      }
},
    tags: ["postgres", "database", "sql", "reporting", "read-only"],
    category: "Database",
    author: "Anthropic",
    author_twitter: "@anthropic",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 2156,
  },
  {
    id: "16",
    created_at: "2026-02-13T10:00:00Z",
    name: "SQLite MCP",
    slug: "sqlite",
    description: "SQLite database interaction + business intelligence. Natural language analytical queries for agents.",
    long_description: "Lets agents interact with local SQLite databases for business intelligence. Execute analytical queries, generate reports, explore data.",
    github_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite",
    mcp_config: {
      "mcpServers": {
            "sqlite": {
                  "command": "uvx",
                  "args": [
                        "mcp-server-sqlite",
                        "--db-path",
                        "/path/to/db.sqlite"
                  ]
            }
      }
},
    tags: ["sqlite", "database", "sql", "analytics", "local"],
    category: "Database",
    author: "Anthropic",
    author_twitter: "@anthropic",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1543,
  },
  {
    id: "17",
    created_at: "2026-02-14T10:00:00Z",
    name: "MongoDB MCP",
    slug: "mongodb",
    description: "Connect agents to MongoDB Atlas. CRUD operations, aggregations, schema inspection in natural language.",
    long_description: "Full MongoDB Atlas integration for your AI agents. Perform CRUD operations, run complex aggregations, inspect collections, manage indexes — all through natural language.",
    github_url: "https://github.com/mongodb-labs/mongodb-mcp-server",
    mcp_config: {
      "mcpServers": {
            "mongodb": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@mongodb/mcp-server"
                  ],
                  "env": {
                        "MONGODB_URI": "YOUR_CONNECTION_STRING"
                  }
            }
      }
},
    tags: ["mongodb", "database", "nosql", "atlas", "crud"],
    category: "Database",
    author: "MongoDB",
    author_twitter: "@MongoDB",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1234,
  },
  {
    id: "18",
    created_at: "2026-02-14T10:00:00Z",
    name: "Redis MCP",
    slug: "redis",
    description: "Real-time data, caching, pub/sub for your autonomous agents. Session management and fast lookups.",
    long_description: "Connect your agents to Redis for lightning-fast data operations: caching, session management, pub/sub messaging, rate limiting and real-time leaderboards.",
    github_url: "https://github.com/redis/mcp-redis",
    mcp_config: {
      "mcpServers": {
            "redis": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@redis/mcp-server"
                  ],
                  "env": {
                        "REDIS_URL": "redis://localhost:6379"
                  }
            }
      }
},
    tags: ["redis", "cache", "realtime", "database", "performance"],
    category: "Database",
    author: "Redis",
    author_twitter: "@redisinc",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 876,
  },
  {
    id: "19",
    created_at: "2026-02-14T10:00:00Z",
    name: "Supabase MCP",
    slug: "supabase",
    description: "Full Supabase access: Postgres DB, Auth, Storage, Edge Functions. The open-source Firebase for agents.",
    long_description: "Complete Supabase integration. Your agents manage the Postgres database, authentication, file storage and edge functions. Perfect for Polsia-built SaaS apps.",
    github_url: "https://github.com/supabase/mcp-server-supabase",
    mcp_config: {
      "mcpServers": {
            "supabase": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@supabase/mcp-server"
                  ],
                  "env": {
                        "SUPABASE_URL": "YOUR_PROJECT_URL",
                        "SUPABASE_SERVICE_KEY": "YOUR_SERVICE_KEY"
                  }
            }
      }
},
    tags: ["supabase", "database", "auth", "storage", "postgres"],
    category: "Database",
    author: "Supabase",
    author_twitter: "@supabase",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 3201,
  },
  {
    id: "20",
    created_at: "2026-02-14T10:00:00Z",
    name: "Elasticsearch MCP",
    slug: "elasticsearch",
    description: "Search, analytics and observability at scale. Full-text search for all your business data.",
    long_description: "Full Elasticsearch integration. Index documents, perform complex full-text searches, run aggregation analytics and monitor application observability at any scale.",
    github_url: "https://github.com/elastic/elasticsearch-mcp",
    mcp_config: {
      "mcpServers": {
            "elasticsearch": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@elastic/mcp-server"
                  ],
                  "env": {
                        "ES_URL": "YOUR_ES_URL",
                        "ES_API_KEY": "YOUR_API_KEY"
                  }
            }
      }
},
    tags: ["elasticsearch", "search", "analytics", "logs", "observability"],
    category: "Database",
    author: "Elastic",
    author_twitter: "@elastic",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1876,
  },
  {
    id: "21",
    created_at: "2026-02-14T10:00:00Z",
    name: "GibsonAI Database MCP",
    slug: "gibsonai-database",
    description: "AI-assisted MySQL database design and management. Featured on cursor.directory.",
    long_description: "GibsonAI lets your agents design, create and manage MySQL databases with AI assistance. Featured on cursor.directory.",
    github_url: "https://github.com/gibsonai/mcp-server",
    mcp_config: {
      "mcpServers": {
            "gibsonai": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@gibsonai/mcp-server"
                  ],
                  "env": {
                        "GIBSONAI_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["database", "mysql", "ai", "schema", "devops"],
    category: "Database",
    author: "GibsonAI",
    author_twitter: "@gibsonai",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 312,
  },
  {
    id: "22",
    created_at: "2026-02-14T10:00:00Z",
    name: "Peliqan ETL MCP",
    slug: "peliqan-etl",
    description: "Data warehouse with access to all your business apps (ERP, CRM, accounting) via MCP.",
    long_description: "Peliqan is an ETL platform with integrated data warehouse. Access all your business apps and run queries on consolidated business data via MCP.",
    github_url: "https://github.com/peliqan-io/peliqan-mcp",
    mcp_config: {
      "mcpServers": {
            "peliqan": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@peliqan/mcp-server"
                  ],
                  "env": {
                        "PELIQAN_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["etl", "data-warehouse", "erp", "crm", "analytics"],
    category: "Database",
    author: "Peliqan",
    author_twitter: "@peliqan",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 156,
  },
  {
    id: "23",
    created_at: "2026-02-15T10:00:00Z",
    name: "Slack MCP",
    slug: "slack-ops",
    description: "Messages, channels, reports, alerts in Slack. Polsia MCPHub curated. Autonomous internal comms 24/7.",
    long_description: "Your autonomous company needs to communicate. Post daily stand-ups, send alerts on key events, share reports in the right channels, manage members. Curated by Polsia MCPHub.",
    github_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/slack",
    mcp_config: {
      "mcpServers": {
            "slack": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@modelcontextprotocol/server-slack"
                  ],
                  "env": {
                        "SLACK_BOT_TOKEN": "xoxb-YOUR-TOKEN",
                        "SLACK_TEAM_ID": "YOUR_TEAM_ID"
                  }
            }
      }
},
    tags: ["slack", "messaging", "inbox", "operations", "reporting"],
    category: "Inbox",
    author: "Anthropic",
    author_twitter: "@anthropic",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 4201,
  },
  {
    id: "24",
    created_at: "2026-02-15T10:00:00Z",
    name: "Gmail MCP",
    slug: "gmail",
    description: "Read, send, organize Gmail autonomously. Your AI handles the inbox while you sleep.",
    long_description: "Full Gmail integration. Read emails, send responses, organize into labels, search threads, draft campaigns and handle customer inquiries — zero inbox time for you.",
    github_url: "https://github.com/googleapis/google-api-mcp",
    mcp_config: {
      "mcpServers": {
            "gmail": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@google/gmail-mcp"
                  ],
                  "env": {
                        "GOOGLE_CLIENT_ID": "YOUR_ID",
                        "GOOGLE_CLIENT_SECRET": "YOUR_SECRET"
                  }
            }
      }
},
    tags: ["gmail", "email", "google", "inbox", "outreach"],
    category: "Inbox",
    author: "Google",
    author_twitter: "@google",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 5123,
  },
  {
    id: "25",
    created_at: "2026-02-15T10:00:00Z",
    name: "Resend Email MCP",
    slug: "resend-email",
    description: "Transactional and marketing emails at scale. Your AI email marketer available 24/7.",
    long_description: "Power all outbound emails from your autonomous company. Welcome sequences, billing notifications, marketing campaigns — with full tracking and integrated analytics.",
    github_url: "https://github.com/resend/resend-mcp",
    mcp_config: {
      "mcpServers": {
            "resend": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@resend/mcp-server"
                  ],
                  "env": {
                        "RESEND_API_KEY": "re_YOUR_KEY"
                  }
            }
      }
},
    tags: ["email", "resend", "marketing", "transactional", "outreach"],
    category: "Inbox",
    author: "Resend",
    author_twitter: "@resend",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 678,
  },
  {
    id: "26",
    created_at: "2026-02-16T10:00:00Z",
    name: "Twilio MCP",
    slug: "twilio",
    description: "SMS, voice calls, WhatsApp and more via Twilio. Reach customers on any channel autonomously.",
    long_description: "Full Twilio integration for multi-channel autonomous communication. Send SMS alerts, make voice calls, send WhatsApp messages, verify phone numbers — your AI reaches customers everywhere.",
    github_url: "https://github.com/twilio/twilio-mcp",
    mcp_config: {
      "mcpServers": {
            "twilio": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@twilio/mcp-server"
                  ],
                  "env": {
                        "TWILIO_ACCOUNT_SID": "YOUR_SID",
                        "TWILIO_AUTH_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["twilio", "sms", "voice", "whatsapp", "communication"],
    category: "Inbox",
    author: "Twilio",
    author_twitter: "@twilio",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "paid",
    stars: 1876,
  },
  {
    id: "27",
    created_at: "2026-02-16T10:00:00Z",
    name: "Discord MCP",
    slug: "discord",
    description: "Send messages, manage channels and interact with your Discord community autonomously.",
    long_description: "Connect your autonomous agents to Discord. Send messages, manage channels, respond to community questions, post announcements and moderate servers.",
    github_url: "https://github.com/community/discord-mcp",
    mcp_config: {
      "mcpServers": {
            "discord": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/discord-mcp"
                  ],
                  "env": {
                        "DISCORD_BOT_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["discord", "community", "messaging", "social", "automation"],
    category: "Inbox",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 934,
  },
  {
    id: "28",
    created_at: "2026-02-16T10:00:00Z",
    name: "Telegram MCP",
    slug: "telegram",
    description: "Send messages, manage bots and automate Telegram channels for your autonomous business.",
    long_description: "Full Telegram Bot API integration. Your agents send messages, manage channels, handle user interactions, broadcast announcements and run customer support autonomously.",
    github_url: "https://github.com/community/telegram-mcp",
    mcp_config: {
      "mcpServers": {
            "telegram": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/telegram-mcp"
                  ],
                  "env": {
                        "TELEGRAM_BOT_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["telegram", "messaging", "bots", "community", "automation"],
    category: "Inbox",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 712,
  },
  {
    id: "29",
    created_at: "2026-02-17T10:00:00Z",
    name: "Postmark Email MCP",
    slug: "postmark-email",
    description: "Transactional emails via Postmark. Featured on cursor.directory. Best-in-class deliverability.",
    long_description: "Postmark is known for excellent email deliverability. Send transactional emails, manage templates, track opens and clicks from your Polsia agents. Featured on cursor.directory.",
    github_url: "https://github.com/wildbit/postmark-mcp",
    mcp_config: {
      "mcpServers": {
            "postmark": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@postmark/mcp-server"
                  ],
                  "env": {
                        "POSTMARK_SERVER_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["email", "postmark", "transactional", "deliverability", "marketing"],
    category: "Inbox",
    author: "Postmark",
    author_twitter: "@postmarkapp",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "paid",
    stars: 423,
  },
  {
    id: "30",
    created_at: "2026-02-17T10:00:00Z",
    name: "Mailtrap Email MCP",
    slug: "mailtrap-email",
    description: "Send emails via Mailtrap. Testing + production. Featured on cursor.directory.",
    long_description: "Send and test emails via the Mailtrap API. Complete solution for Polsia agents managing email communications: transactional emails, newsletters and sandbox testing.",
    github_url: "https://github.com/railsware/mailtrap-mcp",
    mcp_config: {
      "mcpServers": {
            "mailtrap": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@mailtrap/mcp-server"
                  ],
                  "env": {
                        "MAILTRAP_API_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["email", "mailtrap", "marketing", "testing", "outreach"],
    category: "Inbox",
    author: "Mailtrap",
    author_twitter: "@mailtrap",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 523,
  },
  {
    id: "31",
    created_at: "2026-02-17T10:00:00Z",
    name: "Microsoft Teams MCP",
    slug: "microsoft-teams",
    description: "Advanced agent orchestration, multi-agent collaboration and Teams messaging integration.",
    long_description: "Microsoft Teams AI Library with MCP support enables advanced agent orchestration, multi-agent collaboration and seamless Teams messaging integration for Microsoft 365 ecosystems.",
    github_url: "https://github.com/microsoft/teams-ai",
    mcp_config: {
      "mcpServers": {
            "teams": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@microsoft/teams-mcp"
                  ],
                  "env": {
                        "TEAMS_APP_ID": "YOUR_ID",
                        "TEAMS_APP_PASSWORD": "YOUR_PASSWORD"
                  }
            }
      }
},
    tags: ["microsoft", "teams", "messaging", "collaboration", "enterprise"],
    category: "Inbox",
    author: "Microsoft",
    author_twitter: "@microsoft",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 1234,
  },
  {
    id: "32",
    created_at: "2026-02-20T10:00:00Z",
    name: "LinkedIn Outreach MCP",
    slug: "linkedin-outreach",
    description: "Autonomous LinkedIn prospecting: connections, follow-ups, B2B lead extraction. While you sleep.",
    long_description: "Your AI salesperson works LinkedIn 24/7. Sends personalized connection requests, follows up with prospects, engages with content, extracts lead data and builds your sales pipeline.",
    github_url: "https://github.com/community/linkedin-mcp",
    mcp_config: {
      "mcpServers": {
            "linkedin": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/linkedin-mcp-server"
                  ],
                  "env": {
                        "LINKEDIN_ACCESS_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["linkedin", "outreach", "sales", "crm", "social media"],
    category: "Marketing",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 312,
  },
  {
    id: "33",
    created_at: "2026-02-20T10:00:00Z",
    name: "Brave Search MCP",
    slug: "brave-search",
    description: "Real-time web search via Brave API. Monitor your market and competitors without depending on Google.",
    long_description: "Official integration with the Brave Search API. Perfect for Polsia agents monitoring market news, tracking competitors or finding real-time information.",
    github_url: "https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search",
    mcp_config: {
      "mcpServers": {
            "brave-search": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@modelcontextprotocol/server-brave-search"
                  ],
                  "env": {
                        "BRAVE_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["search", "web", "brave", "monitoring", "market-research"],
    category: "Marketing",
    author: "Anthropic",
    author_twitter: "@anthropic",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1823,
  },
  {
    id: "34",
    created_at: "2026-02-21T10:00:00Z",
    name: "BrightData Web MCP",
    slug: "brightdata-web",
    description: "Large-scale web data extraction. Discover, scrape and interact with any public web page.",
    long_description: "BrightData provides automated access to public web data at scale. Your Polsia agents can discover and extract data from any web source: competitor prices, customer reviews, market data, news.",
    github_url: "https://github.com/brightdata/brightdata-mcp",
    mcp_config: {
      "mcpServers": {
            "brightdata": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@brightdata/mcp"
                  ],
                  "env": {
                        "API_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["scraping", "web", "data", "monitoring", "market-research"],
    category: "Marketing",
    author: "BrightData",
    author_twitter: "@brightdata",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "paid",
    stars: 1102,
  },
  {
    id: "35",
    created_at: "2026-02-21T10:00:00Z",
    name: "Mailchimp MCP",
    slug: "mailchimp",
    description: "Manage email campaigns, audiences and automations via Mailchimp. Your AI email marketing director.",
    long_description: "Full Mailchimp integration for autonomous email marketing. Create and send campaigns, manage audience segments, build automations, track performance and grow your list.",
    github_url: "https://github.com/community/mailchimp-mcp",
    mcp_config: {
      "mcpServers": {
            "mailchimp": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/mailchimp-mcp"
                  ],
                  "env": {
                        "MAILCHIMP_API_KEY": "YOUR_KEY",
                        "MAILCHIMP_SERVER_PREFIX": "us1"
                  }
            }
      }
},
    tags: ["mailchimp", "email", "marketing", "campaigns", "automation"],
    category: "Marketing",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 678,
  },
  {
    id: "36",
    created_at: "2026-02-22T10:00:00Z",
    name: "AgentQL Web MCP",
    slug: "agentql-web",
    description: "Structured data from unstructured web pages. Agents extract what they want from any website.",
    long_description: "AgentQL lets your agents get structured data from any web page, even without an API. Perfect for business data extraction, price monitoring, or competitive intelligence.",
    github_url: "https://github.com/tinyfish-io/agentql-mcp",
    mcp_config: {
      "mcpServers": {
            "agentql": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@agentql/mcp-server"
                  ],
                  "env": {
                        "AGENTQL_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["web", "scraping", "data", "structured", "extraction"],
    category: "Marketing",
    author: "AgentQL",
    author_twitter: "@agentql",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 876,
  },
  {
    id: "37",
    created_at: "2026-02-22T10:00:00Z",
    name: "SEMrush MCP",
    slug: "semrush",
    description: "SEO analysis, keyword research and competitor intelligence. Your AI SEO strategist.",
    long_description: "Full SEMrush integration for autonomous SEO. Run keyword research, analyze competitor backlinks, track keyword rankings, audit site health and generate weekly SEO reports.",
    github_url: "https://github.com/community/semrush-mcp",
    mcp_config: {
      "mcpServers": {
            "semrush": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/semrush-mcp"
                  ],
                  "env": {
                        "SEMRUSH_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["seo", "semrush", "keywords", "competitor", "marketing"],
    category: "Marketing",
    author: "Community",
    author_twitter: "@semrush",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 678,
  },
  {
    id: "38",
    created_at: "2026-02-23T10:00:00Z",
    name: "Google Ads MCP",
    slug: "google-ads",
    description: "Manage Google Ads campaigns autonomously. Create ads, optimize bids, report on ROAS.",
    long_description: "Full Google Ads integration for autonomous paid acquisition. Create and optimize campaigns, manage ad groups, adjust bids, generate performance reports and pause underperforming ads.",
    github_url: "https://github.com/community/google-ads-mcp",
    mcp_config: {
      "mcpServers": {
            "google-ads": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/google-ads-mcp"
                  ],
                  "env": {
                        "GOOGLE_ADS_DEVELOPER_TOKEN": "YOUR_TOKEN",
                        "GOOGLE_ADS_CUSTOMER_ID": "YOUR_ID"
                  }
            }
      }
},
    tags: ["google-ads", "advertising", "ppc", "marketing", "roas"],
    category: "Marketing",
    author: "Community",
    author_twitter: "@google",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "paid",
    stars: 1543,
  },
  {
    id: "39",
    created_at: "2026-02-23T10:00:00Z",
    name: "Meta Ads MCP",
    slug: "meta-ads",
    description: "Facebook and Instagram ad campaigns managed by your AI. Full Meta Business Suite access.",
    long_description: "Complete Meta Ads API integration. Create and manage Facebook and Instagram ad campaigns, optimize targeting, control budgets, generate ROAS reports and A/B test creatives.",
    github_url: "https://github.com/community/meta-ads-mcp",
    mcp_config: {
      "mcpServers": {
            "meta-ads": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/meta-ads-mcp"
                  ],
                  "env": {
                        "META_ACCESS_TOKEN": "YOUR_TOKEN",
                        "META_AD_ACCOUNT_ID": "YOUR_ACCOUNT_ID"
                  }
            }
      }
},
    tags: ["meta", "facebook", "instagram", "advertising", "marketing"],
    category: "Marketing",
    author: "Community",
    author_twitter: "@meta",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "paid",
    stars: 1234,
  },
  {
    id: "40",
    created_at: "2026-02-24T10:00:00Z",
    name: "Webflow CMS MCP",
    slug: "webflow-cms",
    description: "Manage Webflow sites and CMS content autonomously. Publish blog posts and landing pages via AI.",
    long_description: "Full Webflow integration for autonomous content management. Create and update CMS items, publish blog posts, manage landing pages, update product listings and trigger site deploys.",
    github_url: "https://github.com/community/webflow-mcp",
    mcp_config: {
      "mcpServers": {
            "webflow": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/webflow-mcp"
                  ],
                  "env": {
                        "WEBFLOW_API_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["webflow", "cms", "marketing", "content", "website"],
    category: "Marketing",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 876,
  },
  {
    id: "41",
    created_at: "2026-02-24T10:00:00Z",
    name: "WordPress MCP",
    slug: "wordpress",
    description: "Manage WordPress sites via REST API. Create posts, update pages, handle comments autonomously.",
    long_description: "Full WordPress REST API integration. Create and publish posts, update pages, manage media library, moderate comments, update plugin settings and generate SEO content.",
    github_url: "https://github.com/community/wordpress-mcp",
    mcp_config: {
      "mcpServers": {
            "wordpress": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/wordpress-mcp"
                  ],
                  "env": {
                        "WP_URL": "YOUR_SITE_URL",
                        "WP_USERNAME": "YOUR_USER",
                        "WP_APP_PASSWORD": "YOUR_PASSWORD"
                  }
            }
      }
},
    tags: ["wordpress", "cms", "blog", "content", "seo"],
    category: "Marketing",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1234,
  },
  {
    id: "42",
    created_at: "2026-02-25T10:00:00Z",
    name: "Typeform MCP",
    slug: "typeform",
    description: "Create forms, collect responses and analyze survey data. Autonomous lead capture and research.",
    long_description: "Full Typeform integration for autonomous data collection. Create forms and surveys, collect responses, analyze results, trigger follow-up workflows and extract insights from customer feedback.",
    github_url: "https://github.com/community/typeform-mcp",
    mcp_config: {
      "mcpServers": {
            "typeform": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/typeform-mcp"
                  ],
                  "env": {
                        "TYPEFORM_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["typeform", "forms", "surveys", "leads", "research"],
    category: "Marketing",
    author: "Community",
    author_twitter: "@typeform",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 445,
  },
  {
    id: "43",
    created_at: "2026-02-25T10:00:00Z",
    name: "PostHog Analytics MCP",
    slug: "posthog-analytics",
    description: "Autonomous product analytics: events, funnels, user cohorts. Your AI growth team.",
    long_description: "Let your agents monitor product analytics in real time. Query events, analyze funnels, identify drop-offs, track feature adoption and generate weekly growth reports.",
    github_url: "https://github.com/PostHog/posthog-mcp",
    mcp_config: {
      "mcpServers": {
            "posthog": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@posthog/mcp-server"
                  ],
                  "env": {
                        "POSTHOG_API_KEY": "YOUR_KEY",
                        "POSTHOG_HOST": "https://app.posthog.com"
                  }
            }
      }
},
    tags: ["analytics", "posthog", "product", "growth", "funnels"],
    category: "Analytics",
    author: "PostHog",
    author_twitter: "@PostHog",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 567,
  },
  {
    id: "44",
    created_at: "2026-02-25T10:00:00Z",
    name: "Google Analytics MCP",
    slug: "google-analytics",
    description: "Query GA4 data autonomously. Traffic, conversions, user behavior — your AI analyst on demand.",
    long_description: "Full Google Analytics 4 integration. Your agents query traffic data, analyze conversion funnels, track user behavior, generate weekly reports and identify growth opportunities.",
    github_url: "https://github.com/googleapis/google-analytics-mcp",
    mcp_config: {
      "mcpServers": {
            "google-analytics": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@google/analytics-mcp"
                  ],
                  "env": {
                        "GA_PROPERTY_ID": "YOUR_PROPERTY_ID",
                        "GOOGLE_APPLICATION_CREDENTIALS": "path/to/credentials.json"
                  }
            }
      }
},
    tags: ["analytics", "google", "traffic", "seo", "reporting"],
    category: "Analytics",
    author: "Google",
    author_twitter: "@google",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 2134,
  },
  {
    id: "45",
    created_at: "2026-02-26T10:00:00Z",
    name: "AgentOps Monitoring MCP",
    slug: "agentops-monitoring",
    description: "Observability and tracing to debug your AI agents. Monitor performance of your Polsia loops.",
    long_description: "AgentOps provides observability and tracing for your autonomous AI agents. Debug failing Polsia loops, monitor performance, identify bottlenecks and optimize agents in production.",
    github_url: "https://github.com/AgentOps-AI/agentops-mcp",
    mcp_config: {
      "mcpServers": {
            "agentops": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@agentops/mcp-server"
                  ],
                  "env": {
                        "AGENTOPS_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["monitoring", "tracing", "agents", "debugging", "observability"],
    category: "Analytics",
    author: "AgentOps",
    author_twitter: "@agentopsai",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 412,
  },
  {
    id: "46",
    created_at: "2026-02-26T10:00:00Z",
    name: "Mixpanel MCP",
    slug: "mixpanel",
    description: "Product analytics, A/B testing and user journey analysis. Know what your users do, automatically.",
    long_description: "Mixpanel integration for autonomous product analytics. Track events, run A/B tests, analyze user journeys, measure retention and report on product metrics.",
    github_url: "https://github.com/community/mixpanel-mcp",
    mcp_config: {
      "mcpServers": {
            "mixpanel": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/mixpanel-mcp"
                  ],
                  "env": {
                        "MIXPANEL_TOKEN": "YOUR_TOKEN",
                        "MIXPANEL_SECRET": "YOUR_SECRET"
                  }
            }
      }
},
    tags: ["analytics", "mixpanel", "product", "ab-testing", "retention"],
    category: "Analytics",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 534,
  },
  {
    id: "47",
    created_at: "2026-02-26T10:00:00Z",
    name: "Plausible Analytics MCP",
    slug: "plausible-analytics",
    description: "Privacy-first web analytics. GDPR-compliant traffic insights for your autonomous company.",
    long_description: "Plausible Analytics MCP for privacy-first web traffic insights. Query page views, unique visitors, referral sources and goal conversions — GDPR-compliant analytics.",
    github_url: "https://github.com/community/plausible-mcp",
    mcp_config: {
      "mcpServers": {
            "plausible": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/plausible-mcp"
                  ],
                  "env": {
                        "PLAUSIBLE_API_KEY": "YOUR_KEY",
                        "PLAUSIBLE_SITE_ID": "YOUR_DOMAIN"
                  }
            }
      }
},
    tags: ["analytics", "privacy", "gdpr", "traffic", "web"],
    category: "Analytics",
    author: "Community",
    author_twitter: "@plausiblehq",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 634,
  },
  {
    id: "48",
    created_at: "2026-02-27T10:00:00Z",
    name: "Windsor BI MCP",
    slug: "windsor-bi",
    description: "Query and analyze your full-stack business data without SQL. Marketing, ads, sales unified.",
    long_description: "Windsor.ai unifies all your business data: Google Ads, Facebook Ads, Shopify, Stripe, and more. Your agents query and analyze your entire business stack without writing SQL.",
    github_url: "https://github.com/windsor-ai/mcp-server",
    mcp_config: {
      "mcpServers": {
            "windsor": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@windsor/mcp-server"
                  ],
                  "env": {
                        "WINDSOR_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["analytics", "reporting", "ads", "marketing", "business-intelligence"],
    category: "Analytics",
    author: "Windsor.ai",
    author_twitter: "@windsorai",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 387,
  },
  {
    id: "49",
    created_at: "2026-02-27T10:00:00Z",
    name: "Keboola Data Platform MCP",
    slug: "keboola-data",
    description: "Robust data workflows, integrations and analytics on a unified platform.",
    long_description: "Keboola lets your agents build robust data workflows, integrations and analytics on an intuitive platform. Perfect for autonomous companies that need sophisticated data pipelines.",
    github_url: "https://github.com/keboola/mcp-server",
    mcp_config: {
      "mcpServers": {
            "keboola": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@keboola/mcp-server"
                  ],
                  "env": {
                        "KBC_STORAGE_API_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["data", "pipeline", "analytics", "etl", "reporting"],
    category: "Analytics",
    author: "Keboola",
    author_twitter: "@keboola",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 234,
  },
  {
    id: "50",
    created_at: "2026-02-27T10:00:00Z",
    name: "Segment Analytics MCP",
    slug: "segment",
    description: "Customer data platform — collect, unify and send data to any tool autonomously.",
    long_description: "Twilio Segment integration for autonomous customer data operations. Track events, manage customer profiles, build audiences and route data to your entire tech stack.",
    github_url: "https://github.com/community/segment-mcp",
    mcp_config: {
      "mcpServers": {
            "segment": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/segment-mcp"
                  ],
                  "env": {
                        "SEGMENT_WRITE_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["segment", "analytics", "cdp", "data", "tracking"],
    category: "Analytics",
    author: "Community",
    author_twitter: "@segment",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 876,
  },
  {
    id: "51",
    created_at: "2026-02-27T10:00:00Z",
    name: "Microsoft Clarity MCP",
    slug: "microsoft-clarity",
    description: "Behavioral analytics: heatmaps, session recordings, UX insights. Your AI UX analyst.",
    long_description: "Access Microsoft Clarity behavioral data via MCP. Your Polsia agents analyze heatmaps, session recordings, identify UX friction points and suggest improvements.",
    github_url: "https://github.com/microsoft/clarity-mcp",
    mcp_config: {
      "mcpServers": {
            "clarity": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@microsoft/clarity-mcp"
                  ],
                  "env": {
                        "CLARITY_API_KEY": "YOUR_KEY",
                        "PROJECT_ID": "YOUR_PROJECT_ID"
                  }
            }
      }
},
    tags: ["analytics", "ux", "heatmaps", "microsoft", "behavioral"],
    category: "Analytics",
    author: "Microsoft",
    author_twitter: "@microsoft",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 743,
  },
  {
    id: "52",
    created_at: "2026-02-28T10:00:00Z",
    name: "Kash Business Intelligence MCP",
    slug: "kash-business-intelligence",
    description: "AI access to your sales, customers, orders, payments and real-time business insights.",
    long_description: "Kash.click gives your AI agents complete access to business data: sales, customers, orders, tax information, payments. All your business insights accessible in natural language.",
    github_url: "https://github.com/kashclick/mcp-server",
    mcp_config: {
      "mcpServers": {
            "kash": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@kash/mcp-server"
                  ],
                  "env": {
                        "KASH_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["crm", "sales", "analytics", "business-intelligence", "reporting"],
    category: "Analytics",
    author: "Kash.click",
    author_twitter: "@kashclick",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 198,
  },
  {
    id: "53",
    created_at: "2026-03-01T10:00:00Z",
    name: "HubSpot CRM MCP",
    slug: "hubspot-crm",
    description: "Fully autonomous CRM: contacts, deals, pipelines, emails. Your AI sales director.",
    long_description: "Let AI run your entire CRM. Create contacts, update deals, log activities, send follow-up sequences, generate pipeline reports and forecast revenue.",
    github_url: "https://github.com/hubspot/mcp-server",
    mcp_config: {
      "mcpServers": {
            "hubspot": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@hubspot/mcp-server"
                  ],
                  "env": {
                        "HUBSPOT_ACCESS_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["hubspot", "crm", "sales", "contacts", "pipeline"],
    category: "CRM",
    author: "HubSpot",
    author_twitter: "@HubSpot",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 1089,
  },
  {
    id: "54",
    created_at: "2026-03-01T10:00:00Z",
    name: "Salesforce MCP",
    slug: "salesforce",
    description: "Connect agents to Salesforce CRM. Manage leads, opportunities, accounts and reports autonomously.",
    long_description: "Full Salesforce integration for enterprise-scale autonomous sales. Manage leads, update opportunities, query Salesforce data via SOQL, generate reports — hands-free.",
    github_url: "https://github.com/salesforce/mcp-server",
    mcp_config: {
      "mcpServers": {
            "salesforce": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@salesforce/mcp-server"
                  ],
                  "env": {
                        "SF_USERNAME": "YOUR_EMAIL",
                        "SF_PASSWORD": "YOUR_PASSWORD",
                        "SF_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["salesforce", "crm", "sales", "enterprise", "pipeline"],
    category: "CRM",
    author: "Salesforce",
    author_twitter: "@salesforce",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 1456,
  },
  {
    id: "55",
    created_at: "2026-03-01T10:00:00Z",
    name: "Pipedrive MCP",
    slug: "pipedrive",
    description: "Sales pipeline management for SMBs. Deals, contacts, activities — fully automated.",
    long_description: "Pipedrive integration for autonomous pipeline management. Create and move deals through stages, log calls and emails, set follow-up activities and generate sales reports.",
    github_url: "https://github.com/community/pipedrive-mcp",
    mcp_config: {
      "mcpServers": {
            "pipedrive": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/pipedrive-mcp"
                  ],
                  "env": {
                        "PIPEDRIVE_API_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["pipedrive", "crm", "sales", "pipeline", "smb"],
    category: "CRM",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 567,
  },
  {
    id: "56",
    created_at: "2026-03-01T10:00:00Z",
    name: "Microsoft Dataverse MCP",
    slug: "microsoft-dataverse",
    description: "Query your Microsoft business data in natural language. Dynamics 365, Power Platform, CRM.",
    long_description: "Discover tables, execute queries, retrieve and update records in Dynamics 365 and Power Platform in natural language. Ideal for autonomous companies in the Microsoft ecosystem.",
    github_url: "https://github.com/microsoft/dataverse-mcp",
    mcp_config: {
      "mcpServers": {
            "dataverse": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@microsoft/dataverse-mcp"
                  ],
                  "env": {
                        "DATAVERSE_URL": "YOUR_ENV_URL"
                  }
            }
      }
},
    tags: ["microsoft", "dynamics", "crm", "database", "enterprise"],
    category: "CRM",
    author: "Microsoft",
    author_twitter: "@microsoft",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 892,
  },
  {
    id: "57",
    created_at: "2026-03-02T10:00:00Z",
    name: "Notion MCP",
    slug: "notion-knowledge",
    description: "Read/write Notion pages, databases, wikis. The brain of your company accessible to all agents.",
    long_description: "Connect all your AI agents to your Notion workspace. Read company wikis, update project databases, create meeting notes, manage OKRs and maintain the knowledge base.",
    github_url: "https://github.com/makenotion/notion-mcp-server",
    mcp_config: {
      "mcpServers": {
            "notion": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@notion/mcp-server"
                  ],
                  "env": {
                        "NOTION_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["notion", "knowledge", "wiki", "docs", "operations"],
    category: "Operations",
    author: "Notion",
    author_twitter: "@notionhq",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 3412,
  },
  {
    id: "58",
    created_at: "2026-03-02T10:00:00Z",
    name: "Google Drive MCP",
    slug: "google-drive",
    description: "Read, write and organize Google Drive files. Your AI manages all company documents.",
    long_description: "Full Google Drive integration. Your agents create documents, read spreadsheets, organize folders, share files and manage permissions — complete autonomous document management.",
    github_url: "https://github.com/googleapis/google-drive-mcp",
    mcp_config: {
      "mcpServers": {
            "google-drive": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@google/drive-mcp"
                  ],
                  "env": {
                        "GOOGLE_CLIENT_ID": "YOUR_ID",
                        "GOOGLE_CLIENT_SECRET": "YOUR_SECRET"
                  }
            }
      }
},
    tags: ["google-drive", "storage", "documents", "google", "files"],
    category: "Operations",
    author: "Google",
    author_twitter: "@google",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 2341,
  },
  {
    id: "59",
    created_at: "2026-03-02T10:00:00Z",
    name: "Airtable MCP",
    slug: "airtable",
    description: "Query and update Airtable bases. Flexible no-code database for autonomous business operations.",
    long_description: "Full Airtable integration. Query records, create and update entries, manage views, trigger automations and use Airtable as a flexible operational database for any business process.",
    github_url: "https://github.com/community/airtable-mcp",
    mcp_config: {
      "mcpServers": {
            "airtable": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/airtable-mcp"
                  ],
                  "env": {
                        "AIRTABLE_API_KEY": "YOUR_KEY",
                        "AIRTABLE_BASE_ID": "YOUR_BASE_ID"
                  }
            }
      }
},
    tags: ["airtable", "database", "no-code", "operations", "crm"],
    category: "Operations",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 1234,
  },
  {
    id: "60",
    created_at: "2026-03-02T10:00:00Z",
    name: "Jira MCP",
    slug: "jira",
    description: "Autonomous project management: create issues, update sprints, track bugs. Your AI PM.",
    long_description: "Full Jira integration for autonomous project management. Create issues, update sprint boards, track bugs, generate velocity reports and manage your entire engineering backlog.",
    github_url: "https://github.com/atlassian/jira-mcp",
    mcp_config: {
      "mcpServers": {
            "jira": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@atlassian/jira-mcp"
                  ],
                  "env": {
                        "JIRA_URL": "YOUR_INSTANCE.atlassian.net",
                        "JIRA_EMAIL": "YOUR_EMAIL",
                        "JIRA_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["jira", "project-management", "agile", "devops", "issues"],
    category: "Operations",
    author: "Atlassian",
    author_twitter: "@atlassian",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 2134,
  },
  {
    id: "61",
    created_at: "2026-03-02T10:00:00Z",
    name: "Asana MCP",
    slug: "asana",
    description: "Task and project management via Asana API. Assign work, track progress, hit deadlines — autonomously.",
    long_description: "Asana integration for autonomous task management. Create tasks, assign them, update statuses, track project timelines and generate progress reports.",
    github_url: "https://github.com/community/asana-mcp",
    mcp_config: {
      "mcpServers": {
            "asana": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/asana-mcp"
                  ],
                  "env": {
                        "ASANA_ACCESS_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["asana", "project-management", "tasks", "collaboration", "productivity"],
    category: "Operations",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 876,
  },
  {
    id: "62",
    created_at: "2026-03-02T10:00:00Z",
    name: "Linear MCP",
    slug: "linear",
    description: "Modern issue tracking and project management. The Jira alternative built for speed.",
    long_description: "Full Linear integration for autonomous engineering management. Create and triage issues, manage cycles, update project status, auto-assign based on context and generate sprint reports.",
    github_url: "https://github.com/linearapp/linear-mcp",
    mcp_config: {
      "mcpServers": {
            "linear": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@linear/mcp-server"
                  ],
                  "env": {
                        "LINEAR_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["linear", "project-management", "issues", "agile", "devops"],
    category: "Operations",
    author: "Linear",
    author_twitter: "@linear",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 1543,
  },
  {
    id: "63",
    created_at: "2026-03-02T10:00:00Z",
    name: "Calendly Scheduling MCP",
    slug: "calendly-scheduling",
    description: "Autonomous meeting scheduling: book, reschedule, cancel, follow-ups. Zero human coordination.",
    long_description: "Eliminate all scheduling friction. Your AI agent books meetings, handles reschedules, sends reminders, creates prep docs and logs all interactions.",
    github_url: "https://github.com/calendly/mcp-server",
    mcp_config: {
      "mcpServers": {
            "calendly": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@calendly/mcp-server"
                  ],
                  "env": {
                        "CALENDLY_API_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["calendly", "scheduling", "calendar", "operations", "meetings"],
    category: "Operations",
    author: "Calendly",
    author_twitter: "@Calendly",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 445,
  },
  {
    id: "64",
    created_at: "2026-03-02T10:00:00Z",
    name: "Cal.com MCP",
    slug: "calcom",
    description: "Open-source scheduling for autonomous businesses. Book meetings, manage availability, send reminders.",
    long_description: "Open-source Cal.com integration for autonomous scheduling. Manage availability, create booking pages, handle rescheduling, send automated reminders — the privacy-friendly Calendly alternative.",
    github_url: "https://github.com/calcom/cal-mcp",
    mcp_config: {
      "mcpServers": {
            "calcom": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@calcom/mcp-server"
                  ],
                  "env": {
                        "CAL_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["scheduling", "calendar", "meetings", "open-source", "productivity"],
    category: "Operations",
    author: "Cal.com",
    author_twitter: "@calcom",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1234,
  },
  {
    id: "65",
    created_at: "2026-03-03T10:00:00Z",
    name: "Google Sheets MCP",
    slug: "google-sheets",
    description: "Read, write and analyze Google Sheets. Your autonomous agents manage spreadsheets and reports.",
    long_description: "Full Google Sheets integration. Read and write cells, create charts, run formulas, generate weekly reports and keep business metrics always current.",
    github_url: "https://github.com/googleapis/google-sheets-mcp",
    mcp_config: {
      "mcpServers": {
            "google-sheets": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@google/sheets-mcp"
                  ],
                  "env": {
                        "GOOGLE_CLIENT_ID": "YOUR_ID",
                        "GOOGLE_CLIENT_SECRET": "YOUR_SECRET"
                  }
            }
      }
},
    tags: ["google", "spreadsheets", "reporting", "analytics", "data"],
    category: "Operations",
    author: "Google",
    author_twitter: "@google",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 2876,
  },
  {
    id: "66",
    created_at: "2026-03-03T10:00:00Z",
    name: "Figma MCP",
    slug: "figma",
    description: "Read Figma designs and extract components. Your agents understand your product visual language.",
    long_description: "Figma integration for design-aware autonomous agents. Read design files, extract component data, get style tokens and understand the visual structure of your product.",
    github_url: "https://github.com/community/figma-mcp",
    mcp_config: {
      "mcpServers": {
            "figma": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/figma-mcp"
                  ],
                  "env": {
                        "FIGMA_ACCESS_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["figma", "design", "ui", "components", "product"],
    category: "Operations",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1234,
  },
  {
    id: "67",
    created_at: "2026-03-03T10:00:00Z",
    name: "Ntfy Notifications MCP",
    slug: "ntfy-notifications",
    description: "Push notifications for your autonomous agents. Get alerted when important events happen.",
    long_description: "ntfy MCP server for sending and receiving push notifications from AI agents. Perfect for critical alerts from your Polsia loops: notify on mobile/desktop when agents complete important tasks.",
    github_url: "https://github.com/community/ntfy-mcp",
    mcp_config: {
      "mcpServers": {
            "ntfy": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/ntfy-mcp"
                  ],
                  "env": {
                        "NTFY_URL": "https://ntfy.sh",
                        "NTFY_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["notifications", "alerts", "self-hosted", "monitoring", "push"],
    category: "Operations",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 187,
  },
  {
    id: "68",
    created_at: "2026-03-03T10:00:00Z",
    name: "Odoo ERP MCP",
    slug: "odoo-erp",
    description: "Connect agents to Odoo ERP for business data access and workflow automation.",
    long_description: "Odoo ERP integration to give your AI agents full access to business data and workflows. Manage accounting, inventory, sales, purchases and HR autonomously.",
    github_url: "https://github.com/odoo/odoo-mcp",
    mcp_config: {
      "mcpServers": {
            "odoo": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@odoo/mcp-server"
                  ],
                  "env": {
                        "ODOO_URL": "YOUR_URL",
                        "ODOO_DB": "YOUR_DB",
                        "ODOO_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["erp", "odoo", "accounting", "inventory", "operations"],
    category: "Operations",
    author: "Odoo",
    author_twitter: "@odoo",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 521,
  },
  {
    id: "69",
    created_at: "2026-03-03T10:00:00Z",
    name: "Box Content MCP",
    slug: "box-content",
    description: "Intelligent content management via Box AI. Autonomous storage, search and document collaboration.",
    long_description: "Interact with Box Content Management via Box AI. Your Polsia agents can store, search, share and analyze company documents — fully autonomous document management.",
    github_url: "https://github.com/box/box-ai-mcp",
    mcp_config: {
      "mcpServers": {
            "box": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@box/ai-mcp-server"
                  ],
                  "env": {
                        "BOX_CLIENT_ID": "YOUR_ID",
                        "BOX_CLIENT_SECRET": "YOUR_SECRET"
                  }
            }
      }
},
    tags: ["storage", "documents", "content", "collaboration", "ai"],
    category: "Operations",
    author: "Box",
    author_twitter: "@box",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 567,
  },
  {
    id: "70",
    created_at: "2026-03-03T10:00:00Z",
    name: "Retool MCP",
    slug: "retool",
    description: "Build and manage internal tools via Retool. Your AI builds internal dashboards autonomously.",
    long_description: "Full Retool integration for autonomous internal tooling. Your agents trigger Retool workflows, query connected databases, manage resources and build internal tools without engineering effort.",
    github_url: "https://github.com/tryretool/retool-mcp",
    mcp_config: {
      "mcpServers": {
            "retool": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@retool/mcp-server"
                  ],
                  "env": {
                        "RETOOL_API_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["retool", "internal-tools", "dashboard", "automation", "devops"],
    category: "Operations",
    author: "Retool",
    author_twitter: "@retool",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 987,
  },
  {
    id: "71",
    created_at: "2026-03-03T10:00:00Z",
    name: "Harvest Time Tracking MCP",
    slug: "harvest",
    description: "Time tracking and invoicing via Harvest. Know where time goes in your autonomous company.",
    long_description: "Full Harvest integration for autonomous time and project billing. Track time entries, generate invoices, manage project budgets and analyze team productivity.",
    github_url: "https://github.com/community/harvest-mcp",
    mcp_config: {
      "mcpServers": {
            "harvest": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/harvest-mcp"
                  ],
                  "env": {
                        "HARVEST_ACCOUNT_ID": "YOUR_ID",
                        "HARVEST_ACCESS_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["time-tracking", "invoicing", "project-management", "billing", "productivity"],
    category: "Operations",
    author: "Community",
    author_twitter: "@harvest",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 412,
  },
  {
    id: "72",
    created_at: "2026-03-04T10:00:00Z",
    name: "Boost.space MCP",
    slug: "boost-space",
    description: "Centralized business data from 2000+ sources. Sync and automate for autonomous companies.",
    long_description: "Boost.space centralizes and synchronizes business data from 2000+ sources. Your Polsia agents access a unified view of all your business data — CRM, ERP, marketing, finance.",
    github_url: "https://github.com/boostspace/mcp-server",
    mcp_config: {
      "mcpServers": {
            "boost-space": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@boostspace/mcp-server"
                  ],
                  "env": {
                        "BOOST_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["data", "integration", "business", "automation", "sync"],
    category: "Operations",
    author: "Boost.space",
    author_twitter: "@boostspace",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 334,
  },
  {
    id: "73",
    created_at: "2026-03-04T10:00:00Z",
    name: "GitHub MCP",
    slug: "github-ops",
    description: "Autonomous GitHub: PRs, issues, deployments, code review. Polsia MCPHub curated. Your AI dev team.",
    long_description: "Let your autonomous company manage its entire engineering pipeline. Create and merge PRs, manage issues, trigger deployments, review code and maintain repositories. Curated by Polsia MCPHub.",
    github_url: "https://github.com/github/github-mcp-server",
    mcp_config: {
      "mcpServers": {
            "github": {
                  "url": "mcp.market/github/v3"
            }
      }
},
    tags: ["github", "git", "devops", "deployment", "code-review"],
    category: "DevOps",
    author: "GitHub",
    author_twitter: "@github",
    is_featured: true,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 5628,
  },
  {
    id: "74",
    created_at: "2026-03-04T10:00:00Z",
    name: "Vercel Deploy MCP",
    slug: "vercel-deploy",
    description: "Deploy, rollback, manage env vars, monitor Vercel logs. Your autonomous DevOps engineer.",
    long_description: "Full control of the Vercel platform. Deploy releases, rollback, manage environment variables, monitor build logs and track deployment metrics.",
    github_url: "https://github.com/vercel/mcp-server",
    mcp_config: {
      "mcpServers": {
            "vercel": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@vercel/mcp-server"
                  ],
                  "env": {
                        "VERCEL_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["vercel", "deployment", "devops", "hosting", "git"],
    category: "DevOps",
    author: "Vercel",
    author_twitter: "@vercel",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1567,
  },
  {
    id: "75",
    created_at: "2026-03-04T10:00:00Z",
    name: "Playwright Browser MCP",
    slug: "playwright-browser",
    description: "Full browser automation: testing, scraping, UI interactions. Your autonomous AI QA engineer.",
    long_description: "Playwright MCP brings production-grade browser automation to AI agents. Automated tests, web scraping, form filling, screenshots, data extraction.",
    github_url: "https://github.com/microsoft/playwright-mcp",
    mcp_config: {
      "mcpServers": {
            "playwright": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@playwright/mcp"
                  ]
            }
      }
},
    tags: ["browser", "testing", "playwright", "automation", "scraping"],
    category: "DevOps",
    author: "Microsoft",
    author_twitter: "@microsoft",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 4521,
  },
  {
    id: "76",
    created_at: "2026-03-04T10:00:00Z",
    name: "AWS MCP",
    slug: "aws",
    description: "Manage AWS cloud infrastructure autonomously. EC2, S3, Lambda, RDS — your AI cloud engineer.",
    long_description: "Full AWS infrastructure management. Your agents provision EC2 instances, manage S3 buckets, deploy Lambda functions, configure RDS databases and monitor CloudWatch metrics.",
    github_url: "https://github.com/aws/aws-mcp-server",
    mcp_config: {
      "mcpServers": {
            "aws": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@aws/mcp-server"
                  ],
                  "env": {
                        "AWS_ACCESS_KEY_ID": "YOUR_KEY",
                        "AWS_SECRET_ACCESS_KEY": "YOUR_SECRET",
                        "AWS_DEFAULT_REGION": "us-east-1"
                  }
            }
      }
},
    tags: ["aws", "cloud", "devops", "infrastructure", "serverless"],
    category: "DevOps",
    author: "Amazon Web Services",
    author_twitter: "@awscloud",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "paid",
    stars: 3421,
  },
  {
    id: "77",
    created_at: "2026-03-04T10:00:00Z",
    name: "Cloudflare MCP",
    slug: "cloudflare",
    description: "Manage Cloudflare Workers, DNS, CDN and security rules. Autonomous web infrastructure.",
    long_description: "Full Cloudflare integration. Deploy Workers, manage DNS records, configure CDN rules, set up security policies and monitor traffic — your edge infrastructure on autopilot.",
    github_url: "https://github.com/cloudflare/mcp-server-cloudflare",
    mcp_config: {
      "mcpServers": {
            "cloudflare": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@cloudflare/mcp-server"
                  ],
                  "env": {
                        "CLOUDFLARE_API_TOKEN": "YOUR_TOKEN",
                        "CLOUDFLARE_ACCOUNT_ID": "YOUR_ACCOUNT_ID"
                  }
            }
      }
},
    tags: ["cloudflare", "cdn", "workers", "dns", "security"],
    category: "DevOps",
    author: "Cloudflare",
    author_twitter: "@cloudflare",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 2134,
  },
  {
    id: "78",
    created_at: "2026-03-04T10:00:00Z",
    name: "Browserbase Automation MCP",
    slug: "browserbase-automation",
    description: "Cloud browser automation: web navigation, data extraction, form filling at scale.",
    long_description: "Browserbase lets your Polsia agents automate any browser interaction in the cloud. Navigation, data extraction, form filling, screenshots — without local browser infrastructure.",
    github_url: "https://github.com/browserbase/mcp-server-browserbase",
    mcp_config: {
      "mcpServers": {
            "browserbase": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@browserbasehq/mcp"
                  ],
                  "env": {
                        "BROWSERBASE_API_KEY": "YOUR_KEY",
                        "BROWSERBASE_PROJECT_ID": "YOUR_ID"
                  }
            }
      }
},
    tags: ["browser", "automation", "scraping", "web", "cloud"],
    category: "DevOps",
    author: "Browserbase",
    author_twitter: "@browserbasehq",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "paid",
    stars: 934,
  },
  {
    id: "79",
    created_at: "2026-03-05T10:00:00Z",
    name: "BoostSecurity MCP",
    slug: "boostsecurity",
    description: "Protect your coding agents against vulnerable dependencies, malware and typosquatting.",
    long_description: "BoostSecurity guardrails your coding agents against introducing dependencies with vulnerabilities, malware or typosquatting. Essential for autonomous companies deploying code to production.",
    github_url: "https://github.com/boostsecurity/mcp-server",
    mcp_config: {
      "mcpServers": {
            "boostsecurity": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@boostsecurity/mcp-server"
                  ],
                  "env": {
                        "BOOST_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["security", "devops", "vulnerabilities", "code", "compliance"],
    category: "DevOps",
    author: "BoostSecurity",
    author_twitter: "@boostsecurity",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "paid",
    stars: 312,
  },
  {
    id: "80",
    created_at: "2026-03-05T10:00:00Z",
    name: "Datadog MCP",
    slug: "datadog",
    description: "Full-stack monitoring, APM and log management. Your AI SRE monitors everything.",
    long_description: "Complete Datadog integration for autonomous monitoring. Track infrastructure metrics, APM traces, log management and security threats — your AI SRE catches issues before they become incidents.",
    github_url: "https://github.com/DataDog/datadog-mcp",
    mcp_config: {
      "mcpServers": {
            "datadog": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@datadog/mcp-server"
                  ],
                  "env": {
                        "DD_API_KEY": "YOUR_KEY",
                        "DD_APP_KEY": "YOUR_APP_KEY"
                  }
            }
      }
},
    tags: ["datadog", "monitoring", "apm", "logs", "infrastructure"],
    category: "DevOps",
    author: "Datadog",
    author_twitter: "@datadoghq",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 2341,
  },
  {
    id: "81",
    created_at: "2026-03-05T10:00:00Z",
    name: "Cloudwatch MCP",
    slug: "cloudwatch",
    description: "AWS CloudWatch logs, metrics and alarms for autonomous infrastructure monitoring.",
    long_description: "AWS CloudWatch integration for autonomous infrastructure monitoring. Your agents query logs, track metrics, manage alarms, diagnose incidents and send alerts.",
    github_url: "https://github.com/aws/cloudwatch-mcp",
    mcp_config: {
      "mcpServers": {
            "cloudwatch": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@aws/cloudwatch-mcp"
                  ],
                  "env": {
                        "AWS_ACCESS_KEY_ID": "YOUR_KEY",
                        "AWS_SECRET_ACCESS_KEY": "YOUR_SECRET",
                        "AWS_REGION": "us-east-1"
                  }
            }
      }
},
    tags: ["aws", "monitoring", "logs", "infrastructure", "devops"],
    category: "DevOps",
    author: "Amazon Web Services",
    author_twitter: "@awscloud",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "paid",
    stars: 876,
  },
  {
    id: "82",
    created_at: "2026-03-05T10:00:00Z",
    name: "Zapier MCP",
    slug: "zapier-automation",
    description: "Connect 8000+ apps via Zapier from your AI agents. One MCP to automate everything.",
    long_description: "Generate a dynamic MCP that connects to any of Zapier's 8000+ apps. Trigger workflows, pass data between apps, build fully automated business processes.",
    github_url: "https://github.com/zapier/mcp-server",
    mcp_config: {
      "mcpServers": {
            "zapier": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@zapier/mcp-server"
                  ],
                  "env": {
                        "ZAPIER_MCP_SECRET": "YOUR_SECRET"
                  }
            }
      }
},
    tags: ["zapier", "automation", "integrations", "workflows", "no-code"],
    category: "Automation",
    author: "Zapier",
    author_twitter: "@zapier",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 2103,
  },
  {
    id: "83",
    created_at: "2026-03-05T10:00:00Z",
    name: "Make.com MCP",
    slug: "make-automation",
    description: "Trigger and manage Make.com scenarios. Connect 1500+ apps autonomously via your agents.",
    long_description: "Make.com integration to trigger scenarios, pass data between 1500+ apps, monitor executions and build fully automated business processes.",
    github_url: "https://github.com/integromat/make-mcp-server",
    mcp_config: {
      "mcpServers": {
            "make": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@integromat/mcp-server"
                  ],
                  "env": {
                        "MAKE_API_KEY": "YOUR_KEY",
                        "MAKE_TEAM_ID": "YOUR_TEAM_ID"
                  }
            }
      }
},
    tags: ["make", "automation", "integrations", "workflows", "no-code"],
    category: "Automation",
    author: "Make.com",
    author_twitter: "@integromat",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 723,
  },
  {
    id: "84",
    created_at: "2026-03-05T10:00:00Z",
    name: "n8n Workflow MCP",
    slug: "n8n-workflow",
    description: "Access 525+ automation nodes in n8n. Open-source, self-hosted Zapier alternative.",
    long_description: "Integrates the n8n automation platform to provide conversational access to 500+ nodes. Open-source alternative to Zapier for autonomous companies that want to own their infrastructure.",
    github_url: "https://github.com/n8n-io/n8n-mcp",
    mcp_config: {
      "mcpServers": {
            "n8n": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@n8n/mcp-server"
                  ],
                  "env": {
                        "N8N_HOST": "http://localhost:5678",
                        "N8N_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["n8n", "automation", "workflows", "self-hosted", "open-source"],
    category: "Automation",
    author: "n8n",
    author_twitter: "@n8n_io",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 987,
  },
  {
    id: "85",
    created_at: "2026-03-06T10:00:00Z",
    name: "ActionKit by Paragon MCP",
    slug: "actionkit-paragon",
    description: "Connect 130+ SaaS integrations (Slack, Salesforce, Gmail) via Paragon ActionKit API.",
    long_description: "ActionKit by Paragon exposes 130+ ready-to-use SaaS integrations for your agents. Slack, Salesforce, Gmail, HubSpot, Jira — connect all your business tools in one MCP.",
    github_url: "https://github.com/useparagon/mcp-server",
    mcp_config: {
      "mcpServers": {
            "paragon": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@paragon/actionkit-mcp"
                  ],
                  "env": {
                        "PARAGON_PROJECT_ID": "YOUR_ID",
                        "PARAGON_SIGNING_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["saas", "integrations", "salesforce", "slack", "automation"],
    category: "Automation",
    author: "Paragon",
    author_twitter: "@useparagon",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "paid",
    stars: 445,
  },
  {
    id: "86",
    created_at: "2026-03-06T10:00:00Z",
    name: "DocuSign MCP",
    slug: "docusign",
    description: "E-signatures and contract management for autonomous companies. Close deals while you sleep.",
    long_description: "Full DocuSign integration for autonomous contract management. Send documents for e-signature, track signing status, manage templates, store signed contracts and trigger workflows.",
    github_url: "https://github.com/docusign/mcp-server",
    mcp_config: {
      "mcpServers": {
            "docusign": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@docusign/mcp-server"
                  ],
                  "env": {
                        "DOCUSIGN_ACCESS_TOKEN": "YOUR_TOKEN",
                        "DOCUSIGN_ACCOUNT_ID": "YOUR_ACCOUNT"
                  }
            }
      }
},
    tags: ["docusign", "esignature", "contracts", "legal", "automation"],
    category: "Automation",
    author: "DocuSign",
    author_twitter: "@docusign",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 892,
  },
  {
    id: "87",
    created_at: "2026-03-06T10:00:00Z",
    name: "Shopify MCP",
    slug: "shopify-store",
    description: "Manage your Shopify store autonomously: products, orders, customers, inventory, reports.",
    long_description: "Your Polsia agent manages your Shopify store 24/7. Create and update products, process orders, manage customers, track inventory and generate sales reports.",
    github_url: "https://github.com/shopify/mcp-server",
    mcp_config: {
      "mcpServers": {
            "shopify": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@shopify/mcp-server"
                  ],
                  "env": {
                        "SHOPIFY_ACCESS_TOKEN": "YOUR_TOKEN",
                        "SHOPIFY_STORE_URL": "YOUR_STORE.myshopify.com"
                  }
            }
      }
},
    tags: ["shopify", "ecommerce", "products", "orders", "inventory"],
    category: "E-Commerce",
    author: "Shopify",
    author_twitter: "@shopify",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 1876,
  },
  {
    id: "88",
    created_at: "2026-03-06T10:00:00Z",
    name: "WooCommerce MCP",
    slug: "woocommerce",
    description: "Autonomous WooCommerce store management via REST API. Products, orders, coupons, analytics.",
    long_description: "Full WooCommerce integration. Manage products, process and update orders, create coupons, track customers and generate sales analytics — your WordPress store on autopilot.",
    github_url: "https://github.com/community/woocommerce-mcp",
    mcp_config: {
      "mcpServers": {
            "woocommerce": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/woocommerce-mcp"
                  ],
                  "env": {
                        "WC_URL": "YOUR_STORE_URL",
                        "WC_KEY": "YOUR_KEY",
                        "WC_SECRET": "YOUR_SECRET"
                  }
            }
      }
},
    tags: ["woocommerce", "ecommerce", "wordpress", "orders", "products"],
    category: "E-Commerce",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 567,
  },
  {
    id: "89",
    created_at: "2026-03-06T10:00:00Z",
    name: "Amazon Seller MCP",
    slug: "amazon-seller",
    description: "Manage your Amazon Seller account: listings, inventory, FBA, ad campaigns. Full automation.",
    long_description: "Complete Amazon Seller Central automation. Manage product listings, monitor FBA inventory, optimize ad campaigns, track sales metrics, respond to reviews — sell on Amazon hands-free.",
    github_url: "https://github.com/community/amazon-seller-mcp",
    mcp_config: {
      "mcpServers": {
            "amazon": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/amazon-seller-mcp"
                  ],
                  "env": {
                        "SP_API_ACCESS_KEY": "YOUR_KEY",
                        "SP_API_SECRET": "YOUR_SECRET",
                        "SP_SELLER_ID": "YOUR_ID"
                  }
            }
      }
},
    tags: ["amazon", "ecommerce", "fba", "marketplace", "ads"],
    category: "E-Commerce",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 734,
  },
  {
    id: "90",
    created_at: "2026-03-06T10:00:00Z",
    name: "Stripe Billing MCP",
    slug: "stripe-billing",
    description: "Advanced Stripe billing: metered usage, trials, proration, revenue recovery.",
    long_description: "Advanced Stripe Billing for complex subscription management. Handle metered usage billing, trial periods, proration, dunning and revenue recovery — your billing engine runs itself.",
    github_url: "https://github.com/stripe/stripe-billing-mcp",
    mcp_config: {
      "mcpServers": {
            "stripe-billing": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@stripe/billing-mcp"
                  ],
                  "env": {
                        "STRIPE_SECRET_KEY": "sk_live_YOUR_KEY"
                  }
            }
      }
},
    tags: ["stripe", "billing", "subscriptions", "metered", "finance"],
    category: "E-Commerce",
    author: "Stripe",
    author_twitter: "@stripe",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1876,
  },
  {
    id: "91",
    created_at: "2026-03-07T10:00:00Z",
    name: "Intercom MCP",
    slug: "intercom",
    description: "Customer messaging and support automation. Your AI handles support tickets 24/7.",
    long_description: "Full Intercom integration for autonomous customer support. Your agents read and respond to conversations, create and resolve tickets, look up customer data and escalate complex issues.",
    github_url: "https://github.com/intercom/intercom-mcp",
    mcp_config: {
      "mcpServers": {
            "intercom": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@intercom/mcp-server"
                  ],
                  "env": {
                        "INTERCOM_ACCESS_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["intercom", "support", "chat", "crm", "customer-service"],
    category: "Customer Support",
    author: "Intercom",
    author_twitter: "@intercom",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 1234,
  },
  {
    id: "92",
    created_at: "2026-03-07T10:00:00Z",
    name: "Zendesk MCP",
    slug: "zendesk",
    description: "Support tickets, help desk, customer data via Zendesk. Your AI support agent, always available.",
    long_description: "Complete Zendesk integration. Create and update tickets, look up customer history, apply macros, escalate priority issues and generate support metrics reports.",
    github_url: "https://github.com/community/zendesk-mcp",
    mcp_config: {
      "mcpServers": {
            "zendesk": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/zendesk-mcp"
                  ],
                  "env": {
                        "ZENDESK_SUBDOMAIN": "YOUR_SUBDOMAIN",
                        "ZENDESK_EMAIL": "YOUR_EMAIL",
                        "ZENDESK_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["zendesk", "support", "tickets", "helpdesk", "customer-service"],
    category: "Customer Support",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 876,
  },
  {
    id: "93",
    created_at: "2026-03-07T10:00:00Z",
    name: "Freshdesk MCP",
    slug: "freshdesk",
    description: "Customer support automation via Freshdesk. Tickets, contacts, reports — handled by your AI.",
    long_description: "Freshdesk integration for autonomous customer support. Manage tickets, contacts and companies, auto-assign based on rules, send canned responses, escalate urgent issues.",
    github_url: "https://github.com/community/freshdesk-mcp",
    mcp_config: {
      "mcpServers": {
            "freshdesk": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/freshdesk-mcp"
                  ],
                  "env": {
                        "FRESHDESK_DOMAIN": "YOUR_DOMAIN.freshdesk.com",
                        "FRESHDESK_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["freshdesk", "support", "tickets", "helpdesk", "customer-service"],
    category: "Customer Support",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 523,
  },
  {
    id: "94",
    created_at: "2026-03-07T10:00:00Z",
    name: "BambooHR MCP",
    slug: "bamboohr",
    description: "HR operations via BambooHR: employee data, time-off, onboarding — fully autonomous.",
    long_description: "Full BambooHR integration. Manage employee records, track time-off requests, streamline onboarding workflows, access org charts and generate HR reports — zero HR admin overhead.",
    github_url: "https://github.com/community/bamboohr-mcp",
    mcp_config: {
      "mcpServers": {
            "bamboohr": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/bamboohr-mcp"
                  ],
                  "env": {
                        "BAMBOOHR_API_KEY": "YOUR_KEY",
                        "BAMBOOHR_SUBDOMAIN": "YOUR_COMPANY"
                  }
            }
      }
},
    tags: ["bamboohr", "hr", "employees", "onboarding", "time-off"],
    category: "HR & Recruiting",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 412,
  },
  {
    id: "95",
    created_at: "2026-03-07T10:00:00Z",
    name: "Gusto Payroll MCP",
    slug: "gusto-payroll",
    description: "Payroll, benefits and HR via Gusto. Your AI runs payroll and manages benefits automatically.",
    long_description: "Full Gusto integration for autonomous payroll and HR. Run payroll, manage benefits enrollment, track time and attendance, handle contractor payments and generate payroll reports.",
    github_url: "https://github.com/community/gusto-mcp",
    mcp_config: {
      "mcpServers": {
            "gusto": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/gusto-mcp"
                  ],
                  "env": {
                        "GUSTO_ACCESS_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["gusto", "payroll", "hr", "benefits", "employees"],
    category: "HR & Recruiting",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 334,
  },
  {
    id: "96",
    created_at: "2026-03-07T10:00:00Z",
    name: "OpenAI MCP",
    slug: "openai",
    description: "Access GPT-4, DALL-E, Whisper and Embeddings from your agents. AI capabilities on demand.",
    long_description: "Full OpenAI API integration. Your Polsia agents invoke GPT-4 for sub-tasks, generate images with DALL-E, transcribe audio with Whisper, create embeddings for semantic search.",
    github_url: "https://github.com/community/openai-mcp",
    mcp_config: {
      "mcpServers": {
            "openai": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/openai-mcp"
                  ],
                  "env": {
                        "OPENAI_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["openai", "gpt", "ai", "embeddings", "image-generation"],
    category: "AI & Agents",
    author: "Community",
    author_twitter: "@mcpdev",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "paid",
    stars: 4521,
  },
  {
    id: "97",
    created_at: "2026-03-07T10:00:00Z",
    name: "Anthropic Claude MCP",
    slug: "anthropic-claude",
    description: "Access Claude models from within your agents. Delegate sub-tasks to specialized AI instances.",
    long_description: "Use Claude as a sub-agent within your Polsia stack. Delegate complex writing, analysis or reasoning tasks to specialized Claude instances and orchestrate multi-model workflows.",
    github_url: "https://github.com/anthropics/anthropic-mcp",
    mcp_config: {
      "mcpServers": {
            "claude": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@anthropic/mcp-server"
                  ],
                  "env": {
                        "ANTHROPIC_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["claude", "anthropic", "ai", "reasoning", "agents"],
    category: "AI & Agents",
    author: "Anthropic",
    author_twitter: "@anthropic",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "paid",
    stars: 5234,
  },
  {
    id: "98",
    created_at: "2026-03-07T10:00:00Z",
    name: "Pinecone Vector DB MCP",
    slug: "pinecone",
    description: "Vector search for your agents. Semantic search, RAG and AI memory at production scale.",
    long_description: "Pinecone vector database integration for AI-powered search and memory. Build semantic search, RAG systems and long-term agent memory for your Polsia stack at any scale.",
    github_url: "https://github.com/pinecone-io/pinecone-mcp",
    mcp_config: {
      "mcpServers": {
            "pinecone": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@pinecone/mcp-server"
                  ],
                  "env": {
                        "PINECONE_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["vector", "search", "rag", "ai", "memory"],
    category: "AI & Agents",
    author: "Pinecone",
    author_twitter: "@pinecone",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1876,
  },
  {
    id: "99",
    created_at: "2026-03-07T10:00:00Z",
    name: "AgentOps LLM Monitor MCP",
    slug: "agentops-llm",
    description: "LLM call monitoring, cost tracking and performance optimization for your agent stack.",
    long_description: "Monitor every LLM call in your Polsia agent stack. Track costs, latency, token usage, error rates and optimize your AI spend — essential observability for companies running multiple agents.",
    github_url: "https://github.com/AgentOps-AI/agentops-llm-mcp",
    mcp_config: {
      "mcpServers": {
            "agentops-llm": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@agentops/llm-mcp"
                  ],
                  "env": {
                        "AGENTOPS_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["monitoring", "llm", "costs", "observability", "agents"],
    category: "AI & Agents",
    author: "AgentOps",
    author_twitter: "@agentopsai",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 534,
  },
  {
    id: "100",
    created_at: "2026-03-07T10:00:00Z",
    name: "Perplexity Search MCP",
    slug: "perplexity-search",
    description: "Real-time AI-powered web research for your agents. Get cited, factual answers instantly.",
    long_description: "Perplexity AI integration for real-time, cited web research. Your Polsia agents get up-to-date, factual answers with sources for market research, competitor analysis and business intelligence.",
    github_url: "https://github.com/community/perplexity-mcp",
    mcp_config: {
      "mcpServers": {
            "perplexity": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/perplexity-mcp"
                  ],
                  "env": {
                        "PERPLEXITY_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["search", "research", "ai", "web", "market-research"],
    category: "AI & Agents",
    author: "Community",
    author_twitter: "@perplexity_ai",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "paid",
    stars: 1876,
  },
  {
    id: "101",
    created_at: "2026-03-07T10:00:00Z",
    name: "YouTube MCP",
    slug: "youtube",
    description: "Manage YouTube channel, upload videos, analyze metrics. Your AI content team for video.",
    long_description: "Full YouTube Data API integration. Upload videos, manage playlists, respond to comments, track analytics, optimize titles and descriptions for SEO — run your YouTube channel on autopilot.",
    github_url: "https://github.com/community/youtube-mcp",
    mcp_config: {
      "mcpServers": {
            "youtube": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/youtube-mcp"
                  ],
                  "env": {
                        "YOUTUBE_API_KEY": "YOUR_KEY",
                        "YOUTUBE_CHANNEL_ID": "YOUR_CHANNEL"
                  }
            }
      }
},
    tags: ["youtube", "video", "content", "social", "seo"],
    category: "Social Media",
    author: "Community",
    author_twitter: "@youtube",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1234,
  },
  {
    id: "102",
    created_at: "2026-03-07T10:00:00Z",
    name: "Twitch MCP",
    slug: "twitch",
    description: "Manage Twitch streams, chat and community. Autonomous content creator toolkit.",
    long_description: "Full Twitch API integration. Manage stream settings, monitor chat, post channel updates, track analytics, respond to community interactions and schedule content.",
    github_url: "https://github.com/community/twitch-mcp",
    mcp_config: {
      "mcpServers": {
            "twitch": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/twitch-mcp"
                  ],
                  "env": {
                        "TWITCH_CLIENT_ID": "YOUR_ID",
                        "TWITCH_ACCESS_TOKEN": "YOUR_TOKEN"
                  }
            }
      }
},
    tags: ["twitch", "streaming", "content", "community", "social"],
    category: "Social Media",
    author: "Community",
    author_twitter: "@twitch",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 543,
  },
  {
    id: "103",
    created_at: "2026-03-08T10:00:00Z",
    name: "Lemon Squeezy MCP",
    slug: "lemon-squeezy-2",
    description: "Payments, subscriptions and licensing for SaaS indie makers. Stripe alternative with VAT included.",
    long_description: "Lemon Squeezy integration for autonomous SaaS billing. Create checkouts, manage subscriptions, handle licensing and process refunds — perfect for indie-made products. Handles EU VAT automatically.",
    github_url: "https://github.com/community/lemon-squeezy-mcp",
    mcp_config: {
      "mcpServers": {
            "lemon-squeezy": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/lemon-squeezy-mcp"
                  ],
                  "env": {
                        "LEMON_SQUEEZY_API_KEY": "YOUR_KEY"
                  }
            }
      }
},
    tags: ["payments", "subscriptions", "saas", "licensing", "indie"],
    category: "Finance",
    author: "Community",
    author_twitter: "@lmsqueezy",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 876,
  },
  {
    id: "104",
    created_at: "2026-03-08T10:00:00Z",
    name: "Plausible Analytics MCP",
    slug: "plausible-analytics",
    description: "Privacy-first web analytics. GDPR-compliant traffic insights for your autonomous company.",
    long_description: "Plausible Analytics MCP for privacy-first web traffic insights. Query page views, unique visitors, referral sources and goal conversions — GDPR-compliant analytics that respect user privacy.",
    github_url: "https://github.com/community/plausible-mcp",
    mcp_config: {
      "mcpServers": {
            "plausible": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@community/plausible-mcp"
                  ],
                  "env": {
                        "PLAUSIBLE_API_KEY": "YOUR_KEY",
                        "PLAUSIBLE_SITE_ID": "YOUR_DOMAIN"
                  }
            }
      }
},
    tags: ["analytics", "privacy", "gdpr", "traffic", "web"],
    category: "Analytics",
    author: "Community",
    author_twitter: "@plausiblehq",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "subscription",
    stars: 634,
  },
  {
    id: "105",
    created_at: "2026-03-08T10:00:00Z",
    name: "Stripe Connect MCP",
    slug: "stripe-connect",
    description: "Marketplace and platform payments via Stripe Connect. Split payments, manage sub-accounts.",
    long_description: "Stripe Connect integration for marketplace and platform businesses. Onboard sellers, split payments, manage sub-accounts, handle payouts and track platform revenue.",
    github_url: "https://github.com/stripe/stripe-connect-mcp",
    mcp_config: {
      "mcpServers": {
            "stripe-connect": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@stripe/connect-mcp"
                  ],
                  "env": {
                        "STRIPE_SECRET_KEY": "sk_live_YOUR_KEY"
                  }
            }
      }
},
    tags: ["stripe", "marketplace", "payments", "platform", "finance"],
    category: "Finance",
    author: "Stripe",
    author_twitter: "@stripe",
    is_featured: false,
    is_polsia_compatible: true,
    price_type: "free",
    stars: 1456,
  },
];
