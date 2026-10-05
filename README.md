# Anna Zieniute

Premium bilingual personal-brand website built with Next.js 16.3.8, TypeScript and the App Router.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add verified production values. Contact forms use Resend only when `RESEND_API_KEY` and `CONTACT_TO` are configured. Analytics remains disabled until a real Google Analytics ID is supplied and the visitor grants consent.

## Content

Localized editorial content lives in `content/site.ts`. Optional biography credentials, testimonials, events, articles, social profiles and videos are deliberately unpublished until verified content is entered.
