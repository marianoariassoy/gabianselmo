"use client";
import Container from "@/components/Container";
import Form from "@/components/Form";
import { useLanguage } from "@/context/LanguageContext";

const Page = () => {
  const { lang } = useLanguage();

  return (
    <section className="bg-[#e6e5e5] h-full mt-24">
      <Container className="py-20">
        <div className="max-w-3xl mx-auto flex-col gap-y-8">
          <Form lang={lang} />
        </div>
      </Container>
    </section>
  );
};

export default Page;
