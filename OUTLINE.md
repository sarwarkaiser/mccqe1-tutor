# MCCQE1 Tutor Completion Outline

**Current Gaps Observed**
- No NextAuth route under `src/app/api/auth/[...nextauth]/route.ts`, so `signIn` cannot work.
- Demo credentials fail because bcrypt compares a plaintext password to a plaintext value.
- Prisma schema is missing a datasource `url`, so Prisma client/migrations will not run.
- Dashboard and practice data are in-memory mocks with no per-user persistence.
- `src/types` is empty, but README claims a types index exists.
- No seed pipeline to move the question bank into the database.

**Completion Outline (MVP → Production)**
1. Define target scope for “completion”.
2. Stabilize auth and sessions.
3. Connect and validate the database.
4. Persist question content.
5. Persist practice sessions and progress.
6. Build real dashboard analytics.
7. Implement exam simulation mode.
8. Add admin/content management.
9. Quality, testing, and deployment hardening.

**Step Details**

**1) Define target scope**
- Confirm if “completion” means demo-ready, MVP-ready, or production-ready.
- Lock target feature list and data volume (e.g., 1k questions vs. 50).

**2) Stabilize auth and sessions**
- Add NextAuth App Router route and wire `auth` handlers.
- Replace demo bcrypt compare with a real hash or a plain-text demo gate.
- Add SessionProvider to `src/app/layout.tsx` and protect `/dashboard`, `/practice`.

**3) Connect and validate the database**
- Add `url = env("DATABASE_URL")` to `prisma/schema.prisma`.
- Create `.env` and run migrations.
- Decide on hosting strategy for PostgreSQL (local vs managed).

**4) Persist question content**
- Write a Prisma seed that loads the current question bank.
- Expose an API route to fetch questions with filters.
- Ensure question option arrays and tags serialize correctly.

**5) Persist practice sessions and progress**
- Record each answer with timestamps.
- Update spaced repetition scheduling on submit.
- Store per-user aggregate stats and daily progress.

**6) Build real dashboard analytics**
- Replace mock data with queries across Progress, UserSession, ExamResult.
- Add category breakdowns, streak logic, weak areas, and trends.

**7) Implement exam simulation mode**
- Timed full-length exam flow.
- Scoring, result summaries, and detailed review.
- Persist results and show on dashboard.

**8) Add admin/content management**
- Admin-authenticated panel for questions.
- Bulk import/export and tagging workflows.

**9) Quality, testing, and deployment hardening**
- Add unit tests for spaced repetition and scoring.
- Add e2e smoke tests for auth/practice/exam.
- Configure CI, environment validation, and error reporting.

**Assumptions**
- Next.js App Router, Prisma, and NextAuth remain the core stack.
- Primary user path is Login → Practice → Dashboard → Exam Simulation.

