"use client";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/Container";

const Page = () => {
  const { lang } = useLanguage();

  return (
    <section className="bg-[#e6e5e5] mt-24">
      <Container className="gap-8 grid grid-cols-1 lg:grid-cols-2 py-8">
        <div className="animate-fade-in aspect-square">
          <img
            src="./images/bio-2.jpg"
            className="w-full h-full object-cover "
          />
        </div>
        <div>
          {lang === "es" ? (
            <p className="w-full max-w-xl">
              Gabriela Anselmo es artista plástica y escenógrafa. Su práctica
              nace de una extensa trayectoria en el diseño escenográfico y se
              desarrolla como una investigación sobre el espacio entendido como
              depósito de memoria.
              <br />
              <br />
              Formada junto a su maestra Eva García y posteriormente en la
              Escuela Superior de Arte Ernesto de la Cárcova, desde 1989 ha
              diseñado escenografías para cine, teatro y televisión. Esta
              experiencia atraviesa su producción visual: cada obra se concibe
              como una escena latente, un ambiente suspendido donde materiales,
              texturas y colores configuran una dramaturgia sin actores.
              <br />
              <br />
              En 2020 retomó la pintura de manera intensa y experimental,
              iniciando una etapa centrada en la técnica mixta, la abstracción y
              la construcción de superficies estratificadas. Sus obras
              —exhibidas y coleccionadas en Argentina, Brasil, Chile y en
              Italia, incluyendo su participación en la Florence Biennale 2025 y
              presentaciones en galerías de Roma— funcionan como archivos
              sensibles: rastros temporales que permanecen abiertos e invitan a
              la mirada a desplazarse entre capas y a activar una lectura
              personal.
              <br />
              <br />
              Su proceso de trabajo es dinámico y corporal. Anselmo desarrolla
              fondos, objetos y texturas en simultáneo, alternando espacios y
              ritmos. La búsqueda durante la realización de cada obra es parte
              esencial de la pieza final: un buceo continuo en materiales y
              asociaciones donde emergen formas y presencias que dialogan con la
              luz, conservando siempre un margen de indeterminación que permite
              al espectador completar el sentido.
            </p>
          ) : (
            <p className="w-full max-w-md">
              Gabriela Anselmo is a plastic and scenographic artist. Her
              practice began from a long trajectory in the scenographic design
              and developed as a research about the space understood as a
              depository of memory.
              <br />
              <br />
              The composition of the work is dynamic and corporeal. Anselmo
              develops funds, objects and textures in synchrony, alternating
              spaces and rhythms. The search during the realization of each work
              is part of the final piece: a continuous sea in materials and
              associations where shapes and presences emerge that converse with
              the light, conserving always a margin of indeterminacy that allows
              the viewer to complete the meaning.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Page;
