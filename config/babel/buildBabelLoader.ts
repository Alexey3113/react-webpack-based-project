import { IBuildOptions } from "config/build/types/types";
import { removeDataTestidBabelPlugin } from "./removeDataTestidBabelPlugin";

export function buildBabelLoader({ mode }: IBuildOptions) {
  const isDev = mode === "development";
  const isProd = mode === "production";

  const plugins: any[] = [];

  if(isProd) {
    plugins.push([
        removeDataTestidBabelPlugin,
        {
            props: ['data-testid']
        }
    ]);
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          ["@babel/preset-react", { runtime: isDev ? "automatic" : "classic" }],
          "@babel/preset-typescript",
        ],
        plugins,
      },
    },
  };
}
