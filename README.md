## A generic template for a TypeScript Node.js backend.

This repository features:
- `pnpm` package manager
- [SWC](https://swc.rs/) transpilation
- [ESLint](https://eslint.org/) linting & [Prettier](https://prettier.io/) code formatting
- Express
- Jest testing
- Dockerfiles to run Jest tests or Dev enviornments

## Setup

First install with `pnpm`:

```
pnpm i
```

To run the Dev environment in Docker:

```
pnpm run dev
```

### Testing

Tests can be run in Docker with:

```
pnpm run test
```

or locally:

```
pnpm run test-local
```