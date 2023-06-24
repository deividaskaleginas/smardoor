"use client";

import React, { useState } from "react";
import { Burger } from "./burger/Burger";

import styles from "./Header.module.scss";
import { Logo } from "./logo/Logo";
import { Navigation } from "./navigation/Navigation";
import { SideBar } from "./sidebar/SideBar";

export const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <Burger open={open} setOpen={setOpen} />
        <SideBar open={open} setOpen={setOpen} />
        <Navigation />
      </div>
    </header>
  );
};
