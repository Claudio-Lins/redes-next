import React, { useState } from "react";
import Link from "next/link";
import { MenuItems } from "./MenuItems";

export default function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div
        onClick={handleClick}
        className={click ? "dropdownMenu hideem" : "dropdownMenu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <div className="flex justify-center px-3 py-4 rounded shadow hover:bg-yellow-600 hover:text-white transition duration-500 ease-in-out" key={index}>
              <Link
                className='dropdownMenu'
                // className={item.cName}
                href={item.path}
                onClick={() => setClick(false)}
              >
                <a>{item.title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
