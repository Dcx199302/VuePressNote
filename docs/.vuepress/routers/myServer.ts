import { RouteType, SidebarConfigType } from "./type";

export const server_route = <RouteType>[
  {
    text: "我的服务器",
    link: "腾讯云服务器",
    children: [{ text: "docsify", link: "http://114.132.47.217:8080/#/" }],
  },
  {
    text: "腾讯云服务器",
    children: [{ text: "docsify", link: "http://114.132.47.217:8080/#/" }],
  },
];

export const server_sidebar: SidebarConfigType = {
  "/docsify/": [
    {
      text: "項目實戰",
      children: ["allform.md", "angular.md"],
    },
  ],
};
