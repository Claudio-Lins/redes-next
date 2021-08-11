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
    <div>
      <Fade {...fadeProperties}>
        <Image src="/home/img01.jpeg" layout="fill" objectFit="cover" alt='imagem'/>
        <Image src="/home/img02.jpeg" layout="fill" objectFit="cover" alt='imagem'/>
        <Image src="/home/img03.jpeg" layout="fill" objectFit="cover" alt='imagem'/>
        <Image src="/home/img04.jpeg" layout="fill" objectFit="cover" alt='imagem'/>
      </Fade>
    </div>
  );
}
