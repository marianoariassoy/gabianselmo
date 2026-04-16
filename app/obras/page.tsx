"use client";
import { useLanguage } from "@/context/LanguageContext";
import Listado from "./listado";
import Header from "./HeaderObras";

const Page = () => {
  const { lang } = useLanguage();

  return (
    <>
      <Header lang={lang} />
      <Listado lang={lang} />
    </>
  );
};

export default Page;
