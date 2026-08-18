import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css"; // Certifique-se de que o CSS da LP está sendo importado aqui
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AOSInit from "./components/AOSInit";

// Defina as fontes aqui para evitar erro de hidratação
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Direitos do Autista | Posocco",
  description: "Landing Page de Direitos do Autista",
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <AOSInit />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}