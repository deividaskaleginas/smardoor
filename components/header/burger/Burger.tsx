import React from "react";

import styles from "./Burger.module.scss";

interface BurgerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const lineClassName = `${styles.line} ${open ? styles.active : ""}`;

  return (
    <div className={styles.burger} role="button" onClick={handleClick}>
      <div className={lineClassName}></div>
      <div className={lineClassName}></div>
      <div className={lineClassName}></div>
    </div>
  );
};
