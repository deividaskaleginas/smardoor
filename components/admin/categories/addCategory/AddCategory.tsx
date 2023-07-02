"use client";

import React, { FormEvent, useState } from "react";

export const AddCategory: React.FC = () => {
  const [image, setImage] = useState<File>();
  const [categoryValues, setCategoryValues] = useState({
    title: "",
    alt: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryValues({ ...categoryValues, [e.target.name]: e.target.value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFile = files as FileList;
    setImage(selectedFile?.[0]);
  };

  const handleSubmit = (e: FormEvent) => {};

  return (
    <main>
      <form>
        <input
          type="text"
          id="titleInput"
          name="title"
          placeholder="Kategorijos pavadinimas"
          value={categoryValues.title}
          required
          onChange={onChange}
        />
        <input
          type="text"
          id="altInput"
          name="alt"
          required
          placeholder="Nuotraukos aprasymas"
          value={categoryValues.alt}
          onChange={onChange}
        />
        <input
          type="file"
          id="fileInput"
          name="file"
          required
          placeholder="Nuotrauka"
          onChange={handleFile}
        />
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </main>
  );
};
