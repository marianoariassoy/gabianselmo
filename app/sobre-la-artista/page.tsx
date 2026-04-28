"use client";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/Container";
import Axios from "axios";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

const Page = () => {
  const { lang } = useLanguage();
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

  return (
    <section className="bg-[#e6e5e5] mt-24">
      <Container className="gap-8 grid grid-cols-1 lg:grid-cols-2 py-8">
        <div className="animate-fade-in">
          <img
            src="/images/bio-2.jpg"
            className="w-full h-full object-cover "
          />
        </div>
        {loading ? (
          <div className="mt-8">
            <Loader />
          </div>
        ) : (
          <div className="text-lg leading-tight flex flex-col gap-6">
            <p className="w-full max-w-xl whitespace-break-spaces">
              {lang === "es" ? data[0].text_es : data[0].text_en}
            </p>
            <a
              href="/assets/gabriela_anselmo_brochure_online.pdf"
              target="_blank"
              className="font-bold text-lg text-primary hover:text-foreground"
            >
              {lang === "es" ? "Ver brochure " : "View brochure "}
            </a>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Page;
