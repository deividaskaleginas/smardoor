import { ProductGeneralValuesTypes } from "@/types/productTypes";
import React, { useState } from "react";
import { ProductGeneralValues } from "./productGeneralValues/ProductGeneralValues";
import { MonitorTechnicalParams } from "@/types/monitorTypes";
import { ProductTechnicalParams } from "./productTechnicalParams/ProductTechnicalParams";
import { ProductTechnicalImages } from "./productTechnicalImages/ProductTechnicalImages";

import styles from "./AddProduct.module.scss";
import { ProductVideos } from "./productVideos/ProductVideos";
import { ProductInstruction } from "./productInstruction/ProductInstruction";

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
  return (
    <form encType="multipart/form-data" className={styles.form}>
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
