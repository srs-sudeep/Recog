import React, { useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "./imageByIndex";
import { Link } from "react-router-dom";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide">
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Link to={`/projects/${index}`}>
                <img
                  className="embla__slide__img"
                  src={imageByIndex(index)}
                  alt="Your alt text"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
