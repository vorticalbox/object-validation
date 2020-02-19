module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageReporters: ['text']
}

// {
//     "testEnvironment": "node",
//     "testPathIgnorePatterns": [
//       "/node_modules/",
//       "./__tests__/environment/",
//       "./__tests__/data/",
//       "./__tests__/seeds/"
//     ],
//     "coverageReporters": [
//       "text",
//       "json"
//     ],
//     "moduleNameMapper": {
//       "^mongoose$": "<rootDir>/node_modules/mongoose",
//       "^mongodb-memory-server$": "<rootDir>/node_modules/mongodb-memory-server"
//     },
//     "collectCoverage": true,
//     "coverageDirectory": "./coverage",
//     "globalSetup": "<rootDir>/__tests__/environment/globalSetup.js",
//     "globalTeardown": "<rootDir>/__tests__/environment/globalTeardown.js",
//     "coverageThreshold": {
//       "global": {
//         "branches": 1,
//         "functions": 1,
//         "lines": 1,
//         "statements": 1
//       }
//     }
// }
