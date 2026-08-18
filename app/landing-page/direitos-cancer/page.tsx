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
  title: "Advogado Especialista em Direitos da Pessoa com Câncer | Posocco",
  description: "Assessoria jurídica especializada para pacientes oncológicos. Garanta tratamento pelo plano de saúde, isenções fiscais, BPC/LOAS e proteção no trabalho.",
  keywords: "advogado especialista câncer, direitos do paciente com câncer, negativa plano de saúde oncologia, isenção imposto de renda câncer, bpc loas câncer, liminar tratamento oncológico, advogado direito à saúde câncer",
  openGraph: {
    title: "Advogados Especialistas em Direitos da Pessoa com Câncer",
    description: "Amparo legal para buscar o seu direito ao tratamento oncológico, benefícios previdenciários e isenções fiscais.",
    url: "https://direitoscancer.posocco.com.br",
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
    icon: '/direitos-cancer/fav_posocco.png',
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
