# 序章

## 🚧 文档施工中

> ### 🎐 千里之行始于足下
>
> 本指南包含从 openEuler 安装、显卡驱动、日常软件配置，到多媒体制作、编程等你可能需要的全部内容。

## 📕 相关信息

## 📑 章节信息

## 💻 本地运行

:::: code-group
::: code-group-item Pacman

```bash{4-5}
sudo pacman -S nodejs yarn # 安装 nodejs 和 yarn
git clone https://github.com/NakanoMikuOrg/openeuler-guide
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item HomeBrew

```zsh{4-5}
brew install yarn # 安装 yarn
git clone https://github.com/NakanoMikuOrg/openeuler-guide
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item Scoop

```bat{5-6}
scoop install nodejs # 安装 nodejs
scoop install yarn # 安装 yarn
git clone https://github.com/NakanoMikuOrg/openeuler-guide
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::::

其它系统请参阅 [Yarn 中文文档](https://yarn.bootcss.com/docs/install/) 安装 `Yarn`。

## 🔔 隐私提醒

本站使用百度统计和 Google Analytics 分析流量。访问即同意它们的隐私政策。

## 🌱 参与贡献

更多信息请参阅 [贡献指南](/postscript/contribute.md)。

## 🎋 版权说明

[![by-sa](./static/svg/by-sa.svg)](https://creativecommons.org/licenses/by-sa/4.0/deed.zh)

网站源代码采用 MIT 许可证；未经特殊说明，本作品采用 [知识共享署名-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 进行许可。

更多信息请参阅 [版权说明](/postscript/copyright.md)。
