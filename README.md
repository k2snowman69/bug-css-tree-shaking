# CSS import

The goal of this project is to be able to test the webpack config and several different ways to import css files.

- component--no-import - CSS file is not imported anywhere so it shouldn't be included in the final output
- component--import-no-modules - CSS file is imported via the index.js without any named modules
- component--import-modules - CSS file is imported via the component using named modules

# Expected

The css for `component--import-no-modules` and `component--import-modules` to be included in the css output

# Build

```sh
npm i && npm run build
```
