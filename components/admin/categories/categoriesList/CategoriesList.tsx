import React, { useEffect, useState } from "react";

import styles from "./CategoriesList.module.scss";
import axios from "axios";
import Image from "next/image";

export const CategoriesList: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const getCategories = async () => {
    const res = await axios.get("http://localhost:8080/kategorijos");
    setCategories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const deleteCategory = async (id: string) => {
    try {
      await axios.delete("http://localhost:8080/kategorijos/" + id);
      window.location.reload;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className={styles.categories}>
      <h3>Kategorijų sąrašas:</h3>
      {categories.map(({ id, title, image, alt, href, categoryKey }, index) => (
        <div key={index} className={styles.category}>
          <div className={styles.description}>
            <Image
              src={`http://localhost:8080/images/${image}`}
              alt={alt}
              height={100}
              width={100}
            />
          </div>
          <div className={styles.description}>
            <span>Pavadinimas:</span>
            <h4>{title}</h4>
          </div>
          <div className={styles.description}>
            <span>Nuotraukos aprašymas:</span>
            <h4>{alt}</h4>
          </div>
          <div className={styles.description}>
            <span>Kategorijos nuoroda:</span>
            <h4>{href}</h4>
          </div>
          <div className={styles.description}>
            <span>Kategorijos Key:</span>
            <h4>{categoryKey}</h4>
          </div>
          <div className={styles.description}>
            <button
              className={styles.button}
              onClick={() => deleteCategory(id)}
            >
              Ištrinti
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
