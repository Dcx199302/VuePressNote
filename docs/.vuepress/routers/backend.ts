import { RouteType, SidebarConfigType } from "./type";

export const backend_route = <RouteType>[
  {
    text: "服务端",
    link: "backend",
    children: [
      {
        text: "docker",
        link: "/backend/docker.md",
      },
    ],
  },
  {
    text: "数据库",
    children: [
      {
        text: "mysql",
        link: "/angular/introduction.md",
      },
    ],
  },
];

export const backend_sidebar: SidebarConfigType = {
  "/backend/": [
    {
      text: "Docker",
      children: ["docker.md"],
    },
  ],
};
