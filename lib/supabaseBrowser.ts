import { createClient } from "@supabase/supabase-js";

// Public Supabase project URL + publishable key. These are safe to ship in
// client code and commit: the publishable key is RLS-gated and is the same
// public key already embedded in the Krets iOS app bundle. It is NOT the
// service_role key.
const SUPABASE_URL = "https://rtjnbnpbooafkquolczc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_bGrd0_N0n7Olb6YBxlxgNA_DbqDulqu";

/**
 * Browser-only Supabase client used by the password-reset page. We parse the
 * recovery tokens out of the URL fragment ourselves (detectSessionInUrl off)
 * and keep the session in memory only (persistSession off) so the marketing
 * site never leaves an auth session in localStorage.
 */
export function createBrowserSupabase() {
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      detectSessionInUrl: false,
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
