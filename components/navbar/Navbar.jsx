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
      <nav className="bg-gray-50 border-b shadow flex justify-center items-center h-[100px] fixed z-20 inset-0">
        <div>
          <Rede />
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>

        <div className={click ? "nav-menu active" : "nav-menu"}>
          <div className="navItem">
            <Link href="/" className="">
              <a onClick={closeMobileMenu}>Home</a>
            </Link>
          </div>
          <div
            className="flex items-center p-2 mx-auto text-sm text-white font-bold sm:font-normal md:text-blue-600 z-10 hover:border-b-2 hover:border-blue-600 "
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              href="/quem-somos"
              className=""
            >
              <a onClick={closeMobileMenu}>
                Quem somos <i className="fas fa-caret-down" />{" "}
              </a>
            </Link>
            {dropdown && <Dropdown />}
          </div>

          <div className="navItem">
            <Link href="#" className="">
              <a onClick={closeMobileMenu}>Ações</a>
            </Link>
          </div>

          <div className="navItem">
            <Link href="#" className="">
              <a onClick={closeMobileMenu}>Notícias</a>
            </Link>
          </div>

          <div className="navItem">
            <Link href="#" className="">
              <a onClick={closeMobileMenu}>Campanhas</a>
            </Link>
          </div>

          <div className="navItem">
            <Link href="#" className="">
              <a onClick={closeMobileMenu}>Arquivo</a>
            </Link>
          </div>

          <div className="navItem">
            <Link
              href="#"
              className="nav-links-mobile"
             
            >
              <a onClick={closeMobileMenu}>Contacto</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
