# Data Model: Shell Infrastructure

## NavigationItem (UI Model)
- `label`: string
- `path`: string
- `icon`: string (optional)
- `roles`: string[] (optional, for future RBAC)

## ShellState (UI State)
- `isSidebarOpen`: boolean (Signal-based)
- `activeRoute`: string
