# eslint-config-sf-js

This package includes the shareable ESLint configuration used by SF-Tech.<br>
Please refer to its documentation:

## General

All configurations are based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#readme)([中文](./airbnb-rules.md)) and a set of additions.

## Usage

If you want to use this ESLint configuration in your project, you can install it with the following steps.

First, install this package, ESLint and the necessary plugins.

```sh
yarn add eslint-config-sf-js -D
```

Then create a file named `.eslintrc` with following contents in the root folder of your project:

```json
{
  "extends": "sf-js"
}
```

That's it! You can override the settings from `eslint-config-sf-js` by editing the `.eslintrc` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.

If you want to enable even more accessibility rules, you can create an `.eslintrc` file in the root of your project with this content:

```json
{
  "extends": ["sf-js", "sf-js", "sf-vue", "sf-ts", "sf-mp"],
  "plugins": ["sf-plugin"]
}
```

## License

MIT