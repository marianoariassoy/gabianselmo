"use client";
import { Fragment, useState, useEffect } from "react";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { Obra } from "@/lib/types";
import Axios from "axios";
import Loader from "@/components/Loader";

const Page = ({ lang }: { lang: string }) => {
  const api = "https://gabrielaanselmo.com/backend/api/obras/ " + lang;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [obraSelected, setObraSelected] = useState<Obra>({
    id: 0,
    title: "",
    image: "",
    image_zoom: "",
    image_full: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(api);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [api]);

  const handleModal = (obra: Obra) => {
    setObraSelected(obra);
    setOpenModal(true);
  };

  if (loading) {
    return (
      <div className="mt-8 px-12">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <section className="bg-[#e6e5e5] scroll-m-20 pb-20" id="obras">
        <Container>
          <h1 className="text-xl text-primary font-semibold pt-8 pb-4">
            {lang === "es" ? "Individuales" : "Individuals"}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {data
              .filter((item) => item.category === "Individuales")
              .map((item) => (
                <Card key={item.image} data={item} handleModal={handleModal} />
              ))}
          </div>
          <h1 className="text-xl text-primary font-semibold pt-8 pb-4">
            {lang === "es" ? "Dípticos" : "Diptics"}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {data
              .filter((item) => item.category === "Dípticos")
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
              .filter((item) => item.category === "Tripticos")
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
