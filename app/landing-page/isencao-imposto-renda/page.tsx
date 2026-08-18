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
  title: "Advogado Especialista em Isenção de Imposto de Renda | Posocco",
  description: "Aposentado, pensionista ou militar reformado com doença grave? Você tem direito à isenção do IRPF e restituição dos últimos 5 anos. Conheça seus direitos.",
  keywords: "isenção imposto de renda doença grave, advogado isenção irpf, restituição imposto de renda, lei 7713/88, isenção irpf aposentado, moléstia grave isenção, advogado especialista isenção de imposto",
  openGraph: {
    title: "Advogado Especialista em Isenção de Imposto de Renda",
    description: "Problemas com imposto de renda retido indevidamente por doença grave? Fale com nossa equipe especializada e defenda seus direitos.",
    url: "https://isencaoir.posocco.com.br",
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
