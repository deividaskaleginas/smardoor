import axios from "axios";
import React, { useEffect, useState } from "react";

import styles from "./ProductList.module.scss";
import Image from "next/image";

interface ProductListProps {
  product: string;
}

export const ProductList: React.FC<ProductListProps> = ({ product }) => {
  const [products, setProducts] = useState<any[]>([]);

  const getProducts = async () => {
    const res = await axios.get(`http://localhost:8080/${product}`);
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products.map((product) => console.log(product)));

  return (
    <section className={styles.wrapper}>
      {products.map(({ id, title, images, alt, price, slug }, index) => (
        <div className={styles.product} key={index}>
          <div>
            <Image
              src={`http://localhost:8080/images/${product}/${images[0].filename}`}
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
            <span>Kategorijos nuoroda:</span>
            <h4>{slug}</h4>
          </div>
          <div className={styles.description}>
            <span>Kaina:</span>
            <h4>{price}</h4>
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              // onClick={() => deleteCategory(id)}
            >
              Redaguoti
            </button>
            <button
              className={styles.button}
              // onClick={() => deleteCategory(id)}
            >
              Ištrinti
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
