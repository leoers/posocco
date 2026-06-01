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
    mapaLink: "https://www.google.com/maps/dir/?api=1&destination=Posocco+Advogados+Associados+Santos+Conselheiro+Nebias+754"
  },
  {
    cidade: "São Paulo",
    logradouro: "Av. Paulista, 2073, Sala 1702, 17º andar",
    edificio: "Edifício Horsa II, Conjunto Nacional",
    bairro: "Cerqueira César, São Paulo/SP",
    cep: "CEP: 01311-300",
    telefone: "+55 11 3373-7174",
    mapaLink: "https://www.google.com/maps/dir/?api=1&destination=Posocco+Advogados+Associados+Sao+Paulo+Paulista+2073"
  },
  {
    cidade: "Brasília",
    logradouro: "SHN QD 02 BL F - S/N, Sala 625, 6º andar",
    edificio: "Edifício Executive Office Tower",
    bairro: "Asa Norte, Brasília/DF",
    cep: "CEP: 70702-060",
    telefone: "+55 61 3142-3588",
    mapaLink: "https://www.google.com/maps/dir/?api=1&destination=Posocco+Advogados+Associados+Brasilia+SHN+QD+02"
  },
];

export default function FooterInfo() {
  return (
    /* AJUSTADO: Azul suavizado com rgba(..., 0.15) para dar excelente leitura no texto #333, sumindo aos 25% */
    <section 
      className="w-full py-20"
      style={{
        background: "linear-gradient(to bottom, rgba(39, 46, 66, 0.15) 0%, #ffffff 25%)"
      }}
    >
      <div className="container mx-auto max-w-[1600px] px-6 md:px-12">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
          className="text-center mb-24"
        >
          <h2 className="text-[#333] text-4xl md:text-5xl font-light mb-4">Fale conosco</h2>
          <p className="text-gray-600 md:text-2xl mb-16">Atendemos clientes em todo o país</p>

          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="space-y-6">
              <h3 className="text-[#001D3D] font-bold tracking-wide">Central de atendimento via WhatsApp</h3>
              <div className="text-gray-600 space-y-0">
                <p>+55 13 99200-9191</p>
                <p>+55 11 99217-5115</p>
                {/* <p>+55 11 97827-7147</p>
                <p>+55 11 97827-4041</p> */}
              </div>
              <div>
                <h3 className="text-[#001D3D] font-bold tracking-wide">E-mail</h3>
                <p className="text-gray-600 text-lg">atendimento@posocco.com.br</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-[#001D3D] font-bold mb-4 tracking-wide">
                  Horário de funcionamento
                </h3>
                <div className="mb-6">
                  <p className="font-semibold text-gray-700">Assistência jurídica on-line</p>
                  <p className="text-gray-600">24 horas por dia, 7 dias por semana</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Atendimento presencial e teleconsulta</p>
                  <p className="text-gray-600">Somente com hora marcada, de segunda a sexta-feira, das 9h às 18h</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#001D3D] font-bold mb-4 tracking-wide">
                Atendimento à imprensa
              </h3>
              <div className="text-gray-600 space-y-1">
                <p>WhatsApp: +55 13 99184-8758</p>
                <p>E-mail: emanuelle.oliveira@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-full h-px bg-gray-400/40 mb-24" />

        {/* PARTE 2: ONDE ESTAMOS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
          className="text-center"
        >
          <h2 className="text-[#333] text-4xl md:text-5xl font-light mb-16 tracking-tight">Onde estamos</h2>

          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {enderecos.map((item) => (
              <div key={item.cidade} className="flex flex-col">
                <h3 className="text-[#001D3D] font-extrabold text-xl mb-4">{item.cidade}</h3>
                <div className="text-gray-600 leading-relaxed mb-6">
                  <p>{item.logradouro}</p>
                  <p>{item.edificio}</p>
                  <p>{item.bairro}</p>
                  <p>{item.cep}</p>
                  <p>Telefone: {item.telefone}</p>
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