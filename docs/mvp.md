# NG Career Web MVP

This repository is organized as a website-only Next.js 15 MVP.

## Routes

- `/`
- `/feed`
- `/post/[id]`
- `/profile/[username]`
- `/auth/login`
- `/auth/signup`

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style reusable components
- Static MVP data in `lib/data.ts`

## Deployment

The project is deployable to Vercel with the default Next.js build command:

```bash
npm run build
```

No mobile app framework or native app code is included.
