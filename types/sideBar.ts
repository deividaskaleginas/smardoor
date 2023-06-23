import { SIDEBAR, SUBNAV } from "@/constants/sideBarData";
import { StaticImageData } from "next/image";

export type SubNavNestedType = {
  title: string;
  path: string;
  image: StaticImageData;
};

export type SubNavType = {
  title: string;
  path: string;
  key: SUBNAV;
  image?: StaticImageData;
  alt?: string;
  subNavNested?: SubNavNestedType[];
};

export type SideBarType = {
  title: string;
  key: SIDEBAR;
  path: string;
  subNav?: SubNavType[];
};
