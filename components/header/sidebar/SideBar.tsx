import Image from "next/image";
import React, { useState } from "react";
import { Logo } from "../logo/Logo";

import close from "../../../public/assets/icons/close.svg";

import "./sideBar.scss";
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
  return (
    <aside className={open ? "sideBar --active" : "sideBar"}>
      <div className="sideBar__container">
        <div className="sideBar__container__top">
          <Logo />
          <Image
            src={close}
            height={32}
            width={32}
            alt="Close button"
            onClick={() => setOpen(!open)}
          />
        </div>
        <nav className="sideBar__container__navigation">
          <ul className="sideBar__container__navigation__unorderList">
            {sidebarData.map(({ key, title, path, subNav }, index) => {
              return (
                <div
                  key={index}
                  className="sideBar__container__navigation__unorderList__block"
                >
                  <div className="sideBar__container__navigation__unorderList__block__categoryTitle">
                    <Link
                      className="sideBar__container__navigation__unorderList__block__categoryTitle__listItem"
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
                            ? "sideBar__container__navigation__unorderList__block__categoryTitle__icon --active"
                            : "sideBar__container__navigation__unorderList__block__categoryTitle__icon"
                        }
                        src={arrowDown}
                        alt="arrow down svg"
                        height={26}
                        width={26}
                      />
                    )}
                  </div>

                  {activeNavs[key] && subNav && (
                    <ul className="sideBar__container__navigation__unorderList__block__subNav">
                      {subNav?.map(({ title, path }, index) => {
                        return (
                          <Link
                            key={index}
                            href={path}
                            className="sideBar__container__navigation__unorderList__block__subNav__listItem"
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
          <div className="sideBar__container__navigation__contactsBlock">
            <div className="sideBar__container__navigation__contactsBlock__contactBlock">
              <Image
                src={phone}
                alt="Mobilaus telefono ikona"
                width={32}
                height={32}
              />
              <a
                className="sideBar__container__navigation__contactsBlock__contactBlock__link"
                href="tel: +37068444099"
              >
                +370 684 44099
              </a>
            </div>
            <div className="sideBar__container__navigation__contactsBlock__contactBlock">
              <Image src={envelope} alt="Voko ikona" width={32} height={32} />
              <a
                className="sideBar__container__navigation__contactsBlock__contactBlock__link"
                href="mailto: info@cargolita.lt"
              >
                info@cargolita.lt
              </a>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};
