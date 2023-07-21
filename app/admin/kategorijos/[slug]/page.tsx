"use client";

import { CategoriesList } from "@/components/admin/categories/categoriesList/CategoriesList";
import styles from "./Page.module.scss";
import { AddCategory } from "@/components/admin/categories/addCategory/AddCategory";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <h1>{params.slug}</h1>
        <CategoriesList getFrom={params.slug} />
        <AddCategory addWhere={params.slug} />
      </div>
    </main>
  );
}
