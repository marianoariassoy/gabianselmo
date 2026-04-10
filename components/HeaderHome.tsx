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
            <div className="w-full flex items-center justify-between gap-x-4 overflow-hidden relative h-22 bg-white">
              <img
                src="/assets/logo.png"
                alt="Logo"
                className="h-12 -translate-x-1"
              />
              <div
                className={`transition-all duration-400 ${open ? "-translate-x-2" : "translate-x-full"}`}
              >
                <Nav lang={lang} />
              </div>
              {!open && (
                <div className="absolute flex right-2 opacity-0 animate-fade-in delay-300">
                  <button
                    className="uppercase font-bold cursor-pointer border-2 border-primary w-40 h-10 text-primary flex items-center justify-center hover:bg-primary hover:text-white border-r-0 font-display text-xs"
                    onClick={() => handleChangeLang("es")}
                  >
                    Español
                  </button>
                  <button
                    className="uppercase font-bold cursor-pointer border-2 border-primary w-40 h-10 text-primary flex items-center justify-center hover:bg-primary hover:text-white font-display text-xs"
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
            className="w-full max-w-6xl relative cursor-pointer"
            onClick={() => setShowBio(!showBio)}
          >
            <div className="absolute w-full h-full bg-white z-10 animate-fade-out"></div>
            <img
              src="/assets/letras.svg"
              alt="Gabriela Anselmo"
              height="20px"
              className="w-full "
            />
          </div>
          <div className="bg-white flex-1"></div>
        </div>
        <div className="bg-white w-full h-6"></div>
        <Container
          className={`bg-linear-to-r from-primary/90 to-primary/40 cursor-pointer hover:bg-primary/50 text-white duration-400 transition-all p-8 px-8 h-[50vh] 
            ${showBio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
        >
          {lang === "es" ? (
            <p className="text-xl">
              La obra de Gabriela Anselmo construye escenas latentes:
              superficies donde memoria, materia e imaginación se superponen en
              capas silenciosas. <br />
              Desde una práctica arraigada en la escenografía, sus trabajos
              exploran el espacio como un territorio abierto, un archivo
              sensible donde emergen mundos suspendidos entre la fantasía y lo
              real.
              <br />
              Collages, texturas y objetos dialogan con la luz y el tiempo,
              invitando a una mirada íntima que descubre, en cada detalle,
              nuevas posibilidades de sentido.
            </p>
          ) : (
            <p className="text-xl">
              The work of Gabriela Anselmo builds latent scenes: surfaces where
              memory, matter and imagination are superimposed on layers of
              silence. <br />
              From a practice in the scenographic design, her works explore the
              space as an open territory, a sensitive file where worlds
              suspended between the fantasy and reality emerge.
              <br />
              Collages, textures and objects converse with light and time,
              inviting a close-up view that discovers, in each detail, new
              possibilities of sense.
            </p>
          )}
        </Container>
      </header>
    </>
  );
};

export default Header;
