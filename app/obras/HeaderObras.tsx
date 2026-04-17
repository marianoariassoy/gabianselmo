import Container from "@/components/Container";

const HeaderObras = ({ lang }: { lang: string }) => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#e6e5e5] mt-22">
      <Container className="gap-8 grid grid-cols-1 lg:grid-cols-2 py-8">
        <div className="animate-fade-in aspect-square">
          <img
            src="./images/bio.jpg"
            className="object-cover w-full h-full object-center"
          />
        </div>
        <div className="flex flex-col justify-between gap-y-4 relative">
          <div>
            <p className="text-xl lg:text-[1.75rem] font-bold italic text-primary leading-tight mb-4">
              {lang === "es"
                ? "La fuente de inspiración en mi pintura y en la poesía es el fondo del mar, el agua, sus colores, sus sonidos."
                : "The source of inspiration in my painting and in my poetry is the depth of the sea — the water, its colours, its sounds"}
            </p>
            {lang === "es" ? (
              <p className="text-lg lg:text-xl leading-tight">
                Las obras surgen de ese buceo como hallazgos materiales.
                Formas,objetos y texturas se ensamblan en composiciones de alta
                intensidad, donde cada elemento afirma su presencia.
                <br /> <br />
                Cada pieza instala una respiración (...) un pulso que organiza
                el recorrido. La mirada se desplaza, explora superficies,
                descubre ritmos y presencias que se revelan en el tiempo.
                <br /> <br />
                En ese movimiento, lo imaginario adquiere cuerpo y construye una
                experiencia directa, sensible.
              </p>
            ) : (
              <p className="text-lg  lg:text-xl leading-tight">
                From that dive the works emerge: material discoveries. Forms,
                objects and textures assembling and concentrating energy.
                <br /> <br />
                Each piece establishes a breath (…) a pulse that organizes the
                experience.
                <br /> <br />
                The gaze moves. It explores surfaces. It discovers rhythms and
                presences that reveal themselves over time. In that movement,
                the imaginary takes on body and unfolds as a direct, sensory
                experience.
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              className="text-primary text-4xl hover:text-foreground cursor-pointer rotate-90"
              onClick={() => handleScroll("obras")}
            >
              <img
                src="./assets/forward.svg"
                alt=""
                className="h-8 hover:scale-105 transition-all"
              />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeaderObras;
