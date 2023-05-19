# ViteJS React TypeScript Template

## Installation

Install pnpm if not installed yet:
```bash
npm i -g pnpm
```

Install dependencies:
```bash
pnpm i
```

## Running locally

```bash
pnpm dev
```

## Audit
Pnpm uses its own packages' versions override system. To run audit just run:
```bash
pnpm audit
```

## Updating dependencies
```bash
pnpm i -g npm-check-updates
ncu -u --target minor
pnpm i
```

## Template's core:
* [NodeJS](https://nodejs.org/en/)
* [pnpm](https://pnpm.io/)
* [ViteJS](https://vitejs.dev/)

## Production bundle includes:

* [ReactJS](https://reactjs.org/)
* Material UI

## Development dependencies:

* [TypeScript](https://www.typescriptlang.org/)
* [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
* [Husky](https://www.npmjs.com/package/husky) + hooks:
  * pre-commit: lint and test
  * commit-msg: conventional commit message
