# Codebase Review: Structure, Design, and Readability Improvements

## Current structure at a glance

- `src/app`: App Router entry points (`layout.js`, page routes) and page-specific client wrappers.
- `src/components`: Reusable UI and feature components (`Header`, cards, search grid, hooks).
- `src/components/Home`: Home page sections as composable modules.
- `src/data`: Static content for projects, skills, and experience.

The overall structure is good for a small portfolio and easy to navigate.

## Improvements applied in this change

1. **Search logic extracted into `src/lib/search.js`**
   - Centralized fuzzy search, nested-field access, scoring, and filtering.
   - Keeps UI component (`SearchableGrid`) focused on rendering.

2. **`SearchableGrid` simplified**
   - Removed search implementation details from the component.
   - Added memoized config merge for predictable behavior.

3. **Search callback correctness fix**
   - `onSearchChange` now receives filtered data computed with the latest input value, avoiding stale results.

4. **Fuzzy score consistency fix**
   - Matches found via fuzzy mode now receive a score and are not accidentally discarded.

## Recommended next cleanups

1. **Standardize imports and aliases**
   - Prefer `@/components/...` and `@/data/...` everywhere (some files still use relative imports).

2. **Unify repeated tag/chip styles**
   - `ProjectCard` and `SkillsWithSearch` use near-identical badge styles.
   - Extract a simple `Tag` component for consistency and easier style updates.

3. **Normalize static data shape**
   - Experience descriptions are newline-delimited strings; move to arrays of bullets in `src/data/ProfessionalJourneyData.js`.
   - This avoids split logic in UI and makes content edits less error-prone.

4. **Make search UX fully reusable**
   - `SkillsWithSearch` duplicates search/filter behavior.
   - Consider reusing `SearchableGrid` with a custom renderer and grouped data adapter.

5. **Introduce lightweight type safety**
   - Add JSDoc typedefs for `Project`, `Experience`, and search config.
   - This improves editor hints without requiring TypeScript migration.

6. **Consistency pass with formatter**
   - Quote style and spacing vary across files.
   - Add Prettier with a simple config and run in CI.

7. **Accessibility and semantics**
   - Header nav can mark active links with `aria-current="page"`.
   - Search clear button can include a descriptive `aria-label`.

## Suggested implementation order

1. Format/lint baseline (Prettier + ESLint autofix).
2. Shared UI primitives (`Tag`, section container).
3. Data shape normalization (experience bullets as arrays).
4. Reuse search abstraction in skills page.
5. Optional JSDoc typings and stricter lint rules.
