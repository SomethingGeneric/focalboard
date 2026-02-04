---
applyTo: "webapp/src/**/*.scss"
---

## SCSS Styling Guidelines

When writing or modifying SCSS styles, follow these guidelines:

1. **Use 4-space indentation** - SCSS files use 4 spaces for indentation (enforced by `.editorconfig`)
1. **Follow BEM-like naming** - Use descriptive, component-scoped class names
1. **Component-specific styles** - Keep styles colocated with components when possible
1. **Avoid global styles** - Minimize global style pollution; prefer component-scoped styles
1. **Use variables** - Leverage SCSS variables for colors, spacing, and other design tokens
1. **Run linter** - Use `npm run check` to lint SCSS files
1. **Auto-fix issues** - Run `npm run fix:scss` to automatically fix many linting issues
1. **Consistent formatting** - Follow Stylelint rules configured in the project
1. **Mobile-first responsive** - Consider responsive design and mobile viewports
