import { SIDEBAR, SUBNAV } from "@/constants/sideBarData";
import { StaticImageData } from "next/image";

export interface NavigationType {
  title: string;
  path: string;
  image?: StaticImageData;
  alt?: string;
}

export interface SubNavType extends NavigationType {
  key: SUBNAV;
  subNavNested?: NavigationType[];
}

export interface SideBarType {
  title: string;
  key: SIDEBAR;
  path: string;
  subNav?: SubNavType[];
}
