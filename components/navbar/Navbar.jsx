import React, { useState } from 'react'
// import { Button } from './Button'
// import { Dropdown } from './Dropdown'
// import styles from "../../styles/Navbar.module.css";

import Link from "next/link";
import Image from "next/image";
import Rede from './logos/Rede'

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Rede />
      </nav>
    </>
  )
}

