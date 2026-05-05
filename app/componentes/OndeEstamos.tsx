"use client";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const enderecos = [
  {
    cidade: "Santos",
    logradouro: "Av. Conselheiro Nébias, 754, Sala 1013, 10º andar",
    edificio: "Edifício Helbor Offices Vila Rica",
    bairro: "Boqueirão, Santos/SP",
    cep: "CEP: 11045-002",
    telefone: "+55 13 3349-3290",
    // Link específico para a unidade Santos
    mapaLink: "https://www.google.com/maps/dir/?api=1&destination=Posocco+Advogados+Associados+Santos+Conselheiro+Nebias+754"
  },
  {
    cidade: "São Paulo",
    logradouro: "Av. Paulista, 2073, Sala 1702, 17º andar",
    edificio: "Edifício Horsa II, Conjunto Nacional",
    bairro: "Cerqueira César, São Paulo/SP",
    cep: "CEP: 01311-300",
    telefone: "+55 11 3373-7174",
    // Link específico para a unidade São Paulo (Paulista)
    mapaLink: "https://www.google.com/maps/dir/?api=1&destination=Posocco+Advogados+Associados+Sao+Paulo+Paulista+2073"
  },
  {
    cidade: "Brasília",
    logradouro: "SHN QD 02 BL F - S/N, Sala 625, 6º andar",
    edificio: "Edifício Executive Office Tower",
    bairro: "Asa Norte, Brasília/DF",
    cep: "CEP: 70702-060",
    telefone: "+55 61 3142-3588",
    // Link específico para a unidade Brasília
    mapaLink: "https://www.google.com/maps/dir/?api=1&destination=Posocco+Advogados+Associados+Brasilia+SHN+QD+02"
  },
];

export default function FooterInfo() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f8f9fa] via-[#e9ecef] to-[#f8f9fa] py-20">
      <div className="container mx-auto max-w-[1600px] px-6 md:px-12">
        
        {/* ... (Parte 1: Fale Conosco permanece idêntica) ... */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
          className="text-center mb-24"
        >
          <h2 className="text-[#333] text-4xl md:text-5xl font-light mb-4">Fale conosco</h2>
          <p className="text-gray-600 text-xl md:text-2xl mb-16">Atendemos clientes em todo o país</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            <div className="space-y-6">
              <h3 className="text-[#001D3D] font-bold text-xl uppercase tracking-wider">Central WhatsApp</h3>
              <div className="text-gray-600 text-lg space-y-1">
                <p>+55 13 99200-9191</p>
                <p>+55 11 99217-5115</p>
                <p>+55 11 97827-7147</p>
                <p>+55 11 97827-4041</p>
              </div>
              <div className="pt-4">
                <h3 className="text-[#001D3D] font-bold text-xl uppercase tracking-wider mb-2">E-mail</h3>
                <p className="text-gray-600 text-lg">atendimento@posocco.com.br</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[#001D3D] font-bold text-xl uppercase tracking-wider">Horários</h3>
              <div>
                <p className="font-bold text-gray-800">Assistência jurídica on-line</p>
                <p className="text-gray-600">24 horas por dia, 7 dias por semana</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">Presencial e teleconsulta</p>
                <p className="text-gray-600">Segunda a sexta, das 9h às 18h (Hora marcada)</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[#001D3D] font-bold text-xl uppercase tracking-wider">Imprensa</h3>
              <div className="text-gray-600 text-lg">
                <p>WhatsApp: +55 13 99184-8758</p>
                <p>emanuelle.oliveira@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-full h-px bg-gray-300/50 mb-24" />

        {/* PARTE 2: ONDE ESTAMOS - Agora com links corrigidos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
          className="text-center"
        >
          <h2 className="text-[#333] text-4xl md:text-5xl font-light mb-16 tracking-tight">Onde estamos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-left">
            {enderecos.map((item) => (
              <div key={item.cidade} className="flex flex-col">
                <h3 className="text-[#001D3D] font-extrabold text-2xl mb-4">{item.cidade}</h3>
                <div className="text-gray-600 text-lg leading-relaxed mb-6">
                  <p>{item.logradouro}</p>
                  <p>{item.edificio}</p>
                  <p>{item.bairro}</p>
                  <p>{item.cep}</p>
                  <p className="font-bold text-gray-800 pt-2">Telefone: {item.telefone}</p>
                </div>
                
                <a 
                  href={item.mapaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit bg-[#001D3D] text-white px-8 py-2.5 rounded-full font-bold hover:bg-[#002d5f] transition-colors shadow-md inline-block text-center"
                >
                  Traçar rota
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}