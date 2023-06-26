import { ServisesSectionData } from "@/constants/servisesSection";
import React from "react";

import styles from "./ServisesSection.module.scss";

export const ServisesSection: React.FC = () => (
  <section className={styles.servises}>
    <div className={styles.wrapper}>
      {ServisesSectionData.map(({ title, description }, index) => {
        return (
          <div key={index} className={styles.servis}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.paragraph}>{description}</p>
          </div>
        );
      })}
    </div>
  </section>
);
