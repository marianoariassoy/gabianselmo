"use client";
import { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Axios from "axios";
import Loader from "@/components/Loader";

export default function Home() {
  const api = "https://backend.ligadecapitanes.com.ar/gabianselmo/api/home";
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
  }, []);

  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <Loader />
      </div>
    );
  }
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
