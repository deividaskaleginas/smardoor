"use client";

import axios from "axios";
import React, { FormEvent, useState } from "react";

import styles from "./AddMonitorius.module.scss";
import { MonitorTechnicalParams } from "@/types/monitorTypes";

export const AddMonitorius: React.FC = () => {
  const [images, setImages] = useState<File[]>();
  const [instruction, setInstruction] = useState<File>();
  const [videos, setVideos] = useState<string[]>(["", "", ""]);
  const [technicalImages, setTechnicalImages] = useState<File[]>();
  const [technicalParams, setTechnicalParams] =
    useState<MonitorTechnicalParams>({
      kortelesLizdas: "",
      ekranas: "",
      rezoliucija: "",
      maitinimas: "",
      darbineTemperatura: "",
      dregme: "",
      matmenys: "",
    });
  const [monitorsValues, setMonitorsValues] = useState({
    title: "",
    alt: "",
    price: "",
    slug: "",
    monitor_description: "",
    technical_parameters: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMonitorsValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const technicalParamsOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTechnicalParams((prev) => ({
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

  const handleInstruction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFile = files as FileList;
    setInstruction(selectedFile?.[0]);
  };

  const handleVideos = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { value } = e.target;
    setVideos((prevVideos) => {
      const updateVideosValues = [...prevVideos];
      updateVideosValues[index] = value;
      return updateVideosValues;
    });
  };

  const handleTechnicalImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFiles = files as FileList;
    const selectedFilesValues = Object.values(selectedFiles);
    setTechnicalImages(selectedFilesValues);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", monitorsValues.title);
    formData.append("alt", monitorsValues.alt);
    formData.append("price", monitorsValues.price);
    formData.append("slug", monitorsValues.slug);
    formData.append("monitor_description", monitorsValues.monitor_description);
    formData.append("technical_parameters", JSON.stringify(technicalParams));

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
          value={monitorsValues.title}
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
          onChange={handleImage}
        />
        <input
          type="text"
          id="altInput"
          name="alt"
          placeholder="Nuotraukų pavadinimas. Pvz.: Monitorius Akuvox C315S"
          value={monitorsValues.alt}
          required
          onChange={onChange}
        />
        <input
          type="text"
          id="priceInput"
          name="price"
          placeholder="Kaina"
          value={monitorsValues.price}
          required
          onChange={onChange}
        />
        <input
          type="text"
          id="slugInput"
          name="slug"
          placeholder="nuoroda, kurią vartotojas matys paspaudęs ant prekės. Pvz.: kuvox-c315s"
          value={monitorsValues.slug}
          required
          onChange={onChange}
        />
        <textarea
          name="monitor_description"
          placeholder="Monitoriaus aprašymas"
          value={monitorsValues.monitor_description}
          required
          onChange={onChange}
        />
        <h5>Techniniai parametrai</h5>
        <input
          type="text"
          id="kortelesLizdasInput"
          name="kortelesLizdas"
          placeholder="Kortelės lizdas. Pvz.: SD kortelės lustas (iki 128GB)"
          value={technicalParams.kortelesLizdas}
          onChange={technicalParamsOnChange}
        />
        <input
          type="text"
          id="ekranasInput"
          name="ekranas"
          placeholder="Ekranas. Pvz.: 7 colių Spalvotas TFT ekranas"
          value={technicalParams.ekranas}
          onChange={technicalParamsOnChange}
        />
        <input
          type="text"
          id="rezoliucijaInput"
          name="rezoliucija"
          placeholder="Rezoliucija. Pvz.: 1024x600"
          value={technicalParams.rezoliucija}
          onChange={technicalParamsOnChange}
        />
        <input
          type="text"
          id="maitinimasInput"
          name="maitinimas"
          placeholder="Maitinimas. Pvz.: 	12V, PoE"
          value={technicalParams.maitinimas}
          onChange={technicalParamsOnChange}
        />
        <input
          type="text"
          id="darbineTemperaturaInput"
          name="darbineTemperatura"
          placeholder="Darbinė temperatūra. Pvz.: 	Nuo -10° iki 45°C"
          value={technicalParams.darbineTemperatura}
          onChange={technicalParamsOnChange}
        />
        <input
          type="text"
          id="dregmeInput"
          name="dregme"
          placeholder="Dregmė. Pvz.: 	Nuo 10% iki 90% (be kondensacijos)"
          value={technicalParams.dregme}
          onChange={technicalParamsOnChange}
        />
        <input
          type="text"
          id="matmenysInput"
          name="matmenys"
          placeholder="Matmenys. Pvz.: 	185 x 127,5 x 18 mm"
          value={technicalParams.matmenys}
          onChange={technicalParamsOnChange}
        />
        <h5>Instrukcija</h5>
        <input
          type="file"
          id="instructionInput"
          name="instruction"
          placeholder="instrukcija"
          onChange={handleInstruction}
        />
        <h5>Vaizdo įrašai</h5>
        <input
          type="text"
          id="videoInput"
          name="videos"
          placeholder="Youtube vaizdo įraįo nuoroda"
          value={videos[0]}
          onChange={(e) => handleVideos(e, 0)}
        />
        <input
          type="text"
          id="videoInput"
          name="videos"
          placeholder="Youtube vaizdo įraįo nuoroda"
          value={videos[1]}
          onChange={(e) => handleVideos(e, 1)}
        />
        <input
          type="text"
          id="videoInput"
          name="videos"
          placeholder="Youtube vaizdo įraįo nuoroda"
          value={videos[2]}
          onChange={(e) => handleVideos(e, 2)}
        />
        <h5>Techniniai paveiksliukai</h5>
        <input
          type="file"
          id="thechnicalImagesInput"
          name="technical_images"
          multiple
          placeholder="Nuotraukos"
          onChange={handleTechnicalImages}
        />
        <button>Pridėti</button>
      </form>
    </div>
  );
};
