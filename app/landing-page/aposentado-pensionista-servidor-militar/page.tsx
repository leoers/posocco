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
  title: "Aposentado, pensionista, servidor público e militar | Posocco",
  description: "Recupere valores de descontos indevidos, fraudes, empréstimos não solicitados e venda casada. Assessoria jurídica para problemas com bancos e INSS.",
  keywords: "advogado contra banco, descontos indevidos inss, fraude empréstimo consignado, venda casada banco, ação contra banco, restituição em dobro, advogado direito bancário, cobrança indevida contracheque",
  openGraph: {
    title: "Aposentado, pensionista, servidor público e militar | Posocco",
    description: "Servidor público, aposentado e pensionista do INSS identificamos e anulamos cobranças irregulares, empréstimos não autorizados e seguros embutidos. Proteja sua renda mensal.",
    url: "https://direitobancario.posocco.com.br",
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
    icon: '/aposentado-pensionista-servidor-militar/fav_posocco.png',
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
