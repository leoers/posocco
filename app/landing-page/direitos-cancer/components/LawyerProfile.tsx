"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LawyerProfile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="section" style={{ ...styles.section, paddingTop: isMobile ? '40px' : '100px' }}>
      <div className="container" style={isMobile ? styles.gridMobile : styles.grid}>
        
        {/* Image Column */}
        <div className="animate-fade-up" style={{ ...styles.imageWrapper, order: isMobile ? 2 : 1 }}>
          <Image 
            src="/direitos-cancer/posocco_ftg.png" 
            alt="Posocco & Advogados Associados" 
            fill
            style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            priority
          />
        </div>

        {/* Text Column */}
        <div className="animate-fade-up" style={{ ...styles.textWrapper, paddingBottom: isMobile ? '0' : '100px', order: isMobile ? 1 : 2, textAlign: isMobile ? 'center' : 'left' }}>
          <div style={styles.badge}>
            QUEM VAI CUIDAR DO SEU CASO
          </div>
          
          <h2 style={styles.title}>Posocco & Advogados Associados</h2>
          
          <p style={styles.subtitle}>
            
          </p>
          
          <ul style={{ ...styles.list, display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <li style={styles.listItem}>
              <span style={styles.dot}></span>
              Escritório com mais de 25 anos de experiência jurídica.
            </li>
            <li style={styles.listItem}>
              <span style={styles.dot}></span>
              Equipe altamente qualificada, liderada pelo advogado Fabrício Sicchierolli Posocco, com amplo conhecimento em casos de alta complexidade.
            </li>
            <li style={styles.listItem}>
              <span style={styles.dot}></span>
              Atendimento humanizado, com acompanhamento próximo e personalizado durante todo o processo.
            </li>
            <li style={styles.listItem}>
              <span style={styles.dot}></span>
              Dedicação na defesa dos seus direitos no Fórum da sua cidade, nos Tribunais localizados na capital do seu estado e nos Tribunais Superiores do país, em Brasília.
            </li>
            <li style={styles.listItem}>
              <span style={styles.dot}></span>
              Atuação em todo o Brasil, com estrutura digital que permite atender com agilidade clientes em qualquer estado e brasileiros no exterior.
            </li>
          </ul>

          <div style={styles.quoteBox}>
            "Enquanto você cuida do tratamento, alguém precisa cuidar dos seus direitos - todos eles. Esse é o meu papel."
          </div>
        </div>
        
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#040d1a',
    backgroundImage: `linear-gradient(rgba(4, 13, 26, 0.7), rgba(4, 13, 26, 0.95)), url('/direitos-cancer/fundo_escriorio.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingTop: '100px',
    paddingBottom: 0,
    color: '#FFFFFF',
    borderTop: '1px solid #1E293B',
    borderBottom: '1px solid #1E293B',
    overflow: 'hidden',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.1fr',
    gap: '80px',
    alignItems: 'end',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  gridMobile: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  textWrapper: {
    paddingBottom: '100px',
    paddingTop: '20px',
  },
  badge: {
    display: 'inline-block',
    border: '1px solid #00D8FF',
    color: '#00D8FF',
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
    marginBottom: '32px',
    fontFamily: 'var(--font-h)',
  },
  title: {
    fontSize: 'clamp(32px, 4vw, 48px)',
    fontWeight: 800,
    marginBottom: '12px',
    color: '#FFFFFF',
    lineHeight: 1.2,
    fontFamily: 'var(--font-h)',
  },
  subtitle: {
    fontSize: '18px',
    color: '#CBD5E1',
    marginBottom: '48px',
    fontWeight: 500,
    fontFamily: 'var(--font-p)',
  },
  list: {
    listStyle: 'none',
    margin: '0 0 48px 0',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    color: '#94A3B8',
    fontSize: '16px',
    lineHeight: 1.5,
    fontFamily: 'var(--font-p)',
  },
  dot: {
    width: '6px',
    height: '6px',
    backgroundColor: '#00D8FF',
    borderRadius: '50%',
    boxShadow: '0 0 10px rgba(0, 216, 255, 0.5)',
    marginRight: '12px',
    marginTop: '9px',
    flexShrink: 0,
  },
  quoteBox: {
    borderLeft: '4px solid #00D8FF',
    paddingLeft: '24px',
    fontStyle: 'italic',
    fontSize: '18px',
    color: '#FFFFFF',
    lineHeight: 1.6,
    fontWeight: 500,
    fontFamily: 'var(--font-p)',
  },
  imageWrapper: {
    position: 'relative' as const,
    aspectRatio: '3/4', 
    width: '120%',
    left: '-10%',
    maxWidth: '600px',
    margin: '0 auto',
    alignSelf: 'end',
  }
};
