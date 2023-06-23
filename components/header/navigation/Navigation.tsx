"use client";

import { SIDEBAR, sidebarData } from "@/constants/sideBarData";
import Link from "next/link";
import React, { useState } from "react";

import "./navigation.scss";

import phone from "../../../public/assets/icons/telephone-fill.svg";
import envelope from "../../../public/assets/icons/envelope-fill.svg";
import Image from "next/image";

export const Navigation: React.FC = () => {
  const [activeNavs, setActiveNavs] = useState<{ [key in SIDEBAR]: Boolean }>({
    [SIDEBAR.PREKES]: false,
    [SIDEBAR.PASLAUGOS]: false,
    [SIDEBAR.APIE_MUS]: false,
    [SIDEBAR.KONTAKTAI]: false,
    [SIDEBAR.KATALOGAI]: false,
  });
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {sidebarData.map(({ title, path, key, subNav }, index) => {
          if (key !== SIDEBAR.PREKES) {
            return (
              <div
                className="navigation__list__itemBlock"
                key={index}
                onMouseEnter={() =>
                  setActiveNavs({
                    ...activeNavs,
                    [key]: !activeNavs[key],
                  })
                }
                onMouseLeave={() =>
                  setActiveNavs({
                    ...activeNavs,
                    [key]: !activeNavs[key],
                  })
                }
              >
                <Link className="navigation__list__itemBlock__item" href={path}>
                  {title}
                </Link>

                {activeNavs[key] && subNav && (
                  <ul className="navigation__list__itemBlock__subNav">
                    {subNav?.map(({ title, path }, index) => (
                      <Link
                        key={index}
                        href={path}
                        className="navigation__list__itemBlock__subNav__listItem"
                      >
                        {title}
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            );
          }
        })}
      </ul>
      <div className="navigation__contacts">
        <div className="navigation__contacts__block">
          <Image src={phone} alt={"phone icon"} height={16} width={16} />
          <a
            className="navigation__contacts__block__link"
            href="tel: +37068444099"
          >
            +370 684 44099
          </a>
        </div>
        <div className="navigation__contacts__block">
          <Image src={envelope} alt="envelope icon" height={16} width={16} />
          <a
            className="navigation__contacts__block__link"
            href="mailto: info@cargolita.lt"
          >
            info@cargolita.lt
          </a>
        </div>
      </div>
    </nav>
  );
};
