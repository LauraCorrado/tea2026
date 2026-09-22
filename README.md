# TEA Website

Corporate website for TEA S.r.l.
The project is currently under development.

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Create a prod build:

```bash
npm run build
```

Preview the prod build locally:

```bash
npm run preview
```

## Git Workflow

The project uses a branch-based development workflow.

* `main` - prod-ready code
* `develop` - integration branch for ongoing development
* `feat/*` - for new features
* `fix/*` - for bug fixes
* `style/*` - for style changes
* `refactor/*` - for code refactoring
* `chore/*` - for maintenance and project configuration
* `docs/*` - for documentation changes
* `perf/*` - to potentially improve performance


Development work is merged into `develop` through pull requests. Prod-ready changes are merged from `develop` into `main`.

## Status

Early development.