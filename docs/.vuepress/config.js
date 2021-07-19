module.exports = {
  base: "/",
  head: [
    [
      "meta",
      {
        name: "title",
        content: "openEuler 简明指南 —— openEuler 安装使用教程",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "128x128",
        href: "/favicon-128x128.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        href: "openEuler 安装,openEuler 教程,openEuler 指南,openEuler,Linux",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0",
      },
    ],
    ["meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" }],
    [
      "link",
      { rel: "stylesheet", type: "text/css", href: "/static/css/font.css" },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "openEuler 简明指南 — openEuler 安装使用教程",
      description:
        "本指南包含从 openEuler 安装、服务配置、社区贡献等你可能需要的全部内容。让 openEuler 成为你的常用系统吧！",
    },
  },
  themeConfig: {
    logo: "/static/svg/openeuler-logo.svg",
    displayAllHeaders: true,
    sidebar: [
      {
        text: "🎐 千里之行",
        children: ["/prologue.md"],
      },
      {
        text: "🌱 新手上路",
        children: [
          {
            text: "💾 基础安装",
            children: [
              "/rookie/pre-install.md",
              "/rookie/pre-virt.md",
              "/rookie/basic-install.md",
            ],
          },
          {
            text: "🔩 进阶安装",
            children: ["/rookie/desktop-env-and-app.md"],
          },
        ],
      },
      {
        text: "🔬 专有领域",
        children: [
          {
            text: "🖥️ 服务端",
            children: ["/exclusive/tomcat.md"],
          },
          {
            text: "🗄️ 数据库",
            children: ["/exclusive/oracle.md"],
          },
        ],
      },
    ],
    sidebarDepth: 1,
    smoothScroll: true,
    activeHeaderLinks: false,
    lastUpdatedText: "📑 最后更新",
    contributorsText: "🎨 参与贡献",
    repo: "https://github.com/NakanoMikuOrg/openeuler-guide",
    docsDir: "docs",
    docsBranch: "main",
    repoLabel: "🍺 Github",
    editLinks: true,
    editLinkText: "📝 编辑本文",
    notFound: ["👻 页面走丢了", "👻 这个页面不存在呢"],
    backToHome: "🏠 把我带回家",
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索",
          },
        },
      },
    ],
    // [
    //   "@vuepress/plugin-google-analytics",
    //   {
    //     id: "G-MQRPJQK9SC",
    //   },
    // ],
    "@vuepress/plugin-medium-zoom",
  ],
};
