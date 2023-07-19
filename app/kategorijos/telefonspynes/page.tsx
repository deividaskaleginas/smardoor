"use client";

import { CategoriesTypes } from "@/types/categoriesTypes";
import axios from "axios";
import { useEffect, useState } from "react";

import styles from "../Kategorijos.module.scss";
import Link from "next/link";
import Image from "next/image";
import undefinedImg from "../../../public/assets/images/undefined.png";

export default function Page() {
  const [telefonspynes, setTelefonspynes] = useState<CategoriesTypes[]>([]);
  const getTelefonspynes = async () => {
    const res = await axios.get(`http://localhost:8080/telefonspynes`);
    setTelefonspynes(res.data);
  };

  useEffect(() => {
    getTelefonspynes();
  }, []);

  console.log(telefonspynes);

  return (
    <main className={styles.kategorijos}>
      <div className={styles.wrapper}>
        <h1>Telefonspynės</h1>
        <div className={styles.wrapperData}>
          {telefonspynes?.map(({ title, image, alt, href }, index) => (
            <Link key={index} href={href} className={styles.category}>
              <Image
                src={
                  image
                    ? `http://localhost:8080/images/telefonspynes/${image}`
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
