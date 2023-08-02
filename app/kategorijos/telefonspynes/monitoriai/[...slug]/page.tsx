"use client";

import { MonitorType } from "@/types/monitorTypes";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Product.module.scss";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

// Swiper modules

import arrowDown from "../../../../../public/assets/icons/arrowDown.svg";
import { ContactForProduct } from "@/components/contactForProduct/ContactForProduct";

export default function Page({ params }: { params: { slug: string } }) {
  const [monitors, setMonitors] = useState<MonitorType[]>([]);
  const [product, setProduct] = useState<MonitorType>();
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeDataDivIndex, setActiveDataDivIndex] = useState<number | null>(
    null
  );

  const getMonitoriai = async () => {
    const res = await axios.get(`http://localhost:8080/monitoriai`);

    const findProduct = async () => {
      const currentProduct = await res.data.filter(
        (monitor: { slug: string }) => monitor.slug === params.slug[0]
      );
      setProduct(currentProduct[0]);
    };
    findProduct();
  };

  console.log(product?.videos);

  useEffect(() => {
    getMonitoriai();
  }, []);

  const handleClick = (index: number) => {
    setActiveDataDivIndex(index);
  };

  console.log(product?.technical_parameters);

  return (
    <main className={styles.item}>
      <div className={styles.wrapper}>
        <div className={styles.product_top}>
          <div className={styles.photos}>
            <Swiper
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {product?.images.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={`http://localhost:8080/images/monitoriai/${image.filename}`}
                      alt={product.alt}
                      width={330}
                      height={330}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {product?.images.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={`http://localhost:8080/images/monitoriai/${image.filename}`}
                      alt={product.alt}
                      width={80}
                      height={80}
                      className={styles.imgesListImage}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className={styles.desctiptionBlock}>
            <h3 className={styles.title}>{product?.title}</h3>
            <p className={styles.description}>{product?.product_description}</p>
            <span className={styles.price}>{product?.price} €</span>
            <ContactForProduct />
          </div>
        </div>
        {product?.technical_parameters && (
          <div className={styles.technical_params}>
            <div
              className={styles.titleBlock}
              onClick={() =>
                activeDataDivIndex !== 0
                  ? setActiveDataDivIndex(0)
                  : setActiveDataDivIndex(null)
              }
            >
              <h4 className={styles.title}>Tecniniai parametrai</h4>
              <Image
                className={`${styles.icon} ${
                  activeDataDivIndex === 0 ? styles.active : ""
                }`}
                src={arrowDown}
                alt="varnelės ikona žmenyn"
                height={24}
                width={24}
              />
            </div>

            {Object.entries(product?.technical_parameters).map(
              ([key, value], index) => {
                if (value) {
                  return (
                    <div
                      key={index}
                      className={`${styles.parameter} ${
                        activeDataDivIndex === 0 ? styles.active : ""
                      }`}
                    >
                      <div>
                        <span className={styles.parameterKey}>
                          {key
                            .replace(/([A-Z])/g, " $1")
                            .trim()
                            .toLocaleLowerCase()
                            .replace(/^./, (str) => str.toUpperCase())}{" "}
                          :
                        </span>
                      </div>
                      <div>
                        <p>{value}</p>
                      </div>
                    </div>
                  );
                }
              }
            )}
          </div>
        )}
        {product?.technical_images && (
          <div className={styles.technical_params}>
            <div
              className={styles.titleBlock}
              onClick={() =>
                activeDataDivIndex !== 1
                  ? setActiveDataDivIndex(1)
                  : setActiveDataDivIndex(null)
              }
            >
              <h4 className={styles.title}>Papildoma informacija</h4>
              <Image
                className={`${styles.icon} ${
                  activeDataDivIndex === 1 ? styles.active : ""
                }`}
                src={arrowDown}
                alt="varnelės ikona žmenyn"
                height={24}
                width={24}
              />
            </div>
            <div
              className={`${styles.technical_images_block} ${
                activeDataDivIndex === 1 ? styles.active : ""
              }`}
            >
              {product.technical_images.map(({ filename }, index) => (
                <Image
                  key={index}
                  src={`http://localhost:8080/images/monitoriai/${filename}`}
                  alt="Informacinis prekės paveikslėlis"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              ))}
            </div>
          </div>
        )}
        {product?.videos && (
          <div className={styles.technical_params}>
            <div
              className={styles.titleBlock}
              onClick={() =>
                activeDataDivIndex !== 2
                  ? setActiveDataDivIndex(2)
                  : setActiveDataDivIndex(null)
              }
            >
              <h4 className={styles.title}>Vaizdo įrašai</h4>
              <Image
                className={`${styles.icon} ${
                  activeDataDivIndex === 2 ? styles.active : ""
                }`}
                src={arrowDown}
                alt="varnelės ikona žmenyn"
                height={24}
                width={24}
              />
            </div>
            <div
              className={`${styles.videos} ${
                activeDataDivIndex === 2 ? styles.active : ""
              }`}
            >
              {product.videos.map((videoUrl, index) => (
                <div key={index} className={styles.video_block}>
                  <ReactPlayer url={videoUrl} width="100%" height="100%" />
                </div>
              ))}
            </div>
          </div>
        )}
        {product?.instruction && (
          <div className={styles.technical_params}>
            <div
              className={styles.titleBlock}
              onClick={() =>
                activeDataDivIndex !== 3
                  ? setActiveDataDivIndex(3)
                  : setActiveDataDivIndex(null)
              }
            >
              <h4 className={styles.title}>Instrukcija</h4>
              <Image
                className={`${styles.icon} ${
                  activeDataDivIndex === 3 ? styles.active : ""
                }`}
                src={arrowDown}
                alt="varnelės ikona žmenyn"
                height={24}
                width={24}
              />
            </div>
            <div
              className={`${styles.instruction} ${
                activeDataDivIndex === 3 ? styles.active : ""
              }`}
            >
              <a
                className={styles.instructionLink}
                href={`http://localhost:8080/download/${product.instruction[0].originalname}`}
                download
              >
                Atsisiųsti instrukciją
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
