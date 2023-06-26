import { ServisesSection } from "@/components/sections/servises/ServisesSection";

import styles from "./Paslaugos.module.scss";

export default function Page() {
  return (
    <main className={styles.servisesPage}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Paslaugos</h1>
        <ServisesSection />
      </div>
    </main>
  );
}
