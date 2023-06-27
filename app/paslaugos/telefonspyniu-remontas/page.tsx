import { Contacts } from "@/components/contacts/Contacts";
import {
  TelefonspynesModelsData,
  TelefonspyniuRemontasData,
} from "@/constants/servisesSection";
import Image from "next/image";
import styles from "./TelefonspyniuRemontas.module.scss";

export default function Page() {
  return (
    <main className={styles.telefonspyniuRemontas}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Telefonspynių remontas</h1>
        <p className={styles.paragraph}>
          Atliekame kokybišką telefonspynių, vaizdo telefonspynių, bet kokio
          sudėtingumo įeigos kontrolės (ofise, bute, privačiuose namuose, KPP)
          remontą. Darbų kaina priklauso nuo gedimo pobūdžio ir nustatoma po
          įrangos diagnostikos. Kai kuriais atvejais įrangą verta permontuoti
          arba pakeisti.
        </p>

        <p>
          Modernizuojame jau sumontuotas telefonspynių arba įeigos kontrolės
          sistemas.
        </p>

        <ol className={styles.list}>
          {TelefonspyniuRemontasData.map(({ title }, index) => (
            <li key={index}>{title}</li>
          ))}
        </ol>
        <Contacts />
        <div className={styles.wrapper}>
          {TelefonspynesModelsData.map(
            ({ image, alt, brand, model }, index) => (
              <div key={index} className={styles.models}>
                <Image src={image} alt={alt} height={200} width={200} />
                <div className={styles.data}>
                  <span className={styles.brand}>{brand}</span>
                  <p className={styles.model}>{model}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
