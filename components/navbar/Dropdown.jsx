import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuItems } from "./MenuItems";

export default function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                href={item.path}
                onClick={() => setClick(false)}
              >
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
