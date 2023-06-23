import geoIcon from "../public/assets/icons/contacts/geo-alt.svg";
import calendar from "../public/assets/icons/contacts/calendar.svg";
import clock from "../public/assets/icons/contacts/alarm.svg";
import phone from "../public/assets/icons/contacts/phone.svg";
import envelope from "../public/assets/icons/contacts/envelope.svg";
import { ContactsPageData } from "@/types/contactsSectionType";

export const contactsPageContacts: ContactsPageData[] = [
  {
    icon: geoIcon,
    alt: "Lokacijos ikona",
    span: "Adresas:",
    data: "Fabijoniškių g. 99 - 1 aukštas, LT-07101, Vilnius, Lietuva",
  },
  {
    icon: calendar,
    alt: "Kalendoriaus ikona",
    span: "Darbo laikas:",
    data: "Pirmadienis - penktadienis",
  },
  {
    icon: clock,
    alt: "Laikrodžio ikona",
    span: "Darbo laikas:",
    data: "8:00 - 17:00",
  },
  {
    icon: clock,
    alt: "Laikrodžio ikona",
    span: "Pietų pertrauka:",
    data: "13:00 - 14:00",
  },
  {
    icon: phone,
    alt: "Telefono ikona",
    span: "Mob:",
    data: "+370 684 44099",
  },
  {
    icon: phone,
    alt: "Telefono ikona",
    span: "Mob:",
    data: "+370 614 76746",
  },
  {
    icon: envelope,
    alt: "Laiško ikona",
    span: "El. paštas:",
    data: "info@smartdoor.lt",
  },
  {
    icon: envelope,
    alt: "Laiško ikona",
    span: "El. paštas:",
    data: "vadyba@smartdoor.lt",
  },
];
