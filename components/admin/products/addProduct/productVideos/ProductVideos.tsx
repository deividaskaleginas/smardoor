import React from "react";

import styles from "../Components.module.scss";

interface ProductVideosProps {
  videos: string[];
  setVideos: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ProductVideos: React.FC<ProductVideosProps> = ({
  videos,
  setVideos,
}) => {
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
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        Produkto vaizdo įrašai iš Youtube platformos
      </h3>
      <div className={styles.inputBlock}>
        <label>Youtube vaizdo įrašo nuoroda:</label>
        <input
          type="text"
          id="videoInput"
          name="videos"
          placeholder="Youtube vaizdo įrašo nuoroda. Pvz.: https://www.youtube.com/watch?v=5OdVJbNCSso"
          value={videos[0]}
          onChange={(e) => handleVideos(e, 0)}
        />
      </div>
      <div className={styles.inputBlock}>
        <label>Youtube vaizdo įrašo nuoroda:</label>
        <input
          type="text"
          id="videoInput"
          name="videos"
          placeholder="Youtube vaizdo įrašo nuoroda. Pvz.: https://www.youtube.com/watch?v=5OdVJbNCSso"
          value={videos[1]}
          onChange={(e) => handleVideos(e, 1)}
        />
      </div>
      <div className={styles.inputBlock}>
        <label>Youtube vaizdo įrašo nuoroda:</label>
        <input
          type="text"
          id="videoInput"
          name="videos"
          placeholder="Youtube vaizdo įrašo nuoroda. Pvz.: https://www.youtube.com/watch?v=5OdVJbNCSso"
          value={videos[2]}
          onChange={(e) => handleVideos(e, 2)}
        />
      </div>
    </div>
  );
};
