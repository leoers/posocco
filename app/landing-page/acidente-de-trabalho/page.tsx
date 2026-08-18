import type { Metadata } from "next";
import "./globals.css";
import Hero from './components/Hero';
import Services from './components/Services';
import Eligibility from './components/Eligibility';
import FAQ from './components/FAQ';
import Process from './components/Process';
import LawyerProfile from './components/LawyerProfile';
import ContactForm from './components/ContactForm';
import Coverage from './components/Coverage';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Acidente de Trabalho | Posocco",
  description: "Indenização, concessão e revisão de benefício, aposentadoria e pensão por morte.",
  keywords: "advogado acidente de trabalho, indenização acidente de trabalho, doença ocupacional advogado, auxílio-acidente inss, auxílio-doença inss, estabilidade acidente de trabalho, danos morais acidente de trabalho, advogado trabalhista, direitos do trabalhador",
  openGraph: {
    title: "Acidente de Trabalho | Posocco",
    description: "Indenização, concessão e revisão de benefício, aposentadoria e pensão por morte.",
    url: "https://direitostrabalhador.posocco.com.br",
    siteName: "Posocco & Advogados Associados",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/fav_posocco.png',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Eligibility />
      <Process />
      <LawyerProfile />
      <ContactForm />
      <FAQ />
      <Coverage />
      <Footer />
    </main>
  );
}
