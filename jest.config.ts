import type { Config } from "jest";

const config: Config = {
  verbose: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["dist/*", "node_modules"],
  reporters: ["default"],
};

export default config;
