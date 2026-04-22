"use client";
import Container from "@/components/Container";
import Form from "@/components/Form";
import { useLanguage } from "@/context/LanguageContext";

const Page = () => {
  const data = [
    {
      id: 4,
      image: "/temp/3.webp",
    },
  ];

  const { lang } = useLanguage();

  return (
    <section
      className="h-full mt-24 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${data[0].image})` }}
    >
      <div className="py-20 bg-black/30">
        <Container>
          <div className="max-w-3xl mx-auto flex-col gap-y-8">
            <Form lang={lang} />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Page;
