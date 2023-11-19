import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "svg/index.ts",
  output: [
    {
      dir: "dist/cjs",
      format: "cjs",
      preserveModules: true,
    },
    {
      dir: "dist/esm",
      format: "esm",
      preserveModules: true,
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser()
  ]
}