import { SideBarType } from "@/types/sideBar";

export enum SIDEBAR {
  PREKES = "prekes",
  PASLAUGOS = "paslaugos",
  APIE_MUS = "apieMus",
  KONTAKTAI = "kontaktai",
  KATALOGAI = "katalogai",
}

export const sidebarData: SideBarType[] = [
  {
    title: "Prekės",
    key: SIDEBAR.PREKES,
    path: "/kategorijos",
    subNav: [
      {
        title: "Telefonspynės",
        path: "/kategorijos/telefonspynes",
        subNavNested: [
          {
            title: "Monitoriai",
            path: "/kategorijos/telefonspynes/monitoriai",
            image: "../public/assets/images/monitorius.webp",
          },
          {
            title: "Audio vieno abonento",
            path: "/kategorijos/telefonspynes/audio-vieno-abonento",
            image: "../public/assets/images/audioVienoAbonento.png",
          },
          {
            title: "Audio daugiaabonentės",
            path: "/kategorijos/telefonspynes/audio-daugiaabonentes",
            image: "../public/assets/images/audioDaugiaabonentes.png",
          },
          {
            title: "Video vieno abonento",
            path: "/kategorijos/telefonspynes/video-vieno-abonento",
            image: "../public/assets/images/videoVienoAbonento.png",
          },
          {
            title: "Video daugiaabonentės",
            path: "/kategorijos/telefonspynes/video-daugiaabonentės",
            image: "../public/assets/images/videoDaugiaabonentes.jpeg",
          },
          {
            title: "Daugiabučiams",
            path: "/kategorijos/telefonspynes/daugiabuciams",
            image: "../public/assets/images/daugiabuciams.png",
          },
          {
            title: "Įeigos kontrolė",
            path: "/kategorijos/telefonspynes/ieigos-kontrole",
            image: "../public/assets/images/ieigosKontrole.jpeg",
          },
          {
            title: "Papildoma įranga",
            path: "/kategorijos/telefonspynes/papildoma-iranga",
            image: "../public/assets/images/papildomaIranga.png",
          },
          {
            title: "Rageliai",
            path: "/kategorijos/telefonspynes/rageliai",
            image: "../public/assets/images/rageliai.png",
          },
        ],
      },
      {
        title: "Vartų automatika",
        path: "kategorijos/vartu-automatika",
      },
      { title: "Markizės", path: "/kategorijos/markizes" },
      { title: "Priedai", path: "/kategorijos/priedai" },
    ],
  },
  {
    title: "Paslaugos",
    key: SIDEBAR.PASLAUGOS,
    path: "/paslaugos",
    subNav: [
      {
        title: "Telefonspynių remontas",
        path: "/paslaugos/telefonspyniu-remontas",
      },
      { title: "Spynų remontas", path: "/paslaugos/spynu-remontas" },
      { title: "Durų remontas", path: "/paslaugos/duru-remontas" },
      {
        title: "Mechaninių raktų, el. raktų ir vartų pultelių kopijavimas",
        path: "/paslaugos/kopijavimas",
      },
      { title: "Suvirintojo paslaugos", path: "/paslaugos/suvirinimas" },
    ],
  },
  { title: "Apie mus", key: SIDEBAR.APIE_MUS, path: "/apie-mus" },
  { title: "Kontaktai", key: SIDEBAR.KONTAKTAI, path: "/kontaktai" },
  { title: "Katalogai", key: SIDEBAR.KATALOGAI, path: "/katalogai" },
];
