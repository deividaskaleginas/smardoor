import { SwiperBlock } from "@/components/swiper/SwiperBlock";
import React from "react";

import styles from "./HeroSection.module.scss";
export const HeroSection: React.FC = () => (
  <section className={styles.heroSection}>
    <SwiperBlock />
  </section>
);
