"use client";
import { Fragment, useState } from "react";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { Obra } from "@/lib/types";

const Page = ({ lang }: { lang: string }) => {
  const [openModal, setOpenModal] = useState(false);
  const [obraSelected, setObraSelected] = useState<Obra>({
    id: 0,
    title: "",
    image: "",
    image_zoom: "",
    image_full: "",
    description: "",
  });

  const data = [
    {
      id: 1,
      title: "Burbuja I",
      image: "/temp/obras/individuales/1.png",
      image_zoom: "/temp/obras/individuales/1b.jpg",
      description: `Técnica mixta
Relieve, collage sobre madera
30 x 30 cm
Año: 2023`,
      category: "individuales",
    },
    {
      id: 2,
      title: "Burbuja II",
      image: "/temp/obras/individuales/2.png",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage sobre madera
30 x 30 cm
Año: 2023
`,
      category: "individuales",
    },
    {
      id: 3,
      title: "Burbuja III",
      image: "/temp/obras/individuales/3.png",
      image_zoom: "/temp/obras/individuales/3b.jpg",
      description: `Técnica mixta
Relieve, collage sobre madera
30 x 30 cm
Año: 2023
`,
      category: "individuales",
    },
    {
      id: 4,
      title: "Burbuja IV",
      image: "/temp/obras/individuales/4.png",
      image_zoom: "/temp/obras/individuales/4b.jpg",
      description: `Técnica mixta
Relieve, collage sobre madera
30 x 30 cm diámetro
Año: 2023

`,
      category: "individuales",
    },
    {
      id: 5,
      title: "Pilago",
      image: "/temp/obras/individuales/pilago.png",
      image_zoom: "",
      description: `Técnica mixta
Medidas 24 cm diámetro
Ańo 2023
`,
      category: "individuales",
    },
    {
      id: 6,
      title: "Iricencias",
      image: "/temp/obras/individuales/iridiscencias.png",
      image_zoom: "/temp/obras/individuales/iridiscencias_zoom.webp",
      description: `Técnica mixta
Medidas 54cm
Ańo 2022
`,
      category: "individuales",
    },
    {
      id: 7,
      title: "Fluidez cósmica",
      image: "/temp/obras/individuales/6.png",
      image_zoom: "/temp/obras/individuales/26.jpg",
      description: `Técnica mixta
Relieve, collage sobre madera
80 cm de diámetro
Año: 2026
`,
      category: "individuales",
    },
    {
      id: 8,
      title: "Burbuja 1",
      image: "/temp/obras/individuales/7.png",
      image_zoom: "/temp/obras/individuales/21.jpg",
      description: `Técnica mixta
Relieve, collage sobre madera
30 x 30 cm
Año: 2023
`,
      category: "individuales",
    },
    {
      id: 9,
      title: "",
      image: "/temp/obras/individuales/8.png",
      image_zoom: "/temp/obras/individuales/27.jpg",
      description: ``,
      category: "individuales",
    },
    {
      id: 10,
      title: "Piedra Azul",
      image: "/temp/obras/individuales/piedraazul.png",
      image_zoom: "/temp/obras/individuales/piedraazul_zoom.webp",
      description: `Técnica mixta. Soporte madera. 
Medidas: 40 cm de diámetro
Año: 2024
`,
      category: "individuales",
    },

    {
      id: 11,
      title: "V",
      image: "/temp/obras/individuales/20.jpg",
      image_zoom: "",
      description: ``,
      category: "individuales",
    },
    {
      id: 12,
      title: "Abismo de nebularis",
      image: "/temp/obras/individuales/nebularis.jpg",
      image_zoom: "",
      description: `Técnica mixta. 
Plástico, metal, madera, papel, tinta, hilos de bronce y cobre.
40 x 50 cm 
Año: 2023
`,
      category: "individuales",
    },
    {
      id: 13,
      title: "Océano del génesis",
      image: "/temp/obras/individuales/29.jpg",
      image_zoom: "",
      description: `Técnica mixta
50 x 70 cm
Año: 2026`,
      category: "individuales",
    },
    {
      id: 14,
      title: "",
      image: "/temp/obras/individuales/30.jpg",
      image_zoom: "",
      description: ``,
      category: "individuales",
    },

    {
      id: 15,
      title: "Fuego 1",
      image: "/temp/obras/individuales/fuego.jpg",
      image_zoom: "",
      description: `Técnica mixta. 
68cm x 50cm
Año: 2023
`,
      category: "individuales",
    },
    {
      id: 16,
      title: "Fuego 2",
      image: "/temp/obras/individuales/22.jpg",
      image_zoom: "",
      description: `Técnica mixta. 
44cm x 62cm
Año: 2023
`,
      category: "individuales",
    },

    {
      id: 17,
      title: "",
      image: "/temp/obras/individuales/24.jpg",
      image_zoom: "",
      description: `
`,
      category: "individuales",
    },
    {
      id: 18,
      title: "",
      image: "/temp/obras/individuales/23.jpg",
      image_zoom: "",
      description: ``,
      category: "individuales",
    },

    {
      id: 19,
      title: "",
      image: "/temp/obras/individuales/25.jpg",
      image_zoom: "",
      description: ``,
      category: "individuales",
    },
    {
      id: 20,
      title: "",
      image: "/temp/obras/individuales/28.jpg",
      image_zoom: "",
      description: ``,
      category: "individuales",
    },

    {
      id: 40,
      title: "Profundo",
      image: "/temp/obras/dipticos/1.jpg",
      image_zoom: "",
      image_full: "/temp/obras/dipticos/1b.jpg",
      description: `Técnica: tinta sobre papel.
      Medidas: 30cm x 21cm
      Año: 2022`,
      category: "dipticos",
    },
    {
      id: 41,
      title: "Profundo",
      image: "/temp/obras/dipticos/2.jpg",
      image_zoom: "",
      image_full: "/temp/obras/dipticos/1b.jpg",
      description: `Técnica: tinta sobre papel.
      Medidas: 30cm x 21cm
      Año: 2022`,
      category: "dipticos",
    },

    {
      id: 68,
      title: "Profundo 2",
      image: "/temp/obras/tripticos/3.jpg",
      image_zoom: "",
      image_full: "/temp/obras/tripticos/3b.jpg",
      description: `Técnica: Tinta sobre papel
Medidas: 30cm x 21cm
Año: 2022`,
      category: "tripticos",
    },
    {
      id: 69,
      title: "Profundo 2",
      image: "/temp/obras/tripticos/4.jpg",
      image_full: "/temp/obras/tripticos/3b.jpg",
      description: `Técnica: Tinta sobre papel
Medidas: 30cm x 21cm
Año: 2022`,
      category: "tripticos",
    },
    {
      id: 610,
      title: "Profundo 2",
      image: "/temp/obras/tripticos/5.jpg",
      image_full: "/temp/obras/tripticos/3b.jpg",
      image_zoom: "",
      description: `Técnica: Tinta sobre papel
Medidas: 30cm x 21cm
Año: 2022`,
      category: "tripticos",
    },

    {
      id: 90,
      title: "Serie Planeta",
      image: "/temp/obras/tripticos/12.jpg",
      image_full: "/temp/obras/tripticos/11b.jpg",
      image_zoom: "",
      description: `Técnica Mixta 
Relieve, collage con materiales reciclados
40 x 53 cm
Año: 2023
`,
      category: "tripticos",
    },
    {
      id: 98,
      title: "Serie Planeta",
      image: "/temp/obras/tripticos/10.jpg",
      image_zoom: "",
      image_full: "/temp/obras/tripticos/11b.jpg",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
Año: 2023`,
      category: "tripticos",
    },
    {
      id: 99,
      title: "Serie Planeta",
      image: "/temp/obras/tripticos/11.jpg",
      image_full: "/temp/obras/tripticos/11b.jpg",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
Año: 2023`,
      category: "tripticos",
    },

    {
      id: 198,
      title: "Azul",
      image: "/temp/obras/tripticos/6.jpg",
      image_zoom: "",
      image_full: "/temp/obras/tripticos/6b.jpg",
      description: `Técnica: mixta. Soporte: papel.
Medidas: 21cm x 30cm
Año: 2022
`,
      category: "tripticos",
    },
    {
      id: 919,
      title: "Azul",
      image: "/temp/obras/tripticos/7.jpg",
      image_full: "/temp/obras/tripticos/6b.jpg",
      description: `Técnica: mixta. Soporte: papel.
Medidas: 21cm x 30cm
Año: 2022
`,
      category: "tripticos",
    },
    {
      id: 910,
      title: "Azul",
      image: "/temp/obras/tripticos/8.jpg",
      image_full: "/temp/obras/tripticos/6b.jpg",
      image_zoom: "",
      description: `Técnica: mixta. Soporte: papel.
Medidas: 21cm x 30cm
Año: 2022
`,
      category: "tripticos",
    },

    {
      id: 910,
      title: "Espectral",
      image: "/temp/obras/tripticos/espectral1.jpg",
      image_full: "/temp/obras/tripticos/espectral_full.jpg",
      image_zoom: "",
      description: `Técnica: Tinta sobre papel
Medidas: 30cm x 21cm
Año: 2022
`,
      category: "tripticos",
    },
    {
      id: 910,
      title: "Espectral",
      image: "/temp/obras/tripticos/espectral2.jpg",
      image_full: "/temp/obras/tripticos/espectral_full.jpg",
      image_zoom: "",
      description: `Técnica: Tinta sobre papel
Medidas: 30cm x 21cm
Año: 2022
`,
      category: "tripticos",
    },
    {
      id: 910,
      title: "Espectral",
      image: "/temp/obras/tripticos/espectral3.jpg",
      image_full: "/temp/obras/tripticos/espectral_full.jpg",
      image_zoom: "",
      description: `Técnica: Tinta sobre papel
Medidas: 30cm x 21cm
Año: 2022
`,
      category: "tripticos",
    },
  ];

  const handleModal = (obra: Obra) => {
    setObraSelected(obra);
    setOpenModal(true);
  };

  return (
    <>
      <section className="bg-[#e6e5e5] scroll-m-20 pb-20" id="obras">
        <Container>
          <h1 className="text-xl text-primary font-semibold pt-8 pb-4">
            {lang === "es" ? "Individuales" : "Individuals"}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {data
              .filter((item) => item.category === "individuales")
              .map((item) => (
                <Card key={item.image} data={item} handleModal={handleModal} />
              ))}
          </div>
          <h1 className="text-xl text-primary font-semibold pt-8 pb-4">
            {lang === "es" ? "Dípticos" : "Diptics"}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {data
              .filter((item) => item.category === "dipticos")
              .map((item, index) => {
                const pos = index % 3;
                return pos !== 1 ? (
                  <Card
                    key={item.image}
                    data={item}
                    handleModal={handleModal}
                  />
                ) : (
                  <Fragment key={index}>
                    <Card
                      key={item.image}
                      data={item}
                      handleModal={handleModal}
                    />
                    <div></div>
                  </Fragment>
                );
              })}
          </div>
          <h1 className="text-xl text-primary font-semibold pt-8 pb-4">
            {lang === "es" ? "Tripticos" : "Triptics"}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {data
              .filter((item) => item.category === "tripticos")
              .map((item, index) => (
                <Card key={index} data={item} handleModal={handleModal} />
              ))}
          </div>
        </Container>
      </section>

      {openModal && (
        <Modal obraSelected={obraSelected} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default Page;
