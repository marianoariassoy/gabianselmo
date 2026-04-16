"use client";
import { useState } from "react";
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
    description: "",
  });

  const data = [
    {
      id: 40,
      title: "Inmersión IV",
      image: "/temp/obras/dipticos/1.jpg",
      image_zoom: "",
      description: ``,
      category: "dipticos",
    },
    {
      id: 41,
      title: "Inmersión IV",
      image: "/temp/obras/dipticos/2.jpg",
      image_zoom: "",
      description: ``,
      category: "dipticos",
    },

    {
      id: 3,
      title: "Inmersión IV",
      image: "/temp/obras/3.jpg",
      image_zoom: "/temp/obras/3-zoom.png",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },

    {
      id: 4,
      title: "Inmersión IV",
      image: "/temp/obras/4.jpg",
      image_zoom: "/temp/obras/4-zoom.png",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 5,
      title: "Inmersión IV",
      image: "/temp/obras/5.webp",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 6,
      title: "Inmersión IV",
      image: "/temp/obras/6.webp",
      image_zoom: "",

      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 7,
      title: "Inmersión IV",
      image: "/temp/obras/7.jpg",
      image_zoom: "",

      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },

    {
      id: 68,
      title: "Inmersión IV",
      image: "/temp/obras/tripticos/3.jpg",
      image_zoom: "",

      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "tripticos",
    },
    {
      id: 69,
      title: "Inmersión IV",
      image: "/temp/obras/tripticos/4.jpg",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "tripticos",
    },
    {
      id: 610,
      title: "Inmersión IV",
      image: "/temp/obras/tripticos/5.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "tripticos",
    },

    {
      id: 98,
      title: "Inmersión IV",
      image: "/temp/obras/tripticos/10.jpg",
      image_zoom: "",

      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "tripticos",
    },
    {
      id: 99,
      title: "Inmersión IV",
      image: "/temp/obras/tripticos/11.jpg",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "tripticos",
    },
    {
      id: 90,
      title: "Inmersión IV",
      image: "/temp/obras/tripticos/12.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "tripticos",
    },

    {
      id: 198,
      title: "Inmersión IV",
      image: "/temp/obras/tripticos/6.jpg",
      image_zoom: "",

      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "tripticos",
    },
    {
      id: 919,
      title: "Inmersión IV",
      image: "/temp/obras/tripticos/7.jpg",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "tripticos",
    },
    {
      id: 910,
      title: "Inmersión IV",
      image: "/temp/obras/tripticos/8.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "tripticos",
    },

    {
      id: 1,
      title: "Inmersión IV",
      image: "/temp/obras/1.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 2,
      title: "Inmersión IV",
      image: "/temp/obras/2.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
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
          <div className="grid grid-cols-3 gap-2">
            {data
              .filter((item) => item.category === "individuales")
              .map((item) => (
                <Card key={item.id} data={item} handleModal={handleModal} />
              ))}
          </div>
          <h1 className="text-xl text-primary font-semibold pt-8 pb-4">
            {lang === "es" ? "Dípticos" : "Diptics"}
          </h1>
          <div className="grid grid-cols-3 gap-2">
            {data
              .filter((item) => item.category === "dipticos")
              .map((item) => (
                <Card key={item.id} data={item} handleModal={handleModal} />
              ))}
          </div>
          <h1 className="text-xl text-primary font-semibold pt-8 pb-4">
            {lang === "es" ? "Tripticos" : "Triptics"}
          </h1>
          <div className="grid grid-cols-3 gap-2">
            {data
              .filter((item) => item.category === "tripticos")
              .map((item) => (
                <Card key={item.id} data={item} handleModal={handleModal} />
              ))}
          </div>
        </Container>
      </section>

      {openModal && (
        <Modal
          obraSelected={obraSelected}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default Page;
