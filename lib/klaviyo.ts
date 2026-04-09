const KLAVIYO_API_URL =
  "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs";

interface KlaviyoResult {
  ok: boolean;
  status: number;
  error?: string;
}

export async function subscribeEmail(email: string): Promise<KlaviyoResult> {
  const apiKey = process.env.KLAVIYO_API_KEY;
  const listId = process.env.KLAVIYO_LIST_ID;

  if (!apiKey || !listId) {
    console.warn(
      "[klaviyo] KLAVIYO_API_KEY or KLAVIYO_LIST_ID not set — skipping subscription"
    );
    return { ok: false, status: 503, error: "service_unavailable" };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const res = await fetch(KLAVIYO_API_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        Authorization: `Klaviyo-API-Key ${apiKey}`,
        revision: "2024-10-15",
        "Content-Type": "application/json",
        accept: "application/vnd.api+json",
      },
      body: JSON.stringify({
        data: {
          type: "profile-subscription-bulk-create-job",
          attributes: {
            profiles: {
              data: [
                {
                  type: "profile",
                  attributes: {
                    email,
                    subscriptions: {
                      email: { marketing: { consent: "SUBSCRIBED" } },
                    },
                  },
                },
              ],
            },
          },
          relationships: {
            list: { data: { type: "list", id: listId } },
          },
        },
      }),
    });

    if (res.ok) {
      return { ok: true, status: res.status };
    }

    const body = await res.text().catch(() => "");
    console.error(`[klaviyo] ${res.status}: ${body}`);
    return { ok: false, status: res.status, error: "api_error" };
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      console.error("[klaviyo] Request timed out after 10s");
      return { ok: false, status: 504, error: "timeout" };
    }
    console.error("[klaviyo] Network error:", err);
    return { ok: false, status: 500, error: "network_error" };
  } finally {
    clearTimeout(timeout);
  }
}
