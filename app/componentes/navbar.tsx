"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Adicionado AnimatePresence
import { Handshake, MessageSquare, Newspaper, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Para redirecionar na busca

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Função para processar a busca
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redireciona para uma página de busca (que vamos criar) passando o termo
      router.push(`/busca?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#000814]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
                src="/images/logo-posocco.png"
                alt="Posocco Advogados & Consultores"
                width={180} 
                height={40} 
                className="object-contain w-auto h-auto"
                priority 
            />
          </Link>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="#servicos" className="flex items-center space-x-2 text-white/70 hover:text-white transition group">
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

          {/* Busca e Mobile */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-white/50 hover:text-white transition cursor-pointer"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-[#000814] p-6 space-y-6 border-t border-white/5"
            >
              <Link href="#servicos" className="flex items-center space-x-3 text-white/80" onClick={() => setIsOpen(false)}>
                <Handshake size={20} /> <span className="text-lg">Serviços</span>
              </Link>
              <Link href="#contato" className="flex items-center space-x-3 text-white/80" onClick={() => setIsOpen(false)}>
                <MessageSquare size={20} /> <span className="text-lg">Contato</span>
              </Link>
              <Link href="#noticias" className="flex items-center space-x-3 text-white/80" onClick={() => setIsOpen(false)}>
                <Newspaper size={20} /> <span className="text-lg">Notícias</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- MODAL DE BUSCA (Aparece sobre tudo) --- */}
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
            >
              <X size={32} />
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