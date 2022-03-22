module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '(.test)\\.(ts|tsx|js)$',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
};
