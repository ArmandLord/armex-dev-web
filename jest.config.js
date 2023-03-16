const nextJest = require('next/jest')

const createJestConfig = nextJest()

// Any custom config you want to pass to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  testMatch: ['**/*.spec.js', '**/*.spec.jsx'],
  // setupFilesAfterEnv: ['<rootDir>/jest-setup-after-env.ts'],
  verbose: true,
  roots: [
    '<rootDir>',
  ],
  modulePaths: ['<rootDir>/lib'],
  transformIgnorePatterns: ['/next[/\\\\]dist/', '/\\.next/'],
  globals: {
    AbortSignal: global.AbortSignal,
  },
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  coverageThreshold: {
    'src/**/*.{js,jsx}': {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  collectCoverageFrom: [
    'src/**/*.(js|jsx)',
    '!src/images/**',
    '!src/styles/**',
  ]
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)