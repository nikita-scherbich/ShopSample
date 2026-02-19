# Project Overview

This is an Angular application named `shop-sample` managed by an Nx workspace. It utilizes TypeScript for development, SCSS for styling, and includes a continuous integration/continuous deployment (CI/CD) pipeline configured with GitHub Actions and Nx Cloud. The application is bootstrapped using Angular's `bootstrapApplication` function and leverages `@angular/router` for navigation, although no specific routes are currently defined in `src/app/app.routes.ts`.

## Technologies Used

*   **Framework:** Angular (v20)
*   **Workspace Tool:** Nx (v22.5.1)
*   **Language:** TypeScript
*   **Styling:** SCSS
*   **Maps:** OpenLayers
*   **Charts:** Charts.js
*   **UI Components:** Angular Material
*   **Package Manager:** npm
*   **CI/CD:** GitHub Actions with Nx Cloud

## Building and Running

The project uses `npm` for package management and `nx` for executing various tasks.

*   **Install Dependencies:**
    ```bash
    npm install
    # or
    npm ci
    ```

*   **Start Development Server:**
    Runs the application in development mode, typically with live-reloading.
    ```bash
    nx serve
    # or
    npm start
    ```

*   **Build for Production:**
    Compiles the application for production deployment.
    ```bash
    nx build
    # or
    npm run build
    ```

*   **Run Tests:**
    Executes the unit tests for the application.
    ```bash
    nx test
    # or
    npm test
    ```

*   **Lint, Test, and Build Affected Projects (CI):**
    This command is used in the CI pipeline to lint, test, and build only the projects affected by recent changes.
    ```bash
    npx nx affected -t lint test build
    ```

## Development Conventions

*   **Component Styling:** New Angular components generated via `ng generate component` will default to using SCSS for styling.
*   **Routing:** The application uses `@angular/router` for client-side navigation. Routing configuration can be found in `src/app/app.config.ts` and `src/app/app.routes.ts`.
*   **Testing Framework:** Karma is used for unit testing, with configurations defined in `project.json` and `package.json`.
*   **CI/CD Workflow:** The project's CI/CD is managed through GitHub Actions (`.github/workflows/ci.yml`), which integrates with Nx Cloud for efficient task distribution and self-healing capabilities.
*   **Dependencies Injection** Use angular's inject() function instead of injecting dependencies in constructor.

## Active Technologies
- TypeScript, Angular v20 + @angular/router, SCSS, Nx (001-shell-app-infrastructure)

## Recent Changes
- 001-shell-app-infrastructure: Added TypeScript, Angular v20 + @angular/router, SCSS, Nx
