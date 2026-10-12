# Abhay | Software Developer

A portfolio built with React, TypeScript, and Vite. It presents selected software development and growth work from my Worky internship, with client and internal details intentionally kept private.

## Run locally

Requirements: Node.js LTS and npm.

```sh
npm install
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173/`. Keep the terminal running while you view the site; press `Ctrl+C` to stop it.

## Verify changes

```sh
npm run lint
npm run build
```

`lint` checks source code with ESLint. `build` type-checks the TypeScript project and creates the production site in `dist/`.

## Project structure

- `src/App.tsx` contains the portfolio content and reusable case-study data.
- `src/App.css` contains page and component styles, including responsive layouts.
- `src/index.css` contains global styles and design tokens.
- `index.html` contains the page title, description, and font loading setup.

## Deployment

The site is a static Vite app. It can be deployed by connecting this GitHub repository to Vercel; use `npm run build` as the build command and `dist` as the output directory. Add personal email and profile links before publishing so visitors have a direct way to get in touch.
