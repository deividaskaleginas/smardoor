"use client";

import { CategoriesList } from "@/components/admin/categories/categoriesList/CategoriesList";
import styles from "./Telefonspynes.module.scss";
import { AddCategory } from "@/components/admin/categories/addCategory/AddCategory";

export default function Page() {
  return (
    <main className={styles.telefonspynes}>
      <div className={styles.wrapper}>
        <CategoriesList getFrom="telefonspynes" />
        <AddCategory addWhere="telefonspynes" />
      </div>
    </main>
  );
}
