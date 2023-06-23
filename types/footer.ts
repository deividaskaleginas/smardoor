import { StaticImageData } from "next/image";

export type FooterLinksType = {
  title: string;
  href: string;
};

export type FooterContactsType = {
  icon: StaticImageData;
  alt: string;
  data: string;
};
