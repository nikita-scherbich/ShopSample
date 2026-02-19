# Quickstart: Shell App Infrastructure

1. **Initialize Layout Components**:
   - `nx generate @schematics/angular:component layout/shell --standalone`
   - `nx generate @schematics/angular:component layout/header --standalone`
   - `nx generate @schematics/angular:component layout/sidebar --standalone`

2. **Configure Routing**:
   - Update `src/app/app.routes.ts` with Home and placeholders.

3. **Global Styles**:
   - Define SCSS variables in `src/styles.scss`.

4. **Verify**:
   - Run `nx serve` and check responsiveness.
