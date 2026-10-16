# Requirements — Hello, Clinic

## Roadmap phase

This is Phase 0 — Hello, Clinic (see `spec/roadmap.md`). Scaffold the server and confirm the project runs end to end. Nothing clinic-shaped (ailments, agents, therapies) yet — that starts in Phase 1.

## Scope

In scope:
- Fastify + TypeScript server, runnable locally
- One route: `GET /health` returns a JSON status payload
- Dev tooling that every later phase will build on: hot-reload dev script, a test framework with one smoke test, lint/format config, and env-var-based config

Out of scope (deferred to later phases per `spec/roadmap.md`):
- Any HTML/dashboard page (Phase 1+)
- Ailments, agents, therapies, bookings data or routes
- Persistent storage (Phase 9)
- Deployment/hosting setup

## Decisions

- **Server framework**: Fastify, per `spec/tech-stack.md`.
- **Response shape**: `GET /health` returns JSON only, e.g. `{ "status": "ok" }`. No HTML landing page in this phase — deliberately matches the roadmap's literal scope ("one route ... returns a status message") rather than pulling forward Phase 1's dashboard work.
- **Dev script**: hot-reload on save (e.g. `tsx watch src/index.ts` or `node --watch`), exposed as `npm run dev`.
- **Testing**: a test framework is set up now (not deferred to Phase 10) with exactly one smoke test — it hits `GET /health` and asserts a 200 and the expected shape. Every later phase adds its tests alongside this one.
- **Linting/formatting**: a linter + formatter is configured now so style conventions are set before more code lands.
- **Config**: `PORT` and `HOST` are read from environment variables with sensible local defaults (e.g. `PORT=3000`, `HOST=0.0.0.0` or `localhost`) rather than hard-coded.

## Context

- Audience for the whole project includes course students and conference-booth demo-ers (`spec/mission.md`), so the scaffold should be simple to read and quick to run — no heavyweight framework ceremony.
- This phase intentionally does the "boring" project-setup work (tooling, conventions) up front so Phases 1–10 can stay focused on one small vertical slice each without re-litigating tooling choices.
