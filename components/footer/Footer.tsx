import React from "react";

import styles from "./Footer.module.scss";

import smartDoorLogo from "../../public/assets/logo/logo.png";
import Image from "next/image";
import { footerContactsData, footerMenuLinks } from "@/constants/footerMenu";
import Link from "next/link";

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <Image
          src={smartDoorLogo}
          alt="`Smart door` įmonės logotipas"
          height={64}
          width={106}
        />
        <p className={styles.paragraph}>
          Parduodame ir montuojame telefonspynes, vartų automatiką, duris,
          šviestuvus, vaizdo kameras, pašto dėžutes. Rinkoje esame ne pirmus
          metus, tad savo darbą išmanome puikiai.
        </p>
      </div>
      <div className={styles.menu}>
        <h4 className={styles.title}>MENIU</h4>
        <ul className={styles.list}>
          {footerMenuLinks.map(({ title, href }, index) => (
            <Link key={index} href={href} className={styles.item}>
              {title}
            </Link>
          ))}
        </ul>
      </div>
      <div className={styles.contacts}>
        <h4 className={styles.title}>KONTAKTINĖ INFORMACIJA</h4>
        <div className={styles.data}>
          <span className={styles.name}>UAB Cargolita</span>
          <ul className={styles.list}>
            {footerContactsData.map(({ icon, data, alt }, index) => (
              <li className={styles.item} key={index}>
                <Image src={icon} alt={alt} height={16} width={16} />
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
