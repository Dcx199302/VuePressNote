import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "VuePress !",
  description: "这是我的第一个 VuePress 站点",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user0scalable=no",
      },
    ],
  ],
  theme: defaultTheme({
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: "angular",
        children: [
          {
            text: "angular入門",
            children: [
              {
                text: "创建项目",
                link: "/angular/introduction.md",
              },
              {
                text: "理解angular",
                link: "/angular/comprehend.md",
              },
              {
                text: "CLI工具",
                link: "/angular/cli.md",
              },
            ],
          },
          {
            text: "angular入門",
            children: [
              {
                text: "创建项目",
                link: "/angular/introduction.md",
              },
              {
                text: "理解angular",
                link: "/angular/comprehend.md",
              },
            ],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: "nestJS",
        children: [
          {
            text: "Always active",
            link: "/",
            // 该元素将一直处于激活状态
            activeMatch: "/",
          },
          {
            text: "Active on /foo/",
            link: "/not-foo/",
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: "^/foo/",
          },
        ],
      },
      {
        text: "Vue",
        children: [
          {
            text: "Always active",
            link: "/",
            activeMatch: "/",
          },
          {
            text: "Active on /foo/",
            link: "/not-foo/",
            activeMatch: "^/foo/",
          },
        ],
      },
      {
        text: "React",
        children: [],
      },
    ],
    sidebar: {
      "/angular/": [
        {
          text: "項目實戰",
          children: ["comprehend.md", "introduction.md"],
        },
        {
          text: "項目實戰",
          children: ["comprehend.md", "introduction.md"],
        },
      ],
    },
  }),
});
