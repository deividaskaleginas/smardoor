import { ServisesSectionData } from "@/constants/servisesSection";
import Link from "next/link";
import React from "react";

import styles from "./ServisesSection.module.scss";

export const ServisesSection: React.FC = () => (
  <section className={styles.servises}>
    <div className={styles.wrapper}>
      {ServisesSectionData.map(({ title, description, path }, index) => {
        return (
          <Link href={path} key={index} className={styles.servis}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.paragraph}>{description}</p>
          </Link>
        );
      })}
    </div>
  </section>
);
