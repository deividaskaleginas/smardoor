import { MonitorTechnicalParams } from "@/types/monitorTypes";
import React from "react";

import styles from "./MonitorParams.module.scss";

interface MonitorParamsProps {
  monitorTechnicalParams: MonitorTechnicalParams;
  setMonitorTechnicalParams: React.Dispatch<
    React.SetStateAction<MonitorTechnicalParams>
  >;
}

export const MonitorParams: React.FC<MonitorParamsProps> = ({
  monitorTechnicalParams,
  setMonitorTechnicalParams,
}) => {
  const technicalParamsOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonitorTechnicalParams((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Techniniai parametrai</h3>
      <div className={styles.inputBlock}>
        <label>Kortelės lizdas:</label>
        <input
          type="text"
          id="kortelesLizdasInput"
          name="kortelesLizdas"
          placeholder="Kortelės lizdas. Pvz.: SD kortelės lustas (iki 128GB)"
          value={monitorTechnicalParams.kortelesLizdas}
          onChange={technicalParamsOnChange}
        />
      </div>
      <div className={styles.inputBlock}>
        <label>Ekranas:</label>
        <input
          type="text"
          id="ekranasInput"
          name="ekranas"
          placeholder="Ekranas. Pvz.: 7 colių Spalvotas TFT ekranas"
          value={monitorTechnicalParams.ekranas}
          onChange={technicalParamsOnChange}
        />
      </div>
      <div className={styles.inputBlock}>
        <label>Rezoliucija:</label>
        <input
          type="text"
          id="rezoliucijaInput"
          name="rezoliucija"
          placeholder="Rezoliucija. Pvz.: 1024x600"
          value={monitorTechnicalParams.rezoliucija}
          onChange={technicalParamsOnChange}
        />
      </div>
      <div className={styles.inputBlock}>
        <label>Maitinimas:</label>
        <input
          type="text"
          id="maitinimasInput"
          name="maitinimas"
          placeholder="Maitinimas. Pvz.: 	12V, PoE"
          value={monitorTechnicalParams.maitinimas}
          onChange={technicalParamsOnChange}
        />
      </div>
      <div className={styles.inputBlock}>
        <label>Darbinė tenperatūra:</label>
        <input
          type="text"
          id="darbineTemperaturaInput"
          name="darbineTemperatura"
          placeholder="Darbinė temperatūra. Pvz.: 	Nuo -10° iki 45°C"
          value={monitorTechnicalParams.darbineTemperatura}
          onChange={technicalParamsOnChange}
        />
      </div>
      <div className={styles.inputBlock}>
        <label>Drėgmė:</label>
        <input
          type="text"
          id="dregmeInput"
          name="dregme"
          placeholder="Drėgmė. Pvz.: 	Nuo 10% iki 90% (be kondensacijos)"
          value={monitorTechnicalParams.dregme}
          onChange={technicalParamsOnChange}
        />
      </div>
      <div className={styles.inputBlock}>
        <label>Matmenys:</label>{" "}
        <input
          type="text"
          id="matmenysInput"
          name="matmenys"
          placeholder="Matmenys. Pvz.: 	185 x 127,5 x 18 mm"
          value={monitorTechnicalParams.matmenys}
          onChange={technicalParamsOnChange}
        />
      </div>
    </div>
  );
};
