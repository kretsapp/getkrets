# getkrets.app

Waitlist landing page for **Krets** — a private photo/video sharing app for family and close friends. Built with Next.js 15, Tailwind CSS v4, and Klaviyo for email collection.

## Local Development

```bash
pnpm install
cp .env.example .env.local   # optional — form works without Klaviyo (shows friendly 503)
pnpm dev                      # → http://localhost:3000
```

The waitlist form degrades gracefully when Klaviyo env vars are not set — it returns a "temporarily unavailable" message instead of crashing.

## Klaviyo Setup

1. **Create a free account** at [klaviyo.com](https://www.klaviyo.com) (up to 250 contacts free)
2. Go to **Lists & Segments** → **Create List** → name it "Krets Waitlist"
3. Copy the **list ID** from the URL (e.g., `https://www.klaviyo.com/list/XXXXXX` → `XXXXXX`)
4. Go to **Account** → **Settings** → **API Keys** → **Create Private API Key**
5. Required scopes: `lists:write`, `profiles:write`, `subscriptions:write`
6. Paste both values into `.env.local`:
   ```
   KLAVIYO_API_KEY=pk_your_key_here
   KLAVIYO_LIST_ID=your_list_id_here
   ```
7. Restart the dev server → submit a test email → verify it appears in Klaviyo under the list

## Deployment (Vercel)

### Prerequisites
- GitHub account (to host the repo)
- Vercel account ([vercel.com](https://vercel.com) — free tier, sign up with GitHub)
- Cloudflare account (domain `getkrets.app` is already registered there)
- Klaviyo account (see above)

### Steps

1. **Push to GitHub**
   ```bash
   git init && git add . && git commit -m "Initial commit"
   gh repo create getkrets-landing --private --source=. --push
   ```

2. **Import into Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import the `getkrets-landing` repo
   - Root directory: `./` (default)
   - Framework: Next.js (auto-detected)

3. **Add env vars in Vercel**
   - Project Settings → Environment Variables
   - Add `KLAVIYO_API_KEY` and `KLAVIYO_LIST_ID` for **Production** and **Preview**

4. **Add custom domain**
   - Project Settings → Domains → Add `getkrets.app`
   - Vercel will show the required DNS record

5. **Configure Cloudflare DNS**
   - Add a `CNAME` record: `@` → `cname.vercel-dns.com`
   - **Important:** Set to **DNS only** (gray cloud, NOT proxied/orange)
   - Vercel needs direct access to issue its own SSL certificate

6. **Verify**
   - Wait ~1 minute for SSL to issue
   - Visit `https://getkrets.app` — should load the landing page
   - Submit a test email → check it appears in Klaviyo

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 (CSS-first `@theme`)
- **Font:** Satoshi via Fontshare CDN
- **Icons:** lucide-react
- **Waitlist:** Klaviyo API (server-side proxy)
- **Hosting:** Vercel (free tier)

Only one client component (`WaitlistForm`) — everything else is server-rendered with zero client JS.
