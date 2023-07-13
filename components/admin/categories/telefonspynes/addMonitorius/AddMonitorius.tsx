"use client";

import axios from "axios";
import React, { FormEvent, useState } from "react";

import styles from "./AddCategory.module.scss";

export const AddCategory: React.FC = () => {
  const [images, setImage] = useState<File>();
  const [categoryValues, setCategoryValues] = useState({
    title: "",
  });

  const formData = new FormData();
  if (images) {
    formData.append("images", images);
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
    if (images) {
      formData.append("images", images);
    }

    try {
      await axios.post(`http://localhost:8080/monitoriai`, formData);
      window.location.reload;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3>{`Pridėti monitoriu:`}</h3>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <input
          type="text"
          id="titleInput"
          name="title"
          placeholder="Monitoriaus pavadinimas. Pvz.: Monitorius Akuvox C315S"
          value={categoryValues.title}
          required
          onChange={onChange}
        />
        <input
          type="file"
          id="fileInput"
          name="images"
          required
          multiple
          placeholder="Nuotraukos"
          onChange={handleFile}
        />
        <button>Pridėti</button>
      </form>
    </div>
  );
};
