---
applyTo: "server/**/*.go"
---

## Go Source Code Guidelines

When writing or modifying Go source code, follow these guidelines:

1. **Follow Go conventions** - Use lowercase package names, PascalCase for exported identifiers, camelCase for unexported
1. **Use tabs for indentation** - Go code uses tabs (enforced by `.editorconfig` and `gofmt`)
1. **Colocate test files** - Place `*_test.go` files alongside the code they test
1. **Export intentionally** - Only export (capitalize) identifiers that need to be public; keep helpers unexported
1. **Error handling** - Always handle errors properly; don't ignore them
1. **Use Go idioms** - Follow standard Go patterns and idioms from the Go community
1. **Dependency injection** - Prefer dependency injection patterns for services and handlers
1. **Keep packages focused** - Maintain clear separation of concerns between packages:
   - `server/main` - Entry point
   - `server/app` - Core application logic
   - `server/services` - Business services
   - `server/api` - HTTP handlers
   - `server/model` - Data contracts
1. **Run linter before committing** - Use `golangci-lint run ./...` in `server/` directory
1. **Format code** - Code should be formatted with `gofmt` (happens automatically with most editors)
