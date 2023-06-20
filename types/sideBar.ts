import { SIDEBAR } from "@/constants/sideBarData";

export type SubNavNestedType = {
  title: string;
  path: string;
  image: string;
};

export type SubNavType = {
  title: string;
  path: string;
  subNavNested?: SubNavNestedType[];
};

export type SideBarType = {
  title: string;
  key: SIDEBAR;
  path: string;
  subNav?: SubNavType[];
};
