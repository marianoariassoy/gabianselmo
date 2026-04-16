import { Forward } from "@/lib/icons";
import Container from "@/components/Container";

const HeaderObras = ({ lang }: { lang: string }) => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#e6e5e5] mt-24">
      <Container className="gap-8 grid grid-cols-1 lg:grid-cols-2 py-8">
        <div className="animate-fade-in aspect-square">
          <img
            src="./images/bio.jpg"
            className="object-cover w-full h-full object-center"
          />
        </div>
        <div className="flex flex-col justify-between gap-y-4 relative">
          <div>
            <p className="text-xl lg:text-2xl font-bold italic text-primary leading-tight mb-8">
              {lang === "es"
                ? "La fuente de inspiración en mi pintura y en la poesía es el fondo del mar, el agua, sus colores, sus sonidos."
                : "The inspiration for my painting and poetry is the sea, the water, its colors, its sounds."}
            </p>
            <p className=" whitespace-break-spaces leading-tight">
              {lang === "es"
                ? `Las obras surgen de ese buceo como hallazgos materiales. 
            
Formas,objetos y texturas se ensamblan en composiciones de alta intensidad, donde cada elemento afirma su presencia.
      
Cada pieza instala una respiración (...) un pulso que organiza el recorrido. 
          
La mirada se desplaza, explora superficies, descubre ritmos y presencias que se revelan en el tiempo. En ese movimiento, lo imaginario adquiere cuerpo y construye una experiencia directa, sensible.`
                : `The works are inspired by that sea as material finds. Shapes, objects and textures are assembled in high-intensity compositions where each element affirms its presence.

          Each piece installs a breath (...) a pulse that organizes the journey. The gaze shifts, explores surfaces, discovers rhythms and presences that reveal in time. In that movement, the imaginary acquires body and builds a direct experience.`}
            </p>
          </div>

          <div className="flex justify-end">
            <button
              className="text-primary text-4xl hover:text-foreground cursor-pointer rotate-90"
              onClick={() => handleScroll("obras")}
            >
              <Forward />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeaderObras;
