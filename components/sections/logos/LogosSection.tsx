import { LogoSectionData } from "@/constants/logoSection";
import Image from "next/image";
import React from "react";

import styles from "./LogoSection.module.scss";

export const LogosSection: React.FC = () => (
  <section className={styles.logoSection}>
    <div className={styles.wrapper}>
      {LogoSectionData.map(({ image, alt }, index) => (
        <div key={index}>
          <Image src={image} alt={alt} />
        </div>
      ))}
    </div>
  </section>
);
