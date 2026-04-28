"use client";
import Container from "@/components/Container";
import Axios from "axios";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

const HeaderObras = ({ lang }: { lang: string }) => {
  console.log(lang);
  const api = "https://gabrielaanselmo.com/backend/api/textos";
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

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#e6e5e5] mt-22">
      <Container className="gap-8 grid grid-cols-1 lg:grid-cols-2 py-8">
        <div className="animate-fade-in aspect-square">
          <img
            src="./images/bio.jpg"
            className="object-cover w-full h-full object-center"
          />
        </div>
        <div className="flex flex-col justify-between gap-y-4 relative">
          {loading ? (
            <div className="mt-8">
              <Loader />
            </div>
          ) : (
            <div>
              <p className="text-xl lg:text-[1.64rem] font-bold italic text-primary leading-tight mb-4 whitespace-break-spaces">
                {lang === "es" ? data[1].text_es : data[1].text_en}
              </p>
              <p className="text-lg lg:text-[1.6rem] leading-tight whitespace-break-spaces">
                {lang === "es" ? data[2].text_es : data[2].text_en}
              </p>
            </div>
          )}

          <div className="flex justify-end">
            <button
              className="text-primary text-4xl hover:text-foreground cursor-pointer rotate-90"
              onClick={() => handleScroll("obras")}
            >
              <img
                src="./assets/forward.svg"
                alt=""
                className="h-8 hover:scale-105 transition-all"
              />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeaderObras;
