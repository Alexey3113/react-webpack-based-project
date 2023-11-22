import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import webpack from "webpack";

import { buildWebpack } from "./config/build/buildWebpack";
import { IBuildOptions } from "./config/build/types/types";

module.exports = (env: IBuildOptions) => {
  const options: IBuildOptions = {
    mode: env.mode ?? "development",
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", 'index.html'),
      src: path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public')
    },
    port: env.port ?? 3000,
    webpackAnalyzer: env.webpackAnalyzer,
    platform: env.platform ?? 'desktop'
  };

  const config: webpack.Configuration = buildWebpack(options);

  return config;
};
