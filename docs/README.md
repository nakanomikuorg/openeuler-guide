---
home: true
heroImage: "/static/svg/openEuler.svg"
heroText: openEuler 简明指南
tagline: 📖 让 openEuler 成为你的常用系统吧！ ❤️️
actions:
  - text: 🍕 开始阅读
    link: "/prologue.html"
    type: primary
  - text: 🍺 Github
    link: "https://github.com/NakanoMikuOrg/openeuler-guide"
    type: secondary
navbar: true
# features:
#   - title: 1. 📖 格式优化
#     details: 由 VuePress 驱动，相对原教程格式进行优化
footer: '<p style="font-size: 8px">
  Code licensed under MIT, documentation under
  <a
    href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh"
    class="grabient-text"
    target="_blank"
    rel="noopener noreferrer"
    >CC BY-SA 4.0</a
  >. Made with ❤️️ love by
  <a
    href="https://github.com/NakanoMikuOrg/openeuler-guide/graphs/contributors"
    class="grabient-text"
    target="_blank"
    rel="noopener noreferrer"
    >ALL Contributors</a
  >.
</p>'
footerHtml: true
---

## 💻 本地运行

:::: code-group
::: code-group-item Pacman

```bash{4-5}
sudo pacman -S nodejs yarn # 安装 nodejs 和 yarn
git clone https://github.com/NakanoMikuOrg/openeuler-guide.git
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item HomeBrew

```zsh{4-5}
brew install yarn # 安装 yarn
git clone https://github.com/NakanoMikuOrg/openeuler-guide.git
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item Scoop

```bat{5-6}
scoop install nodejs # 安装 nodejs
scoop install yarn # 安装 yarn
git clone https://github.com/NakanoMikuOrg/openeuler-guide.git
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
