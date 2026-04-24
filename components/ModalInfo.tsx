"use client";
import { useState } from "react";
import { Obra } from "@/lib/types";

const ModalInfo = ({ data }: { data: Obra }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full bottom-0 left-0 z-50 transition-all">
      <div
        className={`w-full max-w-5xl mx-auto px-4 py-8 pb-10 text-white bg-linear-to-l from-primary/80 to-primary/10 cursor-pointer hover:bg-primary/50 transition-all duration-300 
          ${open ? "translate-y-0" : "translate-y-[calc(100%-2rem)]"}`}
        onClick={() => setOpen(!open)}
      >
        <div className="text-right">
          <h1 className="font-extrabold">{data.title}</h1>
          <p className="whitespace-break-spaces">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
