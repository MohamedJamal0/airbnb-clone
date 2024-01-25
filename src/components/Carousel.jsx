import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { useState, useRef } from 'react';

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const handleChange = (nextIndex) => {
    setIndex(nextIndex);
  };

  return (
    <div className="relative">
      <Carousel
        className="group relative "
        onChange={handleChange}
        showThumbs={false}
        showIndicators={false}
        axis="horizontal"
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          if (!hasPrev) return null;
          return (
            <button
              onClick={clickHandler}
              className=" absolute left-[3%] top-1/2 -translate-y-1/2  z-20  flex items-center justify-center w-6 h-6 rounded-full opacity-0 group-[&:hover]:opacity-100 duration-200 shadow bg-white/80 text-gray-800 hover:bg-white "
            >
              <SlArrowLeft className="w-3 h-3 mr-1 " />
            </button>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          if (!hasNext) return null;
          return (
            <button
              onClick={clickHandler}
              className=" absolute right-[3%] top-1/2 -translate-y-1/2  z-20  flex items-center justify-center w-6 h-6 rounded-full opacity-0 group-[&:hover]:opacity-100 duration-200  shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <SlArrowRight className="w-3 h-3 ml-1" />
            </button>
          );
        }}
      >
        {images.slice(0, index + 2).map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            decoding="async"
            className="w-full aspect-[3/2.85] bg-cover"
          />
        ))}
      </Carousel>
      <Dots length={images.length} index={index} />
    </div>
  );
}

function Dots({ length, index }) {
  const ref = useRef();

  let w = 10;

  if (index === 4 && index < length - 2) {
    ref.current.style.transform = `translateX(${w * -2}px)`;
  }

  if (index > 4 && index < length - 2) {
    const transVal = (index - 2) * -w;
    ref.current.style.transform = `translateX(${transVal}px)`;
  }

  return (
    <div className=" w-[50px] overflow-hidden absolute bottom-5 left-1/2 -translate-x-1/2">
      <ul ref={ref} className={`flex  duration-200  `}>
        {Array.from({ length }).map((_, i) => (
          <li
            key={i}
            className={` ${
              index === i ? 'opacity-100' : 'opacity-70'
            } px-[2px]  `}
          >
            <div className=" w-[6px] h-[6px] rounded-full bg-white "></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
