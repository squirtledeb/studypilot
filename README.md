# StudyPilot – Full-Stack Tutoring Website

A modern, production-ready tutoring website built with React, Express, TypeScript, and TailwindCSS.

## Features

- **Beautiful, mobile-friendly design** with custom "Blackberry Bliss" theme
- **React 18 SPA** with React Router and Framer Motion animations
- **Express.js API** for backend logic
- **TypeScript** throughout (client, server, shared)
- **TailwindCSS** for rapid, consistent styling
- **Radix UI** for accessible, modern UI components
- **Easy deployment** to any Node.js host

---

## Project Structure

```
client/    # React frontend (pages, components, styles)
server/    # Express backend (API routes, server entry)
shared/    # Shared TypeScript types/interfaces
public/    # Static assets (profile.jpg, hero-bg.png, favicon, etc.)
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Development mode

Runs both client and server with hot reload on [http://localhost:8080](http://localhost:8080):

```bash
npm run dev
```

### 3. Production build

Builds both client and server:

```bash
npm run build
```

### 4. Start production server

```bash
npm start
```

---

## Environment Variables

- No secrets or API keys are committed.
- If you need environment variables, create a `.env` file (not committed to git).

---

## Customization

- **Profile image:** Replace `public/profile.jpg` with your own.
- **Hero background:** Replace `public/hero-bg.png` with your own.
- **Contact info:** Update the phone number and availability in `client/pages/Index.tsx`.
- **Colors:** Change the primary color in `client/global.css` and `tailwind.config.ts`.

---

## Deployment

- Deploy to any Node.js host (Render, DigitalOcean, AWS, etc.).
- Make sure to run `npm run build` and then `npm start`.
- Static assets are served from the `public/` directory.

---

## Scripts

| Script         | Description                        |
|----------------|------------------------------------|
| `npm run dev`  | Start dev server (client + server) |
| `npm run build`| Build client and server            |
| `npm start`    | Start production server            |
| `npm test`     | Run tests (Vitest)                 |
| `npm run typecheck` | TypeScript validation         |
| `npm run format.fix` | Auto-format code (Prettier)  |

---

## Tech Stack

- React 18, React Router 6, TypeScript, Vite
- Express.js, CORS, Zod
- TailwindCSS, Radix UI, Lucide Icons
- Framer Motion, React Query, and more

---

## License

This project is provided as-is for client use.  
For questions or support, contact your developer. 