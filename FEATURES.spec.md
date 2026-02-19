# Mercato - Feature Roadmap

**Domain:** GeoCommerce Platform - Location-aware marketplace for local vendors

**Tech Stack:** Angular 21, NX Workspace, Module Federation, Signals, OpenLayers, i18n

---

## Phase 1: Foundation (Weeks 1-2)

### 1.1 Infrastructure
- [x] NX workspace setup with MFE architecture
- [ ] Shell app with routing and layout
- [ ] Module Federation configuration
- [ ] Shared design system foundation
- [ ] i18n infrastructure (Angular i18n)
- [ ] Environment configuration management

### 1.2 Authentication & Authorization
- [ ] Login page (Google OAuth + username/password)
- [ ] OAuth callback handling
- [ ] JWT token management (httpOnly cookies)
- [ ] Token refresh interceptor with auto-retry
- [ ] CSRF protection
- [ ] Role-based access control (RBAC)
  - Roles: Admin, Vendor, Customer
- [ ] Route guards (auth + role guards)
- [ ] User profile state management (SignalStore)
- [ ] Session restoration on app load
- [ ] Logout flow

### 1.3 Shared UI Library
- [ ] Design tokens (colors, typography, spacing)
- [ ] Button component
- [ ] Input/Form field components
- [ ] Card component
- [ ] Modal/Dialog component
- [ ] Loading spinner
- [ ] Toast/Snackbar notifications
- [ ] Icon system
- [ ] Responsive layout utilities

---

## Phase 2: Catalog & Storefront (Weeks 3-4)

### 2.1 Catalog Domain
- [ ] Product entity model (DDD bounded context)
- [ ] Category taxonomy
- [ ] Product search service
- [ ] Filter/sort logic
- [ ] Catalog SignalStore (products, filters, pagination)

### 2.2 Storefront MFE Remote
- [ ] Product listing page with filters
- [ ] Product detail page
- [ ] Category navigation
- [ ] Search bar with autocomplete
- [ ] Product cards (responsive grid)
- [ ] "Add to favorites" functionality
- [ ] Pagination or infinite scroll
- [ ] Empty state handling

### 2.3 API Integration
- [ ] HTTP client services for Catalog API
- [ ] Error handling interceptor
- [ ] Loading state management
- [ ] Optimistic updates pattern
- [ ] Cache strategy (consider using `@ngrx/signals` with RxMethod)

---

## Phase 3: Geography & Map (Week 5)

### 3.1 Geography Domain
- [ ] Location entity model
- [ ] Delivery zone model
- [ ] Proximity calculation utilities
- [ ] Geography SignalStore (map state, viewport)

### 3.2 OpenLayers Integration
- [ ] Map component (reusable across remotes)
- [ ] Vendor location markers with clustering
- [ ] Product heatmap overlay
- [ ] Delivery zone visualization
- [ ] Map controls (zoom, geolocation)
- [ ] Interactive marker popups
- [ ] Map-based product filtering

### 3.3 Geospatial Features
- [ ] "Near me" product search
- [ ] Distance-based sorting
- [ ] Delivery zone checker
- [ ] Multi-vendor route planning (stretch goal)

---

## Phase 4: Vendor Portal (Week 6)

### 4.1 Vendor Domain
- [ ] Vendor profile entity model
- [ ] Shop location model
- [ ] Operating hours model
- [ ] Vendor SignalStore

### 4.2 Vendor Portal MFE Remote
- [ ] Vendor dashboard
- [ ] Shop profile management
- [ ] Location/hours editor
- [ ] Product inventory management
  - Add/edit/delete products
  - Image upload
  - Price/stock management
- [ ] Order management view (orders placed at this vendor)
- [ ] Sales analytics (basic charts)

### 4.3 Role-Specific Features
- [ ] Vendor-only route guards
- [ ] Admin override capabilities
- [ ] Vendor onboarding wizard (stretch)

---

## Phase 5: Orders & Cart (Week 7)

### 5.1 Orders Domain
- [ ] Cart entity model
- [ ] Order entity model (order lines, totals, status)
- [ ] Order lifecycle (pending → confirmed → delivered)
- [ ] Cart SignalStore (persist to localStorage)

### 5.2 Shopping Cart
- [ ] Add to cart (with quantity)
- [ ] Cart sidebar/modal
- [ ] Cart item editing (quantity, remove)
- [ ] Cart total calculation
- [ ] Multi-vendor cart handling (orders split by vendor)
- [ ] Cart persistence across sessions

### 5.3 Checkout Flow
- [ ] Delivery address form
- [ ] Order summary
- [ ] Order placement
- [ ] Order confirmation page
- [ ] Order history (customer view)

### 5.4 Order Management
- [ ] Order status tracking
- [ ] Vendor order fulfillment interface
- [ ] Admin order oversight

---

## Phase 6: Advanced Features (Week 8+)

### 6.1 Search & Discovery
- [ ] Full-text search with backend integration
- [ ] Search history
- [ ] Trending products
- [ ] Personalized recommendations (based on location/history)

### 6.2 Internationalization (i18n)
- [ ] Multi-language support (EN, ES, FR)
- [ ] Currency formatting (USD, EUR)
- [ ] Date/time localization
- [ ] Unit conversion (km vs miles)
- [ ] Address format localization
- [ ] RTL support (stretch)

### 6.3 Performance Optimizations
- [ ] Route-level lazy loading (already in MFE)
- [ ] Image lazy loading
- [ ] Virtual scrolling for long lists
- [ ] OnPush change detection strategy
- [ ] Defer loading for below-the-fold content
- [ ] Service worker for offline support (PWA)

### 6.4 Admin Features
- [ ] User management
- [ ] Vendor approval workflow
- [ ] Product moderation
- [ ] Analytics dashboard
- [ ] System configuration

### 6.5 User Experience
- [ ] Dark mode toggle
- [ ] Accessibility (WCAG AA compliance)
- [ ] Loading skeletons
- [ ] Error boundaries
- [ ] Offline indicator

---

## Technical Debt & Refactoring

### Code Quality
- [ ] Unit tests (Jest) - target 80% coverage for services/stores
- [ ] E2E tests (Cypress) - critical user flows
- [ ] Linting rules (ESLint + Prettier)
- [ ] Commit conventions (Conventional Commits)
- [ ] Pre-commit hooks (Husky)

### Architecture Review
- [ ] Audit bounded context boundaries
- [ ] Review MFE module dependencies
- [ ] Optimize bundle sizes
- [ ] Evaluate state management patterns
- [ ] Document architectural decisions (ADRs)

---

## Non-Functional Requirements

### Security
- ✅ httpOnly cookies for tokens
- ✅ CSRF protection
- ✅ XSS prevention (Angular sanitization)
- [ ] Content Security Policy (CSP) headers
- [ ] Rate limiting (backend coordination)

### Performance Targets
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Lighthouse score > 90
- [ ] Bundle size < 500kb (per remote)

### Accessibility
- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Focus management
- [ ] ARIA labels

### Browser Support
- [ ] Chrome/Edge (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

---

## Stretch Goals (Post-MVP)

- [ ] Real-time notifications (WebSocket)
- [ ] Chat with vendors
- [ ] Product reviews and ratings
- [ ] Loyalty program
- [ ] Subscription orders
- [ ] Multi-vendor checkout optimization
- [ ] Vendor analytics dashboard
- [ ] Advanced map features (routing, traffic)
- [ ] Social sharing
- [ ] Gift cards

---

## Notes

**Domain-Driven Design:** Each bounded context (Catalog, Vendor, Orders, Geography, Identity) maintains clear boundaries. Cross-context communication happens via well-defined interfaces, never direct model sharing.

**Micro-Frontend Strategy:** Shell owns auth and routing. Remotes are deployed independently. Shared libraries are versioned and consumed as npm packages in a real scenario.

**State Management:** Using `@ngrx/signals` SignalStore for domain state. Local component state uses Angular Signals. Avoid prop drilling by injecting stores directly where needed.

**Testing Strategy:** Unit tests for stores/services. Integration tests for feature components. E2E tests for critical flows (login, checkout). Aim for practical coverage, not 100%.