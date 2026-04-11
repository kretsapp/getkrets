import type { MemberRsvp, GuestRsvpItem, RsvpStatus } from "@/lib/types";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function InitialsCircle({ name }: { name: string }) {
  return (
    <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
      <span className="text-[11px] font-bold text-accent">
        {getInitials(name)}
      </span>
    </div>
  );
}

type Attendee = {
  name: string;
  isGuest: boolean;
};

type SectionData = {
  key: RsvpStatus;
  title: string;
  attendees: Attendee[];
};

type Props = {
  memberRsvps: MemberRsvp[];
  guestRsvps: GuestRsvpItem[];
};

export function EventAttendees({ memberRsvps, guestRsvps }: Props) {
  const sections: SectionData[] = (
    ["going", "maybe", "not_going"] as RsvpStatus[]
  )
    .map((status) => ({
      key: status,
      title:
        status === "going"
          ? "Going"
          : status === "maybe"
            ? "Maybe"
            : "Can't make it",
      attendees: [
        ...memberRsvps
          .filter((r) => r.status === status)
          .map((r) => ({ name: r.first_name, isGuest: false })),
        ...guestRsvps
          .filter((r) => r.status === status)
          .map((r) => ({ name: r.guest_name, isGuest: true })),
      ],
    }))
    .filter((s) => s.attendees.length > 0);

  if (sections.length === 0) return null;

  return (
    <div className="px-5 py-4">
      <h2 className="font-bold text-base text-text-primary mb-3">Attendees</h2>
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.key}>
            <p className="text-[11px] uppercase tracking-wider font-bold text-text-secondary mb-2">
              {section.title}{" "}
              <span className="text-text-muted font-medium">
                {section.attendees.length}
              </span>
            </p>
            <div className="space-y-2">
              {section.attendees.map((attendee, i) => (
                <div key={`${attendee.name}-${i}`} className="flex items-center gap-3">
                  <InitialsCircle name={attendee.name} />
                  <div>
                    <span className="text-[15px] font-medium text-text-primary">
                      {attendee.name}
                    </span>
                    {attendee.isGuest && (
                      <span className="ml-2 text-[11px] text-text-muted">
                        Guest
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
