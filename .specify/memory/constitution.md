<!--
Sync Impact Report:
- Version change: 0.0.0 → 1.0.0
- List of modified principles:
  - I. Nx Library-First Architecture (New)
  - II. Modern Angular Standards (New)
  - III. SCSS for Styling (New)
  - IV. Test-Driven Development (NON-NEGOTIABLE) (New)
  - V. CI/CD & Nx Cloud Efficiency (New)
- Added sections: Quality & Standards, Development Workflow
- Removed sections: None (initialized from template)
- Templates requiring updates:
  - .specify/templates/plan-template.md (✅ updated)
  - .specify/templates/spec-template.md (✅ updated)
  - .specify/templates/tasks-template.md (✅ updated)
- Follow-up TODOs: None
-->

# shop-sample Constitution

## Core Principles

### I. Nx Library-First Architecture
The project must leverage the Nx monorepo structure effectively. Features should be implemented as standalone libraries within the `libs/` directory whenever possible, rather than growing monolithic `apps/`. This ensures modularity, independent testability, and clear boundaries.

### II. Modern Angular Standards
Adhere to the latest Angular (v20+) best practices. This includes using Standalone Components, Signals for reactive state management, and the `bootstrapApplication` pattern. Avoid legacy patterns like `NgModule` unless strictly required by 3rd party integrations.

### III. SCSS for Styling
SCSS is the mandatory styling language. All component-specific styles must reside in `.scss` files. Global styles and variables (e.g., design tokens) should be centralized in `src/styles.scss` or dedicated theme libraries. Avoid inline styles or vanilla CSS.

### IV. Test-Driven Development (NON-NEGOTIABLE)
Every feature or bug fix must be accompanied by automated tests using Karma. New logic should be preceded by a test case that reproduces the requirement or failure. Red-Green-Refactor is the expected workflow.

### V. CI/CD & Nx Cloud Efficiency
All changes must pass the GitHub Actions pipeline (`.github/workflows/ci.yml`). Developers must ensure their changes are "Nx-affected" friendly—meaning they don't break the cache or trigger unnecessary builds. Use Nx Cloud to optimize task execution.

## Quality & Standards

### TypeScript Type Safety
Strict type checking must be enabled and respected. Avoid the use of `any`. Interfaces and Types should be used to define data structures clearly, especially for API contracts and component inputs/outputs.

### Linting and Formatting
Strict adherence to the project's ESLint and Prettier configurations is required. Automated linting must pass before any code is committed or merged.

## Development Workflow

### Research-Strategy-Execution Lifecycle
Every significant task must follow the three-phase lifecycle:
1. **Research**: Map dependencies, validate assumptions, and reproduce issues.
2. **Strategy**: Propose a plan and get alignment.
3. **Execution**: Implement, test, and validate.

### Nx CLI Usage
Use the Nx CLI for all generation tasks (`nx generate ...`) to ensure consistency and adherence to workspace schematics.

## Governance
This constitution is the foundational document for development in `shop-sample`. It takes precedence over all other local practices. 

### Amendments
Amendments to this constitution require a version bump and must be documented in the Sync Impact Report.
- **MAJOR**: Fundamental shifts in architecture or core principles.
- **MINOR**: Adding or expanding principles/guidance.
- **PATCH**: Clarifications, formatting, and non-semantic changes.

### Compliance
All Pull Requests and code reviews must verify compliance with these principles. Exceptions must be explicitly justified in the implementation plan's "Complexity Tracking" section.

**Version**: 1.0.0 | **Ratified**: 2026-02-18 | **Last Amended**: 2026-02-18
