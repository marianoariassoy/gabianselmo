"use client";
import { Exhibition } from "@/lib/types";
import Container from "@/components/Container";
import { useState } from "react";
import { Triangle } from "@/lib/icons";

const Exhibitions = ({ data, lang }: { data: Exhibition[]; lang: string }) => {
  const [exhibitionType, setExhibitionType] = useState(0);

  const groupByYear = (items: Exhibition[]) => {
    return items.reduce<Record<number, Exhibition[]>>((acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = [];
      }
      acc[item.year].push(item);
      return acc;
    }, {});
  };

  const renderGroupedExhibitions = (type: number) => {
    const filtered = data.filter((item) => item.exhibition_type === type);
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
                <p className="font-bold">{item.description}</p>
                <p>{item.location}</p>
                <p>{item.date}</p>
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
            hover:[&>span]:rotate-90 hover:opacity-80"
            onClick={() => setExhibitionType(1)}
          >
            <p className="font-bold">
              {lang === "es"
                ? "Exposiciones Destacadas"
                : "Highlighted Exhibitions"}
            </p>
            <span
              className={`text-primary text-lg transition-all ${exhibitionType === 1 ? "rotate-90" : ""}`}
            >
              <Triangle />
            </span>
          </button>
          <button
            className="flex items-start flex-col cursor-pointer transition-all hover:[&>span]:rotate-90 hover:opacity-80"
            onClick={() => setExhibitionType(2)}
          >
            <p className="font-bold">
              {lang === "es"
                ? "Exhibición individual"
                : "Individual Exhibition"}
            </p>
            <span
              className={`text-primary text-lg transition-all ${exhibitionType === 2 ? "rotate-90" : ""}`}
            >
              <Triangle />
            </span>
          </button>
        </Container>
      </div>
      <div className="mt-4 mb-8">
        <Container className="grid grid-cols-2 gap-4">
          <div>{exhibitionType === 1 && renderGroupedExhibitions(1)}</div>
          <div>{exhibitionType === 2 && renderGroupedExhibitions(2)}</div>
        </Container>
      </div>
    </div>
  );
};

export default Exhibitions;
