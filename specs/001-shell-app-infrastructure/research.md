# Research: Shell App Infrastructure

## Decision: Responsive Shell UI with SCSS Grid/Flexbox
- **Rationale**: Provides maximum control over the layout without external CSS frameworks, aligning with the project's preference for Vanilla CSS/SCSS.
- **Alternatives considered**: Tailwind CSS (rejected per project preference), Bootstrap (rejected for being too heavy).

## Decision: Angular Standalone Components for Layout
- **Rationale**: Modern Angular standard, reduces boilerplate, and simplifies the shell structure.
- **Alternatives considered**: NgModule-based components (rejected as legacy).

## Decision: Routing Placeholders for Remotes
- **Rationale**: Using empty components or lazy-loaded routes as placeholders for future MFE remotes ensures the shell is ready for integration.
- **Alternatives considered**: Direct integration (impossible at this stage).

## Best Practices for Angular v20
- Use `inject()` for dependency injection.
- Use `Signal` for any reactive UI state (e.g., sidebar toggle).
- Ensure SCSS variables are used for design tokens.
