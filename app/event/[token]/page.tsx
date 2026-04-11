import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSupabaseClient } from "@/lib/supabase";
import type { SharedEvent } from "@/lib/types";
import { KretsMark } from "@/components/KretsMark";
import { EventHero } from "@/components/event/EventHero";
import { EventTimer } from "@/components/event/EventTimer";
import { EventDetails } from "@/components/event/EventDetails";
import { EventRsvpForm } from "@/components/event/EventRsvpForm";
import { EventAttendees } from "@/components/event/EventAttendees";
import { AppDownloadCTA } from "@/components/event/AppDownloadCTA";

async function getEvent(token: string): Promise<SharedEvent | null> {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.rpc("get_shared_event", {
      p_token: token,
    });
    if (error || !data) return null;
    return data as unknown as SharedEvent;
  } catch {
    return null;
  }
}

type PageProps = {
  params: Promise<{ token: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { token } = await params;
  const event = await getEvent(token);
  if (!event) {
    return { title: "Event not found — Krets" };
  }

  const title = `${event.emoji} ${event.title} — Krets`;
  const description = event.description
    ? event.description.slice(0, 160)
    : `RSVP to ${event.title} on Krets`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Krets",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function EventPage({ params }: PageProps) {
  const { token } = await params;
  const event = await getEvent(token);
  if (!event) notFound();

  const effectiveEnd = event.end_date ?? event.target_date;
  const isPast = new Date(effectiveEnd + "T23:59:59") < new Date();

  return (
    <div className="light bg-bg min-h-dvh">
      {/* Branding header */}
      <header className="flex items-center gap-2 px-5 py-4">
        <KretsMark size={24} />
        <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-text-primary">
          Krets
        </span>
      </header>

      <main className="max-w-lg mx-auto pb-8">
        <EventHero
          emoji={event.emoji}
          title={event.title}
          targetDate={event.target_date}
          endDate={event.end_date}
          coverImageUrl={event.cover_image_url}
          groupName={event.group_name}
        />

        <EventTimer
          targetDate={event.target_date}
          endDate={event.end_date}
        />

        <EventRsvpForm token={token} isPast={isPast} />

        <EventAttendees
          memberRsvps={event.member_rsvps}
          guestRsvps={event.guest_rsvps}
        />

        <EventDetails
          description={event.description}
          locationName={event.location_name}
          locationUrl={event.location_url}
          gallery={event.gallery}
        />

        <AppDownloadCTA />
      </main>
    </div>
  );
}
