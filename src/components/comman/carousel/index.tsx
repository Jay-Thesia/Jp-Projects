import React, { useEffect, useState } from 'react';

interface CarouselProps {
  autoSlide: boolean;
  children: any;
  autoSlideInterval?: number;
}

const Carousel = (props: CarouselProps) => {
  const { children, autoSlide = false, autoSlideInterval = 3000 } = props;
  const [curr, setCurr] = useState(0);

  const slides = (children && children) || [];
  const prev = () => {
    if (slides.length > 1) {
      setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    }
  };

  const next = () => {
    if (slides.length > 1) {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }
  };

  useEffect(() => {
    if (!autoSlide && slides.length <= 1) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [slides, autoSlide, autoSlideInterval]);

  return (
    <>
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide: string, index: number) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                loading="lazy"
                key={slide?.split('/')[2]}
                src={slide}
                alt={slide?.split('/')[2]}
                className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[625px]"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0 flex justify-center">
          <div className="flex items-center gap-2">
            {slides.map((_: any, index: number) => {
              return (
                <div
                  key={index}
                  onClick={() => setCurr(index)}
                  className={`cursor-pointer transition-all w-1.5 h-1.5 bg-white rounded-full ${
                    curr === index ? 'bg-opacity-100' : 'bg-opacity-50'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
