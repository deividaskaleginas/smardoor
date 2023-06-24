import Image from "next/image";
import React, { useState } from "react";
import { Logo } from "../logo/Logo";

import close from "../../../public/assets/icons/close.svg";

import styles from "./Sidebar.module.scss";

import { SIDEBAR, sidebarData } from "@/constants/sideBarData";
import Link from "next/link";

import arrowDown from "../../../public/assets/icons/arrowDown.svg";
import envelope from "../../../public/assets/icons/envelope.svg";
import phone from "../../../public/assets/icons/phone.svg";

interface SideBarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBar: React.FC<SideBarProps> = ({ open, setOpen }) => {
  const [activeNavs, setActiveNavs] = useState<{ [key in SIDEBAR]: Boolean }>({
    [SIDEBAR.PREKES]: false,
    [SIDEBAR.PASLAUGOS]: false,
    [SIDEBAR.APIE_MUS]: false,
    [SIDEBAR.KONTAKTAI]: false,
    [SIDEBAR.KATALOGAI]: false,
  });

  const sidebarClassName = `${styles.sideBar} ${open ? styles.active : ""}`;
  const iconClassName = `${styles.icon} ${styles.active}`;

  return (
    <aside className={sidebarClassName}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Logo />
          <Image
            src={close}
            height={32}
            width={32}
            alt="Close button"
            onClick={() => setOpen(!open)}
          />
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.unorderList}>
            {sidebarData.map(({ key, title, path, subNav }, index) => {
              return (
                <div key={index} className={styles.block}>
                  <div className={styles.categoryTitle}>
                    <Link
                      className={styles.listItem}
                      href={path}
                      onClick={() => setOpen(!open)}
                    >
                      {title}
                    </Link>
                    {subNav && (
                      <Image
                        onClick={() =>
                          setActiveNavs({
                            ...activeNavs,
                            [key]: !activeNavs[key],
                          })
                        }
                        className={
                          subNav && activeNavs[key]
                            ? iconClassName
                            : styles.icon
                        }
                        src={arrowDown}
                        alt="arrow down svg"
                        height={26}
                        width={26}
                      />
                    )}
                  </div>

                  {activeNavs[key] && subNav && (
                    <ul className={styles.subNav}>
                      {subNav?.map(({ title, path }, index) => {
                        return (
                          <Link
                            key={index}
                            href={path}
                            className={styles.listItem}
                          >
                            {title}
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </ul>
          <div className={styles.contactsBlock}>
            <div className={styles.contactBlock}>
              <Image
                src={phone}
                alt="Mobilaus telefono ikona"
                width={32}
                height={32}
              />
              <a className={styles.link} href="tel: +37068444099">
                +370 684 44099
              </a>
            </div>
            <div className={styles.contactBlock}>
              <Image src={envelope} alt="Voko ikona" width={32} height={32} />
              <a className={styles.link} href="mailto: info@cargolita.lt">
                info@cargolita.lt
              </a>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};
