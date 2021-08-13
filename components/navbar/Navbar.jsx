import React, { useState } from "react";

import { Button } from "./Button";
import Dropdown from "./Dropdown";
import Link from "next/link";
import Image from "next/image";
import Rede from "./logos/Rede";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="bg-yellow-600 flex justify-center items-center h-[100px]">
        <div>
          <Rede />
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>

        <div className={click ? "nav-menu active" : "nav-menu"}>
          <div className="flex items-center hover:bg-black px-4 py-2 mx-auto font-semibold text-white">
            <Link href="#" className="" onClick={closeMobileMenu}>
              <a>Home</a>
            </Link>
          </div>
          <div
            className="flex items-center hover:bg-black px-4 py-2 mx-auto font-semibold text-white z-10"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              href="#"
              className="py-2 px-4 hover:bg-red-500 w-full h-8"
              onClick={closeMobileMenu}
            >
              <a>
                About <i className="fas fa-caret-down" />{" "}
              </a>
            </Link>
            {dropdown && <Dropdown />}
          </div>

          <div className="flex items-center hover:bg-black px-4 py-2 mx-auto font-semibold text-white">
            <Link href="#" className="py-2 px-4" onClick={closeMobileMenu}>
              <a>Link #02</a>
            </Link>
          </div>

          <div className="flex items-center hover:bg-black px-4 py-2 mx-auto font-semibold text-white">
            <Link
              href="#"
              className="nav-links-mobile py-2 px-4"
              onClick={closeMobileMenu}
            >
              <a>Mobile</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
