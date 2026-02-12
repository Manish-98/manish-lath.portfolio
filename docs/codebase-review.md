# Codebase Review: Structure, Design, and Readability Improvements

## Current structure at a glance

- `src/app`: App Router entry points (`layout.js`, page routes) and page-specific client wrappers.
- `src/components`: Reusable UI and feature components (`Header`, cards, search grid, hooks).
- `src/components/Home`: Home page sections as composable modules.
- `src/data`: Static content for projects, skills, and experience.
- `src/theme`: Theme registry and runtime application helpers (new).

The overall structure is good for a small portfolio and easy to navigate.

## Theme coupling review

Before this refactor, theme behavior was only partially decoupled:

- Palette values lived in `globals.css`, so adding/replacing themes required editing global styles.
- Theme switching logic in `useTheme` was hard-coded to exactly two theme names (`dark`/`light`).
- A few UI components still used hardcoded color utilities (`bg-white`, `text-gray-400`, `hover:text-white`) instead of semantic theme tokens.

## Improvements applied in this change

1. **Theme registry extracted to `src/theme/themes.js`**
   - Theme palettes are now data-driven and reusable.
   - Adding a new theme is now "plug and play" via one centralized object.

2. **Theme runtime utilities added in `src/theme/themeUtils.js`**
   - Encapsulates theme validation, persistence lookup, and CSS variable application.

3. **`useTheme` simplified and decoupled**
   - Uses shared utilities instead of hardcoded branch logic.
   - Applies any registered theme without changing hook logic.

4. **First-paint theming in `layout.js`**
   - Bootstraps the saved/default theme before rendering UI to reduce flicker and keep behavior centralized.

5. **Global semantic token alignment in `globals.css`**
   - Uses semantic tokens (`--color-bg`, `--color-text`, etc.) and maps them to Tailwind utilities.

6. **Hardcoded color usage removed from components**
   - Updated `SearchableGrid` and `ProfessionalJourney` to use semantic theme classes.

## Recommended next cleanups

1. **Expose theme metadata for UI previews**
   - Add labels/icons to theme definitions for a future multi-theme selector.

2. **Unify repeated tag/chip styles**
   - `ProjectCard` and `SkillsWithSearch` use near-identical badge styles.
   - Extract a `Tag` primitive for consistency.

3. **Normalize static data shape**
   - Experience descriptions are newline-delimited strings; move to bullet arrays.

4. **Reuse search abstraction in skills page**
   - `SkillsWithSearch` duplicates behavior covered by `SearchableGrid`.

5. **Introduce lightweight type safety**
   - Add JSDoc typedefs for `ThemeName`, `ThemePalette`, `Project`, and `Experience`.

## Suggested implementation order

1. Format/lint baseline (Prettier + ESLint autofix).
2. Shared UI primitives (`Tag`, section container).
3. Data shape normalization (experience bullets as arrays).
4. Reuse search abstraction in skills page.
5. Optional JSDoc typings and stricter lint rules.
