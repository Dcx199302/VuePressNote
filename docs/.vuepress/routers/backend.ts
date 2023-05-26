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
  "/back-end/node/": [
    {
      text: "Node",
      children: ["README.md", "hello.md"],
    },
  ],
  "/back-end/docker/": [
    {
      text: "Docker",
      children: ["docker.md"],
    },
  ],
};
