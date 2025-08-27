# Playground

This is a playground repository to test and learn new technologies and concepts.

## Technologies

- TypeScript
- Node.js
- pnpm
- turborepo

## Setup

### Prerequisites

Install nvm (Node Version Manager) if you haven't already: [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

After that, you can continue.

### Installing Node version

```shell
nvm install
```

### Verify the Node.js version

```shell
node -v
nvm current
```

### Download and install pnpm

```shell
corepack enable pnpm
```

### Verify pnpm version

```shell
pnpm -v
```

### Install dependencies

```shell
pnpm install
```

## Running the monorepo

## Running TypeScript scripts

To run the TypeScript scripts in the `apps/scripts` directory, you can use the following command:

```bash
pnpm --filter scripts dev
```

## Running a specific script

To run a specific script, use the `runner.js` file. For example, to run `hello-world.ts`:

```bash
pnpm --filter scripts start hello-world
```

## Running React app

To run the React app in the `apps/web` directory, you can use the following command:

```bash
pnpm --filter web dev
```

## How to install new packages globally

To install new packages in the monorepo, you can use the following command:

```sh
pnpm add <package-name> -w
```

Replace `<package-name>` with the name of the package you want to add. The `-w` flag indicates that the package should be added to the workspace root.

## How to create new packages

To create a new package, you can use the following command:

  ```sh
  mkdir -p packages/<package-name> && cd packages/<package-name> && pnpm init
  ```

Replace `<package-name>` with the name of the package you want to add. This will create a new directory in the `packages` folder with the necessary files and configurations.

Example:

1. Creating the new package:

   ```sh
   mkdir -p packages/hello-world && cd packages/hello-world && pnpm init
   ```

2. Add the config files you need, for example, `tsconfig.json` and `tsconfig.app.json`.

3. You can add your new package in the apps, for example, by running:

   ```sh
   cd packages/<package-name> && pnpm add @repo/hello-world
   ```

4. You can add your new package globally, for example, by running this command in the root directory:

   ```sh
   pnpm add @repo/hello-world -w
   ```
