---
applyTo: "webapp/src/**/*.test.{ts,tsx}"
---

## React/TypeScript Test Requirements

When writing or modifying React component tests, follow these guidelines:

1. **Use React Testing Library** - Prefer `@testing-library/react` for component testing with user-centric queries
1. **Follow naming conventions** - Test files should match component files with `.test.tsx` or `.test.ts` extensions
1. **Colocate tests** - Keep test files in the same directory as the components they test
1. **Use snapshot testing wisely** - Snapshots are acceptable for stable UI structures; update with `npm run updatesnapshot` when intentional changes occur
1. **Test user interactions** - Focus on testing component behavior from a user's perspective rather than implementation details
1. **Mock dependencies** - Mock Redux store, API calls, and other external dependencies appropriately
1. **Maintain test coverage** - Jest runs with coverage by default; maintain or improve coverage when modifying code
1. **Run tests before committing** - Always run `cd webapp && npm run test` before committing changes
1. **Write descriptive test names** - Use clear `describe` and `it` blocks that explain what is being tested
