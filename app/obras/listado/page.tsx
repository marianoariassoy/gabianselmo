"use client";
import { useState } from "react";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { Obra } from "@/lib/types";

const Page = () => {
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
      id: 3,
      title: "Inmersión IV",
      image: "/temp/obras/3.jpg",
      image_zoom: "/temp/obras/3-zoom.png",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
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
    },
    {
      id: 8,
      title: "Inmersión IV",
      image: "/temp/obras/8.jpg",
      image_zoom: "",

      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
    },
    {
      id: 9,
      title: "Inmersión IV",
      image: "/temp/obras/9.jpg",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
    },
    {
      id: 10,
      title: "Inmersión IV",
      image: "/temp/obras/10.webp",
      image_zoom: "",

      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
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
    },
  ];

  const handleModal = (obra: Obra) => {
    setObraSelected(obra);
    setOpenModal(true);
  };

  return (
    <>
      <section className="bg-black/10 mt-20">
        <Container className="grid grid-cols-4 gap-4 py-8">
          {data.map((item) => (
            <Card key={item.id} data={item} handleModal={handleModal} />
          ))}
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
