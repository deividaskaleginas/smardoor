import React from "react";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/assets/logo/logo.png";

export const Logo: React.FC = () => (
  <Link href={"/"}>
    <Image src={logo} alt="Smart door logotipas" height={48} width={80} />
  </Link>
);
