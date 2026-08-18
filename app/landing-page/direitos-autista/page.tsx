import type { Metadata } from "next";
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
  title: "Advogado Especialista em Direitos dos Autistas | Posocco",
  description: "Assessoria jurídica especializada na defesa da pessoa com Transtorno do Espectro Autista. Garanta tratamento pelo plano de saúde, BPC/LOAS e inclusão escolar.",
  keywords: "advogado especialista autismo, direitos do autista, negativa plano de saúde autismo, bpc loas autismo, acompanhante escolar tea, liminar plano de saúde autismo, advogado tea, isenção imposto de renda autismo",
  openGraph: {
    title: "Advogado Especialista em Direitos do Autista (TEA)",
    description: "Garanta o acesso a tratamentos, benefícios assistenciais (BPC/LOAS) e proteção dos direitos educacionais e fiscais da pessoa com TEA.",
    url: "https://direitosautista.posocco.com.br",
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
