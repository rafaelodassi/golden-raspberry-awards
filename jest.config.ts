import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/lib/',
    '/src/constants/',
    '/src/services/',
    '/src/hooks/',
  ],
};

export default createJestConfig(config);
