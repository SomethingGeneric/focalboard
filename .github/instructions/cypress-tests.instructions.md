---
applyTo: "webapp/cypress/**/*.{js,ts}"
---

## Cypress E2E Test Requirements

When writing or modifying Cypress end-to-end tests, follow these guidelines:

1. **Use existing fixtures** - Reuse fixtures and test data from `webapp/cypress/fixtures/` directory
1. **Target the default endpoint** - Tests should run against `http://localhost:8080` by default
1. **Use stable selectors** - Prefer data-testid attributes, semantic selectors, or text content over fragile CSS selectors
1. **Keep tests independent** - Each test should be able to run independently without relying on other tests' state
1. **Handle async operations** - Leverage Cypress's built-in retry-ability and avoid manual waits when possible
1. **Clean up test data** - Use appropriate setup and teardown to ensure tests don't leave artifacts
1. **Run against packaged server** - E2E tests run against the full packaged server build, not development mode
1. **Use Cypress best practices** - Follow Cypress documentation for commands, assertions, and patterns
1. **Run tests locally** - Execute `cd webapp && npm run cypress:ci` for headless testing before submitting changes
