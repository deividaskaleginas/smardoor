import { AddMonitorius } from "@/components/admin/categories/telefonspynes/monitoriai/addMonitorius/AddMonitorius";

import styles from "./Monitoriai.module.scss";

export default function Page() {
  return (
    <main className={styles.product}>
      <div className={styles.wrapper}>
        <AddMonitorius />
      </div>
    </main>
  );
}
