export type RsvpStatus = "going" | "maybe" | "not_going";

export type MemberRsvp = {
  first_name: string;
  status: RsvpStatus;
};

export type GuestRsvpItem = {
  id: string;
  guest_name: string;
  status: RsvpStatus;
};

export type SharedEvent = {
  id: string;
  title: string;
  emoji: string;
  target_date: string; // YYYY-MM-DD
  end_date: string | null;
  cover_image_url: string | null;
  description: string | null;
  location_name: string | null;
  location_url: string | null;
  gallery: string[] | null;
  group_name: string;
  member_rsvps: MemberRsvp[];
  guest_rsvps: GuestRsvpItem[];
};
