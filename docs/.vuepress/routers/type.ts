import { NavGroup, NavLink, NavbarGroup, SidebarConfig } from "vuepress";

// 路由类型
export type RouteType = NavGroup<string | NavLink | NavbarGroup>[];

// 侧边栏类型
export type SidebarConfigType = SidebarConfig;
