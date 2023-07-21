import React from "react";

import { Contacts } from "@/types/contacts";

import styles from "./ContactForProduct.module.scss";

import phone from "../../public/assets/icons/contacts/phone.svg";
import envelope from "../../public/assets/icons/contacts/envelope.svg";
import Image from "next/image";

export const ContactForProduct: React.FC = () => (
  <div className={styles.wrapper}>
    <p className={styles.paragraph}>
      Norėdami užsakyti prekę skambinkite telefonu arba rašykite:
    </p>
    <div className={styles.contacts}>
      <div className={styles.mobileBlock}>
        <Image
          src={phone}
          alt={"Mobilaus telefono ikona"}
          height={22}
          width={22}
        />
        <a
          className={styles.mobileLink}
          href={`tel: ${Contacts.MOBILE_PHONE_PRIMARY}`}
        >
          {Contacts.MOBILE_PHONE_PRIMARY}
        </a>
      </div>
      <div className={styles.emailBlock}>
        <Image src={envelope} alt="Voko ikona" height={22} width={22} />
        <a className={styles.emailLink} href={`mailto: ${Contacts.EMAIL}`}>
          {Contacts.EMAIL}
        </a>
      </div>
    </div>
  </div>
);
