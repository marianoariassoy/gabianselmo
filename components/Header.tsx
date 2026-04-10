"use client";
import { useState, useEffect } from "react";
import TopButton from "./TopButton";
import Container from "./Container";
import Nav from "./Nav";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const Header = () => {
  const { lang } = useLanguage();
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [open, setOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

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
      <header className="fixed w-full top-0 z-50">
        <div className="bg-white">
          <Container>
            <div className="w-full flex items-center justify-between gap-x-4 overflow-hidden relative h-22 bg-white">
              <Link
                href="/"
                className="hover:scale-105 transition-all duration-300"
              >
                <img src="/assets/logo.png" alt="Logo" className="h-12" />
              </Link>
              <Nav lang={lang} />
            </div>
          </Container>
        </div>
      </header>

      <TopButton scrollToTop={scrollToTop} showTopButton={showTopButton} />
    </>
  );
};

export default Header;
