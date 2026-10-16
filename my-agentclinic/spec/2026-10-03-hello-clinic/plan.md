# Plan — Hello, Clinic

## 1. Dependencies

1.1. Add Fastify as a runtime dependency.
1.2. Add `tsx` (or equivalent) as a dev dependency for hot-reload.
1.3. Add a test framework (Vitest) as a dev dependency.
1.4. Add ESLint + Prettier (or Biome) as dev dependencies, with minimal TypeScript-aware config.
1.5. Add `react` and `react-dom` as runtime dependencies (server-side rendering only) and `@types/react` / `@types/react-dom` as dev dependencies.
1.6. Add `@fastify/static` as a runtime dependency to serve static assets (CSS).

## 2. Server scaffold

2.1. Replace the `src/index.ts` placeholder with a minimal AgentClinic app (Fastify server bootstrap).
2.2. Read `PORT` and `HOST` from environment variables with sensible local defaults.
2.3. Register a `GET /health` route returning `{ status: "ok" }` as JSON.
2.4. Register a single `GET /` route that serves the basic UI page (see section 3).
2.5. Start the server and log the listening address on boot.

## 3. Basic UI

3.1. Enable JSX in `tsconfig.json` (`"jsx": "react-jsx"`).
3.2. Create a `MainLayout` component in `src/components/MainLayout.tsx` that renders the HTML document shell (`<head>` with title and stylesheet link) and composes three subcomponents:
   - `Header` (`src/components/Header.tsx`) — site header with the "AgentClinic" brand linking to `/`.
   - `Main` (`src/components/Main.tsx`) — `<main>` wrapper that renders the page's children.
   - `Footer` (`src/components/Footer.tsx`) — site footer with a copyright line.
3.3. Create the page as a React component in `src/pages/Home.tsx`, wrapped in `MainLayout`, showing an "AgentClinic" heading and the message "AgentClinic is open for business."
3.4. Create a stylesheet at `public/styles/main.css` with minimal styles (readable system font, header/main/footer layout with the footer at the bottom); the full visual pass stays in Roadmap Phase 8.
3.5. Register `@fastify/static` to serve `public/`, so the stylesheet is available at `GET /styles/main.css`, and link it from `MainLayout` via `<link rel="stylesheet" href="/styles/main.css">`.
3.6. Serve the page from `GET /` with `Content-Type: text/html`, rendered server-side with `renderToStaticMarkup` from `react-dom/server` — static HTML only, no client-side JavaScript, hydration, or client build step.

## 4. Dev tooling

4.1. Add `npm run dev` script using `tsx watch` for hot-reload.
4.2. Add `npm run lint` and `npm run format` scripts.
4.3. Add ESLint/Prettier config files at the repo root.

## 5. Testing

5.1. Add `npm run test` script (Vitest).
5.2. Write a smoke test: start the server, request `GET /health`, assert `200` status and `{ status: "ok" }` body.
5.3. Write a smoke test: start the server, request `GET /`, assert `200` status, a `text/html` content type, and a body containing "AgentClinic is open for business."
5.4. Write a test that `GET /` renders the header, main and footer and links `/styles/main.css`.
5.5. Write a test that `GET /styles/main.css` returns `200` with a `text/css` content type.

## 6. Verify

6.1. Run `npm run build` — confirm TypeScript compiles clean.
6.2. Run `npm run dev` — confirm the server boots, `GET /health` responds correctly via manual request (e.g. `curl`), and opening `/` in a browser shows the basic UI page with the header, main content, footer and stylesheet applied.
6.3. Run `npm run lint` — confirm no errors.
6.4. Run `npm run test` — confirm all tests pass.
