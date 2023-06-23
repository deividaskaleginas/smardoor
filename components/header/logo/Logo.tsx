import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../public/assets/logo/logo.png";

import "./logo.scss";

export const Logo: React.FC = () => (
  <Link className="logoLink" href={"/"}>
    <Image src={logo} alt="Smart door logotipas" className="logoLink__image" />
  </Link>
);
