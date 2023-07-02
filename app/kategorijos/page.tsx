"use client";

import { SIDEBAR, sidebarData } from "@/constants/sideBarData";
import Image from "next/image";
import Link from "next/link";

import styles from "./Kategorijos.module.scss";

import undefinedImg from "../../public/assets/images/undefined.png";

export default function Page() {
  const categories = sidebarData.find(
    (category) => category.key === SIDEBAR.PREKES
  )?.subNav;

  return (
    <main className={styles.kategorijos}>
      <div className={styles.wrapper}>
        <h1>Kategorijos</h1>
        <div className={styles.wrapperData}>
          {categories?.map(({ title, image, alt, path }, index) => (
            <Link key={index} href={path} className={styles.category}>
              <Image
                src={image ? image : undefinedImg}
                alt={alt ? alt : "Sutrūkusi paveikslėlio ikona"}
                height={300}
                width={300}
              />{" "}
              {title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
