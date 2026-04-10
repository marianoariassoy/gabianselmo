"use client";
import { Forward } from "@/lib/icons";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const Page = () => {
  const { lang } = useLanguage();

  return (
    <section className="gap-x-12 gap-y-12 grid grid-cols-1 lg:grid-cols-2 bg-black/10 items-stretch mt-24">
      <div
        className="overflow-hidden h-full aspect-square animate-fade-in"
        style={{
          // backgroundImage: "url('./images/bio.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src="./images/bio.jpg"
          alt="w-full h-full object-cover object-center"
        />
      </div>
      <div className="py-8 lg:py-14 flex flex-col gap-y-8 relative max-w-md px-4 lg:px-0">
        <p className="text-3xl font-bold italic text-primary">
          {lang === "es"
            ? "La fuente de inspiración en mi pintura y en la poesía es el fondo del mar, el agua, sus colores, sus sonidos."
            : "The inspiration for my painting and poetry is the sea, the water, its colors, its sounds."}
        </p>
        <p>
          {lang === "es"
            ? `Las obras surgen de ese buceo como hallazgos materiales. Formas,
          objetos y texturas se ensamblan en composiciones de alta intensidad,
          donde cada elemento afirma su presencia.
      
          Cada pieza instala una respiración (...) un pulso que organiza el
          recorrido. La mirada se desplaza, explora superficies, descubre ritmos
          y presencias que se revelan en el tiempo. En ese movimiento, lo
          imaginario adquiere cuerpo y construye una experiencia directa,
          sensible.`
            : `The works are inspired by that sea as material finds. Shapes, objects and textures are assembled in high-intensity compositions where each element affirms its presence.

          Each piece installs a breath (...) a pulse that organizes the journey. The gaze shifts, explores surfaces, discovers rhythms and presences that reveal in time. In that movement, the imaginary acquires body and builds a direct experience.`}
        </p>
        <div className="flex justify-end mt-12">
          <Link
            href="/obras/listado"
            className="text-primary text-4xl hover:text-foreground"
          >
            <Forward />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
