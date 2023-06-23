import React from "react";
import { Aside } from "../aside/Aside";
import { HeroSection } from "../sections/hero/HeroSection";

import "./main.scss";

export const Main: React.FC = () => (
  <div className="main">
    <div className="main__container">
      <Aside />
      <HeroSection />
    </div>
  </div>
);
