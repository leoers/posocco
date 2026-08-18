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
  title: "Advogado Especialista em Direitos do Passageiro Aéreo | Posocco",
  description: "Problemas com voo cancelado, atrasos, overbooking ou extravio de bagagem? Avalie seu caso com um advogado especialista e busque sua indenização. Atendimento em todo o Brasil.",
  keywords: "advogado voo cancelado, advogado atraso de voo, indenização voo cancelado, danos morais companhia aérea, extravio de bagagem indenização, advogado especialista direito aéreo, overbooking, direitos do passageiro aéreo, processo contra companhia aérea",
  openGraph: {
    title: "Advogado Especialista em Direitos do Passageiro Aéreo",
    description: "Problemas com cancelamento de voo, atraso ou overbooking? Fale com nossa equipe especializada e defenda seus direitos.",
    url: "https://passageiroaereo.posocco.com.br",
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
    icon: '/passageiro-aereo/fav_posocco.png',
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
