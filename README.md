# Playground

This is a playground repository to test and learn new technologies and concepts.

# Technologies

- TypeScript
- Node.js
- pnpm
- turborepo

# Setup

## Prerequisites

Install nvm (Node Version Manager) if you haven't already: [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

After that, you can continue.

## Installing Node version

```shell
nvm install
```

## Verify the Node.js version

```shell
node -v
nvm current
```

## Download and install pnpm

```shell
corepack enable pnpm
```

## Verify pnpm version

```shell
pnpm -v
```

## Install dependencies

```shell
pnpm install
```

# Running the monorepo

## Running TypeScript scripts

To run the TypeScript scripts in the `apps/scripts` directory, you can use the following command:

```bash
pnpm --filter scripts dev
```

# Running a specific script

To run a specific script, use the `runner.js` file. For example, to run `hello-world.ts`:

```bash
pnpm --filter scripts start hello-world
```

## Running React app

To run the React app in the `apps/web` directory, you can use the following command:

```bash
pnpm --filter web dev
```
