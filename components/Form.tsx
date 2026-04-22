"use client";
import { useState } from "react";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import axios, { AxiosError } from "axios";
import Loader from "./Loader";
import { Instagram } from "@/lib/icons";

interface Form {
  name: string;
  email: string;
  message: string;
}

type ErrorProps = {
  error?: FieldError;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;

  return <div className="mt-2 text-primary">{error.message}</div>;
};

const Form = ({ lang }: { lang: string }) => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [sended, setSended] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    setSending(true);
    const sender = {
      to: "gabianselmo@gmail.com ",
      from: " ",
      from_name: "Gabriela Anselmo",
      subject: "Contacto",
    };

    try {
      const response = await axios.post(" ", { ...data, ...sender });
      if (response?.data?.error) {
        setError(response.data.message);
        setSending(false);
      } else {
        setSended(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response) {
        setError(axiosError.response.data?.message || "Error desconocido");
      } else {
        setError("Error de conexión");
      }
      setSending(false);
    }
  };

  const errorMessage =
    lang === "es" ? "Debe completar este dato." : "Fill this field.";

  if (sended) {
    return (
      <section>
        <div className="text-center pb-20 text-primary text-3xl">
          {lang === "es"
            ? "¡Gracias por contactarse con nosotros! <br /> Te responderemos lo antes posible."
            : "Thanks for contacting us! <br /> We will get back to you as soon as possible."}
        </div>
      </section>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4 pb-8"
    >
      <div>
        <input
          type="text"
          placeholder={lang === "es" ? "Nombre" : "Name"}
          className="bg-white h-12 px-4 w-full focus:outline-none focus:ring-0"
          {...register("name", { required: errorMessage })}
        />
        <Error error={errors.name} />
      </div>
      <div>
        <input
          type="email"
          placeholder="Mail"
          className="bg-white h-12 px-4 w-full focus:outline-none focus:ring-0"
          {...register("email", {
            required: errorMessage,
            maxLength: 50,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message:
                lang === "es"
                  ? "Dirección de correo electrónico inválida"
                  : "Invalid email address",
            },
          })}
        />
        <Error error={errors.email} />
      </div>
      <div>
        <textarea
          className="h-40 bg-white px-4 py-4 focus:outline-none focus:ring-0 w-full"
          placeholder={lang === "es" ? "Texto" : "Message"}
          id="message"
          {...register("message", { required: errorMessage })}
        ></textarea>
        <Error error={errors.message} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/gabianselmo_arte/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-foreground"
          >
            <Instagram />
          </a>
          <div className="font-display text-sm font-medium text-white">
            {lang === "es"
              ? "Contacto: Gabriela Anselmo"
              : "Contact: Gabriela Anselmo"}
          </div>
        </div>

        {sending ? (
          <Loader />
        ) : (
          <button
            type="submit"
            className="uppercase font-bold cursor-pointer border-2 border-white w-40 h-10 text-white flex items-center justify-center hover:bg-primary hover:text-white font-display text-xs hover:border-primary"
          >
            {lang === "es" ? "Enviar" : "Send"}
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
