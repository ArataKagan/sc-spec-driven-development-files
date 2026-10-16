# Validation — Hello, Clinic

This feature is done and mergeable when all of the following are true:

## Build & run

- [ ] `npm run build` completes with no TypeScript errors.
- [ ] `npm run dev` starts the server with hot-reload (editing `src/index.ts` and saving restarts the server without manual intervention).
- [ ] The server reads `PORT`/`HOST` from environment variables and falls back to working defaults when unset.

## Behavior

- [ ] `GET /health` returns HTTP `200` with a JSON body indicating healthy status (e.g. `{ "status": "ok" }`).
- [ ] `GET /` returns HTTP `200` with `Content-Type: text/html` and a basic page showing an "AgentClinic" heading and the message "AgentClinic is open for business."
- [ ] The page is a React component in `src/pages/Home.tsx`, wrapped in a `MainLayout` component composed of `Header`, `Main` and `Footer` subcomponents (in `src/components/`), rendered server-side to static HTML via `renderToStaticMarkup` — no client-side JavaScript, hydration, or client build step.
- [ ] Styles live in `public/styles/main.css`, served at `GET /styles/main.css` (HTTP `200`, `text/css`) and linked from the layout's `<head>`.
- [ ] No other routes exist yet — this phase stays scoped to `/`, `/health` and the static stylesheet only.

## Tooling

- [ ] `npm run lint` runs and passes with no errors.
- [ ] `npm run format` (or equivalent check) runs with no errors.
- [ ] `npm run test` runs and all tests pass (`GET /`, `GET /health`, the layout structure, and `GET /styles/main.css`).

## Fit with the spec

- [ ] Choices match `spec/tech-stack.md` (Fastify, TypeScript) and don't introduce persistence or client-side frontend code ahead of schedule (React is used for server-side rendering only).
- [ ] Nothing from Phase 1+ (ailments, agents, dashboard data views) leaked into this phase's scope; the only HTML is the basic welcome page at `/`.

## Merge criteria

All checkboxes above are checked, the branch is rebased cleanly on `main`, a manual `curl http://localhost:<port>/health` (or configured host) from a terminal confirms the expected response, and opening `http://localhost:<port>/` in a browser shows the welcome page with the header, footer and stylesheet applied.
