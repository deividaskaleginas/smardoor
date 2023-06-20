"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Burger } from "./burger/Burger";

import "./header.scss";
import { Logo } from "./logo/Logo";
import { SideBar } from "./sidebar/SideBar";

export const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="header__headerBlock">
        <Logo />
        <Burger open={open} setOpen={setOpen} />
        <SideBar open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};
