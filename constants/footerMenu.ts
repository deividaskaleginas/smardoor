import { FooterContactsType, FooterLinksType } from "@/types/footer";

import geoIcon from "../public/assets/icons/geo-alt.svg";
import calendar from "../public/assets/icons/calendar.svg";
import clock from "../public/assets/icons/alarm.svg";
import phone from "../public/assets/icons/phone-fill.svg";
import email from "../public/assets/icons/envelope-plus.svg";

export const footerMenuLinks: FooterLinksType[] = [
  {
    title: "Visi produktai",
    href: "/kategorijos",
  },
  {
    title: "Prekių gražinimas",
    href: "/prekiu-grazinimas",
  },
  {
    title: "Kontaktai",
    href: "/kontaktai",
  },
  {
    title: "Apie mus",
    href: "/apie-mus",
  },
  {
    title: "Katalogai",
    href: "/katalogai",
  },
  {
    title: "Paslaugos",
    href: "/paslaugos",
  },
];
export const footerContactsData: FooterContactsType[] = [
  {
    icon: geoIcon,
    alt: "Lokacijos ikona",
    data: "Fabijoniškių g. 99-1, Vilnius",
  },
  {
    icon: calendar,
    alt: "Kalendoriaus ikona",
    data: "Pirmadienis - Penktadienis",
  },
  {
    icon: clock,
    alt: "Likrodžio ikona",
    data: "8:00 - 17:00",
  },
  {
    icon: phone,
    alt: "Telefono ikona",
    data: "+370 6844 4099",
  },
  {
    icon: phone,
    alt: "Telefono ikona",
    data: "+370 6147 6746",
  },
  {
    icon: email,
    alt: "Laiško ikona",
    data: "info@cargolita.lt",
  },
];
