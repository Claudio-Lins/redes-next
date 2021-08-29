import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";
import Rede from "./logos/Rede";
import SocialMedia from "./SocialMedia";
import IconDown from "../navbar/IconDown";
import IconClose from "./IconClose";
import IconBars from "./IconBars";

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
      <div className="relative z-30">
        <SocialMedia />
      </div>
      <nav className="bg-gray-50 border-b shadow flex sm:justify-evenly items-center h-[100px] fixed z-30 inset-0">
        <div className="flex items-center">
          <Rede />
          <div className="menu-icon" onClick={handleClick}>
            {click ? <IconClose /> : <IconBars />}
          </div>
        </div>

        <div className={click ? "nav-menu active" : "nav-menu"}>
          <div className="header-link group">
            <Link href="/">
              <a onClick={closeMobileMenu}>
                <span className="span">Home</span>
              </a>
            </Link>
          </div>

          <div className="header-link group">
            <div
              className="flex items-center uppercase font-medium mx-auto text-sm text-white md:text-blue-600 z-10"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link href="/quem-somos">
                <a
                  className="md:py-8 flex items-center"
                  onClick={closeMobileMenu}
                >
                  <span>Quem somos</span>
                  <span className="hidden sm:flex">
                    <IconDown />
                  </span>
                </a>
              </Link>
              {dropdown && <Dropdown />}
            </div>
          </div>

          <div className="header-link group">
            <Link href="#">
              <a onClick={closeMobileMenu}>
                <span className="span">Ações</span>
              </a>
            </Link>
          </div>

          <div className="header-link group">
            <Link href="#">
              <a onClick={closeMobileMenu}>
                <span className="span">Notícias</span>
              </a>
            </Link>
          </div>

          <div className="header-link group">
            <Link href="#">
              <a onClick={closeMobileMenu}>
                <span className="span">Campanhas</span>
              </a>
            </Link>
          </div>

          <div className="header-link group">
            <Link href="/arquivos">
              <a onClick={closeMobileMenu}>
                <span className="span">Arquivo</span>
              </a>
            </Link>
          </div>

          <div className="header-link group">
            <Link href="/contact">
              <a onClick={closeMobileMenu}>
                <span className="span">Contacto</span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
