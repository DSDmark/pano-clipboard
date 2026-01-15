import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/main.ts",
  output: {
    file: "dist/main.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [typescript({ tsconfig: "./tsconfig.json" }), resolve(), commonjs()],
  external: ["gi"],
};
