import { Obra } from "@/lib/types";
import React from "react";
import ModalInfo from "./ModalInfo";

const modal = ({
  obraSelected,
  setOpenModal,
}: {
  obraSelected: Obra;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-white/50 backdrop-blur-md p-8 lg:p-14 pb-8 cursor-pointer z-50 animate-fade-in"
        onClick={() => setOpenModal(false)}
      >
        <img
          src={
            obraSelected.image_full
              ? obraSelected.image_full
              : obraSelected.image
          }
          className="h-full w-full object-contain object-center"
        />

        <button className="absolute top-12 right-8 hover:text-primary cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <ModalInfo obraSelected={obraSelected} />
    </>
  );
};

export default modal;
