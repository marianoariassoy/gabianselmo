"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Exhibitions from "./Exhibitions";
import Slider from "./Slider";
import Axios from "axios";
import Loader from "@/components/Loader";

const Page = () => {
  const { lang } = useLanguage();
  const api = "https://gabrielaanselmo.com/backend/api/exhibiciones/" + lang;
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
    <section className="flex flex-col mt-24">
      <Slider lang={lang} />
      {loading ? (
        <div className="mt-8 px-12">
          <Loader />
        </div>
      ) : (
        <Exhibitions data={data} lang={lang} />
      )}
    </section>
  );
};

export default Page;
