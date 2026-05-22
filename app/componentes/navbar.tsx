"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, MessageSquare, Newspaper, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/busca?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50">
        
        {/* Bloco Superior (Apenas Logo no Mobile / Estrutura Completa no Desktop) */}
        <div className="bg-[#000814]/95 md:bg-[#000814]/90 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
            
            {/* Logo (Aumentada e Ajustada com Responsividade) */}
            <Link 
              href="/" 
              className="flex items-center absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0"
            >
              <Image 
                src="/images/logo-posocco.png"
                alt="Posocco Advogados & Consultores"
                width={220} 
                height={50} 
                className="object-contain w-auto h-9 sm:h-10 md:h-10 transition-all"
                priority 
              />
            </Link>

            {/* Links para Desktop Centralizados */}
            <div className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
              <Link href="/servicos" className="flex items-center space-x-2 text-white/70 hover:text-white transition group">
                <Handshake size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium uppercase tracking-wide">Serviços</span>
              </Link>
              
              <Link href="/contato" className="flex items-center space-x-2 text-white/70 hover:text-white transition group">
                <MessageSquare size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium uppercase tracking-wide">Contato</span>
              </Link>

              <Link href="/noticias" className="flex items-center space-x-2 text-white/70 hover:text-white transition group">
                <Newspaper size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium uppercase tracking-wide">Notícias</span>
              </Link>
            </div>

            {/* Botão de Busca - EXCLUSIVO DESKTOP */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white/50 hover:text-white transition cursor-pointer"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* --- MENU MOBILE INTEGRADO --- */}
        <div className="md:hidden bg-[#000814]/95 backdrop-blur-xl border-b border-white/5 h-16 w-full flex items-center justify-center">
          <div className="grid grid-cols-4 items-center justify-between h-full px-4 text-center w-full max-w-sm">
            
            <Link href="/servicos" className="flex flex-col items-center justify-center text-white/70 active:text-white transition">
              <Handshake size={20} strokeWidth={1.5} className="text-white" />
              <span className="text-[11px] font-light mt-0.5 text-gray-400">Serviços</span>
            </Link>
            
            <Link href="/contato" className="flex flex-col items-center justify-center text-white/70 active:text-white transition">
              <MessageSquare size={20} strokeWidth={1.5} className="text-white" />
              <span className="text-[11px] font-light mt-0.5 text-gray-400">Contato</span>
            </Link>

            <Link href="/noticias" className="flex flex-col items-center justify-center text-white/70 active:text-white transition">
              <Newspaper size={20} strokeWidth={1.5} className="text-white" />
              <span className="text-[11px] font-light mt-0.5 text-gray-400">Notícias</span>
            </Link>

            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex flex-col items-center justify-center text-white/70 active:text-white transition cursor-pointer"
            >
              <Search size={20} strokeWidth={1.5} className="text-white" />
              <span className="text-[11px] font-light mt-0.5 text-gray-400">Pesquisa</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Espaçador Dinâmico */}
      <div className="h-32 md:h-16" />

      {/* --- MODAL DE BUSCA --- */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#000814]/95 backdrop-blur-md flex items-center justify-center px-6"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-10 right-10 text-white/50 hover:text-white transition cursor-pointer"
              type="button"
            >
              <span className="text-2xl font-light">✕</span>
            </button>

            <form onSubmit={handleSearch} className="w-full max-w-3xl">
              <div className="relative border-b-2 border-white/20 focus-within:border-white transition-colors py-4">
                <input 
                  autoFocus
                  type="text"
                  placeholder="O que você está procurando?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-white text-2xl md:text-4xl font-light outline-none placeholder:text-white/20 pr-12"
                />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-white cursor-pointer">
                  <Search size={32} />
                </button>
              </div>
              <p className="text-white/40 mt-6 text-sm uppercase tracking-widest font-medium">
                Pressione Enter para buscar em todo o site
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}