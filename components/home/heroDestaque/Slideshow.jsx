import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  '/home/img01.jpeg',
  '/home/img02.jpeg',
  '/home/img03.jpeg',
];




const Slideshow = () => {
    return (
      <div className=' min-h-screen w-full'>
        <Slide easing="ease">
          <div className="flex items-center justify-center">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
