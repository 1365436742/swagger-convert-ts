module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/__tests__/**/*.spec.ts'],
    transform: {
        '^.+\\.ts$': ['ts-jest', {
            // 在这里放置 ts-jest 的配置
            useESM: true, // 如果需要使用 ESM，可以启用这个选项
        }],
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
};