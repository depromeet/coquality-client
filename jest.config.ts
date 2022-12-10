import type { Config } from "jest"

const config: Config = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "jsdom",
  // moduleNameMapper: {
  //   TODO: add aliases
  // },
  // rootDir: ".",
}

export default config
