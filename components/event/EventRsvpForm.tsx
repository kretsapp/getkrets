"use client";

import { useEffect, useState } from "react";
import { Check, HelpCircle, X } from "lucide-react";
import type { RsvpStatus } from "@/lib/types";

const STATUS_OPTIONS: {
  status: RsvpStatus;
  label: string;
  Icon: typeof Check;
  activeColor: string;
  activeBg: string;
}[] = [
  {
    status: "going",
    label: "Going",
    Icon: Check,
    activeColor: "text-white",
    activeBg: "bg-green-600",
  },
  {
    status: "maybe",
    label: "Maybe",
    Icon: HelpCircle,
    activeColor: "text-white",
    activeBg: "bg-amber-500",
  },
  {
    status: "not_going",
    label: "Can't",
    Icon: X,
    activeColor: "text-white",
    activeBg: "bg-red-500",
  },
];

const CONFIRM_LABELS: Record<RsvpStatus, string> = {
  going: "You're going!",
  maybe: "You're a maybe",
  not_going: "You can't make it",
};

type Props = {
  token: string;
  isPast: boolean;
};

type StoredRsvp = {
  guestName: string;
  status: RsvpStatus;
  guestId: string;
};

export function EventRsvpForm({ token, isPast }: Props) {
  const [guestName, setGuestName] = useState("");
  const [status, setStatus] = useState<RsvpStatus | null>(null);
  const [guestId, setGuestId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Restore from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`krets_guest_${token}`);
      if (stored) {
        const data: StoredRsvp = JSON.parse(stored);
        setGuestName(data.guestName);
        setStatus(data.status);
        setGuestId(data.guestId);
        setSubmitted(true);
      }
    } catch {
      // ignore
    }
  }, [token]);

  const handleSubmit = async () => {
    if (!guestName.trim() || !status) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/event/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          guestName: guestName.trim(),
          status,
          guestId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      const newGuestId = data.guestId;
      setGuestId(newGuestId);
      setSubmitted(true);

      localStorage.setItem(
        `krets_guest_${token}`,
        JSON.stringify({
          guestName: guestName.trim(),
          status,
          guestId: newGuestId,
        }),
      );
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = () => {
    setSubmitted(false);
  };

  if (isPast) {
    return (
      <div className="px-5 py-4">
        <p className="text-center text-text-muted text-sm">
          This event has ended
        </p>
      </div>
    );
  }

  return (
    <div className="px-5 py-4">
      <h2 className="font-bold text-base text-text-primary mb-3">RSVP</h2>

      {submitted && status ? (
        <div className="space-y-3">
          <p className="text-[15px] font-medium text-text-primary">
            {CONFIRM_LABELS[status]}
          </p>
          <p className="text-sm text-text-secondary">
            Responding as {guestName}
          </p>
          <button
            type="button"
            onClick={handleChange}
            className="text-sm text-accent font-medium hover:underline"
          >
            Change response
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            maxLength={100}
            className="w-full px-3.5 py-3 rounded-[10px] bg-deep border border-input-border text-text-primary text-[15px] placeholder:text-text-muted outline-none focus:border-accent transition-colors"
          />

          <div className="flex gap-2">
            {STATUS_OPTIONS.map(({ status: s, label, Icon, activeColor, activeBg }) => {
              const selected = status === s;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStatus(s)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-[10px] text-[13px] font-medium transition-colors ${
                    selected
                      ? `${activeBg} ${activeColor}`
                      : "bg-deep text-text-secondary hover:bg-surface"
                  }`}
                >
                  <Icon size={15} strokeWidth={2.5} />
                  {label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!guestName.trim() || !status || submitting}
            className="w-full py-3.5 rounded-[12px] bg-accent text-white font-bold text-base hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {submitting ? "Submitting..." : "Submit RSVP"}
          </button>

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}
        </div>
      )}
    </div>
  );
}
