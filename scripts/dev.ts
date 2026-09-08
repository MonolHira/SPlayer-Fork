#!/usr/bin/env node

/**
 * 跨平台开发启动脚本
 * 自动检测操作系统并设置相应的字符编码
 */

import { spawn } from "child_process";
import { writeFileSync } from "fs";
import os from "os";
import path from "path";
import packageJson from "../package.json";

// 检测操作系统平台
const platform = os.platform();
const isWindows = platform === "win32";
const isMacOS = platform === "darwin";

console.log(`🚀 检测到操作系统: ${platform}`);

// 根据 package.json 的 github 字段动态生成 dev-app-update.yml（与主进程更新源保持一致）
const syncDevUpdateConfig = (): void => {
  try {
    const url = packageJson.github || "";
    const match =
      url.match(/github\.com\/([^/]+)\/([^/]+)/) || url.match(/github:([^/]+)\/([^/]+)/);
    if (!match) return;
    const owner = match[1];
    const repo = match[2].replace(/\.git$/, "");
    writeFileSync(
      path.resolve(import.meta.dirname, "../dev-app-update.yml"),
      `provider: github
owner: "${owner}"
repo: "${repo}"
`,
      "utf-8",
    );
    console.log(`📦 已同步 dev-app-update.yml -> ${owner}/${repo}`);
  } catch (error) {
    console.warn("⚠️  生成 dev-app-update.yml 失败，将沿用现有文件:", error);
  }
};

// 同步更新源配置（根据 package.json 生成 dev-app-update.yml）
syncDevUpdateConfig();

// 设置环境变量
const env: NodeJS.ProcessEnv = { ...process.env };

const startElectronVite = (): void => {
  console.log("🔧 正在启动 Electron Vite 开发服务器...");

  // 设置 Node.js 选项
  env.NODE_OPTIONS = "--max-old-space-size=4096";

  // 传递给 electron-vite 的参数
  const runArgs = ["dev"];
  // 前两个参数分别是 node 和此脚本的路径，丢弃它们
  const args = process.argv.slice(2);
  // 添加参数
  if (args.length > 0) {
    runArgs.push(...args);
  }

  const electronVite = spawn("electron-vite", runArgs, {
    stdio: "inherit",
    shell: true,
    env,
  });

  electronVite.on("close", (code) => {
    console.log(`\n🏁 开发服务器已停止 (退出码: ${code})`);
    process.exit(code ?? 0);
  });

  electronVite.on("error", (err) => {
    console.error("❌ 启动失败:", err.message);
    process.exit(1);
  });

  // 优雅退出处理
  process.on("SIGINT", () => {
    console.log("\n🛑 正在停止开发服务器...");
    electronVite.kill("SIGINT");
  });

  process.on("SIGTERM", () => {
    console.log("\n🛑 正在停止开发服务器...");
    electronVite.kill("SIGTERM");
  });
};

if (isWindows) {
  console.log("Windows 环境 - 正在设置代码页为 UTF-8");
  // Windows 环境下先执行 chcp 65001
  const chcp = spawn("chcp", ["65001"], {
    stdio: "inherit",
    shell: true,
    env,
  });

  chcp.on("close", (code) => {
    if (code === 0) {
      console.log("✅ 代码页设置成功");
      startElectronVite();
    } else {
      console.warn("⚠️  代码页设置失败，继续启动...");
      startElectronVite();
    }
  });
} else {
  // macOS 和 Linux 环境
  console.log(`🐧 ${isMacOS ? "macOS" : "Linux"} 环境 - 正在设置 UTF-8 编码`);
  const langVar = env.LC_ALL || env.LANG || "";
  if (langVar.endsWith("UTF-8")) {
    console.log("✅ 当前环境已设置 UTF-8 编码");
  } else {
    if (langVar.startsWith("zh_CN")) {
      env.LC_ALL = "zh_CN.UTF-8";
      env.LANG = "zh_CN.UTF-8";
    } else {
      env.LC_ALL = "en_US.UTF-8";
      env.LANG = "en_US.UTF-8";
    }
  }
  setTimeout(() => startElectronVite(), 0);
}
