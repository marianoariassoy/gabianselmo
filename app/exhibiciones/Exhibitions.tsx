"use client";
import { Exhibition } from "@/lib/types";
import Container from "@/components/Container";
import { useState } from "react";
import { Triangle } from "@/lib/icons";

const Exhibitions = ({ data, lang }: { data: Exhibition[]; lang: string }) => {
  const [exhibitionTop, setExhibitionTop] = useState(false);
  const [exhibitionIndividual, setExhibitionIndividual] = useState(false);

  const groupByYear = (items: Exhibition[]) => {
    return items.reduce<Record<number, Exhibition[]>>((acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = [];
      }
      acc[item.year].push(item);
      return acc;
    }, {});
  };

  const renderGroupedExhibitions = (category: string) => {
    const filtered = data.filter((item) => item.category === category);
    const grouped = groupByYear(filtered);

    return Object.entries(grouped)
      .sort(([a], [b]) => Number(b) - Number(a))
      .map(([year, items]) => (
        <div key={year} className="mb-4">
          <h3 className="text-primary font-bold">{year}</h3>

          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <article key={item.id} className="leading-tight">
                <h2 className="font-bold">{item.title}</h2>
                <p className=" whitespace-break-spaces">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      ));
  };

  return (
    <div>
      <div className="w-full bg-[#e6e5e5]">
        <Container className="grid grid-cols-2 gap-4 pb-8">
          <button
            className="flex items-start flex-col cursor-pointer transition-all 
            hover:[&>span]:rotate-90 hover:opacity-80 text-lg"
            onClick={() => setExhibitionTop(!exhibitionTop)}
          >
            <p className="font-bold">
              {lang === "es"
                ? "Exhibiciones Destacadas"
                : "Selected exhibitions"}
            </p>
            <span
              className={`text-primary text-lg transition-all ${exhibitionTop ? "rotate-90" : ""}`}
            >
              <Triangle />
            </span>
          </button>
          <button
            className="flex items-start flex-col cursor-pointer transition-all hover:[&>span]:rotate-90 hover:opacity-80 text-lg"
            onClick={() => setExhibitionIndividual(!exhibitionIndividual)}
          >
            <p className="font-bold">
              {lang === "es" ? "Exhibiciones Individuales" : "Solo Exhibition"}
            </p>
            <span
              className={`text-primary text-lg transition-all ${exhibitionIndividual ? "rotate-90" : ""}`}
            >
              <Triangle />
            </span>
          </button>
        </Container>
      </div>
      <div className="mt-4 mb-8">
        <Container className="grid grid-cols-2 gap-4">
          <div>{exhibitionTop && renderGroupedExhibitions("Destacadas")}</div>
          <div>
            {exhibitionIndividual && renderGroupedExhibitions("Individuales")}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Exhibitions;
