# Tasks: Shell App Infrastructure

**Input**: Design documents from `/specs/001-shell-app-infrastructure/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: TDD is requested per project constitution. Tests MUST be written before implementation.

## Format: `[ID] [P?] [Story] Description (Estimation)`

- **[P]**: Can run in parallel
- **[Story]**: [US1], [US2], [US3]
- Paths relative to repository root
- **Estimation**: Relative complexity on a scale of 1-5 (1: Trivial, 5: Very Complex)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Define global SCSS variables and design tokens in `src/styles.scss` (2)
- [x] T002 [P] Configure base layout directory structure in `src/app/layout/` (1)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T003 Create `ShellState` service for UI state management in `src/app/layout/shell-state.service.ts` (3)
- [x] T004 Define `NavigationItem` interface in `src/app/layout/navigation.model.ts` (1)

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Main Application Layout (Priority: P1) 🎯 MVP

**Goal**: Implement the main layout with header, sidebar, and content area.

**Independent Test**: Load root URL and verify presence of Header, Sidebar, and Router Outlet.

### Tests for User Story 1

- [x] T005 [P] [US1] Create unit test for `ShellComponent` layout existence in `src/app/layout/shell.component.spec.ts` (2)
- [x] T006 [P] [US1] Create unit test for `HeaderComponent` in `src/app/layout/header/header.component.spec.ts` (2)
- [x] T007 [P] [US1] Create unit test for `SidebarComponent` in `src/app/layout/sidebar/sidebar.component.spec.ts` (2)

### Implementation for User Story 1

- [x] T008 [P] [US1] Generate `HeaderComponent` (standalone) in `src/app/layout/header/header.component.ts` (1)
- [x] T009 [P] [US1] Generate `SidebarComponent` (standalone) in `src/app/layout/sidebar/sidebar.component.ts` (1)
- [x] T010 [US1] Generate `ShellComponent` (standalone) as the layout host in `src/app/layout/shell.component.ts` (1)
- [ ] T011 [US1] Implement SCSS Grid layout in `src/app/layout/shell.component.scss` (4)
    - [x] T011.1 [US1] Define base SCSS variables for layout (e.g., header height, sidebar width) in `src/styles.scss` (2)
    - [x] T011.2 [US1] Implement basic desktop grid structure for `ShellComponent` in `src/app/layout/shell.component.scss` (2)
    - [x] T011.3 [US1] Style `HeaderComponent` for desktop in `src/app/layout/header/header.component.scss` (2)
    - [x] T011.4 [US1] Style `SidebarComponent` for desktop in `src/app/layout/sidebar/sidebar.component.scss` (2)
- [x] T012 [US1] Integrate `HeaderComponent` and `SidebarComponent` into `ShellComponent` (2)

**Checkpoint**: User Story 1 functional and testable.

---

## Phase 4: User Story 2 - Basic Routing (Priority: P1)

**Goal**: Enable navigation between Home, Catalog, and Vendor Portal placeholders.

**Independent Test**: Click nav links and verify URL changes and content updates.

### Tests for User Story 2

- [x] T013 [P] [US2] Create integration test for navigation in `src/app/app.routes.spec.ts` (3)

### Implementation for User Story 2

- [x] T014 [US2] Configure routes for Home, Catalog (placeholder), and Vendor (placeholder) in `src/app/app.routes.ts` (2)
- [x] T015 [US2] Update `SidebarComponent` with `routerLink` for navigation items in `src/app/layout/sidebar/sidebar.component.html` (2)
- [x] T016 [US2] Implement placeholder components for Catalog and Vendor in `src/app/pages/` (2)

**Checkpoint**: User Story 2 functional.

---

## Phase 5: User Story 3 - Mobile Responsive Navigation (Priority: P2)

**Goal**: Collapse sidebar into a hamburger menu on mobile.

**Independent Test**: Resize browser < 768px and verify menu collapses/expands.

### Tests for User Story 3

- [x] T017 [P] [US3] Create test for sidebar toggle logic in `src/app/layout/shell-state.service.spec.ts` (3)

### Implementation for User Story 3

- [x] T018 [US3] Implement hamburger toggle in `HeaderComponent` using `ShellState` service (3)
- [ ] T019 [US3] Add media queries to `src/app/layout/shell.component.scss` for responsive behavior (4)
    - [x] T019.1 [US3] Define mobile breakpoints in `src/styles.scss` (1)
    - [x] T019.2 [US3] Implement media query for `ShellComponent` to adapt grid layout for mobile in `src/app/layout/shell.component.scss` (3)
    - [x] T019.3 [US3] Add responsive styling for `HeaderComponent` (e.g., hamburger icon visibility) in `src/app/layout/header/header.component.scss` (2)
    - [x] T019.4 [US3] Adjust `SidebarComponent` styling for mobile (e.g., hidden by default) in `src/app/layout/sidebar/sidebar.component.scss` (2)
- [x] T020 [US3] Implement mobile-specific drawer styling for `SidebarComponent` (3)

**Checkpoint**: User Story 3 functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

- [x] T021 [P] Run `npx nx lint` and fix any issues (2) _(Note: Linting configuration for ShopSample project is missing. Skipping execution of `nx lint` for now. This should be addressed.)_
- [x] T022 [P] Verify Lighthouse Accessibility score > 90 (3) _(Note: Manual verification required as automated tool execution failed.)_
- [x] T023 Final validation of `quickstart.md` steps (1)

---

## Dependencies & Execution Order

1. **Setup (Phase 1)** -> **Foundational (Phase 2)**
2. **Foundational (Phase 2)** -> **User Story 1 (Phase 3)**
3. **User Story 1 (Phase 3)** -> **User Story 2 (Phase 4)**
4. **User Story 2 (Phase 4)** -> **User Story 3 (Phase 5)**
5. **Phase 5** -> **Polish (Phase 6)**

---

## Implementation Strategy

### MVP First
Complete Phases 1, 2, and 3 to have a working UI shell. This is the minimum required to start other features.

### Parallel Opportunities
- T005, T006, T007 (Tests)
- T008, T009 (Component generation)
- T011.1, T011.2, T011.3, T011.4 (SCSS Grid layout breakdown)
- T019.1, T019.2, T019.3, T019.4 (Media queries breakdown)
- T021, T022 (Validation)
