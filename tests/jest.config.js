module.exports = {
    rootDir: "../",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.js"],
    moduleNameMapper: {
        "\\.css$": "identity-obj-proxy",
    },
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
    },
};
