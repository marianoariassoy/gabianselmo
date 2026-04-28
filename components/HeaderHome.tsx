"use client";
import { useState, useEffect } from "react";
import Container from "./Container";
import Nav from "./Nav";
import { useLanguage } from "@/context/LanguageContext";

type Language = "es" | "en";

const Header = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChangeLang = (lang: Language) => {
    setLang(lang);
    setOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024; // mismo breakpoint que lg de Tailwind
      setMenuOpen(isDesktop);
    };

    handleResize(); // ejecuta al cargar
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="fixed w-full top-0 z-50">
        <div className="bg-white z-20">
          <Container>
            <div className="w-full flex items-start lg:items-center justify-end overflow-hidden relative pt-4 pb-8 bg-white min-h-20">
              <div
                className={`flex flex-col justify-end items-end transition-all duration-400 animate-fade-in ${open ? "block -translate-x-0" : "translate-x-full hidden lg:block"}`}
              >
                <Nav
                  lang={lang}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                />
              </div>
              {!open && (
                <div className="absolute flex right-0 opacity-0 animate-fade-in delay-300 mt-1 lg:mt-0">
                  <button
                    className="uppercase font-bold cursor-pointer border-2 border-primary px-4 lg:w-40 h-10 text-primary flex items-center justify-center hover:bg-primary hover:text-white border-r-0 font-display text-xs"
                    onClick={() => handleChangeLang("es")}
                  >
                    Español
                  </button>
                  <button
                    className="uppercase font-bold cursor-pointer border-2 border-primary px-4 lg:w-40 h-10 text-primary flex items-center justify-center hover:bg-primary hover:text-white font-display text-xs"
                    onClick={() => handleChangeLang("en")}
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </Container>
        </div>
        <div className="bg-white w-full transition-all duration-400"></div>
        <div className="flex items-stretch w-full">
          <div className="bg-white flex-1"></div>
          <div className="w-full flex items-stretch max-w-5xl relative">
            <div className="absolute w-full h-full bg-white z-10 animate-fade-out"></div>
            <div className="bg-white w-4 h-full shrink-0"></div>
            <div className="flex-1">
              <img
                src="/assets/letras.svg"
                alt="Gabriela Anselmo"
                height="20px"
                className="w-full"
              />
            </div>
            <div className="bg-white w-4 h-full shrink-0"></div>
          </div>
          <div className="bg-white flex-1"></div>
        </div>
        <div className="bg-white w-full h-8"></div>
        <Container
          className={`text-white duration-400 transition-all p-6 lg:py-12 px-8 bg-primary/80 mix-blend-multiply backdrop-blur-xl inset-0 -z-10
            ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
        >
          <div className="text-[0.9rem] lg:text-lg text-center font-semibold font-display leading-tight max-w-4xl mx-auto pb-2">
            {lang === "es" ? (
              <p>
                La obra de Gabriela Anselmo construye escenas latentes:
                superficies donde memoria, materia e imaginación se superponen
                en capas silenciosas. <br />
                <br />
                Desde una práctica arraigada en la escenografía, sus trabajos
                exploran el espacio como un territorio abierto, un archivo
                sensible donde emergen mundos suspendidos entre la fantasía y lo
                real.
                <br />
                <br />
                Collages, texturas y objetos dialogan con la luz y el tiempo,
                invitando a una mirada íntima que descubre, en cada detalle,
                nuevas posibilidades de sentido.
              </p>
            ) : (
              <p className="text-xl">
                Gabriela Anselmo’s work constructs latent scenes: surfaces where
                <br />
                Rooted in a long-standing practice in scenography, her works
                explore space as an open territory — a sensitive archive where
                suspended worlds emerge between fantasy and reality. <br />{" "}
                <br />
                Collages, textures and objects interact with light and time,
                inviting an intimate gaze that discovers, in every detail, new
                possibilities of meaning.
              </p>
            )}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
