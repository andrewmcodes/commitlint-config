# @andrewmcodes/commitlint-config

![npm](https://img.shields.io/npm/v/@andrewmcodes/commitlint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/andrewmcodes/commitlint-config/actions/workflows/ci.yml/badge.svg)](https://github.com/andrewmcodes/commitlint-config/actions/workflows/ci.yml)
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

This is a shareable [commitlint](https://commitlint.js.org/#/) configuration, which includes a set of preferred styling rules that can be easily extended.

## Installation

```shell
# npm
npm install --save-dev @andrewmcodes/commitlint-config
# yarn
yarn add -D @andrewmcodes/commitlint-config
```

## Usage

Add the following to your `commitlint.config.js`:

```js
// commitlint.config.js
module.exports = {
  extends: ["@andrewmcodes"], // => @andrewmcodes/commitlint-config
};
```

## Contributing

I'd love your help refining this package. Please don't hesitate to send a pull request.

### Code Style

Run `yarn format` before committing to ensure your changes comply with our coding style.

### Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Please make sure your commit messages follow this format.
