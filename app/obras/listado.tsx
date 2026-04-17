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
      id: 40,
      title: "Inmersión IV",
      image: "/temp/obras/dipticos/1.jpg",
      image_zoom: "",
      image_full: "/temp/obras/dipticos/1b.jpg",
      description: ``,
      category: "dipticos",
    },
    {
      id: 41,
      title: "Inmersión IV",
      image: "/temp/obras/dipticos/2.jpg",
      image_zoom: "",
      image_full: "/temp/obras/dipticos/1b.jpg",
      description: ``,
      category: "dipticos",
    },
    {
      id: 43,
      title: "Inmersión IV",
      image: "/temp/obras/dipticos/3.jpg",
      image_zoom: "",
      image_full: "/temp/obras/dipticos/3b.jpg",
      description: ``,
      category: "dipticos",
    },
    {
      id: 44,
      title: "Inmersión IV",
      image: "/temp/obras/dipticos/4.jpg",
      image_zoom: "",
      image_full: "/temp/obras/dipticos/3b.jpg",
      description: ``,
      category: "dipticos",
    },
    {
      id: 3,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/1.png",
      image_zoom: "/temp/obras/individuales/1b.jpg",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 4,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/2.png",
      image_zoom: "/temp/obras/individuales/3b.jpg",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 5,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/3.png",
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
      image: "/temp/obras/individuales/4.png",
      image_zoom: "/temp/obras/individuales/4b.jpg",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 7,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/6.png",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 167,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/7.png",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 167,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/8.png",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 167,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/20.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 167,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/21.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 167,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/22.jpg",
      image_zoom: "/temp/obras/individuales/22b.jpg",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 167,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/23.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 167,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/24.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 167,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/25.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 167,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/26.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 167,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/27.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 167,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/28.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 167,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/29.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
      category: "individuales",
    },
    {
      id: 167,
      title: "Inmersión IV",
      image: "/temp/obras/individuales/30.jpg",
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
      image_full: "/temp/obras/tripticos/3b.jpg",
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
      image_full: "/temp/obras/tripticos/3b.jpg",
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
      image_full: "/temp/obras/tripticos/3b.jpg",
      image_zoom: "",
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
      image_full: "/temp/obras/tripticos/11b.jpg",
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
      image_full: "/temp/obras/tripticos/11b.jpg",
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
      image_full: "/temp/obras/tripticos/11b.jpg",
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
      image_full: "/temp/obras/tripticos/6b.jpg",

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
      image_full: "/temp/obras/tripticos/6b.jpg",
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
      image_full: "/temp/obras/tripticos/6b.jpg",
      image_zoom: "",
      description: `Técnica mixta
Relieve, collage con materiales reciclados
40 x 53 cm
2025`,
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
              .map((item) => (
                <Card key={item.id} data={item} handleModal={handleModal} />
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
