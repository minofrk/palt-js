module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    coverageDirectory: './coverage/',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts',
    ],
    globals: {
        'ts-jest': {
            'tsConfig': './test/tsconfig.json',
        },
    },
};
