# Tech Stack

## Language

TypeScript end to end (server and client), per engineering's requirement for a reliable, popular, type-safe stack.

## Server framework: Fastify

Recommending **Fastify** for the server-side application:

- TypeScript-first with strong typed request/response support out of the box
- Fast and lightweight — minimal overhead for a small team and a project that needs to stay demoable (course lessons, conference booth demos)
- Built-in JSON schema validation for request/response, which keeps the ailment/therapy/booking API honest as it grows
- Large plugin ecosystem (auth, sessions, static file serving, OpenAPI docs) without the heavier conventions of a full framework like NestJS

Considered and set aside:
- **Express** — most popular, but weaker native TypeScript ergonomics and no built-in validation story
- **NestJS** — great structure for large teams, but more boilerplate/ceremony than this project needs right now
- **Next.js** — strong option if the dashboard needed React server components, but adds frontend framework weight before we've decided the UI approach

## Dashboard / frontend

Served from the same TypeScript codebase. Exact UI approach (server-rendered views vs. a small SPA) is deliberately left open until the roadmap reaches that phase — keep it simple and change it later if needed.

## Data storage

Not yet decided. Start with an in-memory store for early phases and choose a persistent datastore once the data model (ailments, therapies, agents, bookings) stabilizes.

## Browser support

Target modern evergreen browsers only (current Chrome, Firefox, Safari, Edge) — no legacy browser support required.
