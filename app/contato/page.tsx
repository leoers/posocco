"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
  const [status, setStatus] = useState<{ sucesso: boolean; mensagem: string } | null>(null);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    // Dados extraídos do formulário original do site
    const formData = new FormData();
    formData.append("_wpcf7", "424"); // ID Numérico real
    formData.append("_wpcf7_version", "6.1.1");
    formData.append("_wpcf7_locale", "pt_BR");
    formData.append("_wpcf7_unit_tag", "wpcf7-f424-p422-o1");
    formData.append("_wpcf7_container_post", "422");

    // Mapeamento dos campos
    formData.append("your-name", form.nome);
    formData.append("your-email", form.email);
    formData.append("your-subject", form.assunto);
    formData.append("your-message", form.mensagem);
    // Se o seu formulário no WP tiver campo de telefone, mude para o nome correto (ex: your-tel)
    formData.append("your-tel", form.telefone); 

    try {
      // URL ajustada com o ID numérico 424
      const response = await fetch("https://posocco.com.br/wp-json/contact-form-7/v1/contact-forms/424/feedback", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      // Verificação de sucesso padrão do Contact Form 7
      if (result.status === "mail_sent") {
        setStatus({ sucesso: true, mensagem: "Mensagem enviada com sucesso!" });
        setForm({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
      } else {
        setStatus({ sucesso: false, mensagem: result.message || "Erro ao enviar. Verifique os campos." });
      }
    } catch (error) {
      setStatus({ sucesso: false, mensagem: "Erro de conexão com o servidor WordPress." });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="bg-[#001D3D] min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white space-y-4">
          <div className="relative w-72 h-32 md:w-96 md:h-40">
            <Image 
              src="/images/logo-contato.png" 
              alt="Posocco & Associados"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl max-w-lg w-full mx-auto"
        >
          <h1 className="text-xl font-normal text-[#4D4D4D] mb-2 tracking-tight">
            Deixe sua mensagem:
          </h1>

          {/* Linha Decorativa Bicolor */}
          <div className="relative w-full h-[3px] bg-[#D1D1D1] mb-8 rounded-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full bg-[#001D3D] rounded-full w-[45%]"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="nome"
              required
              className="w-full px-6 py-3 border border-gray-400 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#001D3D]"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
            />

            <input 
              type="email" 
              placeholder="e-mail"
              required
              className="w-full px-6 py-3 border border-gray-400 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#001D3D]"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input 
              type="tel" 
              placeholder="telefone com DDD"
              className="w-full px-6 py-3 border border-gray-400 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#001D3D]"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
            />

            <input 
              type="text" 
              placeholder="assunto"
              className="w-full px-6 py-3 border border-gray-400 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#001D3D]"
              value={form.assunto}
              onChange={(e) => setForm({ ...form, assunto: e.target.value })}
            />

            <textarea 
              placeholder="mensagem"
              rows={4}
              required
              className="w-full px-6 py-4 border border-gray-400 rounded-[25px] text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#001D3D] resize-none"
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            />

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="aceite" 
                  required
                  className="w-4 h-4 rounded border-gray-400 text-[#001D3D]"
                />
                <label htmlFor="aceite" className="text-[10px] text-gray-500 cursor-pointer uppercase font-bold tracking-wider">
                  Aceito receber contato
                </label>
              </div>

              <button 
                type="submit"
                disabled={enviando}
                className="bg-[#001D3D] text-white px-10 py-2.5 rounded-full font-medium hover:bg-[#003566] transition-all flex items-center gap-3 disabled:opacity-50"
              >
                {enviando ? "enviando..." : "enviar"}
                <span className="text-sm">➔</span>
              </button>
            </div>

            {status && (
              <p className={`text-center text-[10px] font-bold uppercase mt-4 ${status.sucesso ? "text-green-600" : "text-red-600"}`}>
                {status.mensagem}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </main>
  );
}