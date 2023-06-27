import Image from "next/image";
import React from "react";

import styles from "./Contacts.module.scss";

import phone from "../../public/assets/icons/contacts/phone.svg";
import envelope from "../../public/assets/icons/contacts/envelope.svg";

export const Contacts: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.contact}>
      <Image
        src={phone}
        alt={"Mobilaus telefono ikona"}
        height={22}
        width={22}
      />
      <a className={styles.link} href="tel: +37068444099">
        +370 684 44099
      </a>
    </div>
    <div className={styles.contact}>
      <Image src={envelope} alt="Voko ikon" height={22} width={22} />
      <a className={styles.link} href="mailto: info@cargolita.lt">
        info@cargolita.lt
      </a>
    </div>
  </div>
);
