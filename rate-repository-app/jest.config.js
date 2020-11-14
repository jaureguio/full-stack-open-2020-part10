module.exports = {
  "preset": "jest-expo",
  "transform": {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  "setupFilesAfterEnv": ["<rootDir>/setupTest.ts"],
  "transformIgnorePatterns": [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*|react-router-native)",
  ],
};