import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import Image from "next/image";
// import "react-slideshow-image/dist/styles.css";

export default function SlideDestaque() {
  const [autoplay] = useState(true);

  const fadeProperties = {
    autoplay: { autoplay },
    pauseOnHover: true,
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,

    prevArrow: <div></div>,
    nextArrow: <div></div>,
  };

  return (
    <>
      <Fade {...fadeProperties}>
        <Image src="/home/img01.jpeg" layout="fill" objectFit="cover" />
        <Image src="/home/img02.jpeg" layout="fill" objectFit="cover" />
        <Image src="/home/img03.jpeg" layout="fill" objectFit="cover" />
        <Image src="/home/img04.jpeg" layout="fill" objectFit="cover" />
      </Fade>

      <div className=" relative bg-black w-full min-h-screen bg-opacity-50"></div>
    </>
  );
}
