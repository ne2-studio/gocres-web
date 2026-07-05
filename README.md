# Gocres Website

[![CI](https://github.com/ne2-studio/gocres-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/ne2-studio/gocres-web/actions)

## :pick: Requirements

- [Hugo](https://gohugo.io/getting-started/installing/) (extended)
- [Node.js](https://nodejs.org/) (only needed to rebuild `themes/gocres/static/css/main.css` via Tailwind CSS v4 — the compiled CSS is committed, so plain `hugo`/`make publish` works without Node)
- Make (For windows install with [choco](https://community.chocolatey.org/packages/make))

## :rocket: Build and Release

## Development server

```sh
make dev
```

If you add or change Tailwind utility classes in the templates, rebuild the CSS in another terminal so the dev server picks them up:

```sh
npm install
make css-watch
```

## Build for production

```sh
make publish
```

`make publish` recompiles the CSS (via `npm run css:build`, requires `npm install` first) and then runs the Hugo production build.
