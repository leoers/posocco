"use client";

import React, { useState, useEffect } from 'react';

const questions = [
  { 
    q: 'Seu voo atrasou mais de 4 horas ou foi cancelado de última hora?', 
    a: '(atraso significativo ou cancelamento sem aviso prévio)'
  },
  { 
    q: 'Teve algum problema com bagagem extraviada, danificada ou furtada?', 
    a: '(pertences perdidos ou avariados pela companhia)'
  },
  { 
    q: 'Sofreu com overbooking (embarque negado) ou perdeu uma conexão?', 
    a: '(impedido de voar por culpa da empresa)'
  },
  { 
    q: 'Houve falta de assistência material por parte da companhia aérea?', 
    a: '(sem água, alimentação ou hotel durante a espera)'
  }
];

export default function Eligibility() {
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 992;

  return (
    <section className="section" style={{ ...styles.section, paddingTop: isMobile ? '60px' : '100px' }}>
      <div className="container">
          {/* Mobile Title (Rendered on top only on mobile) */}
          {isMobile && (
            <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p style={styles.subtitle}>AVALIAÇÃO DE DIREITOS</p>
              <h2 style={{ ...styles.title, marginBottom: 0 }}>
                QUATRO PERGUNTAS QUE DEFINEM<br className="desktop-only-br"/>
                <span className="text-cyan" style={{ fontWeight: 700 }}>SE VOCÊ TEM DIREITO</span>
              </h2>
            </div>
          )}

          <div style={{ ...styles.grid, flexDirection: isMobile ? 'column' : 'row' }}>
          
            {/* Left Column */}
            <div data-aos="fade-right" style={{ ...styles.leftCol, textAlign: isMobile ? 'center' : 'left', alignItems: isMobile ? 'center' : 'flex-start', order: isMobile ? 2 : 1 }}>
              
              {/* Desktop Title */}
              {!isMobile && (
                <>
                  <p style={styles.subtitle}>AVALIAÇÃO DE DIREITOS</p>
                  <h2 style={styles.title}>
                    QUATRO PERGUNTAS QUE DEFINEM<br className="desktop-only-br"/>
                    <span className="text-cyan" style={{ fontWeight: 700 }}>SE VOCÊ TEM DIREITO</span>
                  </h2>
                </>
              )}
              
              <p className="text-muted" style={{ marginTop: isMobile ? '0' : '16px', fontSize: '14px', maxWidth: '400px' }}>
                Se você respondeu sim para pelo menos uma das perguntas ao lado, você pode ter direito a uma indenização por danos morais e materiais.
              </p>

              <div style={{ marginTop: '32px' }}>
                <a href="#formulario" className="btn-pill">
                  Quero saber meus direitos
                  <div className="btn-wa-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

          {/* Right Column */}
          <div className="animate-fade-up" style={{ ...styles.rightCol, animationDelay: '200ms', marginTop: isMobile ? '0' : '0', order: isMobile ? 1 : 2 }}>
            <div style={styles.timelineList}>
              {/* Continuous vertical line */}
              <div style={styles.timelineLine}></div>
              
              {questions.map((item, idx) => (
                <div key={idx} style={styles.timelineItem}>
                  <div style={styles.iconSide}>
                    <div style={{ ...styles.timelineIcon, fontWeight: 800, fontSize: '18px' }}>
                      {idx + 1}
                    </div>
                  </div>
                  <div style={styles.timelineCard}>
                    <p style={styles.cardQ}>{item.q} <span style={{ color: '#10B981', fontWeight: 900, marginLeft: '4px' }}>✓</span></p>
                    <p style={styles.cardA}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#020b18', // Deep blue to contrast with other sections slightly
    padding: '100px 0',
  },
  grid: {
    display: 'flex',
    gap: '60px',
    alignItems: 'center',
  },
  leftCol: {
    flex: '1 1 45%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#94A3B8',
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
    marginBottom: '16px',
    fontFamily: 'var(--font-h)',
  },
  title: {
    fontSize: 'clamp(28px, 3.5vw, 40px)',
    fontWeight: 300,
    color: '#FFFFFF',
    marginBottom: '24px',
    lineHeight: 1.2,
    fontFamily: 'var(--font-h)',
  },
  desc: {
    fontSize: '15px',
    color: '#CBD5E1',
    lineHeight: 1.6,
    fontFamily: 'var(--font-p)',
  },
  highlightBox: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.05)',
    padding: '24px',
    borderRadius: '4px',
    marginTop: '32px',
    borderLeft: '3px solid var(--accent-cyan)',
  },
  highlightText: {
    color: '#94A3B8',
    fontStyle: 'italic',
    textTransform: 'uppercase' as const,
    fontSize: '12px',
    lineHeight: 1.6,
    letterSpacing: '0.5px',
  },
  rightCol: {
    flex: '1 1 55%',
  },
  timelineList: {
    position: 'relative' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  },
  timelineLine: {
    position: 'absolute' as const,
    top: '20px',
    bottom: '20px',
    left: '30px', // Center of iconSide (60px)
    transform: 'translateX(-50%)',
    width: '1px',
    backgroundColor: 'rgba(255,255,255,0.15)',
    zIndex: 1,
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center', 
    position: 'relative' as const,
  },
  iconSide: {
    width: '60px', 
    position: 'relative' as const,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  timelineIcon: {
    position: 'relative' as const, 
    zIndex: 2,
    width: '40px', 
    height: '40px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px', // Slightly rounded square like inspiration
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#041B3B', // Brand dark blue
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
  timelineCard: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: '4px', 
    padding: '16px 24px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    marginLeft: '16px',
  },
  cardQ: {
    fontSize: '15px',
    color: '#0F172A',
    lineHeight: 1.5,
    fontWeight: 700,
  },
  cardA: {
    fontSize: '14px',
    color: '#64748B',
    marginTop: '6px',
    display: 'block',
  }
};
