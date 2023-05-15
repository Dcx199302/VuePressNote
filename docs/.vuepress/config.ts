import { defaultTheme, defineUserConfig } from "vuepress";
import { angular_route, angular_sidebar } from "../.vuepress/routers/angular";
import { backend_route, backend_sidebar } from "./routers/backend";

export default defineUserConfig({
  base: "/VuePressNote/",
  lang: "zh-CN",
  title: "xuchengdong",
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
        children: angular_route,
      },
      {
        text: "BackEnd",
        children: backend_route,
      },
      // 控制元素何时被激活
      {
        text: "nestJS",
        children: [
          {
            text: "环境配置",
            link: "nest/config",
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
        text: "rxjs",
        children: [
          {
            text: "rxjs",
            link: "/rxjs/rxjs.md",
          },
          {
            text: "rxjs_operator",
            link: "/rxjs/rxjs_operator.md",
          },
          {
            text: "rxjs",
            link: "/rxjs/rxjs_sum.md",
          },
        ],
      },
    ],
    sidebar: {
      ...angular_sidebar,
      ...backend_sidebar,
    },
  }),
});
