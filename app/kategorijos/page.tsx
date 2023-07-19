"use client";

import { SIDEBAR, sidebarData } from "@/constants/sideBarData";
import Image from "next/image";
import Link from "next/link";

import styles from "./Kategorijos.module.scss";

import undefinedImg from "../../public/assets/images/undefined.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { CategoriesTypes } from "@/types/categoriesTypes";

export default function Page() {
  const [categories, setCategories] = useState<CategoriesTypes[]>([]);
  const getCategories = async () => {
    const res = await axios.get(`http://localhost:8080/kategorijos`);
    setCategories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);

  // const categories = sidebarData.find(
  //   (category) => category.key === SIDEBAR.PREKES
  // )?.subNav;

  return (
    <main className={styles.kategorijos}>
      <div className={styles.wrapper}>
        <h1>Kategorijos</h1>
        <div className={styles.wrapperData}>
          {categories?.map(({ title, image, alt, href }, index) => (
            <Link key={index} href={href} className={styles.category}>
              <Image
                src={
                  image
                    ? `http://localhost:8080/images/kategorijos/${image}`
                    : undefinedImg
                }
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
