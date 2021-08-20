module.exports = {
  printWidth: 250,
  singleQuote: true,
  arrowParens: "always",
  trailingComma: "all",
  endOfLine: "auto",
  overrides: [
    {
      files: "package*.json",
      options: {
        printWidth: 1000,
      },
    },
  ],
};
