import { Configuration } from "webpack";
import { IBuildOptions } from "./types/types";

export function buildResolvers({ paths }: IBuildOptions): Configuration['resolve'] {
    return {
        alias: {
            '@': paths.src
        },
        extensions: [".ts", ".tsx", '.js', '.css', '.scss'],
      }
}