"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./Kategorijos.module.scss";
import Image from "next/image";
import { AddCategory } from "@/components/admin/categories/addCategory/AddCategory";
import { CategoriesList } from "@/components/admin/categories/categoriesList/CategoriesList";

export default function Page() {
  return (
    <main className={styles.kategorijos}>
      <div className={styles.wrapper}>
        <CategoriesList />
        <AddCategory />
      </div>
    </main>
  );
}
