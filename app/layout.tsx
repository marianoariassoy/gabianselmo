import type { Metadata } from "next";
import { Alegreya_Sans, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import "./hamburguer.css";
import "./animations.css";
import Header from "@/components/HeaderMain";
import { LanguageProvider } from "@/context/LanguageContext";

const alegreya = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-alegreya",
});

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Grabriela Anselmo",
    template: "%s | Grabriela Anselmo",
  },
  description:
    "Gabriela Anselmo es artista plástica y escenógrafa. Su práctica nace de una extensa trayectoria en el diseño escenográfico y se desarrolla como una investigación sobre el espacio entendido como depósito de memoria.",
  icons: {
    icon: "/assets/isoG.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "",
    siteName: "Grabriela Anselmo",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Grabriela Anselmo",
      },
    ],
    title: "Grabriela Anselmo",
    description:
      "Gabriela Anselmo es artista plástica y escenógrafa. Su práctica nace de una extensa trayectoria en el diseño escenográfico y se desarrolla como una investigación sobre el espacio entendido como depósito de memoria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${alegreya.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
