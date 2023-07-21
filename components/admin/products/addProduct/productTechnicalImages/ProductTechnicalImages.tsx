import React from "react";

import styles from "./ProductTechnicalImages.module.scss";

interface ProductTechnicalImagesProps {
  setTechnicalImages: React.Dispatch<React.SetStateAction<File[] | undefined>>;
}

export const ProductTechnicalImages: React.FC<ProductTechnicalImagesProps> = ({
  setTechnicalImages,
}) => {
  const handleTechnicalImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFiles = files as FileList;
    const selectedFilesValues = Object.values(selectedFiles);
    setTechnicalImages(selectedFilesValues);
  };
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Techniniai paveiksliukai</h3>
      <div className={styles.inputBlock}>
        <label>Techninės nuotraukos (max. 3 vnt.):</label>
        <input
          type="file"
          id="thechnicalImagesInput"
          name="technical_images"
          multiple
          placeholder="Nuotraukos"
          onChange={handleTechnicalImages}
        />
      </div>
    </div>
  );
};
