"use client";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Home() {
  const data = [
    {
      id: 1,
      image: "/temp/1.webp",
    },
    {
      id: 2,
      image: "/temp/2.webp",
    },
    {
      id: 3,
      image: "/temp/3.webp",
    },
    {
      id: 4,
      image: "/temp/4.webp",
    },
  ];

  return (
    <Fade
      autoplay={true}
      duration={6000}
      infinite={true}
      pauseOnHover={false}
      arrows={false}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="h-screen w-screen bg-center bg-cover animate-fade-in"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        ></div>
      ))}
    </Fade>
  );
}
