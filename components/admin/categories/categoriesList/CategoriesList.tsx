import React, { useEffect, useState } from "react";

import styles from "./CategoriesList.module.scss";
import axios from "axios";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface CategoriesListProps {
  getFrom: string;
}

export const CategoriesList: React.FC<CategoriesListProps> = ({ getFrom }) => {
  const [categories, setCategories] = useState<any[]>([]);
  const router = useRouter();
  const pathName = usePathname();
  const getCategories = async () => {
    const res = await axios.get(`http://localhost:8080/${getFrom}`);
    setCategories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleNavigate = (href: string) => {
    router.push(`${pathName}/${href}`);
  };

  const deleteCategory = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/${getFrom}/` + id);
      window.location.reload;
    } catch (err) {
      console.log(err);
    }
  };

  console.log(categories);
  return (
    <section className={styles.categories}>
      <h3>Sąrašas:</h3>
      {categories.map(({ id, title, image, alt, href, categoryKey }, index) => (
        <div
          key={index}
          className={styles.category}
          onClick={() => handleNavigate(categoryKey)}
        >
          <div className={styles.description}>
            <Image
              src={`http://localhost:8080/images/${getFrom}/${image}`}
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
