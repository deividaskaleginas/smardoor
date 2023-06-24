"use client";

import { SIDEBAR, sidebarData, SUBNAV } from "@/constants/sideBarData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import chevronRight from "../../public/assets/icons/chevron-right.svg";

import styles from "./Aside.module.scss";

export const Aside: React.FC = () => {
  const [activeSubNavs, setActiveSubNavs] = useState<{
    [key in SUBNAV]: Boolean;
  }>({
    [SUBNAV.TELEFONSPYNES]: false,
    [SUBNAV.VARTU_AUTOMATIKA]: false,
    [SUBNAV.MARKIZES]: false,
    [SUBNAV.PRIEDAI]: false,
    [SUBNAV.SPYNOS]: false,
    [SUBNAV.JUTIKLIAI_APSAUGOS_IRANGA]: false,
    [SUBNAV.VAIZDO_STEBEJIMO_SISTEMOS]: false,
    [SUBNAV.TELEFONSPYNIU_REMONTAS]: false,
    [SUBNAV.SPYNU_REMONTAS]: false,
    [SUBNAV.DURU_REMONTAS]: false,
    [SUBNAV.KOPIJAVIMAS]: false,
    [SUBNAV.SUVIRINTOJO_PASLAUGOS]: false,
  });

  const prekes = sidebarData.filter((data) => {
    if (data.key === SIDEBAR.PREKES) {
      return data;
    }
  });
  return (
    <aside className={styles.aside}>
      <nav className={styles.navigation}>
        {prekes.map(({ subNav }, index) => (
          <ul key={index} className={styles.list}>
            {subNav?.map(({ title, path, key, subNavNested }, index) => (
              <div
                key={index}
                onMouseEnter={() =>
                  setActiveSubNavs({
                    ...activeSubNavs,
                    [key]: !activeSubNavs[key],
                  })
                }
                onMouseLeave={() =>
                  setActiveSubNavs({
                    ...activeSubNavs,
                    [key]: !activeSubNavs[key],
                  })
                }
                className={styles.block}
              >
                <div className={styles.itemBlock}>
                  <Link className={styles.item} href={path}>
                    {title}{" "}
                    {subNavNested && (
                      <Image src={chevronRight} alt="rodyklės į dešinę ikona" />
                    )}
                  </Link>
                </div>

                {activeSubNavs[key] && subNavNested && (
                  <div className={styles.subNavNested}>
                    <ul className={styles.list}>
                      {subNavNested.map(({ title, path, image }, index) => (
                        <div key={index} className={styles.block}>
                          {image && (
                            <Image
                              src={image}
                              alt="test"
                              height={78}
                              width={78}
                            />
                          )}

                          <Link href={path} className={styles.item}>
                            {title}
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </ul>
        ))}
      </nav>
    </aside>
  );
};
