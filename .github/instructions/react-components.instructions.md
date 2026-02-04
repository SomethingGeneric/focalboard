---
applyTo: "webapp/src/components/**/*.{ts,tsx}"
---

## React Component Guidelines

When writing or modifying React components, follow these guidelines:

1. **Use PascalCase filenames** - Component files should use PascalCase naming (e.g., `BoardCard.tsx`, `UserProfile.tsx`)
1. **Colocate test files** - Place `ComponentName.test.tsx` files in the same directory as the component
1. **Follow component patterns** - Use functional components with hooks; follow existing patterns in the codebase
1. **Use TypeScript properly** - Define proper types/interfaces for props; avoid `any` types
1. **Follow 4-space indentation** - Use 4 spaces for indentation in TypeScript/JavaScript files (enforced by `.editorconfig`)
1. **Import organization** - Group imports logically: React imports, third-party libraries, local components, utilities
1. **SCSS for styles** - Use SCSS modules for component-specific styles; follow existing naming conventions
1. **Accessibility** - Ensure components are accessible with proper ARIA labels and semantic HTML
1. **Internationalization** - Use the i18n system for user-facing strings from `webapp/i18n/`
1. **Redux patterns** - Follow existing Redux patterns for state management; use hooks like `useAppSelector` and `useAppDispatch`
