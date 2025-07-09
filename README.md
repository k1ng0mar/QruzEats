# QruzEats

Food and grocery delivery prototype for Kano and Kaduna. Browse vendors by
category, filter by location, build a cart, and get AI food suggestions.

## Stack

- Next.js 15 (app router) with React 18
- Genkit with Gemini for the recommendation flow
- Firebase for data
- Tailwind and Radix UI for the interface

## Running it

```
npm install
npm run dev      # http://localhost:9002
```

Seeding needs the Firebase Admin credentials in a local `.env`.
`npm run seed` loads `src/lib/data.ts` into Firestore.

## Layout

- `src/app` route pages (home, search, vendor, cart, food, shop, reels, profile)
- `src/components/qruz` app components
- `src/ai` Genkit setup, the recommendation flow, and the product lookup tool
- `src/lib` data and Firebase helpers
