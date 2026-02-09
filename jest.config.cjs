module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/.internal/**"
  ],
  coverageReporters: ["text", "lcov"]
};
