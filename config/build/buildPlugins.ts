import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration, DefinePlugin } from "webpack";
import { IBuildOptions } from "./types/types";

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";

export function buildPlugins({
  mode,
  paths,
  webpackAnalyzer,
  platform,
}: IBuildOptions): Configuration["plugins"] {
  const isProd = mode === "production";
  const isDev = mode === "development";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.ico')
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    }),
  ];

  if (isDev) {
    plugins.push(
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new ReactRefreshWebpackPlugin()
    );
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    );
  }

  if (webpackAnalyzer) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: webpackAnalyzer ?? false,
      })
    );
  }

  return plugins;
}
