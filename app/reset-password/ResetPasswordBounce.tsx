"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Status = "loading" | "ready" | "error";

/**
 * Recovery bounce page. Supabase's verify endpoint redirects here with the
 * recovery tokens in the URL fragment, e.g.
 *   https://getkrets.app/reset-password#access_token=...&type=recovery
 * On an expired/invalid link it instead redirects with
 *   #error=access_denied&error_code=otp_expired&error_description=...
 *
 * The fragment never reaches the server, so this must be a client component.
 * We re-emit the fragment into the app's custom scheme
 * (`krets://reset-password#...`) and let the user tap through. We also
 * auto-attempt the hand-off, which works when the browser allows it.
 */
const DEEP_LINK_BASE = "krets://reset-password";

export default function ResetPasswordBounce({
  appStoreId,
}: {
  appStoreId: string;
}) {
  const appStoreUrl = `https://apps.apple.com/app/id${appStoreId}`;
  const [status, setStatus] = useState<Status>("loading");
  const [deepLink, setDeepLink] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) {
      setStatus("error");
      setErrorMessage(
        "This link is missing its recovery details. Request a new password reset from the Krets app.",
      );
      return;
    }

    const params = new URLSearchParams(hash);

    if (params.get("error")) {
      const desc = params.get("error_description");
      setStatus("error");
      setErrorMessage(
        desc
          ? decodeURIComponent(desc.replace(/\+/g, " "))
          : "This reset link is invalid or has expired.",
      );
      return;
    }

    if (params.get("type") === "recovery" && params.get("access_token")) {
      const link = `${DEEP_LINK_BASE}#${hash}`;
      setDeepLink(link);
      setStatus("ready");
      // Auto-attempt the hand-off; the button below is the reliable path.
      window.location.href = link;
      return;
    }

    setStatus("error");
    setErrorMessage(
      "This link is missing its recovery details. Request a new password reset from the Krets app.",
    );
  }, []);

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <Image
          src="/krets-mark-terracotta-512.png"
          alt="Krets"
          width={72}
          height={72}
          priority
          className="mb-8 rounded-2xl"
        />

        {status === "loading" && (
          <p className="text-text-body">Opening Krets&hellip;</p>
        )}

        {status === "ready" && deepLink && (
          <>
            <p className="text-sm uppercase tracking-[0.18em] text-text-muted mb-3">
              Reset your password
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Continue in the Krets app
            </h1>
            <p className="text-text-body mb-8 leading-relaxed">
              Tap below to open Krets and set a new password. This link works
              once and expires shortly, so finish up soon.
            </p>

            <a
              href={deepLink}
              className="w-full max-w-xs inline-flex items-center justify-center rounded-[var(--radius-button)] bg-accent hover:bg-accent-hover transition-colors text-white font-semibold px-6 py-3.5 mb-3"
            >
              Open Krets
            </a>
            <p className="text-sm text-text-muted">
              Don&rsquo;t have Krets installed?{" "}
              <a
                href={appStoreUrl}
                className="text-text-secondary underline underline-offset-2"
              >
                Download it
              </a>
              , then tap this link again.
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <p className="text-sm uppercase tracking-[0.18em] text-text-muted mb-3">
              Reset your password
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
              This link didn&rsquo;t work
            </h1>
            <p className="text-text-body mb-8 leading-relaxed">
              {errorMessage}
            </p>
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
