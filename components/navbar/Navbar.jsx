import React, { useState } from "react";

// import { Button } from './Button'
// import { Dropdown } from './Dropdown'
// import styles from "../../styles/Navbar.module.css";

import Link from "next/link";
import Image from "next/image";
import Rede from "./logos/Rede";
import Close from "../navbar/Close";
import Bars from "../navbar/Bars";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <Rede />
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </>
  );
}
