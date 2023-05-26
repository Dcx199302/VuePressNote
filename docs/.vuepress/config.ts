import { defaultTheme, defineUserConfig } from "vuepress";
import { angular_sidebar } from "../.vuepress/routers/angular";
import { backend_route, backend_sidebar } from "./routers/backend";
import { server_route } from "./routers/myServer";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  // base: "/VuePressNote/",
  base: "/",
  lang: "zh-CN",
  title: "徐成东个人技术文档",
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
  plugins: [
    registerComponentsPlugin({
      components: {
        RecordFooter: path.resolve(__dirname, "./components/myFooter.vue"),
      },
    }),
  ],
  theme: defaultTheme({
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: "前端",
        children: [
          {
            text: "语言",
            children: [
              { text: "javascript", link: "/front-end/angular/README.md" },
              { text: "html", link: "" },
              { text: "css", link: "" },
            ],
          },
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
      {
        text: "后端",
        children: [
          {
            text: "语言",
            children: [
              { text: "Node", link: "/back-end/node/README.md" },
              { text: "Readme", link: "/back-end/node/README.md" },
            ],
          },
        ],
      },
      { text: "我的项目", children: server_route },
      {
        text: "收藏夹",
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
