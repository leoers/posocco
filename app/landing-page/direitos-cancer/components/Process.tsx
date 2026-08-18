"use client";

import React, { useState, useEffect } from 'react';

const steps = [
  { 
    title: '1. Avaliação rápida', 
    desc: 'Você conta o que aconteceu e nós damos um parecer técnico.', 
    icon: <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg> 
  },
  { 
    title: '2. Análise técnica', 
    desc: 'Avaliamos suas provas e definimos a melhor estratégia.', 
    icon: <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> 
  },
  { 
    title: '3. Ajuizamento', 
    desc: 'Entramos com a ação judicial buscando o reconhecimento dos seus direitos perante a Justiça.', 
    icon: <svg viewBox="0 0 512 512" width="36" height="36" fill="currentColor">
      <g transform="translate(0,512) scale(0.1,-0.1)">
        <path d="M2366 4840 c-54 -27 -74 -47 -102 -102 -28 -56 -32 -139 -9 -196 19 -46 1011 -1044 1067 -1072 122 -64 278 -3 322 127 19 55 20 79 5 141 -11 44 -45 80 -528 566 -349 350 -529 524 -556 537 -54 25 -147 25 -199 -1z"/>
        <path d="M1762 3887 l-492 -492 460 -460 460 -460 493 493 492 492 -460 460 -460 460 -493 -493z"/>
        <path d="M903 3380 c-76 -44 -107 -94 -111 -185 -3 -58 0 -80 16 -111 12 -23 233 -251 539 -555 548 -545 540 -539 630 -539 52 0 121 30 163 72 71 71 87 177 40 266 -28 56 -1026 1048 -1072 1067 -63 26 -145 20 -205 -15z"/>
        <path d="M2752 2897 c-89 -89 -162 -165 -162 -169 0 -17 1526 -1728 1578 -1768 78 -62 150 -84 252 -78 311 18 458 371 258 619 -20 24 -1749 1559 -1757 1559 -3 0 -79 -73 -169 -163z"/>
        <path d="M925 1461 c-83 -21 -167 -87 -207 -164 -18 -35 -23 -63 -26 -159 l-4 -118 947 0 947 0 -4 113 c-3 97 -8 119 -30 163 -31 60 -93 118 -157 148 -45 21 -54 21 -741 23 -382 0 -708 -2 -725 -6z"/>
        <path d="M564 906 c-57 -18 -128 -71 -159 -118 -49 -73 -55 -108 -55 -293 l0 -173 29 -31 29 -31 1221 0 1221 0 32 29 33 29 0 184 c0 166 -2 187 -21 229 -30 64 -88 125 -148 157 l-51 27 -1045 2 c-837 1 -1053 -1 -1086 -11z"/>
      </g>
    </svg> 
  },
  { 
    title: '4. Acompanhamento', 
    desc: 'Nossa equipe acompanha cada andamento e atualiza você.', 
    icon: <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg> 
  },
  { 
    title: '5. Recebimento', 
    desc: 'Se a decisão for favorável, você obtém o direito reconhecido pela Justiça e o cumprimento da medida determinada para o seu caso.', 
    icon: <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.015 5.015 0 0 0 11 15.9V19H7v2h10v-2h-4v-3.1a5.015 5.015 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg> 
  }
];

export default function Process() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="section" style={{ ...styles.section, paddingTop: isMobile ? '60px' : '120px' }}>
      <div className="container" style={styles.container}>
        <div data-aos="fade-up" style={{ ...styles.header, marginBottom: isMobile ? '40px' : '80px' }}>
          <h2 style={styles.title}>Como Funciona o Processo</h2>
          <p style={styles.subtitle}>Simples, rápido e digital.</p>
        </div>
        
        <div style={styles.timelineContainer}>

          
          <div style={{ ...styles.grid, gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)', gap: isMobile ? '60px' : '20px' }}>
            {steps.map((step, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={(idx + 1) * 150} style={styles.stepCard}>
                  
                  {/* Connecting lines for desktop (rendered between items) */}
                  {!isMobile && idx < steps.length - 1 && (
                    <div style={styles.connectorLine}>
                      <div style={styles.connectorDot}></div>
                    </div>
                  )}

                  {/* Connecting lines for mobile (rendered below items) */}
                  {isMobile && idx < steps.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-50px',
                      left: '50%',
                      width: '2px',
                      height: '40px',
                      borderLeft: '2px dashed #93C5FD',
                      zIndex: -1,
                      transform: 'translateX(-50%)',
                    }}></div>
                  )}

                  <div style={styles.circle}>
                    {step.icon}
                  </div>
                  
                  <h3 style={styles.stepTitle}>
                    {step.title}
                  </h3>
                  
                  <p style={styles.stepDesc}>
                    {step.desc}
                  </p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#FAFAFA', 
    padding: '120px 0',
    color: '#0F172A',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  header: {
    textAlign: 'center' as const,
  },
  title: {
    fontSize: 'clamp(32px, 4vw, 42px)',
    fontWeight: 800,
    color: '#0F172A',
    fontFamily: 'var(--font-h)',
    marginBottom: '12px',
    letterSpacing: '-1px',
  },
  subtitle: {
    fontSize: '20px',
    color: '#475569',
    fontFamily: 'var(--font-p)',
    fontWeight: 400,
  },
  timelineContainer: {
    position: 'relative' as const,
  },

  grid: {
    display: 'grid',
    position: 'relative' as const,
    zIndex: 2,
  },
  stepCard: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
    position: 'relative' as const,
  },
  connectorLine: {
    position: 'absolute' as const,
    top: '45px', // Half of the circle height (90/2)
    left: '50%',
    width: '100%',
    height: '2px',
    borderTop: '2px dashed #93C5FD', // Light blue dash
    zIndex: -1,
  },
  connectorDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#2563EB',
    borderRadius: '50%',
    position: 'absolute' as const,
    top: '-5px', // Align with the borderTop
    left: '50%',
    transform: 'translateX(-50%)',
  },
  circle: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    border: '2px solid #2563EB', // Blue border
    backgroundColor: '#FFFFFF', 
    color: '#2563EB', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    zIndex: 3,
  },
  stepTitle: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#0F172A',
    marginBottom: '12px',
    fontFamily: 'var(--font-h)',
  },
  stepDesc: {
    fontSize: '13px',
    color: '#64748B', 
    lineHeight: 1.5,
    fontFamily: 'var(--font-p)',
    padding: '0 10px',
  },
};
