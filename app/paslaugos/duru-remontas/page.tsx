import { Contacts } from "@/components/contacts/Contacts";
import { DuruRemontasData } from "@/constants/servisesSection";
import Image from "next/image";
import styles from "./DuruRemontas.module.scss";

export default function Page() {
  return (
    <main className={styles.duruRemontas}>
      <div className={styles.wrapper}>
        <h1>Durų remontas</h1>
        <ul className={styles.list}>
          {DuruRemontasData.map(({ icon, description }, index) => (
            <li key={index} className={styles.item}>
              <Image src={icon} alt="Varnelės ikona" height={26} width={26} />
              {description}
            </li>
          ))}
        </ul>
        <p className={styles.paragraph}>
          VIDAUS TARPKAMBARINIŲ DURŲ NETAISOME, NEMONTUOJAME
        </p>
        <Contacts />
      </div>
    </main>
  );
}
