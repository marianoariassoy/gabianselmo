import { Instagram } from "@/lib/icons";

const Social = () => {
  return (
    <div>
      <a
        href="https://www.instagram.com/gabianselmo_arte/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-foreground text-lg"
      >
        <Instagram />
      </a>
    </div>
  );
};

export default Social;
