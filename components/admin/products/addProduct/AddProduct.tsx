import { ProductGeneralValuesTypes } from "@/types/productTypes";
import React, { FormEvent, useState } from "react";
import { ProductGeneralValues } from "./productGeneralValues/ProductGeneralValues";
import { MonitorTechnicalParams } from "@/types/monitorTypes";
import { ProductTechnicalParams } from "./productTechnicalParams/ProductTechnicalParams";
import { ProductTechnicalImages } from "./productTechnicalImages/ProductTechnicalImages";

import styles from "./AddProduct.module.scss";
import { ProductVideos } from "./productVideos/ProductVideos";
import { ProductInstruction } from "./productInstruction/ProductInstruction";
import axios from "axios";

interface AddProductProps {
  product: string;
}

export const AddProduct: React.FC<AddProductProps> = ({ product }) => {
  const [images, setImages] = useState<File[]>();
  const [instruction, setInstruction] = useState<File>();
  const [videos, setVideos] = useState<string[]>(["", "", ""]);
  const [technicalImages, setTechnicalImages] = useState<File[]>();
  const [productGeneralValues, setProductGeneralValues] =
    useState<ProductGeneralValuesTypes>({
      title: "",
      alt: "",
      price: "",
      slug: "",
      product_description: "",
    });
  const [monitorTechnicalParams, setMonitorTechnicalParams] =
    useState<MonitorTechnicalParams>({
      kortelesLizdas: "",
      ekranas: "",
      rezoliucija: "",
      maitinimas: "",
      darbineTemperatura: "",
      dregme: "",
      matmenys: "",
    });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", productGeneralValues.title);
    formData.append("alt", productGeneralValues.alt);
    formData.append("price", productGeneralValues.price);
    formData.append("slug", productGeneralValues.slug);
    formData.append(
      "product_description",
      productGeneralValues.product_description
    );
    formData.append(
      "technical_parameters",
      JSON.stringify(monitorTechnicalParams)
    );

    if (images) {
      images.map((image) => {
        formData.append("images", image);
      });
    }

    if (instruction) {
      formData.append("instruction", instruction);
    }

    const filteredVideosValues = videos.filter((val) => val !== "");
    if (filteredVideosValues.length > 0) {
      formData.append("videos", JSON.stringify(filteredVideosValues));
    }

    if (technicalImages) {
      technicalImages.map((image) => {
        formData.append("technical_images", image);
      });
    }

    try {
      await axios.post(`http://localhost:8080/${product}`, formData);
      window.location.reload;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      encType="multipart/form-data"
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <ProductGeneralValues
        productGeneralValues={productGeneralValues}
        setProductGeneralValues={setProductGeneralValues}
        setImages={setImages}
      />
      <ProductTechnicalParams
        product={product}
        monitorTechnicalParams={monitorTechnicalParams}
        setMonitorTechnicalParams={setMonitorTechnicalParams}
      />
      <ProductTechnicalImages setTechnicalImages={setTechnicalImages} />
      <ProductVideos videos={videos} setVideos={setVideos} />
      <ProductInstruction setInstruction={setInstruction} />
      <button className={styles.button}>Pridėti</button>
    </form>
  );
};
