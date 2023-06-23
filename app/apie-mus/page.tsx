import Image from "next/image";
import "./apieMus.scss";

import aboutUsPhoto from "../../public/assets/images/aboutUs.jpeg";

export default function Page() {
  return (
    <main className="aboutUsPage">
      <div className="aboutUsPage__container">
        <h1 className="aboutUsPage__container__title">Apie mus</h1>
        <div className="aboutUsPage__container__data">
          <div className="aboutUsPage__container__data__imageWrapper">
            <Image
              src={aboutUsPhoto}
              alt="Darbo kambrys, kuriame yra stalas ir kėdė"
              className="aboutUsPage__container__data__imageWrapper__image"
            />
          </div>
          <p>
            UAB “Cargolita” pagrindinės veiklos sritys – telefonspynių ir vartų
            automatikos montavimas, prekyba, remontas, tobulinimas. Šarvuotų
            durų gamyba įvairios paskirties patalpoms, jų remontas,
            priešįsilaužiminių sistemų projektavimas ir montavimas. Mechaninių
            ir elektromechaninių spynų remontas, montavimas. Daugiabučio namo
            laiptinės remonto darbai: durys, telefonspynės, apdailos darbai,
            šviestuvai. Dirbame su kokybiška Lietuvos vartotojo poreikius
            atitinkančia įranga, atsparia temperatūros poveikiams bei vandalizmo
            atvejams. Montuotojai darbus atlieka kokybiškai per trumpiausius
            terminus, prisitaikant prie pastato ypatumų, bei užsakovo poreikių
            ir pageidavimų. Mūsų specialistai patars pasirenkant optimaliausią
            įeigos kontrolės variantą, spynas, bei duris. Pasibaigus garantiniam
            laikotarpiui pasirašome aptarnavimo sutartis. Bendradarbiaujame su
            daugiabučius administruojančiomis įmonėmis, daugiabučių namų
            savininkų bendrijomis.
          </p>
        </div>
      </div>
    </main>
  );
}
