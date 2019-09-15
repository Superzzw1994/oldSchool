module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: true,
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  reporters: ["default"],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'include'],
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|mp3||m4a|aac|oga|webm|wav)$": "<rootDir>/test/__mocks__/file-mock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/test/__mocks__/object-mock.js"
  },
  transform: {
    '^.+unit\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
}