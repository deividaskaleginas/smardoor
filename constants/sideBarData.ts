import { SideBarType } from "@/types/sideBar";

//Telefonspynes
import monitorius from "../public/assets/images/monitorius.webp";
import audioVienoAbonento from "../public/assets/images/audioVienoAbonento.png";
import audioDaugiaabonentinis from "../public/assets/images/audioDaugiaabonentes.png";
import videoVienoAbonento from "../public/assets/images/videoVienoAbonento.png";
import videoDaugiaabonentinis from "../public/assets/images/videoDaugiaabonentes.jpeg";
import daugiabuciams from "../public/assets/images/daugiabuciams.png";
import ieigosKontrole from "../public/assets/images/ieigosKontrole.jpeg";
import papildomaIranga from "../public/assets/images/papildomaIranga.png";
import rageliai from "../public/assets/images/rageliai.png";

//Vartu automatika
import kelioStukpeliai from "../public/assets/images/kelioStulpelis.png";
import garazoVartuAutomatika from "../public/assets/images/garazoVartuAutomatika.png";
import kelioBarjerai from "../public/assets/images/kelioBarjerai.jpeg";
import stumdovuVartuAutomatika from "../public/assets/images/stumdomuVartuAutomatika.png";
import atveriamuVartuAutomatika from "../public/assets/images/atveriamuVartuAutomatika.jpeg";
import priedai from "../public/assets/images/priedai.png";

//Priedai
import mygtukai from "../public/assets/images/mygtukas.png";
import maitinimoSaltiniai from "../public/assets/images/maitinimoSaltinis.png";
import pritraukikliai from "../public/assets/images/duruPritraukejas.webp";
import instaliacinesMedziagos from "../public/assets/images/instaliacinesMedziagos.png";
import raktaiPulteliai from "../public/assets/images/pultelis.png";
import reles from "../public/assets/images/reles.jpeg";
import elektromagnetai from "../public/assets/images/elektromagnetas.png";
import elektroSklendes from "../public/assets/images/elektrosklende.jpeg";

//Spynos
import kodinesDezutes from "../public/assets/images/kodineDezute.jpeg";
import ismaniosiosSpynos from "../public/assets/images/ismaniojiSpyna.png";
import elektrinesSpynos from "../public/assets/images/elektrineSpyna.jpeg";
import mechaninesSpynos from "../public/assets/images/mechanineSpyna.png";

//Jutikliai ir apsaugos iranga
import daugiafunkciniaiJutikliai from "../public/assets/images/daugiafunkcinisJutiklis.jpeg";
import angliesMonoksidoJutikliai from "../public/assets/images/angliemonoksidoJutiklis.jpeg";
import dujuJutikliai from "../public/assets/images/dujuJutikliai.jpeg";
import dumuJutikliai from "../public/assets/images/dumuJutiklis.jpeg";
import cigareciuDumuJutikliai from "../public/assets/images/cigareciuJutikliai.jpeg";
import signalizacijos from "../public/assets/images/signalizacija.jpeg";

//Vaizdo stebejimo sistemos
import masinosNumeriuNuskaitymas from "../public/assets/images/masinosNumeriuNuskaitymas.png";
import nvrIrenginiai from "../public/assets/images/nvrIrenginiai.jpeg";

export enum SIDEBAR {
  PREKES = "prekes",
  PASLAUGOS = "paslaugos",
  APIE_MUS = "apieMus",
  KONTAKTAI = "kontaktai",
  KATALOGAI = "katalogai",
}

export enum SUBNAV {
  TELEFONSPYNES = "telefonspynes",
  VARTU_AUTOMATIKA = "vartai",
  MARKIZES = "markizes",
  PRIEDAI = "priedai",
  SPYNOS = "spynos",
  JUTIKLIAI_APSAUGOS_IRANGA = "jutikliaiApsaugosIranga",
  VAIZDO_STEBEJIMO_SISTEMOS = "vaizdoStebejimoSistemos",
  TELEFONSPYNIU_REMONTAS = "telefonspyniuRemontas",
  SPYNU_REMONTAS = "spynuRemontas",
  DURU_REMONTAS = "duruRemontas",
  KOPIJAVIMAS = "kopijavimas",
  SUVIRINTOJO_PASLAUGOS = "suvirintojoPaslaugos",
}

export const sidebarData: SideBarType[] = [
  {
    title: "Prekės",
    key: SIDEBAR.PREKES,
    path: "/kategorijos",
    subNav: [
      {
        title: "Telefonspynės",
        key: SUBNAV.TELEFONSPYNES,
        path: "/telefonspynes",
        subNavNested: [
          {
            title: "Monitoriai",
            path: "/telefonspynes/monitoriai",
            image: monitorius,
          },
          {
            title: "Audio vieno abonento",
            path: "/telefonspynes/audio-vieno-abonento",
            image: audioVienoAbonento,
          },
          {
            title: "Audio daugiaabonentės",
            path: "/telefonspynes/audio-daugiaabonentes",
            image: audioDaugiaabonentinis,
          },
          {
            title: "Video vieno abonento",
            path: "/telefonspynes/video-vieno-abonento",
            image: videoVienoAbonento,
          },
          {
            title: "Video daugiaabonentės",
            path: "/telefonspynes/video-daugiaabonentės",
            image: videoDaugiaabonentinis,
          },
          {
            title: "Daugiabučiams",
            path: "/telefonspynes/daugiabuciams",
            image: daugiabuciams,
          },
          {
            title: "Įeigos kontrolė",
            path: "/telefonspynes/ieigos-kontrole",
            image: ieigosKontrole,
          },
          {
            title: "Papildoma įranga",
            path: "/telefonspynes/papildoma-iranga",
            image: papildomaIranga,
          },
          {
            title: "Rageliai",
            path: "/telefonspynes/rageliai",
            image: rageliai,
          },
        ],
      },
      {
        title: "Vartų automatika",
        key: SUBNAV.VARTU_AUTOMATIKA,
        path: "/vartu-automatika",
        subNavNested: [
          {
            title: "Kelio stulpeliai",
            path: "/vartu-automatika/kelio-stulpeliai",
            image: kelioStukpeliai,
          },
          {
            title: "Garažo vartų automatika",
            path: "/vartu-automatika/garažo-vartų-automatika",
            image: garazoVartuAutomatika,
          },
          {
            title: "Kelio barjerai",
            path: "/vartu-automatika/kelio-barjerai",
            image: kelioBarjerai,
          },
          {
            title: "Stumdomų vartų automatika",
            path: "/vartu-automatika/stumdomu-vartu-automatika",
            image: stumdovuVartuAutomatika,
          },
          {
            title: "Atveriamų vartų automatika",
            path: "/vartu-automatika/atveriamu-vartu-automatika",
            image: atveriamuVartuAutomatika,
          },
          {
            title: "Priedai",
            path: "/vartu-automatika/priedai",
            image: priedai,
          },
        ],
      },
      {
        title: "Markizės",
        key: SUBNAV.MARKIZES,
        path: "/markizes",
      },
      {
        title: "Priedai",
        key: SUBNAV.PRIEDAI,
        path: "/priedai",
        subNavNested: [
          {
            title: "Mygtukai",
            path: "/priedai/mygtukai",
            image: mygtukai,
          },
          {
            title: "Maitinimo šaltiniai",
            path: "/priedai/maitinimo-saltiniai",
            image: maitinimoSaltiniai,
          },
          {
            title: "Pritraukikliai",
            path: "/priedai/pritraukikliai",
            image: pritraukikliai,
          },
          {
            title: "Instaliacinės medžiagos",
            path: "/priedai/instaliacines-medziagos",
            image: instaliacinesMedziagos,
          },
          {
            title: "Raktai, pulteliai",
            path: "/priedai/raktai-pulteliai",
            image: raktaiPulteliai,
          },
          {
            title: "Rėlės",
            path: "/priedai/reles",
            image: reles,
          },
          {
            title: "Elektromagnetai",
            path: "/priedai/elektromagnetai",
            image: elektromagnetai,
          },
          {
            title: "Elektrosklendės",
            path: "/priedai/elektroskelndes",
            image: elektroSklendes,
          },
        ],
      },
      {
        title: "Spynos",
        key: SUBNAV.SPYNOS,
        path: "/spynos",
        subNavNested: [
          {
            title: "Kodinės dėžutės",
            path: "/spynos/kodines-dezutes",
            image: kodinesDezutes,
          },
          {
            title: "Išmaniosios spynos",
            path: "/spynos/ismaniosios-spynos",
            image: ismaniosiosSpynos,
          },
          {
            title: "Elektrinės spynos",
            path: "/spynos/elektrines-spynos",
            image: elektrinesSpynos,
          },
          {
            title: "Mechaninės spynos",
            path: "/spynos/mechanines-spynos",
            image: mechaninesSpynos,
          },
        ],
      },
      {
        title: "Jutikliai ir Apsaugos įranga",
        key: SUBNAV.JUTIKLIAI_APSAUGOS_IRANGA,
        path: "/jutikliai-apsaugos-iranga",
        subNavNested: [
          {
            title: "Daugiafunkciniai jutikliai",
            path: "/jutikliai-apsaugos-iranga/daugiafunkciniai-jutikliai",
            image: daugiafunkciniaiJutikliai,
          },
          {
            title: "Anglies monoksido jutikliai",
            path: "/jutikliai-apsaugos-iranga/anglies-monoksido-jutikliai",
            image: angliesMonoksidoJutikliai,
          },
          {
            title: "Dujų jutikliai",
            path: "/jutikliai-apsaugos-iranga/duju-jutikliai",
            image: dujuJutikliai,
          },
          {
            title: "Dūmų jutikliai",
            path: "/jutikliai-apsaugos-iranga/dumu-jutikliai",
            image: dumuJutikliai,
          },
          {
            title: "Cigarečių dūmų jutikliai",
            path: "/jutikliai-apsaugos-iranga/cigareciu-dumu-jutikliai",
            image: cigareciuDumuJutikliai,
          },
          {
            title: "Signalizacijos",
            path: "/jutikliai-apsaugos-iranga/signalizacijos",
            image: signalizacijos,
          },
        ],
      },
      {
        title: "Vaizdo stebėjimo sistemos",
        key: SUBNAV.VAIZDO_STEBEJIMO_SISTEMOS,
        path: "/vaizdo-stebejimo-sistemos",
        subNavNested: [
          {
            title: "Mašinos numerių nuskaitymas",
            path: "/vaizdo-stebejimo-sistemos/masinos-numeriu-nuskaitymas",
            image: masinosNumeriuNuskaitymas,
          },
          {
            title: "NVR įrenginiai",
            path: "/vaizdo-stebejimo-sistemos/nvr-irenginiai",
            image: nvrIrenginiai,
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
        key: SUBNAV.TELEFONSPYNIU_REMONTAS,
        path: "/paslaugos/telefonspyniu-remontas",
      },
      {
        title: "Spynų remontas",
        key: SUBNAV.SPYNU_REMONTAS,
        path: "/paslaugos/spynu-remontas",
      },
      {
        title: "Durų remontas",
        key: SUBNAV.DURU_REMONTAS,
        path: "/paslaugos/duru-remontas",
      },
      {
        title: "Mechaninių raktų, el. raktų ir vartų pultelių kopijavimas",
        key: SUBNAV.KOPIJAVIMAS,
        path: "/paslaugos/kopijavimas",
      },
      {
        title: "Suvirintojo paslaugos",
        key: SUBNAV.SUVIRINTOJO_PASLAUGOS,
        path: "/paslaugos/suvirinimas",
      },
    ],
  },
  { title: "Apie mus", key: SIDEBAR.APIE_MUS, path: "/apie-mus" },
  { title: "Kontaktai", key: SIDEBAR.KONTAKTAI, path: "/kontaktai" },
  { title: "Katalogai", key: SIDEBAR.KATALOGAI, path: "/katalogai" },
];
