import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = (props) => {
  const { pages, slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className="emblaV2">
      <div className="emblaV2__viewport" ref={emblaRef}>
        <div className="emblaV2__container">
          {slides.map((index) => (
            <div className="emblaV2__slide" key={index}>
              <div className="emblaV2__slide__number">
                <span>{index + 1}</span>
              </div>
              <img
                className="emblaV2__slide__img"
                src={pages[index % pages.length]}
                alt="err"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
