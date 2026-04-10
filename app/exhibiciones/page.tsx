"use client";
import { useState } from "react";
import Container from "@/components/Container";
import { Exhibition } from "@/lib/types";
import Info from "@/components/Info";
import { Forward } from "@/lib/icons";

const Page = () => {
  const [exhibitionType, setExhibitionType] = useState(1);
  const [year, setYear] = useState<number | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const exhibitionsType = [
    { id: 1, title: "Exhibición/es individual/es" },
    { id: 2, title: "Exposiciones destacadas" },
  ];

  const data: Exhibition[] = [
    {
      id: 1,
      title: "Galería del Sol",
      year: 2026,
      exhibition_type: 1,
      images: [
        { id: 1, image: "/temp/expo/1.jpg" },
        { id: 2, image: "/temp/expo/3.jpg" },
        { id: 3, image: "/temp/expo/3.jpg" },
      ],
      description: `del 4 al 26 de junio, 2026
Curador: José Ibañez
Santiago de Chile`,
      info: {
        title: "Texto curatorial",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. `,
      },
    },
    {
      id: 2,
      title: "Otro Exposición",
      year: 2026,
      exhibition_type: 1,
      images: [
        { id: 1, image: "/temp/expo/4.jpg" },
        { id: 2, image: "/temp/expo/5.jpg" },
        { id: 3, image: "/temp/expo/6.jpg" },
      ],
      description: `Lorem ipsum dolor sit amet`,
      info: {
        title: "",
        description: ``,
      },
    },
    {
      id: 3,
      title: "Exhibición Individual de 2025",
      year: 2025,
      exhibition_type: 1,
      images: [
        { id: 1, image: "/temp/expo/1.jpg" },
        { id: 2, image: "/temp/expo/3.jpg" },
        { id: 3, image: "/temp/expo/3.jpg" },
      ],
      description: `Curador: José Ibañez
Santiago de Chile`,
      info: {
        title: "Texto curatorial",
        description: `Lorem ipsum dolor sit amet...`,
      },
    },
    {
      id: 4,
      title: "Exposición Destacada",
      year: 2026,
      exhibition_type: 2,
      images: [
        { id: 1, image: "/temp/expo/1.jpg" },
        { id: 2, image: "/temp/expo/3.jpg" },
        { id: 3, image: "/temp/expo/3.jpg" },
      ],
      description: `del 1 al 10 de mayo, 2026
Curador: José Ibañez
Buenos Aires`,
      info: {
        title: "Texto curatorial",
        description: `Lorem ipsum dolor sit amet...`,
      },
    },
  ];

  // 🎯 años dinámicos
  const years = Array.from(
    new Set(
      data
        .filter((item) => item.exhibition_type === exhibitionType)
        .map((item) => item.year),
    ),
  ).sort((a, b) => b - a);

  const activeYear = year ?? years[0];

  // 🎯 trabajos filtrados
  const filtered = data.filter(
    (item) =>
      item.exhibition_type === exhibitionType &&
      (activeYear ? item.year === activeYear : true),
  );

  // 🎯 seleccionar automáticamente
  const safeIndex = currentIndex >= filtered.length ? 0 : currentIndex;
  const selected = filtered[safeIndex] ?? null;

  const handleNext = () => {
    if (filtered.length === 0) return;

    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  };

  return (
    <>
      <section className="flex flex-col mt-24">
        {/* Header filtros */}
        <div className="bg-black/10 py-8">
          <Container className="grid grid-cols-4 gap-4 font-display text-sm font-semibold">
            {/* Categorías */}
            <div className="flex flex-col">
              {exhibitionsType.map((item) => (
                <button
                  key={item.id}
                  className={`text-left cursor-pointer hover:text-primary ${
                    exhibitionType === item.id ? "text-primary" : ""
                  }`}
                  onClick={() => {
                    setExhibitionType(item.id);
                    setYear(null);
                  }}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Años */}
            <div className="pt-10">
              <ul className="flex flex-col">
                {years.map((y) => (
                  <li key={y}>
                    <button
                      className={`cursor-pointer hover:text-primary ${
                        activeYear === y ? "text-primary" : ""
                      }`}
                      onClick={() => setYear(y)}
                    >
                      {y}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>

        {/* Trabajo seleccionado */}
        <div className="bg-black/15 py-8">
          <Container className="grid grid-cols-4 gap-x-4 relative">
            <button
              onClick={handleNext}
              disabled={filtered.length <= 1}
              className={`absolute bottom-0 right-0 z-30 text-4xl translate-x-14 transition-colors
    ${
      filtered.length <= 1
        ? "text-primary/30 cursor-not-allowed pointer-events-none"
        : "text-primary hover:text-foreground cursor-pointer"
    }`}
            >
              <Forward />
            </button>

            {selected && (
              <>
                {/* Info */}
                <div>
                  <h1 className="text-primary font-black">{selected.title}</h1>
                  <p className="whitespace-pre-line leading-tight">
                    {selected.description}
                  </p>
                  {selected.info.description && (
                    <button
                      className="cursor-pointer font-display text-sm font-semibold hover:text-primary"
                      onClick={() => setShowInfo(!showInfo)}
                    >
                      +info
                    </button>
                  )}
                </div>

                {/* Imágenes */}
                {selected.images?.slice(0, 3).map((img, i) => (
                  <div
                    key={i}
                    className="aspect-4/5 overflow-hidden bg-black/10"
                  >
                    <img
                      src={img.image}
                      alt={selected.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </>
            )}
          </Container>
        </div>
      </section>

      <Info data={selected} showInfo={showInfo} setShowInfo={setShowInfo} />

      <div className="bg-black/15 w-full h-full fixed -z-10"></div>
    </>
  );
};

export default Page;
