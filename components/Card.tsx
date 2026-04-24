"use client";
import { Obra } from "@/lib/types";
import React, { useRef } from "react";

interface data {
  id: number;
  title: string;
  image: string;
  image_zoom?: string;
  description: string;
}

interface Props {
  data: Obra;
  handleModal: () => void;
}

const Card = ({ data, handleModal }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLImageElement>(null);
  const frame = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !zoomRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 12; // intensidad X
    const moveY = (y / rect.height - 0.5) * 12; // intensidad Y

    if (frame.current) cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      if (zoomRef.current) {
        zoomRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (!zoomRef.current) return;

    if (frame.current) cancelAnimationFrame(frame.current);

    zoomRef.current.style.transform = `translate(0px, 0px) scale(1.1)`;
  };

  return (
    <article className="cursor-pointer group" onClick={handleModal}>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="aspect-square overflow-hidden relative bg-black/10"
      >
        <div className="absolute inset-0 p-6">
          {/* Imagen base */}
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-contain object-center transition-transform duration-400 group-hover:scale-105"
          />

          {/* Imagen zoom con parallax */}
          {data.image_zoom && (
            <img
              ref={zoomRef}
              src={data.image_zoom}
              alt={data.title}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-[opacity] duration-300 group-hover:opacity-100"
              style={{ transform: "translate(0px, 0px) scale(1.1)" }}
            />
          )}
        </div>

        {/* Overlay sutil opcional */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400 pointer-events-none" />
      </div>
    </article>
  );
};

export default Card;
