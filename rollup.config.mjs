import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"

export default {
  input: "react/index.ts",
  output: {
    dir: "lib/react/esm",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "react",
  },
  plugins: [typescript(), terser()]
}