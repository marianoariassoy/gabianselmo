"use client";
import { useLanguage } from "@/context/LanguageContext";
import Exhibitions from "./Exhibitions";
import { Exhibition } from "@/lib/types";
import Slider from "./Slider";

const Page = () => {
  const { lang } = useLanguage();

  const data: Exhibition[] = [
    {
      id: 1,
      title: "Mujer naturaleza",
      year: 2026,
      exhibition_type: 1,
      description: `Exhibición colectiva.
Sheraton Pilar Hotel & Convention Center / Galería Hasta la Raíz`,
      location: "Buenos Aires — Argentina",
      date: "Marzo 2026",
    },
    {
      id: 2,
      title: "Consulado General y Centro de Promoción Argentino en Milán",
      year: 2026,
      exhibition_type: 1,
      description: `Exhibición colectiva.
Galería Hasta la Raíz`,
      location: "Milán — Italia",
      date: "Febrero 2026",
    },
    {
      id: 3,
      title: "XV Florence Biennale",
      year: 2025,
      exhibition_type: 1,
      description: `Exhibición colectiva.
Florence Biennale`,
      location: "Florencia — Italia",
      date: "Octubre 2025",
    },
    {
      id: 4,
      title: "Orbital",
      year: 2025,
      exhibition_type: 1,
      description: `Exhibición colectiva.
Galería Hasta la Raíz`,
      location: "Cariló, Buenos Aires — Argentina",
      date: "Diciembre 2025",
    },
    {
      id: 5,
      title: "MAPA — Feria de arte internacional",
      year: 2025,
      exhibition_type: 1,
      description: `Exhibición colectiva.
Galería Hasta la Raíz `,
      location: "Buenos Aires — Argentina",
      date: "Abril 2025",
    },
    {
      id: 6,
      title: "Galería Hasta la Raíz — Brasil",
      year: 2024,
      exhibition_type: 1,
      description: `Exhibición colectiva`,
      location: "Camboriú, Santa Catarina — Brasil",
      date: "Octubre 2024",
    },
    {
      id: 7,
      title: "En blanco",
      year: 2024,
      exhibition_type: 1,
      description: `Exhibición colectiva.
Galería Hasta la Raíz Cariló`,
      location: "Cariló, Buenos Aires — Argentina",
      date: "Noviembre 2024",
    },
    {
      id: 8,
      title: "Opuestos",
      year: 2024,
      exhibition_type: 1,
      description: `Exhibición colectiva.
Galería Hasta la Raíz Cariló`,
      location: "Cariló, Buenos Aires — Argentina",
      date: "Mayo 2024",
    },
    {
      id: 9,
      title: "Art Week Chile",
      year: 2023,
      exhibition_type: 1,
      description: `Exhibición colectiva — Feria de arte internacional.
Galería Hasta la Raíz`,
      location: "Santiago — Chile",
      date: "Noviembre 2023",
    },
    {
      id: 10,
      title: "Sinergia",
      year: 2023,
      exhibition_type: 1,
      description: `Exhibición colectiva.
Galería Hasta la Raíz`,
      location: " Cariló, Buenos Aires — Argentina",
      date: "Julio 2023",
    },
    {
      id: 11,
      title: "Scene latenti (Escenas latentes)",
      year: 2026,
      exhibition_type: 2,
      description: `Ciclo Contemporaneità Argentina
ContArt Gallery
`,
      location: "Roma — Italia",
      date: "Febrero 2026",
    },
  ];

  return (
    <section className="flex flex-col mt-24">
      <Slider />
      <Exhibitions data={data} lang={lang} />
    </section>
  );
};

export default Page;
