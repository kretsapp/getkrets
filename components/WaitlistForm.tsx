"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { isValidEmail, ERRORS } from "@/lib/validation";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({ variant = "hero", buttonText = "Join the waitlist" }: { variant?: "hero" | "cta"; buttonText?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!trimmed || !isValidEmail(trimmed)) {
      setStatus("error");
      setError(ERRORS.INVALID_EMAIL);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setError(data.error || ERRORS.GENERIC);
      }
    } catch {
      setStatus("error");
      setError(ERRORS.GENERIC);
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`flex items-center gap-3 rounded-[var(--radius-card)] border border-accent/30 bg-accent/10 px-5 py-4 ${variant === "hero" ? "max-w-md" : "max-w-lg"} mx-auto`}
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
          <Check size={16} className="text-white" />
        </div>
        <p className="text-[15px] text-text-primary">
          You&apos;re on the list! We&apos;ll let you know when Krets is ready.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Waitlist signup"
      className={`w-full ${variant === "hero" ? "max-w-md" : "max-w-lg"} mx-auto`}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") {
              setStatus("idle");
              setError(null);
            }
          }}
          disabled={status === "loading"}
          className="h-12 w-full sm:flex-1 rounded-[var(--radius-button)] border border-input-border bg-surface px-4 text-[15px] text-text-primary placeholder:text-text-muted outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-12 shrink-0 cursor-pointer rounded-[var(--radius-button)] bg-accent px-6 text-[15px] font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Joining..." : buttonText}
        </button>
      </div>
      {error && (
        <p
          role="alert"
          aria-live="polite"
          className="mt-2 text-[13px] text-red-400"
        >
          {error}
        </p>
      )}
    </form>
  );
}
