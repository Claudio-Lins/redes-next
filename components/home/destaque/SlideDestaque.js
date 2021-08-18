import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";

export default function SlideDestaque() {
  const [autoplay, setAutoplay] = useState(true);

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
    <Fade {...fadeProperties}>
      <div className="relative w-full h-[667px] md:h-screen">
        <Image
          src="/home/img01.jpeg"
          alt=""
          layout="fill"
          // width={1280}
          // height={600}
          objectFit="cover"
        />
      </div>
      <div className="relative w-full h-[667px] md:h-screen">
        <Image
          src="/home/img02.jpeg"
          alt=""
          layout="fill"
          // width={1280}
          // height={600}
          objectFit="cover"
        />
      </div>
      <div className="relative w-full h-[667px] md:h-screen">
        <Image
          src="/home/img03.jpeg"
          alt=""
          layout="fill"
          // width={1280}
          // height={600}
          objectFit="cover"
        />
      </div>
    </Fade>
  );
}
