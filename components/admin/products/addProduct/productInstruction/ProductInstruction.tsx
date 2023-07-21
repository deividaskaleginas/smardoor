import React from "react";

import styles from "../Components.module.scss";

interface ProductInstructionProps {
  setInstruction: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export const ProductInstruction: React.FC<ProductInstructionProps> = ({
  setInstruction,
}) => {
  const handleInstruction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFile = files as FileList;
    setInstruction(selectedFile?.[0]);
  };
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Instrukcija</h3>
      <div className={styles.inputBlock}>
        <label>Instrukcija:</label>
        <input
          type="file"
          id="instructionInput"
          name="instruction"
          placeholder="instrukcija"
          onChange={handleInstruction}
        />
      </div>
    </div>
  );
};
