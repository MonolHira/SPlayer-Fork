import { is } from "@electron-toolkit/utils";
import { app } from "electron";
import packageJson from "../../../package.json";

/**
 * 是否为开发环境
 * @returns boolean
 */
export const isDev = is.dev;

/** 是否为 Windows 系统 */
export const isWin = process.platform === "win32";
/** 是否为 macOS 系统 */
export const isMac = process.platform === "darwin";
/** 是否为 Linux 系统 */
export const isLinux = process.platform === "linux";

/**
 * 软件版本
 * @returns string
 */
export const appVersion = app.getVersion();

/**
 * 程序名称
 * @returns string
 */
export const appName = app.getName() || "SPlayer";

/**
 * 更新源仓库所有者（从 package.json 的 github 字段解析）
 * @returns string
 */
export const updateOwner = ((): string => {
  try {
    const url = packageJson.github || "";
    // 支持 https://github.com/owner/repo 或 github:owner/repo 两种形式
    const match =
      url.match(/github\.com\/([^/]+)\/([^/]+)/) || url.match(/github:([^/]+)\/([^/]+)/);
    return match?.[1] || "SPlayer-Dev";
  } catch {
    return "SPlayer-Dev";
  }
})();

/**
 * 更新源仓库名（从 package.json 的 github 字段解析）
 * @returns string
 */
export const updateRepo = ((): string => {
  try {
    const url = packageJson.github || "";
    const match =
      url.match(/github\.com\/([^/]+)\/([^/]+)/) || url.match(/github:([^/]+)\/([^/]+)/);
    return match?.[2]?.replace(/\.git$/, "") || "SPlayer";
  } catch {
    return "SPlayer";
  }
})();

/**
 * 服务器端口
 * @returns number
 */
export const port = Number(import.meta.env["VITE_SERVER_PORT"] || 25884);

/**
 * 默认 AMLL TTML DB Server
 * @returns string
 */
export const defaultAMLLDbServer = "https://amlldb.bikonoo.com/ncm-lyrics/%s.ttml";

/**
 * 主窗口加载地址
 * @returns string
 */
export const mainWinUrl =
  isDev && process.env["ELECTRON_RENDERER_URL"]
    ? process.env["ELECTRON_RENDERER_URL"]
    : `http://localhost:${port}`;

/**
 * 歌词窗口加载地址
 * @returns string
 */
export const lyricWinUrl =
  isDev && process.env["ELECTRON_RENDERER_URL"]
    ? `${process.env["ELECTRON_RENDERER_URL"]}/#/desktop-lyric`
    : `http://localhost:${port}/#/desktop-lyric`;

/**
 * 加载窗口地址
 * @returns string
 */
export const loadWinUrl =
  isDev && process.env["ELECTRON_RENDERER_URL"]
    ? `${process.env["ELECTRON_RENDERER_URL"]}/web/loading/index.html`
    : `http://localhost:${port}/web/loading/index.html`;
