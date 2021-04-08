# CSS tree shaking tester

The goal of this repository is to allow you to understand what will happen to your imports in various different scenarios.

The inputs you change are:

- package.json - sideEffects
- webpack.config.js - sideEffects for js and css

The outputs you are monitoring is ./dist/main.css

Depending on how you change the sideEffects, you'll see different files get included in the final build or not.

# Build

```sh
npm i && npm run build
```
