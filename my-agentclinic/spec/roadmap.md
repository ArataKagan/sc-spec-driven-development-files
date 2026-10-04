# Roadmap

Small, thin, vertical slices — each phase should leave something real and clickable/callable, touching data, API, and UI together rather than building one layer at a time.

## Phase 0 — Hello, Clinic
Scaffold the Fastify + TypeScript server. One route (`GET /health`) returns a status message. Confirms the project runs end to end.

## Phase 1 — First Ailment
Hard-code a single ailment. `GET /ailments` returns it as JSON, and a bare dashboard page lists it. Proves the data-to-UI path works.

## Phase 2 — Ailment Catalog
Expand to a small in-memory list of ailments. Dashboard page renders the full list instead of one hard-coded entry.

## Phase 3 — Agents
Add a minimal agent concept (name + which ailment they have). `GET /agents` + a dashboard view listing agents and their ailment.

## Phase 4 — First Therapy
Hard-code a single therapy, same pattern as Phase 1: `GET /therapies` + dashboard listing.

## Phase 5 — Therapy Catalog
Expand therapies to a small in-memory list, matched to ailments.

## Phase 6 — Book One Appointment
The core loop, smallest possible version: pick an agent, pick a therapy, create a booking in memory. `POST /bookings` + a minimal form or action on the dashboard.

## Phase 7 — Appointments on the Dashboard
Staff can see the list of booked appointments (agent, therapy, time) on the dashboard.

## Phase 8 — Make It Attractive
Visual pass on the dashboard: layout, styling, responsiveness for modern browsers. No new functionality.

## Phase 9 — Persistence
Swap the in-memory store for a real datastore (decision deferred — see tech-stack.md) without changing behavior.

## Phase 10 — Harden
Input validation, error handling, and basic tests across the existing endpoints.

Later phases (booking conflicts, agent accounts, notifications, etc.) are intentionally not planned yet — add them as new small phases once Phase 10 is stable.
