# Copilot Instructions

This directory contains path-specific instructions for GitHub Copilot coding agent. These instructions guide Copilot on how to work with different types of files in this repository.

## Instruction Files

### Test Guidelines

- **`go-tests.instructions.md`** - Guidelines for Go test files (`server/**/*_test.go`)
  - Table-driven tests, TestXxx naming, integration test separation
  - Database coverage (SQLite, MySQL, MariaDB, PostgreSQL)
  - Run `make server-test-sqlite` before committing

- **`react-tests.instructions.md`** - Guidelines for React/TypeScript tests (`webapp/src/**/*.test.{ts,tsx}`)
  - React Testing Library patterns, colocated tests
  - Snapshot testing, coverage requirements
  - Run `cd webapp && npm run test` before committing

- **`cypress-tests.instructions.md`** - Guidelines for Cypress E2E tests (`webapp/cypress/**/*.{js,ts}`)
  - Fixture usage, stable selectors, test independence
  - Runs against packaged server at `http://localhost:8080`
  - Execute with `cd webapp && npm run cypress:ci`

### Source Code Guidelines

- **`go-source.instructions.md`** - Guidelines for Go source code (`server/**/*.go`)
  - Go conventions, package structure, dependency injection
  - Tab indentation, error handling, export intentionality
  - Lint with `golangci-lint run ./...` in `server/`

- **`react-components.instructions.md`** - Guidelines for React components (`webapp/src/components/**/*.{ts,tsx}`)
  - PascalCase filenames, functional components with hooks
  - TypeScript types, 4-space indentation, i18n support
  - Redux patterns, accessibility, SCSS modules

- **`scss-styles.instructions.md`** - Guidelines for SCSS styles (`webapp/src/**/*.scss`)
  - 4-space indentation, BEM-like naming, component-scoped styles
  - Use variables, run `npm run fix:scss` for auto-fixes
  - Mobile-first responsive design

## How It Works

GitHub Copilot coding agent automatically applies the relevant instructions when working on files that match the `applyTo` glob patterns defined in each instruction file's frontmatter.

## Repository-Wide Instructions

In addition to these path-specific instructions, repository-wide instructions are available in:
- `/.github/copilot-instructions.md` (symlinked to `/AGENTS.md`)

These provide general guidance on:
- Project structure and organization
- Build, test, and development commands
- Coding style and naming conventions
- Testing guidelines
- Commit and pull request guidelines
