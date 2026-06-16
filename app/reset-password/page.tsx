import type { Metadata } from "next";
import ResetPasswordForm from "./ResetPasswordForm";

const APP_STORE_ID = "6762391540";

export const metadata: Metadata = {
  title: "Reset your Krets password",
  description: "Set a new password for your Krets account.",
  alternates: { canonical: "https://getkrets.app/reset-password" },
  robots: { index: false, follow: false },
  other: { "apple-itunes-app": `app-id=${APP_STORE_ID}` },
};

export default function ResetPasswordPage() {
  return <ResetPasswordForm appStoreId={APP_STORE_ID} />;
}
