import { NavGroup, NavLink, NavbarGroup, SidebarConfig } from "vuepress";

type RouteType = NavGroup<string | NavLink | NavbarGroup>[];

export const angular_route = <RouteType>[
  {
    text: "angular入門",
    link: "angular",
    children: [
      {
        text: "创建项目",
        link: "/angular/introduction.md",
      },
      {
        text: "常用",
        link: "/angular/basics.md",
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
    text: "angular高級",
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
];

export const angular_sidebar: SidebarConfig = [];
