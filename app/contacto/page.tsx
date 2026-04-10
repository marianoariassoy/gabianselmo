"use client";
import Container from "@/components/Container";
import Form from "@/components/Form";
import { Instagram } from "@/lib/icons";
import { useLanguage } from "@/context/LanguageContext";

const Page = () => {
  const { lang } = useLanguage();

  return (
    <section className="bg-black/10 h-full mt-24">
      <Container className="py-20">
        <div className="max-w-3xl mx-auto flex-col gap-y-8">
          <Form lang={lang} />
          <div className="flex gap-4">
            <div>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-foreground"
              >
                <Instagram />
              </a>
            </div>
            <div className="font-display text-sm font-medium">
              <h2 className="font-semibold">
                {lang === "es" ? "Contacto:" : "Contact:"}
              </h2>
              Gabriela Anselmo <br />
              +54 9 11 4175 3792
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
