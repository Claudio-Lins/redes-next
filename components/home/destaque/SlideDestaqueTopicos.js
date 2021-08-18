import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Topicos from "./Topicos";

export default function SlideDestaqueTopicos() {
  const properties = {
    duration: 8000,
    transitionDuration: 1000,
    infinite: true,
    canSwipe: true,
    prevArrow: (
      <div className="hidden" style={{ width: "30px", marginRight: "-30px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#991B1B"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div className="hidden" style={{ width: "30px", marginLeft: "-30px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#991B1B"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };

  return (
    <Slide {...properties}>
      <Topicos
        content={
          "Defesa e promoção dos direitos das pesoas migrantes e refugiada"
        }
        style={
          "bg-blue-900 text-center mx-auto flex justify-center items-center font-light p-8 rounded-full w-48 h-48"
        }
      />
      <Topicos
        content={
          "Atuação conjunta na construção de políticas alternativas de governança migratória"
        }
        style={
          "bg-yellow-50 mx-auto text-blue-900 leading-tight border-4 border-blue-900 text-center flex justify-center items-center font-light p-8 rounded-full w-48 h-48"
        }
      />
      <Topicos
        content={"Advocacy e incidência e espaços decisórios"}
        style={
          "bg-yellow-700 mx-auto text-white text-center flex justify-center items-center font-light p-8 rounded-full w-48 h-48"
        }
      />
    </Slide>
  );
}
