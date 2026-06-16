import type { Metadata } from "next";
import ResetPasswordBounce from "./ResetPasswordBounce";

const APP_STORE_ID = "6762391540";

export const metadata: Metadata = {
  title: "Reset your Krets password",
  description: "Open the Krets app to set a new password.",
  alternates: { canonical: "https://getkrets.app/reset-password" },
  robots: { index: false, follow: false },
  other: { "apple-itunes-app": `app-id=${APP_STORE_ID}` },
};

export default function ResetPasswordPage() {
  return <ResetPasswordBounce appStoreId={APP_STORE_ID} />;
}
