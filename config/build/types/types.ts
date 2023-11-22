export interface IBuildPaths {
  entry: string;
  output: string;
  html: string;
  public: string;
  src: string;
}

export type TBuildMode = "production" | "development";
export type TBuildPlatform = "mobile" | "desktop";

export interface IBuildOptions {
  mode?: TBuildMode;
  port?: number;
  platform?: TBuildPlatform;
  paths: IBuildPaths;
  webpackAnalyzer?: boolean;
}
