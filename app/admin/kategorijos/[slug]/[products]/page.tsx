"use client";

import { ProductList } from "@/components/admin/products/productsList/ProductList";
import { usePathname } from "next/navigation";

import styles from "../Page.module.scss";

export default function Page() {
  const pathName = usePathname();

  // Gaunama prekes pavadinimas
  const parts = pathName.split("/");
  const product = parts[parts.length - 1];
  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <ProductList product={product} />
      </div>
    </main>
  );
}
