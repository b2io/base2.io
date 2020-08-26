# base2.io

> The Base Two website.

## Setup

Install [Node.js v8.x](https://nodejs.org) {or use 10.21.0}.

**Windows**

Ensure you have the tools needed by `node-gyp` on your path; if you don't, try:

```bash
npm i -g --production windows-build-tools
```

Installation:

```bash
$ npm i
$ npm run build
```

Local development server on port 8000:

```bash
$ npm run develop
```

Local production server on port 9000:

```bash
$ npm start
```

## Deployment:

> [TODO: Update deployment steps in README](https://github.com/b2io/base2.io/issues/123)

## Known Issues

If you're getting unexpected errors with GraphQL data or plugins, try:

```bash
$ rm .cache
$ rm public
$ npm run build
```
