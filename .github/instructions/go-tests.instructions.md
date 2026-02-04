---
applyTo: "server/**/*_test.go"
---

## Go Test Requirements

When writing or modifying Go tests in this repository, follow these guidelines:

1. **Use table-driven tests** - Prefer table-driven test patterns with test cases defined as slices of structs for better maintainability and coverage
1. **Follow naming conventions** - Use `TestXxx` function names and `*_test.go` file naming; colocate test files with the code they test
1. **Keep integration tests separate** - Place integration tests in `server/integrationtests/` directory
1. **Test all database types** - When adding database-related tests, ensure they work with SQLite, MySQL, MariaDB, and PostgreSQL
1. **Use testify/assert** - Prefer `github.com/stretchr/testify/assert` for assertions when available in the codebase
1. **Mock external dependencies** - Use interfaces and mocks for external dependencies to keep tests fast and isolated
1. **Run tests before committing** - Always run `make server-test-sqlite` for quick validation; run full `make server-test` for comprehensive database coverage before submitting PRs
1. **Follow Go best practices** - Use subtests with `t.Run()` for organizing related test cases
