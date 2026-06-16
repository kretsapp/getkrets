"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { createBrowserSupabase } from "@/lib/supabaseBrowser";

type Phase = "loading" | "form" | "success" | "error";

const APP_SCHEME = "krets://";

function decodeDesc(raw: string | null): string | null {
  if (!raw) return null;
  return decodeURIComponent(raw.replace(/\+/g, " "));
}

/**
 * Web password-reset form. Supabase's verify endpoint redirects here with the
 * recovery tokens in the URL fragment (#access_token=...&refresh_token=...&
 * type=recovery), or with #error=...&error_code=otp_expired on an expired
 * link. We establish the recovery session from those tokens, let the user set
 * a new password right here, and update it via Supabase. No app round-trip.
 */
export default function ResetPasswordForm({
  appStoreId,
}: {
  appStoreId: string;
}) {
  const appStoreUrl = `https://apps.apple.com/app/id${appStoreId}`;
  const supabase = useMemo(() => createBrowserSupabase(), []);

  const [phase, setPhase] = useState<Phase>("loading");
  const [fatal, setFatal] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    const params = new URLSearchParams(hash);

    if (params.get("error") || params.get("error_code")) {
      setFatal(
        decodeDesc(params.get("error_description")) ??
          "This reset link is invalid or has expired.",
      );
      setPhase("error");
      return;
    }

    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");
    if (params.get("type") !== "recovery" || !accessToken || !refreshToken) {
      setFatal("This page can only be opened from a password-reset email.");
      setPhase("error");
      return;
    }

    supabase.auth
      .setSession({ access_token: accessToken, refresh_token: refreshToken })
      .then(({ error }) => {
        if (error) {
          setFatal(
            "This reset link has expired. Request a new one from the Krets app.",
          );
          setPhase("error");
          return;
        }
        // Strip the tokens out of the address bar once the session is set.
        window.history.replaceState(null, "", window.location.pathname);
        setPhase("form");
      });
  }, [supabase]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFieldError(null);
    if (password.length < 8) {
      setFieldError("Use at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setFieldError("The passwords don't match.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.auth.updateUser({ password });
    setSubmitting(false);
    if (error) {
      setFieldError(error.message || "Couldn't update the password. Try again.");
      return;
    }
    await supabase.auth.signOut();
    setPhase("success");
  }

  const inputClass =
    "w-full rounded-[var(--radius-button)] border border-input-border bg-surface px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none";

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm flex flex-col items-center text-center">
        <Image
          src="/krets-mark-terracotta-512.png"
          alt="Krets"
          width={72}
          height={72}
          priority
          className="mb-8 rounded-2xl"
        />

        {phase === "loading" && (
          <p className="text-text-body">Loading&hellip;</p>
        )}

        {phase === "form" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Choose a new password
            </h1>
            <p className="text-text-body mb-8 leading-relaxed">
              Set a new password for your Krets account, then open the app to
              sign in.
            </p>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
              <input
                type="password"
                className={inputClass}
                placeholder="New password"
                autoComplete="new-password"
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                className={inputClass}
                placeholder="Confirm new password"
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />

              {fieldError && (
                <p className="text-sm text-accent text-left">{fieldError}</p>
              )}

              <button
                type="submit"
                disabled={submitting || !password || !confirm}
                className="mt-2 w-full inline-flex items-center justify-center rounded-[var(--radius-button)] bg-accent hover:bg-accent-hover transition-colors text-white font-semibold px-6 py-3.5 disabled:opacity-50"
              >
                {submitting ? "Updating…" : "Update password"}
              </button>
            </form>
          </>
        )}

        {phase === "success" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Password updated
            </h1>
            <p className="text-text-body mb-8 leading-relaxed">
              You&rsquo;re all set. Open Krets and sign in with your new
              password.
            </p>
            <a
              href={APP_SCHEME}
              className="w-full inline-flex items-center justify-center rounded-[var(--radius-button)] bg-accent hover:bg-accent-hover transition-colors text-white font-semibold px-6 py-3.5 mb-3"
            >
              Open Krets
            </a>
            <p className="text-sm text-text-muted">
              Don&rsquo;t have it yet?{" "}
              <a
                href={appStoreUrl}
                className="text-text-secondary underline underline-offset-2"
              >
                Download Krets
              </a>
            </p>
          </>
        )}

        {phase === "error" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
              This link didn&rsquo;t work
            </h1>
            <p className="text-text-body mb-8 leading-relaxed">{fatal}</p>
            <p className="text-sm text-text-muted">
              Open Krets, tap{" "}
              <strong className="text-text-secondary">Forgot password?</strong>{" "}
              on the sign-in screen, and request a fresh link.
            </p>
          </>
        )}

        <Link
          href="/"
          className="mt-10 text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          &larr; About Krets
        </Link>
      </div>
    </main>
  );
}
