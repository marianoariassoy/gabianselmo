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
              Gabriela Anselmo is a visual artist and scenographer. Her practice
              emerges from an extensive trajectory in scenographic design and
              develops as an exploration of space understood as a repository of
              memory.
              <br />
              <br />
              She trained with her mentor Eva García and later at the Ernesto de
              la Cárcova Higher School of Fine Arts. Since 1989 she has designed
              sets for film, theatre and television. This experience permeates
              her visual work: each piece is conceived as a latent scene, a
              suspended environment where materials, textures and colours shape
              a dramaturgy without actors.
              <br />
              <br />
              In 2020 she returned to painting with renewed intensity and
              experimentation, beginning a period focused on mixed media,
              abstraction and the construction of layered surfaces. Her works
              —exhibited and collected in Argentina, Brazil, Chile and Italy,
              including her participation in the Florence Biennale 2025 and
              presentations in galleries in Rome— operate as sensitive archives:
              traces of time that remain open, inviting the viewer to move
              across layers and activate a personal reading.
              <br />
              <br />
              Her working process is dynamic and physical. Anselmo develops
              backgrounds, objects and textures simultaneously, alternating
              spaces and rhythms. The search that unfolds during the making of
              each piece becomes an essential part of the work itself: a
              continuous dive into materials and associations where forms and
              presences emerge in dialogue with light, always retaining a margin
              of indeterminacy that allows the viewer to complete its meaning.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Page;
