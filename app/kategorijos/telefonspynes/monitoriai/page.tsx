"use client";

import { MonitorType } from "@/types/monitorTypes";
import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./Monitoriai.module.scss";
import Link from "next/link";
import Image from "next/image";

import undefinedImg from "../../../../public/assets/images/undefined.png";

export default function Page() {
  const [monitors, setMonitors] = useState<MonitorType[]>([]);
  const getMonitoriai = async () => {
    const res = await axios.get(`http://localhost:8080/monitoriai`);
    setMonitors(res.data);
  };

  useEffect(() => {
    getMonitoriai();
  }, []);

  return (
    <main className={styles.kategorijos}>
      <div className={styles.wrapper}>
        <h1>Monitoriai</h1>
        <div className={styles.wrapperData}>
          {monitors?.map(
            (
              {
                title,
                images,
                alt,
                price,
                slug,
                monitor_description,
                technical_parameters,
                instruction,
                videos,
                technical_images,
              },
              index
            ) => (
              <Link
                key={index}
                href={`monitoriai/${slug}`}
                className={styles.category}
              >
                <Image
                  src={
                    images
                      ? `http://localhost:8080/images/monitoriai/${images[0].filename}`
                      : undefinedImg
                  }
                  alt={alt ? alt : "Sutrūkusi paveikslėlio ikona"}
                  height={300}
                  width={300}
                />
                <div className={styles.priceBlock}>
                  <span className={styles.price}>{price} €</span>
                </div>
                <h4 className={styles.title}>{title}</h4>
              </Link>
            )
          )}
        </div>
      </div>
    </main>
  );
}
