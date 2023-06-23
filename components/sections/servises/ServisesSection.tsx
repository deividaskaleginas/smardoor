import { ServisesSectionData } from "@/constants/servisesSection";
import Image from "next/image";
import React from "react";

import "./servisesSection.scss";

export const ServisesSection: React.FC = () => (
  <section className="servises">
    <div className="servises__container">
      {ServisesSectionData.map(({ title, description }, index) => {
        return (
          <div key={index} className="servises__container__servis">
            <h3 className="servises__container__servis__title">{title}</h3>
            <p className="servises__container__servis__paragraph">
              {description}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);
