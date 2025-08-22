# Contributing Guide

## Code Style

This project uses **Prettier** with **prettier-standard** configuration for consistent code formatting.

### Setup

The project is configured with:
- **Prettier** - Code formatter with Standard JavaScript style
- **prettier-plugin-tailwindcss** - Automatically sorts Tailwind CSS classes

### VS Code Integration

If you're using VS Code, the project includes settings that will:
- Format your code on save using Prettier
- Apply Standard JavaScript style automatically

Make sure you have the Prettier extension installed:
- Prettier (`esbenp.prettier-vscode`)

### Available Scripts

```bash
# Format all code
bun run format

# Check code formatting
bun run format:check

# Run linter (basic TypeScript/React checks)
bun run lint
```

### Code Style Rules

The prettier-standard configuration enforces:
- **Single quotes** for strings
- **No semicolons** (except where necessary to avoid ASI issues)
- **2 spaces** for indentation
- **Space before function parentheses**
- **Trailing commas** where valid in ES5
- **Tailwind classes** are automatically sorted

### Format on Save

With VS Code, your files will automatically format when you save them. This ensures consistent style without having to think about it.

### Before Committing

It's good practice to run:
```bash
bun run format
```

This ensures all files are properly formatted before committing changes. 