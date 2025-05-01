module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint --fix ${filenames.map((f) => `--file ${f}`).join(' ')}`,
    `jest --bail --findRelatedTests ${filenames.join(' ')}`
  ]
}
