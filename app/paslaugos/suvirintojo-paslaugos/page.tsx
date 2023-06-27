import styles from "./SuvirintojoPaslaugos.module.scss";

import welder from "../../../public/assets/images/welder.jpeg";
import Image from "next/image";
import { SuvirintojoPaslaugosData } from "@/constants/servisesSection";
import { Contacts } from "@/components/contacts/Contacts";

export default function Page() {
  return (
    <main className={styles.suvirintojoPaslaugos}>
      <div className={styles.wrapper}>
        <h1>Suvirintojo paslaugos</h1>
        <div className={styles.dataBlock}>
          {" "}
          <Image
            src={welder}
            alt="Suvirintojas, dėvintis suvirintojo kaukę, virina"
            width={340}
            height={194}
          />
          <ul className={styles.list}>
            {SuvirintojoPaslaugosData.map(({ icon, description }, index) => (
              <li className={styles.item} key={index}>
                <Image src={icon} alt="Varnelės ikona" height={26} width={26} />{" "}
                {description}
              </li>
            ))}
          </ul>
        </div>

        <Contacts />
      </div>
    </main>
  );
}
