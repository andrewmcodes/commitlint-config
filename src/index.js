// @ts-check

/** @typedef {import("@commitlint/types").RulesConfig} RulesConfig */

/** @type {Partial<RulesConfig>} */
const rules = {
  "body-max-line-length": [0],
  "footer-max-line-length": [0],
};

/** @type {import("@commitlint/types").UserConfig} */
const config = {
  extends: ["@commitlint/config-conventional"],
  rules: rules,
};

module.exports = config;
