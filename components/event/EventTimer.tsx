"use client";

import { useEffect, useState } from "react";

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function diffParts(now: Date, target: Date) {
  const diff = Math.max(0, target.getTime() - now.getTime());
  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds };
}

type Props = {
  targetDate: string;
  endDate: string | null;
};

export function EventTimer({ targetDate, endDate }: Props) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const start = new Date(targetDate + "T00:00:00");
  const effectiveEnd = endDate ?? targetDate;
  const end = new Date(effectiveEnd + "T23:59:59");

  const isOngoing = now >= start && now <= end;
  const isPast = now > end;
  const target = isOngoing ? end : start;
  const parts = diffParts(now, target);

  if (isPast) return null;

  return (
    <div className="py-4 px-5 bg-surface border-b border-border">
      {isOngoing && (
        <p className="text-center text-xs uppercase tracking-wider text-green-600 font-medium mb-2">
          Happening now
        </p>
      )}
      <div className="flex items-end justify-center gap-1">
        <TimerCell value={parts.days} label="days" prominent />
        <Separator />
        <TimerCell value={pad(parts.hours)} label="hrs" />
        <Separator />
        <TimerCell value={pad(parts.minutes)} label="min" />
        <Separator />
        <TimerCell value={pad(parts.seconds)} label="sec" />
      </div>
    </div>
  );
}

function TimerCell({
  value,
  label,
  prominent,
}: {
  value: number | string;
  label: string;
  prominent?: boolean;
}) {
  return (
    <div className="flex flex-col items-center min-w-[52px]">
      <span
        className={`font-bold tabular-nums leading-tight ${
          prominent
            ? "text-[38px] leading-[42px] text-accent"
            : "text-[30px] leading-[34px] text-text-primary"
        }`}
      >
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-wider text-text-muted mt-0.5">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="font-bold text-[26px] text-text-muted pb-3.5">:</span>
  );
}
