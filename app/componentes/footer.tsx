"use client";
import { motion, Variants } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import Image from "next/image";

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fa] pt-10 pb-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="flex flex-col items-center space-y-8"
        >
          <h2 className="text-[#333] text-3xl md:text-4xl lg:text-[48px] font-light tracking-tight">
            Siga nossas redes sociais
          </h2>

          <div className="py-4">
            <Image 
              src="/images/logo-posocco-footer1.png" 
              alt="Posocco & Advogados Associados - 26 Anos"
              width={350}
              height={120}
              className="h-auto w-auto"
            />
          </div>

          {/* ÍCONES COM REACT-ICONS */}
          <div className="flex space-x-4">
            {[
              { icon: <FaInstagram size={22} />, link: "#" },
              { icon: <FaFacebookF size={22} />, link: "#" },
              { icon: <IoLogoTiktok size={22} />, link: "#" },
              { icon: <FaYoutube size={22} />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#001D3D] text-white hover:bg-[#002d5f] transition-all shadow-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-gray-600 text-lg md:text-xl space-y-1 pt-6 leading-relaxed">
            <p className="font-medium text-gray-800">Posocco & Advogados Associados</p>
            <p>CNPJ: 07.741.008/0001-58</p>
            <p>OABSP 9295</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}