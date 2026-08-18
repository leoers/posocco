"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero" style={{ ...styles.hero, minHeight: isMobile ? 'auto' : '100vh', paddingTop: isMobile ? '40px' : '100px' }}>
      {/* Background Image layer */}
      <div style={styles.bgOverlay} />
      
      <div className="container" style={{ ...styles.heroGrid, minHeight: isMobile ? 'auto' : 'calc(100vh - 100px)', ...(isMobile ? { ...styles.heroGridMobile, paddingBottom: '40px' } : {}) }}>
        
        {/* Centered Column */}
        <div className="hero-content" data-aos="fade-up" style={styles.leftCol}>
          <div style={styles.logoWrapper}>
            <Image 
              src="/plano-de-saude/logo_posocco_darkbg.png" 
              alt="Posocco Advogados" 
              width={isMobile ? 180 : 200} 
              height={isMobile ? 63 : 70} 
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          
          <h1 className="h1" style={styles.headline}>
            Advogados Especializados em <span style={styles.highlight}>Plano de Saúde:</span> Protegendo o seu Direito ao Tratamento.
          </h1>
          
          <p className="text-muted" style={styles.subheadline}>
            Se o seu plano negou cobertura, assistência domiciliar (home care), cancelou o contrato, recusou medicamentos de alto custo ou aumentou abusivamente a mensalidade, obtenha a liminar de urgência que você precisa com segurança jurídica.
          </p>
          
          <div style={styles.ctaWrapper}>
            <a href="#formulario" className="btn-pill">
              Quero falar com um advogado
              <div className="btn-wa-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
            </a>
          </div>
          
          <div style={styles.mapInfo}>
            <svg style={styles.mapIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span style={styles.mapText}>Atendimento em todo o Brasil</span>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .btn-hover:hover {
          background-color: #2563EB !important;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.5) !important;
        }
      `}} />
    </section>
  );
}

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '100px',
    background: '#040B16',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  bgOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to bottom, rgba(4, 11, 22, 0.3), rgba(4, 11, 22, 1)), url("/plano-de-saude/plano-de-saude_background-formulario.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,
    opacity: 0.8,
    pointerEvents: 'none' as const,
  },
  heroGrid: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as const,
    width: '100%',
    minHeight: 'calc(100vh - 100px)',
  },
  heroGridMobile: {
    paddingBottom: '40px',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
    zIndex: 6,
    paddingBottom: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  headline: {
    fontSize: 'clamp(24px, 4vw, 38px)',
    fontWeight: 500,
    lineHeight: 1.1,
    marginBottom: '20px',
    color: '#FFFFFF',
    fontFamily: 'var(--font-h)',
    textShadow: '0 4px 20px rgba(0,0,0,0.5)',
  },
  highlight: {
    color: '#9BB1FF', 
    fontWeight: 700,
  },
  subheadline: {
    fontSize: '16px',
    marginBottom: '32px',
    color: '#E2E8F0',
    lineHeight: 1.4,
    maxWidth: '100%',
    textShadow: '0 2px 10px rgba(0,0,0,0.6)',
  },
  ctaWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  mapInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    color: '#CBD5E1',
    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
  },
  mapIcon: {
    width: '20px',
    height: '20px',
  },
  mapText: {
    fontSize: '14px',
  }
};
