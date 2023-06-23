"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import { slidersData } from "@/constants/slidersData";
import Link from "next/link";
import Image from "next/image";

import "./swiperBlock.scss";

export const SwiperBlock: React.FC = () => (
  <div className="swiperBlock">
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slidersData.map(({ image, alt, href }, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="swiperBlock__imageWrapper"></div>
            <Link href={href}>
              <Image
                src={image}
                alt={alt}
                className="swiperBlock__imageWrapper__image"
              />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
);
