import Container from "./Container";
import { Exhibition } from "@/lib/types";

const Info = ({
  data,
  showInfo,
  setShowInfo,
}: {
  data: Exhibition;
  showInfo: boolean;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (!data) return null;
  return (
    <div
      className={`fixed w-full bottom-0 left-0 bg-[#c4c4c4] z-50  transition-all duration-300
    ${showInfo ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="pt-4 flex justify-end pr-20">
        <button
          className="hover:text-primary cursor-pointer"
          onClick={() => setShowInfo(false)}
        >
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
      <Container className="pt-4 pb-20">
        <h1 className="font-black">{data.info.title}</h1>
        <p className="whitespace-pre-line leading-tight">
          {data.info.description}
        </p>
      </Container>
    </div>
  );
};

export default Info;
