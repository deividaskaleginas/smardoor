import React from "react";

import "./footer.scss";

import smartDoorLogo from "../../public/assets/logo/logo.png";
import Image from "next/image";
import { footerContactsData, footerMenuLinks } from "@/constants/footerMenu";
import Link from "next/link";

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__container__about">
        <Image
          src={smartDoorLogo}
          alt="`Smart door` įmonės logotipas"
          className="footer__container__about__image"
        />
        <p className="footer__container__about__paragraph">
          Parduodame ir montuojame telefonspynes, vartų automatiką, duris,
          šviestuvus, vaizdo kameras, pašto dėžutes. Rinkoje esame ne pirmus
          metus, tad savo darbą išmanome puikiai.
        </p>
      </div>
      <div className="footer__container__menu">
        <h4 className="footer__container__menu__title">MENIU</h4>
        <ul className="footer__container__menu__list">
          {footerMenuLinks.map(({ title, href }, index) => (
            <Link
              key={index}
              href={href}
              className="footer__container__menu__list__item"
            >
              {title}
            </Link>
          ))}
        </ul>
      </div>
      <div className="footer__container__contacts">
        <h4 className="footer__container__contacts__title">
          KONTAKTINĖ INFORMACIJA
        </h4>
        <div className="footer__container__contacts__data">
          <span className="footer__container__contacts__data__name">
            UAB Cargolita
          </span>
          <ul className="footer__container__contacts__data__list">
            {footerContactsData.map(({ icon, data, alt }, index) => (
              <li
                className="footer__container__contacts__data__list__item"
                key={index}
              >
                <Image
                  src={icon}
                  alt={alt}
                  className="footer__container__contacts__data__list__icon"
                />
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
