import Link from "next/link";
import styles from "./Admin.module.scss";

export default function Page() {
  return (
    <main className={styles.admin}>
      <div className={styles.wrapper}>
        <Link href={"admin/kategorijos"}>Kategorijos</Link>
      </div>
    </main>
  );
}
