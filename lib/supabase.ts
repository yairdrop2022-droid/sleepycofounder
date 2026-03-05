import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      mcps: {
        Row: {
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
        };
        Insert: Omit<Database["public"]["Tables"]["mcps"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["mcps"]["Insert"]>;
      };
    };
  };
};
