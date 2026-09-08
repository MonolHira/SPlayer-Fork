<div align="center">
<img alt="logo" height="100" width="100" src="public/icons/favicon.png" />
<h2> SPlayer-Fork </h2>
<p> 一个简约的音乐播放器（基于 <a href="https://github.com/imsyy/SPlayer">SPlayer</a> 的维护分支） </p>

[上游 API 文档](https://splayer.imsyy.top/api.html)（对于此分支可能已过时） | [发行版](https://github.com/MonolHira/SPlayer-Fork/releases) | [Issues](https://github.com/MonolHira/SPlayer-Fork/issues)

<br />

[![Stars](https://img.shields.io/github/stars/MonolHira/SPlayer-Fork?style=flat)](https://github.com/MonolHira/SPlayer-Fork/stargazers)
[![Version](https://img.shields.io/github/v/release/MonolHira/SPlayer-Fork)](https://github.com/MonolHira/SPlayer-Fork/releases)
[![Build Release](https://github.com/MonolHira/SPlayer-Fork/actions/workflows/build.yml/badge.svg)](https://github.com/MonolHira/SPlayer-Fork/actions/workflows/build.yml)
[![License](https://img.shields.io/github/license/MonolHira/SPlayer-Fork)](https://github.com/MonolHira/SPlayer-Fork/blob/dev/LICENSE)
[![Issues](https://img.shields.io/github/issues/MonolHira/SPlayer-Fork)](https://github.com/MonolHira/SPlayer-Fork/issues)

</div>

![main](/screenshots/SPlayer.jpg)

## 项目说明

本项目是 [SPlayer](https://github.com/imsyy/SPlayer) 的一个 **Fork（维护分支）**，基于上游 AGPL-3.0 许可协议进行维护与二次开发。

> [!IMPORTANT]
>
> ### 严肃警告
>
> - 请务必遵守 [GNU Affero General Public License (AGPL-3.0)](https://www.gnu.org/licenses/agpl-3.0.html) 许可协议
> - 在您的修改、演绎、分发或派生项目中，必须同样采用 **AGPL-3.0** 许可协议，**并在适当的位置包含本项目的许可和版权信息**
> - 若您用于售卖或其他盈利用途，**必须提供本项目的源代码及原项目链接**。另外由于本项目涉及第三方，**售卖后可能遭受法律或诉讼风险**。如若发现违反许可协议，作者保留追究法律责任的权利
> - 禁止在二开项目中修改程序原版权信息（ 您可以添加二开作者信息 ）
> - 感谢您的尊重与理解

- 本项目采用 [Vue 3](https://cn.vuejs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Naïve UI](https://www.naiveui.com/) + [Electron](https://www.electronjs.org/zh/docs/latest/) 开发
- Node.js 版本要求：>= 24，包管理器：pnpm >= 12
- 默认会构建原生模块，需准备 Rust 工具链；如需要暂时跳过，可设置环境变量 `SKIP_NATIVE_BUILD=true`
- 由于设备有限以及个人能力不足，目前仅保证 Windows x64 系统的适配，其他平台暂时不会考虑，感谢理解

## ✨ 本分支修改

- 🔄 **修复部分BUG**：上游仓库中部分代码被我个人认定为存在 BUG，该分支做了一些我个人觉得合理的修改/更新

## 🧑‍💻 开发

### 快速开始

1. 安装依赖：`pnpm install`
2. 复制 `.env.example` 为 `.env` 并按需修改
3. 启动开发：`pnpm dev`
4. 构建：
   - `pnpm build`
   - `pnpm build:win`

### 跳过原生模块构建

默认会编译 `native/*` 下的原生模块（需要 Rust）。如果你的场景不需要原生能力，可设置 `SKIP_NATIVE_BUILD=true` 后再执行 `pnpm dev` / `pnpm build`。

## 🎉 功能

- ✨ 支持扫码登录
- 📱 支持手机号登录
- 💻 支持桌面歌词
- 💻 支持切换为本地播放器，此模式将不会连接网络
- 🎨 封面主题色自适应，支持全站着色
- 🌚 Light / Dark / Auto 模式自动切换
- 📁 本地歌曲管理及分类
- 📁 本地音乐标签编辑及封面修改
- ➕ 新建歌单及歌单编辑
- ❤️ 收藏 / 取消收藏歌单或歌手
- ☁️ 云盘音乐上传、播放、纠正与删除
- 🌐 支持 Subsonic / Navidrome / Jellyfin / Emby 等流媒体服务（多服务器支持、自动连接）
- 📝 支持逐字歌词（LRC / YRC / TTML）
- 🔄 歌词滚动、歌词翻译与罗马音
- 🎶 音乐频谱显示
- ⏭️ 音乐渐入渐出
- 💬 支持评论区
- 🎵 支持 Last.fm Scrobble（播放记录上报）
- 🎧 支持 Automix 无缝混音（BPM 对齐、响度匹配、Smart Cut）
- ⚙️ 支持三引擎切换（Web Audio / FFmpeg WASM / MPV）
- 📱 移动端仅基础适配，不保证功能完整可用

## 📦️ 获取

### 二进制安装方案

#### 稳定版

可以在 [Releases](https://github.com/MonolHira/SPlayer-Fork/releases) 中获取稳定版

#### ⚙️ 本地部署

1. 本地部署需要用到 `Node.js`（>= 24），可前往 [Node.js 官网](https://nodejs.org/zh-cn/) 下载安装包，请下载最新稳定版
2. 安装 pnpm（>= 12）

   ```bash
   corepack enable
   # 或
   npm install pnpm -g
   # 或
   # Windows PowerShell
   Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
   # Linux
   curl -fsSL https://get.pnpm.io/install.sh | sh -
   ```

3. 克隆仓库并拉取至本地，此处不再赘述
4. 使用 `pnpm install` 安装项目依赖（若安装过程中遇到网络错误，请使用国内镜像源替代，此处不再赘述）
5. 复制 `.env.example` 文件并重命名为 `.env` 并修改配置（如需跳过原生模块构建，可设置 `SKIP_NATIVE_BUILD=true`）
6. 打包客户端，请依据你的系统类型来选择，打包成功后，会输出安装包或可执行文件在 `/dist` 目录中，可自行安装

   > 默认情况下，构建命令仅会构建当前系统架构的版本。如需构建特定架构（如 x64 + arm64），请在命令后追加参数，例如：`pnpm build:win -- --x64 --arm64`

   > Linux / macOS 构建命令虽已提供，但本项目仅保证 Windows x64，其他平台不保证可用

   | 命令               | 系统类型 |
   | ------------------ | -------- |
   | `pnpm build:win`   | Windows  |
   | `pnpm build:linux` | Linux    |
   | `pnpm build:mac`   | macOS    |

## 🚀 更新机制

桌面端使用 `electron-updater` 检查更新：

- **更新源**：自动读取 `package.json` 中的 `github` 字段（`https://github.com/MonolHira/SPlayer-Fork`），无需在代码中硬编码
- 发布流程：推送 `v*` 标签触发 [build.yml](https://github.com/MonolHira/SPlayer-Fork/actions/workflows/build.yml) 构建并创建 GitHub Release（含 `latest.yml` 更新清单）
- 开发模式下 `pnpm dev` 会根据 `package.json` 自动生成 `dev-app-update.yml`

## 😘 鸣谢

特此感谢为本项目提供支持与灵感的项目：

- [SPlayer](https://github.com/imsyy/SPlayer) - 上游项目
- [NeteaseCloudMusicApi](https://github.com/neteasecloudmusicapienhanced/api-enhanced)
- [YesPlayMusic](https://github.com/qier222/YesPlayMusic)
- [UnblockNeteaseMusic](https://github.com/UnblockNeteaseMusic/server)
- [applemusic-like-lyrics](https://github.com/Steve-xmh/applemusic-like-lyrics)
- [Vue-mmPlayer](https://github.com/maomao1996/Vue-mmPlayer)
- [refined-now-playing-netease](https://github.com/solstice23/refined-now-playing-netease)
- [material-color-utilities](https://github.com/material-foundation/material-color-utilities)

## 🗺️ 贡献者联盟

欢迎加入我们 🥰! 一起为 SPlayer-Fork 贡献一份力量。
感谢以下所有贡献者 💖

<a href="https://github.com/MonolHira/SPlayer-Fork/graphs/contributors" target="_blank" rel="noopener">
  <img src="https://contrib.rocks/image?repo=MonolHira/SPlayer-Fork&max=30&anon=1&v=1"
    alt="SPlayer-Fork 项目贡献者"
    width="650"
    loading="lazy"
  />
</a>

## 📢 免责声明

本项目部分功能使用了网易云音乐的第三方 API 服务，**仅供个人学习研究使用，禁止用于商业及非法用途**

同时，本项目开发者承诺 **严格遵守相关法律法规和网易云音乐 API 使用协议，不会利用本项目进行任何违法活动。** 如因使用本项目而引起的任何纠纷或责任，均由使用者自行承担。**本项目开发者不承担任何因使用本项目而导致的任何直接或间接责任，并保留追究使用者违法行为的权利**

请使用者在使用本项目时遵守相关法律法规，**不要将本项目用于任何商业及非法用途。如有违反，一切后果由使用者自负。** 同时，使用者应该自行承担因使用本项目而带来的风险和责任。本项目开发者不对本项目所提供的服务和内容做出任何保证

感谢您的理解

## 📜 开源许可

- **本项目仅供个人学习研究使用，禁止用于商业及非法用途**
- 本项目基于 [GNU Affero General Public License (AGPL-3.0)](https://www.gnu.org/licenses/agpl-3.0.html) 许可进行开源
  1. **修改和分发：** 任何对本项目的修改和分发都必须基于 AGPL-3.0 进行，源代码必须一并提供
  2. **派生作品：** 任何派生作品必须同样采用 AGPL-3.0，并在适当的地方注明原始项目的许可证
  3. **注明原作者：** 在任何修改、派生作品或其他分发中，必须在适当的位置明确注明原作者及其贡献
  4. **免责声明：** 根据 AGPL-3.0，本项目不提供任何明示或暗示的担保。请详细阅读 [GNU Affero General Public License (AGPL-3.0)](https://www.gnu.org/licenses/agpl-3.0.html) 以了解完整的免责声明内容
  5. **社区参与：** 欢迎社区的参与和贡献，我们鼓励开发者一同改进和维护本项目
  6. **许可证链接：** 请阅读 [GNU Affero General Public License (AGPL-3.0)](https://www.gnu.org/licenses/agpl-3.0.html) 了解更多详情

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=MonolHira/SPlayer-Fork&type=Date)](https://star-history.com/#MonolHira/SPlayer-Fork&Date)
