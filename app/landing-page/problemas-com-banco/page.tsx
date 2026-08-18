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
  title: "Advogado Especialista em Problemas com Banco | Posocco",
  description: "Vítima de abusos, fraudes, golpes bancários ou taxas abusivas? Fale com nossos advogados especialistas em Direito Bancário e proteja seu patrimônio.",
  keywords: "advogado especialista direito bancário, golpes bancários, fraudes bancárias, juros abusivos, cobrança indevida banco, advogado contra banco, indenização banco, descontos indevidos inss, taxas abusivas",
  openGraph: {
    title: "Advogado Especialista em Problemas com Banco",
    description: "Você foi vítima de abusos ou golpes bancários? É possível buscar devolução e indenização. Conheça seus direitos.",
    url: "https://bancario.posocco.com.br",
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
