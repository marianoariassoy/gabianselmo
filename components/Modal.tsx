"use client";
import { useRef, useState } from "react";
import { Obra } from "@/lib/types";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Info from "./ModalInfo";

const Modal = ({
  data,
  initialIndex,
  setSelectedIndex,
}: {
  data: Obra[];
  initialIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    slideRef.current?.goNext();
  };

  const prevSlide = () => {
    slideRef.current?.goBack();
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-white/50 backdrop-blur-md p-8 lg:p-12 z-50">
        <div className="w-full h-full">
          <Slide
            ref={slideRef}
            defaultIndex={initialIndex}
            onChange={(_, next) => setCurrentIndex(next)}
            autoplay={false}
            infinite={true}
            pauseOnHover={false}
            arrows={false}
            transitionDuration={400}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="w-full h-[80vh] flex flex-col items-center justify-center"
              >
                <img
                  src={item.image_full ? item.image_full : item.image}
                  className="w-full h-full object-contain"
                  alt={item.title}
                />
              </div>
            ))}
          </Slide>
        </div>
      </div>

      <button
        className="fixed z-50 top-12 right-6 hover:text-primary cursor-pointer"
        onClick={() => setSelectedIndex(null)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="fixed right-8 top-1/2 z-50 cursor-pointer hover:scale-105 transition-all"
      >
        <img src="/assets/forward.svg" alt="" className="h-8" />
      </button>

      <button
        onClick={prevSlide}
        className="fixed left-8 top-1/2 z-50 cursor-pointer hover:scale-105 transition-all"
      >
        <img src="/assets/forward.svg" alt="" className="h-8 rotate-180" />
      </button>

      <Info data={data[currentIndex]} />
    </>
  );
};

export default Modal;
