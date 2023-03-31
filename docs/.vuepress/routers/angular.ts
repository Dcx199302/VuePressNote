import { RouteType, SidebarConfigType } from "./type";

export const angular_route = <RouteType>[
  {
    text: "angular入門",
    link: "angular",
    children: [
      { text: "基础常用", link: "/angular/basics/basics.md" },
      { text: "创建项目", link: "/angular/introduction.md" },
      { text: "常用", link: "/angular/basics.md" },
      { text: "理解angular", link: "/angular/comprehend.md" },
      { text: "CLI工具", link: "/angular/cli.md" },
    ],
  },
  {
    text: "angular高級",
    children: [
      { text: "表单Form", link: "/angular/allform.md" },
      { text: "理解angular", link: "/angular/comprehend.md" },
    ],
  },
];

export const angular_sidebar: SidebarConfigType = {
  "/angular/": [
    {
      text: "項目實戰",
      children: [
        "allform.md",
        "angular.md",
        "Angular_init.md",
        "cli.md",
        "comprehend.md",
        "demo.md",
        "form.md",
        "hook.md",
        "interaction.md",
        "introduction.md",
        "merge.md",
        "Preintermediate.md",
        "README.md",
        "router.md",
      ],
    },
  ],
  "/angular/basics/": ["basics.md"],
  "/nest/": [{ text: "項目實戰", children: ["config.md"] }],
  "/rxjs/": [{ text: "rxjs1", children: ["rxjs.md"] }],
};
