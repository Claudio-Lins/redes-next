import React, { useState } from "react";

import { Button } from './Button'
import  Dropdown   from './Dropdown'
import Link from "next/link";
import Image from "next/image";
import Rede from "./logos/Rede";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  return (
    <>
      <nav className="navbar bg-yellow-600 flex justify-between items-center h-[100px]">
        <Rede />
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link href='#' className='nav-links' onClick={closeMobileMenu}>
              <a>Home</a>
            </Link>
          </li>
          <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link href='#' className='nav-links' onClick={closeMobileMenu}>
              <a>About <i className='fas fa-caret-down'/> </a>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link href='#' className='nav-links' onClick={closeMobileMenu}>
              <a>Link #02</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='#' className='nav-links-mobile' onClick={closeMobileMenu}>
              <a>Mobile</a>
            </Link>
          </li>
          {/* <Button /> */}
        </ul>
      </nav>
    </>
  );
}
