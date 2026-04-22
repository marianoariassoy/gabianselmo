"use client";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { id: 1, image: "/temp/expo/1.jpg", title: "Title 1" },
    { id: 2, image: "/temp/expo/2.jpg", title: "2" },
    { id: 3, image: "/temp/expo/3.jpg", title: "3" },
  ];

  const properties = {
    prevArrow: (
      <button className="text-4xl text-foreground lg:px-12 rotate-180 lg:bg-[#e6e5e5] h-full">
        <img
          src="/assets/forward.svg"
          alt=""
          className="h-10 transition-all hover:scale-105"
        />
      </button>
    ),
    nextArrow: (
      <button className="text-4xl text-foreground lg:px-12 lg:bg-[#e6e5e5] h-full">
        <img
          src="/assets/forward.svg"
          alt=""
          className="h-10 transition-all hover:scale-105"
        />
      </button>
    ),
  };

  return (
    <div className="bg-[#e6e5e5] py-10">
      <div className="w-full hidden lg:block">
        <Slide
          slidesToScroll={1}
          slidesToShow={3}
          autoplay={true}
          duration={5000}
          infinite
          pauseOnHover={false}
          arrows
          transitionDuration={400}
          onChange={(_, next) => setActiveIndex(next)}
          {...properties}
        >
          {data.map((item, index) => {
            const centerIndex = (activeIndex + 1) % data.length;
            const isCenter = index === centerIndex;

            return (
              <div key={item.id} className="px-1">
                <div
                  className={`
                    overflow-hidden transition-all duration-400 relative
                  `}
                >
                  {!isCenter && (
                    <div className="bg-primary/90 w-full h-full z-10 absolute mix-blend-color animate-fade-in"></div>
                  )}
                  <img
                    src={item.image}
                    alt=""
                    className={`
                      w-full h-[420px] object-cover transition-all duration-400
                      ${isCenter ? "blur-0" : "blur-[2px]"}
                    `}
                  />
                  {isCenter && <p className="text-center mt-2">{item.title}</p>}
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
      <div className="w-full lg:hidden px-4">
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          autoplay={true}
          duration={5000}
          infinite
          pauseOnHover={false}
          arrows
          transitionDuration={400}
          onChange={(_, next) => setActiveIndex(next)}
          {...properties}
        >
          {data.map((item) => {
            return (
              <div key={item.id}>
                <img
                  src={item.image}
                  className="w-full aspect-square object-cover"
                />
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
};

export default Slider;
