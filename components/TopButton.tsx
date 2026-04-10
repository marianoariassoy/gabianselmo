import { Forward } from "@/lib/icons";

const TopButton = ({
  scrollToTop,
  showTopButton,
}: {
  scrollToTop: () => void;
  showTopButton: boolean;
}) => {
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-4 z-50 bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 ${
        showTopButton
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="-rotate-90 text-xl">
        <Forward />
      </span>
    </button>
  );
};

export default TopButton;
