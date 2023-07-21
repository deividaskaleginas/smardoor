import { ProductGeneralValuesTypes } from "@/types/productTypes";
import React, { useState } from "react";
import { ProductGeneralValues } from "./productGeneralValues/ProductGeneralValues";
import { MonitorTechnicalParams } from "@/types/monitorTypes";
import { ProductTechnicalParams } from "./productTechnicalParams/ProductTechnicalParams";

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
    <div>
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
    </div>
  );
};
