"use client";

import { useEffect } from "react";

/**
 * Safety net for password recovery. If Supabase ever falls back to the Site
 * URL (the homepage) instead of /reset-password, the recovery tokens land in
 * the fragment here. Forward them to the reset form so the user is never
 * stranded on the marketing site with a token in the URL.
 */
export default function RecoveryRedirect() {
  useEffect(() => {
    const hash = window.location.hash;
    const looksLikeRecovery =
      hash.includes("access_token=") ||
      hash.includes("type=recovery") ||
      hash.includes("error_code=");
    if (looksLikeRecovery && window.location.pathname !== "/reset-password") {
      window.location.replace("/reset-password" + hash);
    }
  }, []);

  return null;
}
