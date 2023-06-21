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
        subNavNested: [
          {
            title: "Kelio stulpeliai",
            path: "kategorijos/vartu-automatika/kelio-stulpeliai",
            image: "../public/assets/images/kelioStulpelis.png",
          },
          {
            title: "Garažo vartų automatika",
            path: "kategorijos/vartu-automatika/garažo-vartų-automatika",
            image: "../public/assets/images/garazoVartuAutomatika.png",
          },
          {
            title: "Kelio barjerai",
            path: "kategorijos/vartu-automatika/kelio-barjerai",
            image: "../public/assets/images/kelioBarjerai.jpeg",
          },
          {
            title: "Stumdomų vartų automatika",
            path: "kategorijos/vartu-automatika/stumdomu-vartu-automatika",
            image: "../public/assets/images/stumdomuVartuAutomatika.png",
          },
          {
            title: "Atveriamų vartų automatika",
            path: "kategorijos/vartu-automatika/atveriamu-vartu-automatika",
            image: "../public/assets/images/atveriamuVartuAutomatika.jpeg",
          },
          {
            title: "Priedai",
            path: "kategorijos/vartu-automatika/priedai",
            image: "../public/assets/images/priedai.png",
          },
        ],
      },
      { title: "Markizės", path: "/kategorijos/markizes" },
      {
        title: "Priedai",
        path: "/kategorijos/priedai",
        subNavNested: [
          {
            title: "Mygtukai",
            path: "/kategorijos/priedai/mygtukai",
            image: "../public/assets/images/mygtukas.png",
          },
          {
            title: "Maitinimo šaltiniai",
            path: "/kategorijos/priedai/maitinimo-saltiniai",
            image: "../public/assets/images/maitinimoSaltinis.png",
          },
          {
            title: "Pritraukikliai",
            path: "/kategorijos/priedai/pritraukikliai",
            image: "../public/assets/images/duruPritraukejas.webp",
          },
          {
            title: "Instaliacinės medžiagos",
            path: "/kategorijos/priedai/instaliacines-medziagos",
            image: "../public/assets/images/instaliacinesMedziagos.png",
          },
          {
            title: "Raktai, pulteliai",
            path: "/kategorijos/priedai/raktai-pulteliai",
            image: "../public/assets/images/pultelis.png",
          },
          {
            title: "Rėlės",
            path: "/kategorijos/priedai/reles",
            image: "../public/assets/images/reles.jpeg",
          },
          {
            title: "Elektromagnetai",
            path: "/kategorijos/priedai/elektromagnetai",
            image: "../public/assets/images/elektromagnetas.png",
          },
          {
            title: "Elektrosklendės",
            path: "/kategorijos/priedai/elektroskelndes",
            image: "../public/assets/images/elektrosklende.jpeg",
          },
        ],
      },
      {
        title: "Spynos",
        path: "/kategorijos/spynos",
        subNavNested: [
          {
            title: "Kodinės dėžutės",
            path: "/kategorijos/kodines-dezutes",
            image: "../public/assets/images/kodineDezute.jpeg",
          },
        ],
      },
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
