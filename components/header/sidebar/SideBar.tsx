import Image from "next/image";
import React, { useState } from "react";
import { Logo } from "../logo/Logo";

import close from "../../../public/assets/icons/close.svg";

import "./sideBar.scss";
import { SIDEBAR, sidebarData } from "@/constants/sideBarData";
import Link from "next/link";

import arrowDown from "../../../public/assets/icons/arrowDown.svg";

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
    <aside className={open ? "aside --active" : "aside"}>
      <div className="aside__container">
        <div className="aside__container__top">
          <Logo />
          <Image
            src={close}
            height={32}
            width={32}
            alt="Close button"
            onClick={() => setOpen(!open)}
          />
        </div>
        <nav className="aside__container__navigation">
          <ul className="aside__container__navigation__unorderList">
            {sidebarData.map(({ key, title, path, subNav }, index) => {
              return (
                <div
                  key={index}
                  onClick={() =>
                    setActiveNavs({
                      ...activeNavs,
                      [key]: !activeNavs[key],
                    })
                  }
                  className="aside__container__navigation__unorderList__block"
                >
                  <div className="aside__container__navigation__unorderList__block__categoryTitle">
                    <Link
                      className="aside__container__navigation__unorderList__block__categoryTitle__listItem"
                      href={path}
                    >
                      {title}
                    </Link>
                    {subNav && (
                      <Image
                        className={
                          subNav && activeNavs[key]
                            ? "aside__container__navigation__unorderList__block__categoryTitle__icon --active"
                            : "aside__container__navigation__unorderList__block__categoryTitle__icon"
                        }
                        src={arrowDown}
                        alt="arrow down svg"
                        height={26}
                        width={26}
                      />
                    )}
                  </div>

                  {activeNavs[key] && subNav && (
                    <ul className="aside__container__navigation__unorderList__block__subNav">
                      {subNav?.map(({ title, path }, index) => {
                        return (
                          <Link
                            key={index}
                            href={path}
                            className="aside__container__navigation__unorderList__block__subNav__listItem"
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
        </nav>
      </div>
    </aside>
  );
};
