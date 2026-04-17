"use client";
import { useState } from "react";
import Container from "./Container";
import Nav from "./Nav";
import { useLanguage } from "@/context/LanguageContext";

type Language = "es" | "en";

const Header = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [showBio, setShowBio] = useState(false);

  const handleChangeLang = (lang: Language) => {
    setLang(lang);
    setOpen(true);
  };

  return (
    <>
      <header className="fixed w-full top-0 z-50">
        <div className="bg-white">
          <Container>
            <div className="w-full flex items-start lg:items-center justify-between gap-x-4 overflow-hidden relative pt-4 pb-8 bg-white">
              <img src="/assets/isoG.svg" alt="Logo" className="h-14" />
              <div
                className={`transition-all duration-400 animate-fade-in ${open ? "block -translate-x-2" : "translate-x-full hidden lg:block"}`}
              >
                <Nav lang={lang} />
              </div>
              {!open && (
                <div className="absolute flex right-2 opacity-0 animate-fade-in delay-300 mt-1 lg:mt-0">
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
        <div
          className={`bg-white w-full transition-all duration-400 ${showBio ? "h-[25vh]" : "h-0"}`}
        ></div>
        <div className="flex items-stretch w-full">
          <div className="bg-white flex-1"></div>
          <div
            className="w-full flex items-stretch max-w-5xl relative cursor-pointer"
            onClick={() => setShowBio(!showBio)}
          >
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
        <div className="bg-white w-full h-6"></div>
        <Container
          className={`text-white duration-400 transition-all p-8 px-8 h-[50vh] bg-primary/60 mix-blend-multiply backdrop-blur-xl inset-0 
            ${showBio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
        >
          <div className="lg:text-xl text-center font-semibold font-display leading-tight max-w-3xl mx-auto">
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
                memory, matter and imagination overlap in quiet layers. <br />{" "}
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
