import { defaultTheme, defineUserConfig } from "vuepress";
import { angular_sidebar } from "../.vuepress/routers/angular";
import { backend_route, backend_sidebar } from "./routers/backend";
import { server_route } from "./routers/myServer";

export default defineUserConfig({
  // base: "/VuePressNote/",
  base: "/",
  lang: "zh-CN",
  title: "徐成东技术文档",
  // description: "跳转多个服务",
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
        text: "前端",
        children: [
          {
            text: "框架",
            // link: "baidu.com",
            children: [
              { text: "Angular", link: "/front-end/angular/README.md" },
              { text: "Vue", link: "/front-end/vue/README.md" },
              { text: "React", link: "/front-end/react/README.md" },
            ],
          },
        ],
      },
      { text: "后端", children: backend_route },
      { text: "Linux", children: server_route },
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
