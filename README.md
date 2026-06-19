# agentic-coach

A [pnpm](https://pnpm.io/) monorepo.

## Structure

```
.
├── apps/
│   └── web/        # Astro website (@agentic-coach/web)
├── packages/       # Shared libraries (add workspace packages here)
├── pnpm-workspace.yaml
└── package.json    # Root workspace scripts
```

## Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/installation) (this repo pins `pnpm@10.33.0` via `packageManager`)

## Getting started

```sh
pnpm install
```

## Scripts

Run from the repo root:

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `pnpm dev`      | Start the Astro dev server for `apps/web`    |
| `pnpm build`    | Build every package in the workspace         |
| `pnpm preview`  | Preview the production build of `apps/web`   |
| `pnpm check`    | Type-check every package                     |

You can also target a single workspace package, e.g.:

```sh
pnpm --filter @agentic-coach/web dev
```

## Adding a package

Create a new directory under `packages/` (or `apps/`) with its own
`package.json`. The pnpm workspace globs in `pnpm-workspace.yaml` pick it up
automatically. Reference it from another package with the workspace protocol:

```jsonc
{
  "dependencies": {
    "@agentic-coach/some-lib": "workspace:*"
  }
}
```
