module.exports = {
  "**/*.ts?(x)": () => "tsc --noEmit --pretty -p tsconfig.json",
  "*.{js,jsx,ts,tsx}": [
    "eslint -c .eslintrc.json ./",
    "prettier --check -c ./.prettierrc.json ./src",
  ],
  "*.{json, yaml, yml}": ["prettier --check -c ./.prettierrc.json ./src"],
};
