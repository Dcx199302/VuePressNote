import { RouteType, SidebarConfigType } from "./type";

export const project_route = <RouteType>[
  {
    text: "我的服务器",
    link: "腾讯云服务器",
    children: [{ text: "技术文档笔记", link: "http://114.132.47.217:80" }],
  },
  {
    text: "腾讯云服务器",
    children: [{ text: "技术文档笔记", link: "http://114.132.47.217:80" }],
  },
];

// export const project_sidebar: SidebarConfigType = {
//   "/docsify/": [
//     {
//       text: "項目實戰",
//       children: ["allform.md", "angular.md"],
//     },
//   ],
// };
