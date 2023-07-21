"use client";

import axios from "axios";
import React, { FormEvent, useState } from "react";

import styles from "./AddCategory.module.scss";

interface AddCategoryProps {
  addWhere: string;
}

export const AddCategory: React.FC<AddCategoryProps> = ({ addWhere }) => {
  const [image, setImage] = useState<File>();
  const [categoryValues, setCategoryValues] = useState({
    title: "",
    alt: "",
    href: "",
    categoryKey: "",
  });

  const formData = new FormData();
  if (image) {
    formData.append("image", image);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFile = files as FileList;
    setImage(selectedFile?.[0]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", categoryValues.title);
    if (image) {
      formData.append("image", image);
    }
    formData.append("alt", categoryValues.alt);
    formData.append("href", categoryValues.href);
    formData.append("categoryKey", categoryValues.categoryKey);

    try {
      await axios.post(`http://localhost:8080/${addWhere}`, formData);
      window.location.reload;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3>{`Pridėti:`}</h3>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <input
          type="text"
          id="titleInput"
          name="title"
          placeholder="Kategorijos pavadinimas. Pvz.: Telefonspynės"
          value={categoryValues.title}
          required
          onChange={onChange}
        />
        <input
          type="text"
          id="altInput"
          name="alt"
          required
          placeholder="Nuotraukos aprasymas. Pvz.: `Eura` gamintojo telefonspynė"
          value={categoryValues.alt}
          onChange={onChange}
        />
        <input
          type="file"
          id="fileInput"
          name="image"
          required
          placeholder="Nuotrauka"
          onChange={handleFile}
        />
        <input
          type="text"
          id="hrefInput"
          name="href"
          required
          placeholder="Kategorijos nuoroda. Pvz.: /kategorijos/telefonspynes"
          onChange={onChange}
        />
        <input
          type="text"
          id="categoryKeyInput"
          name="categoryKey"
          required
          placeholder="Kategorijos Key. Tai kategorijos pavadinimas tačiau parašytas mažosiomis raidėmis. Pvz.: telefonspynes arba vaizdoStebejimoSistemos"
          onChange={onChange}
        />
        <button className={styles.button}>Pridėti</button>
      </form>
    </div>
  );
};
