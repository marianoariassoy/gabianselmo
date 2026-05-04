"use client";
import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Axios from "axios";
import Loader from "@/components/Loader";

const Slider = ({ lang }: { lang: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const api =
    "https://gabrielaanselmo.com/backend/api/exhibiciones/imagenes/" + lang;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(api);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [api]);

  if (loading) {
    return (
      <div className="my-20 px-4 w-full flex justify-center">
        <Loader />
      </div>
    );
  }

  const properties = {
    prevArrow: (
      <button className="text-4xl text-foreground lg:px-12 rotate-180 lg:bg-[#e6e5e5] h-full ml-4 lg:ml-0">
        <img
          src="/assets/forward.svg"
          alt=""
          className="h-8 transition-all hover:scale-105"
        />
      </button>
    ),
    nextArrow: (
      <button className="text-4xl text-foreground lg:px-12 lg:bg-[#e6e5e5] h-full mr-4 lg:mr-0">
        <img
          src="/assets/forward.svg"
          alt=""
          className="h-8 transition-all hover:scale-105"
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
                  {isCenter && <p className="mt-2">{item.title}</p>}
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
          transitionDuration={300}
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
                <p className="mt-2">{item.title}</p>
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
};

export default Slider;
