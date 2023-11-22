import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from "path";
import webpack from "webpack";
import { IBuildOptions } from "./types/types";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpack(options: IBuildOptions): webpack.Configuration {
  const isDev = options.mode === "development";

  return {
    entry: options.paths.entry,
    output: {
      filename: "[name]-[contenthash:8].bundle.js",
      path: options.paths.output,
      clean: true,
    },
    mode: options.mode ?? "development",
    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    devtool: isDev ? "inline-source-map" : false,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
