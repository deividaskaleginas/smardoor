import { MonitorTechnicalParams } from "@/types/monitorTypes";
import { ProductGeneralValuesTypes } from "@/types/productTypes";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

interface UseAddProduct {
  addProduct: (product: string) => Promise<void>;
  productGeneralValues: ProductGeneralValuesTypes;
  setImages: Dispatch<SetStateAction<File[] | undefined>>;
  setProductGeneralValues: Dispatch<SetStateAction<ProductGeneralValuesTypes>>;
  setTechnicalImages: Dispatch<SetStateAction<File[] | undefined>>;
  videos: string[];
  setVideos: Dispatch<SetStateAction<string[]>>;
  monitorTechnicalParams: MonitorTechnicalParams;
  setMonitorTechnicalParams: Dispatch<SetStateAction<MonitorTechnicalParams>>;
  setInstruction: Dispatch<SetStateAction<File | undefined>>;
}

export const useAddProduct = (): UseAddProduct => {
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

  console.log(productGeneralValues);

  const addProduct = async (product: string) => {
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
    console.log(formData);
  };

  return {
    addProduct,
    productGeneralValues,
    setProductGeneralValues,
    setImages,
    setTechnicalImages,
    monitorTechnicalParams,
    setMonitorTechnicalParams,
    videos,
    setVideos,
    setInstruction,
  };
};
