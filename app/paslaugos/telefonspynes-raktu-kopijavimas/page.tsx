"use client";

import {
  KeysSwiperData,
  MechaniniuRaktuData,
  TelefonspyniuRaktuData,
  VartuPulteliuData,
} from "@/constants/servisesSection";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Kopijavimas.module.scss";
import Image from "next/image";
import { Contacts } from "@/components/contacts/Contacts";

export default function Page() {
  return (
    <main className={styles.kopijavimas}>
      <div className={styles.wrapper}>
        <h1>Mechaninių raktų, el. raktų ir vartų pultelių kopijavimas</h1>
        <div className={styles.data}>
          <ul className={styles.list}>
            <h3>Raktu gamyba</h3>
            {MechaniniuRaktuData.map(({ description }, index) => (
              <li key={index} className={styles.item}>
                {description} <div className={styles.line} />
              </li>
            ))}
          </ul>
          <ul className={styles.list}>
            <h3>Telefonspynės el. raktų – dublikatų gamyba</h3>
            {TelefonspyniuRaktuData.map(({ description }, index) => (
              <li key={index} className={styles.item}>
                {description}
                <div className={styles.line} />
              </li>
            ))}
          </ul>
          <ul className={styles.list}>
            <h3>Vartų pultelių dublikavimas</h3>
            {VartuPulteliuData.map(({ description }, index) => (
              <li key={index} className={styles.item}>
                {description}
                <div className={styles.line} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.swiperBlock}>
          <div className={styles.swiper}>
            {" "}
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {KeysSwiperData.map(({ image, alt }, index) => (
                <SwiperSlide key={index}>
                  <Image src={image} alt={alt} width={300} height={300} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Contacts />
      </div>
    </main>
  );
}
