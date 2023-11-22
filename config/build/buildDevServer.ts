import { Configuration } from "webpack";
import { IBuildOptions } from "./types/types";

export function buildDevServer({ port }: IBuildOptions): Configuration['devServer'] {
    return {
        port: port ?? 3000,
        open: true,
        historyApiFallback: true,
        hot: true
      }
}