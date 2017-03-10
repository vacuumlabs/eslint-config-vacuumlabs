# eslint-config-vacuumlabs
ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the VacuumLabs JavaScript style guide.

## Installation

```
$ yarn add --dev eslint babel-eslint eslint-config-vacuumlabs eslint-plugin-react eslint-plugin-import
```

## Usage

Once the `eslint-config-vacuumlabs` package is installed, you can use it by specifying `vacuumlabs` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "vacuumlabs",
  "rules": {
    // Additional, per-project rules...
  }
}
```
