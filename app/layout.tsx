import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Importa a fonte
import "./globals.css";
import Navbar from "@/app/componentes/navbar";
import OndeStamos from "@/app/componentes/OndeEstamos";
import Footer from "@/app/componentes/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
// Configuração da fonte Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Pesos que você vai usar
  variable: "--font-montserrat", // Cria uma variável CSS
});

export const metadata: Metadata = {
  title: "Posocco Advogados & Consultores",
  description: "Escritório de advocacia full service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} antialiased bg-[#000814]`}>
        <Navbar />
        {children}
        <OndeStamos />
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}