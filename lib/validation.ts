const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

export const ERRORS = {
  INVALID_EMAIL: "Please enter a valid email address.",
  UNAVAILABLE: "Waitlist is temporarily unavailable. Please try again later.",
  GENERIC: "Something went wrong. Please try again.",
} as const;
