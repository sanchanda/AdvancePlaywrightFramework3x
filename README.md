# Advance Playwright Framework 3x

A teaching-grade Playwright + TypeScript automation framework covering both **UI (TTACart storefront)** and **API (Restful Booker)** testing. It ships with page-object fixtures, data readers, a Winston logger, a custom AI-assisted HTML reporter, and sample tests for every layer.

Built for [The Testing Academy](https://thetestingacademy.com).

---

## Tech Stack

| Area | Choice |
| --- | --- |
| Runner | [Playwright Test](https://playwright.dev) `^1.64` |
| Language | TypeScript (`^7`) — `strict` mode |
| Runtime | Node.js LTS |
| Reporting | `line`, Playwright `html`, and a custom **TTA Reporter** |
| Logging | Winston |
| Test data | Faker, JSON, CSV, Excel/xlsx, YAML, MySQL |
| Schema validation | Ajv + ajv-formats |
| Env management | dotenv |

---

## Features

- **Page Object Model** — `src/pages/*` with a shared `BasePage`.
- **Custom fixtures** — a pre-wired `test` exposing every page object *and* ready-made app states (`validLogin`, `loginWithInventory`, `loginWithSelectedItem`, ...).
- **API testing** — generic `ApiHelper` plus a typed `BookingApi` service with automatic re-auth.
- **Custom TTA HTML reporter** — live-updating report with steps, screenshots, video and trace, plus optional AI tabs (AI Data, AI Verdict, Flaky, Self-Heal).
- **Data readers** — CSV, Excel (`exceljs` / `xlsx`), YAML, JSON and MySQL.
- **AI agents** — heuristic RCA verdicts and build-to-build flaky detection. AI features **degrade gracefully**: with no API key the full HTML report still renders and the AI sections are simply skipped.
- **Visual steps** — `visualStep()` wraps `test.step` and optionally attaches a screenshot per step.

---

## Project Structure

```
AdvancePlaywrightFramework3x/
├─ playwright.config.ts          # testDir, reporters, projects, baseURL resolution
├─ tsconfig.json                 # strict TS + @-path aliases
├─ .env.example                  # copy to .env and fill in
├─ .github/workflows/            # CI (GitHub Actions)
├─ docs/  rules/  learnings/     # notes & documentation
├─ tests/                        # Playwright's default example spec
└─ src/
   ├─ ai/
   │  ├─ agents/                 # rcaAgent, flakyAnalyzer
   │  └─ config/providers.ts     # LLM provider key detection
   ├─ api/BookingApi.ts          # Restful Booker service object
   ├─ config/                    # env.ts, credentials.ts
   ├─ fixtures/                  # test-base.ts, booker.fixture.ts
   ├─ pages/                     # TTACart page objects
   ├─ testdata/                  # JSON fixtures + typed data modules
   ├─ tests/
   │  ├─ apiTests/               # 01 raw · 02 apiHelper · 03 fixture e2e
   │  ├─ e2e/                    # checkout flows
   │  └─ login.spec.ts
   └─ utils/                     # helpers, readers, logger, reporter
```

---

## Getting Started

### Prerequisites

- Node.js LTS
- npm

### Install

```bash
npm install
npx playwright install --with-deps
```

### Configure environment

```bash
cp .env.example .env
```

Then edit `.env`. The defaults use public demo targets, so the suite runs as-is.

### Run the tests

```bash
npm test              # run the whole suite
npm run test:headed   # run with a visible browser
npm run typecheck     # tsc --noEmit
```

By default tests run **headed locally** (a 1920×1080 Chromium window) and **headless on CI**.

---

## Environment Variables

Key values from `.env.example` (see the file for the full list):

| Variable | Purpose | Default |
| --- | --- | --- |
| `TTA_ENV` | Target selection: `qa` \| `stg` \| `prod` \| `dev` \| `api` | `qa` |
| `BASE_URL` | Explicit base URL (overrides `TTA_ENV`) | – |
| `QA_BASE_URL` / `STG_BASE_URL` / `PROD_BASE_URL` / `DEV_BASE_URL` | Per-environment UI URLs | see `.env.example` |
| `API_BASE_URL` | Restful Booker base URL | `https://restful-booker.herokuapp.com` |
| `STANDARD_USER` / `TTA_SECRET` | TTACart login | `standard_user` / `tta_secret` |
| `BOOKER_USERNAME` / `BOOKER_PASSWORD` | Restful Booker `/auth` | `admin` / `password123` |
| `LOG_LEVEL` | Winston level | `info` |
| `ATTACH_SCREENSHOTS` | Attach a screenshot to every `visualStep()` | `false` |
| `TEST_ENV` / `TEST_AUTHOR` | Shown in the TTA report header | `QA` / – |
| `ANTHROPIC_API_KEY` / `OPENAI_API_KEY` / `GOOGLE_API_KEY` | Enable the AI report tabs (any one) | – |
| `MYSQL_*` | MySQL connection for data-driven tests | – |

`baseURL` is resolved in `playwright.config.ts` — `BASE_URL` wins; otherwise it is chosen from `TTA_ENV`.

---

## Path Aliases

`tsconfig.json` defines aliases so imports stay short:

| Alias | Maps to |
| --- | --- |
| `@api/*` | `src/api/*` |
| `@config/*` | `src/config/*` |
| `@fixtures/*` | `src/fixtures/*` |
| `@pages/*` | `src/pages/*` |
| `@testdata/*` | `src/testdata/*` |
| `@utils/*` | `src/utils/*` |

---

## Writing UI Tests

Import the custom `test` to get page objects and pre-built app states handed to you:

```ts
import { test, expect } from '@fixtures/test-base';

test('add to cart', async ({ loginWithInventory, cartPage }) => {
    await loginWithInventory.addToCart('tta-bike-light');
    await cartPage.open();
    expect(await cartPage.rowCount()).toBe(1);
});
```

Available page-object fixtures: `loginPage`, `inventoryPage`, `itemDetailPage`, `cartPage`, `checkoutStepOnePage`, `checkoutStepTwoPage`, `checkoutCompletePage`.
Available state fixtures: `invalidLogin`, `validLogin`, `loginWithInventory`, `loginWithSelectedItem`.

Use `UtilElementLocator` for resilient, logged element actions (`click`, `fill`, `waitForVisible`, ...), and `visualStep` to screenshot a step:

```ts
import { visualStep } from '@utils/visualSteps';

await visualStep(page, 'Open the cart', async () => {
    await cartPage.open();
});
```

---

## Writing API Tests

`booker.fixture.ts` exposes a `BookingApi` service object and a `bookerToken` fixture (obtained from `POST /auth`):

```ts
import { test, expect } from '@fixtures/booker.fixture';

test('create a booking', async ({ bookingApi, bookerToken }) => {
    const res = await bookingApi.createBooking({ /* ... */ });
    expect(res.ok()).toBeTruthy();
});
```

For ad-hoc HTTP, the generic `ApiHelper` supports GET/POST/PUT/PATCH/DELETE, JSON parsing and retry-until-condition polling.

---

## The TTA Report

The custom reporter (`src/utils/CustomReporter.ts`) writes to `tta-report/`:

- `report_<timestamp>.html` — this run
- `index.html` — always redirects to the latest run
- `history.html` — list of past runs

It captures steps, console logs, screenshots, video and traces, and exposes tabs for **AI Data**, **AI Verdict** (RCA), **Flaky** (build vs. build) and **Self-Heal** candidates. Open `tta-report/index.html` after a run.

---

## CI

`.github/workflows/playwright.yml` runs on push/PR to `main`/`master`: installs deps and browsers, runs `npx playwright test`, and uploads the `playwright-report/` artifact.

---

## Notes

- `tta-report/`, `logs/`, `node_modules/` and `.env` are git-ignored.
- The demo credentials in `.env.example` are for public sandboxes only.
- AI report features are optional — the suite never requires an LLM key.

---

## Credits

Custom reporter by **Pramod Dutta** — [The Testing Academy](https://thetestingacademy.com).
