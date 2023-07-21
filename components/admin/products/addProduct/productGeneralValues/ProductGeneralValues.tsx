import { ProductGeneralValuesTypes } from "@/types/productTypes";
import React from "react";

import styles from "./ProductGeneralValues.module.scss";

interface ProductGeneralValuesProps {
  productGeneralValues: ProductGeneralValuesTypes;
  setProductGeneralValues: React.Dispatch<
    React.SetStateAction<ProductGeneralValuesTypes>
  >;
  setImages: React.Dispatch<React.SetStateAction<File[] | undefined>>;
}

export const ProductGeneralValues: React.FC<ProductGeneralValuesProps> = ({
  productGeneralValues,
  setProductGeneralValues,
  setImages,
}) => {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductGeneralValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFiles = files as FileList;
    const selectedFilesValues = Object.values(selectedFiles);
    setImages(selectedFilesValues);
  };
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Privalomi duomenys</h3>
      <div className={styles.inputBlock}>
        {" "}
        <label>Pavadinimas:</label>
        <input
          type="text"
          id="titleInput"
          name="title"
          placeholder="Monitoriaus pavadinimas. Pvz.: Monitorius Akuvox C315S"
          value={productGeneralValues.title}
          required
          onChange={onChange}
        />
      </div>
      <div className={styles.inputBlock}>
        <label>Nuotraukos (max. 5 vnt.):</label>
        <input
          type="file"
          id="fileInput"
          name="images"
          required
          multiple
          placeholder="Nuotraukos"
          onChange={handleImage}
        />
      </div>
      <div className={styles.inputBlock}>
        <label>Nuotraukos aprašymas:</label>
        <input
          type="text"
          id="altInput"
          name="alt"
          placeholder="Nuotraukų pavadinimas. Pvz.: Monitorius Akuvox C315S"
          value={productGeneralValues.alt}
          required
          onChange={onChange}
        />
      </div>
      <div className={styles.inputBlock}>
        <label>Kaina:</label>
        <input
          type="text"
          id="priceInput"
          name="price"
          placeholder="Kaina. Įrašius 100, vartotojas matys 100.00 kainą"
          value={productGeneralValues.price}
          required
          onChange={onChange}
        />
      </div>
      <div className={styles.inputBlock}>
        <label>Nuoroda:</label>
        <input
          type="text"
          id="slugInput"
          name="slug"
          placeholder="Nuoroda, kurią vartotojas matys paspaudęs ant prekės. Pvz.: monitorius-akuvox-c315s"
          value={productGeneralValues.slug}
          required
          onChange={onChange}
        />
      </div>
      <div className={styles.inputBlock}>
        <label>Prekės apršymas:</label>
        <textarea
          name="product_description"
          placeholder="Produkto aprašymas"
          value={productGeneralValues.product_description}
          required
          onChange={onChange}
        />
      </div>
    </div>
  );
};
