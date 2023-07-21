import { MonitorTechnicalParams } from "@/types/monitorTypes";
import React from "react";
import { MonitorParams } from "./monitorParams/MonitorParams";

interface ProductTechnicalParamsProps {
  product: string;
  monitorTechnicalParams: MonitorTechnicalParams;
  setMonitorTechnicalParams: React.Dispatch<
    React.SetStateAction<MonitorTechnicalParams>
  >;
}

export const ProductTechnicalParams: React.FC<ProductTechnicalParamsProps> = ({
  product,
  monitorTechnicalParams,
  setMonitorTechnicalParams,
}) => {
  if (product == "monitoriai") {
    return (
      <MonitorParams
        monitorTechnicalParams={monitorTechnicalParams}
        setMonitorTechnicalParams={setMonitorTechnicalParams}
      />
    );
  }
};
