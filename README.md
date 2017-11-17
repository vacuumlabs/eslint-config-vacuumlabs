# eslint-config-vacuumlabs
ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the VacuumLabs JavaScript style guide.

## Installation

```
$ yarn add --dev eslint babel-eslint eslint-config-vacuumlabs eslint-plugin-react eslint-plugin-import
```

## Config

Once the `eslint-config-vacuumlabs` package is installed, you can use it by specifying `vacuumlabs` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "vacuumlabs",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Running eslint

Run locally-installed eslint on the current folder:
```bash
`npm-which eslint` .
```

For running as a npm script, put this to package.json (this also uses local eslint)

```javascript
"scripts": {
  "eslint": "eslint .",
  ...
}
```

If you want eslint to fail on warnings (you usually want this on the CI environment)

```
"scripts": {
  "eslint": "eslint . --max-warnings=0",
  ...
}
```

Eslint also supports silencing warnings using `--quiet` option. You can use this during rapid
development, especially if you find a way how to hack `--quiet` option into your eslint-editor
integration.
