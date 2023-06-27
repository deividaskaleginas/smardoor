import { Contacts } from "@/components/contacts/Contacts";
import { SpynuRemontasData } from "@/constants/servisesSection";
import Image from "next/image";
import styles from "./SpynuRemontas.module.scss";

export default function Page() {
  return (
    <main className={styles.spynuRemontas}>
      <div className={styles.wrapper}>
        <h1>Spynų remontas</h1>
        <p className={styles.paragraph}>
          Spynų remonto gali prireikti spynai mechaniškai susidėvėjus, po
          neteisingos eksploatacijos ir mechanizmų priežiūros taisyklių
          nesilaikimo, po avarinio atrakinimo, po įsilaužimo, po nekvalifikuoto
          meistro mėginimo spyna suremontuoti arba pakeisti. Remontuojame ir
          keičiame visų gamintojų spynas.
        </p>
        <ul className={styles.list}>
          {SpynuRemontasData.map(({ icon, description }, index) => (
            <li key={index} className={styles.item}>
              <Image src={icon} alt="Varnelės ikona" height={26} width={26} />
              {description}
            </li>
          ))}
        </ul>
        <Contacts />
      </div>
    </main>
  );
}
