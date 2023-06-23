import { LogoSectionData } from "@/constants/logoSection";
import Image from "next/image";
import React from "react";

import "./logoSection.scss";

export const LogosSection: React.FC = () => (
  <section className="logoSection">
    <div className="logoSection__container">
      {LogoSectionData.map(({ image, alt }, index) => (
        <div key={index} className="logoSection__container__logo">
          <Image src={image} alt={alt} />
        </div>
      ))}
    </div>
  </section>
);
