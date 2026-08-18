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
  title: "Advogados Especialistas em Plano de Saúde | Posocco",
  description: "Seu plano negou cobertura, assistência domiciliar (home care), cancelou o contrato ou recusou medicamentos de alto custo? Obtenha a liminar de urgência que você precisa. Atendimento em todo o Brasil.",
  keywords: "advogado plano de saúde, negativa de cobertura, liminar plano de saúde, reajuste abusivo plano de saúde, cancelamento plano de saúde, advogado erro médico, medicamento alto custo liminar, liminar contra plano de saúde, negativa de cirurgia plano de saúde, reajuste abusivo ANS",
  openGraph: {
    title: "Advogados Especialistas em Plano de Saúde",
    description: "Seu plano de saúde negou cobertura ou cancelou seu contrato? Fale com nossa equipe especializada e garanta seu direito ao tratamento.",
    url: "https://planodesaude.posocco.com.br",
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
