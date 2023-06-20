import React from "react";

import "./burger.scss";

interface BurgerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => (
  <div className="burger" role="button" onClick={() => setOpen(!open)}>
    <div className={open ? "burger__line --active" : "burger__line"}></div>
    <div className={open ? "burger__line --active" : "burger__line"}></div>
    <div className={open ? "burger__line --active" : "burger__line"}></div>
  </div>
);
