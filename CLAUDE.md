# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static wedding website for Ash & Anna, built with Astro 5 and Tailwind CSS v4. Deployed to GitHub Pages at https://ashanna.wedding via `.github/workflows/deploy.yml` on every push to `main`.

## Commands

- `npm run dev` — local dev server at `localhost:4321`
- `npm run build` — production build to `./dist/`
- `npm run preview` — serve the built site locally
- `npm run astro -- --help` — Astro CLI (e.g. `astro check` for type checking)

There is no test suite and no lint script. Formatting is enforced by Prettier, run automatically on staged files via a Husky pre-commit hook (`lint-staged` runs `prettier --write` on everything). The `.astro` Prettier plugin and `prettier-plugin-tailwindcss` (which sorts class names) are active.

## Architecture

**Single layout wraps every page.** `src/layouts/Layout.astro` renders the shared chrome — `NavBar`, `Hero`, `Date`, `DiscoBall`, `Footer` — and exposes two slots: the default slot for page content and a named `after-hero` slot rendered above the page title. Pages pass `title`, optional `contentWidth` (`"small" | "medium" | "large"`, controls the `max-w-*` of `<main>`), and `hideHeader`. The layout also contains an inline `IntersectionObserver` script that toggles the nav heading's visibility as the hero title scrolls out of view.

**Pages are file-routed** under `src/pages/` (`index`, `rsvp`, `accommodation`, `travel`, `q-and-a`, `404`). `trailingSlash: "never"` is set in `astro.config.ts`.

**Page data lives inline in frontmatter.** Content-heavy pages (e.g. `accommodation.astro`) define their data as typed arrays in the component frontmatter and `.map()` over a card component — there is no CMS or content collection.

**Site-wide values are centralized** in `src/constants.ts` (`WEDDING_DATE`, `NAME_1`, `NAME_2`, `DATE_FORMAT`). Use these rather than hardcoding the date or names.

**RSVP form** (`src/pages/rsvp.astro`) is a plain HTML form with a client-side script that POSTs JSON to an external Google Cloud Run endpoint (`submitrsvp-...run.app`). Note the field-name remapping between the form's `name` attributes and the JSON keys sent to the backend.

## Styling conventions

- Tailwind v4 is configured via the Vite plugin (`@tailwindcss/vite`), **not** a `tailwind.config.js`. Theme tokens (custom colors and fonts) are defined in the `@theme` block of `src/styles/global.css`.
- Use the semantic color tokens (`canvas`, `primary`, `secondary`, `tertiary`, each with an `--alt` variant) and font families (`font-sans`, `font-serif`, `font-hero`) rather than raw hex/font values.
- Base element styles (link colors, body background, paragraph spacing) are set in the `@layer base` block of `global.css`.
- Conditional class lists use the `classnames` package.

## Components & icons

Components live in `src/components/`, grouped into folders when they have sub-parts or a props type (e.g. `AccommodationCard/` holds the card, its `Tag`, and `AccommodationProps.ts`). Icons come from `astro-icon` using the Material Design Icons set, referenced as `mdi:<name>` (see `Tag.astro`).
