"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

export default function Contato() {
  return (
    <section className="w-full bg-[#E5E7EB]/30 py-20 overflow-hidden">
      <div className="container mx-auto max-w-[1600px] px-6 md:px-12">
        
        {/* Container com Animação de Entrada (Scroll Reveal) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-[#333] text-4xl md:text-5xl font-light mb-4">
            Fale conosco
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl mb-16">
            Atendemos clientes em todo o país
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left w-full">
            
            {/* Coluna 1: WhatsApp e E-mail */}
            <div className="space-y-8">
              <div>
                <h3 className="text-[#001D3D] font-bold text-xl mb-4 flex items-center gap-2">
                  Central de atendimento via WhatsApp
                </h3>
                <div className="text-gray-600 space-y-1 text-lg">
                  <p>+55 13 99200-9191</p>
                  <p>+55 11 99217-5115</p>
                  <p>+55 11 97827-7147</p>
                  <p>+55 11 97827-4041</p>
                </div>
              </div>
              <div>
                <h3 className="text-[#001D3D] font-bold text-xl mb-2">E-mail</h3>
                <p className="text-gray-600 text-lg">atendimento@posocco.com.br</p>
              </div>
            </div>

            {/* Coluna 2: Horários */}
            <div className="space-y-8">
              <div>
                <h3 className="text-[#001D3D] font-bold text-xl mb-4">
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

            {/* Coluna 3: Imprensa */}
            <div className="space-y-4">
              <h3 className="text-[#001D3D] font-bold text-xl mb-4">
                Atendimento à imprensa
              </h3>
              <div className="text-gray-600 text-lg space-y-1">
                <p>WhatsApp: +55 13 99184-8758</p>
                <p>E-mail: emanuelle.oliveira@gmail.com</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}