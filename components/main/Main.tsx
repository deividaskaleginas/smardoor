import React from "react";
import { Aside } from "../aside/Aside";
import { HeroSection } from "../sections/hero/HeroSection";

import styles from "./Main.module.scss";

export const Main: React.FC = () => (
  <div className={styles.main}>
    <div className={styles.wrapper}>
      <Aside />
      <HeroSection />
    </div>
  </div>
);
