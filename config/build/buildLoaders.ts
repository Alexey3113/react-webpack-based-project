import { ModuleOptions } from "webpack";
import { IBuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { buildBabelLoader } from "../babel/buildBabelLoader";

export function buildLoaders({ mode, paths }: IBuildOptions): ModuleOptions["rules"] {
  const isDev = mode === "development";

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
        },
      },
    ],
  };

  const cssLoader = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoader,
      "sass-loader",
    ],
  };

  // const tsLoader = {
  //   test: /\.tsx?$/,
  //   use: [{
  //       loader: "ts-loader",
  //       options: {
  //           transpileOnly: isDev,
  //           getCustomTransformers: () => ({
  //             before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
  //           }),
  //       },

  //   }],
  //   exclude: /node_modules/,
  // };

  const babelLoader = buildBabelLoader({ paths, mode });

  return [
    assetLoader,
    scssLoader,
    //  tsLoader,
    babelLoader,
    svgrLoader,
  ];
}
