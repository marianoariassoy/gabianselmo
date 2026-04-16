"use client";
import { useState, useEffect } from "react";
import TopButton from "./TopButton";
import Container from "./Container";
import Nav from "./Nav";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import HamburgerButton from "./HamburgerButton";

const Header = () => {
  const { lang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024; // mismo breakpoint que lg de Tailwind
      setMenuOpen(isDesktop);
    };

    handleResize(); // ejecuta al cargar
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      // Botón scroll top (aparece después de 1 viewport aprox)
      const trigger = window.innerHeight * 0.2;
      setShowTopButton(scrollY > trigger);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="fixed w-full top-0 z-50 transition-all duration-400">
        <div className="bg-white">
          <Container>
            <div className="w-full flex items-start lg:items-center transition-all justify-between gap-x-4 overflow-hidden relative py-4 bg-white">
              <Link
                href="/"
                className="hover:scale-105 transition-all duration-300"
              >
                <img src="/assets/logo.png" alt="Logo" className="h-12" />
              </Link>
              <div className="flex flex-col gap-4 justify-end items-end transition-all">
                <HamburgerButton
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                />
                {menuOpen && <Nav lang={lang} />}
              </div>
            </div>
          </Container>
        </div>
      </header>

      <TopButton scrollToTop={scrollToTop} showTopButton={showTopButton} />
    </>
  );
};

export default Header;
