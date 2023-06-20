import Link from "next/link";
import React from "react";

import "./logo.scss";

export const Logo: React.FC = () => (
  <Link className="logo" href={"/"}>
    Logo
  </Link>
);
