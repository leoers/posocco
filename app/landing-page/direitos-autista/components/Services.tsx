"use client";

import React, { useState, useEffect } from 'react';

const services = [
  {
    title: 'Tratamento em Plano de Saúde',
    desc: 'Combate à negativa de cobertura para terapias multidisciplinares (ABA, fonoaudiologia, terapia ocupacional, etc.).',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    )
  },
  {
    title: 'Benefício de Prestação Continuada (BPC/LOAS)',
    desc: 'Orientação e suporte para a concessão do benefício assistencial de um salário mínimo a pessoas em situação de vulnerabilidade.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    )
  },
  {
    title: 'Educação e Inclusão',
    desc: 'Proteção do direito ao acompanhante especializado em escolas regulares (públicas ou privadas) e combate à exclusão.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>
      </svg>
    )
  },
  {
    title: 'Isenções e Deduções do Imposto de Renda',
    desc: 'Assessoria para deduções de Imposto de Renda sobre despesas médicas e educacionais específicas. E recuperação do que foi pago a mais nos últimos cinco anos.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  }
];

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      setIsTablet(window.innerWidth >= 900 && window.innerWidth < 1200);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="section" style={{ ...styles.section, paddingTop: isMobile ? '40px' : '80px' }}>
      {/* Top Transition Notch */}
      <div style={styles.notchContainer}>
        <div style={styles.notchCircle}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <polyline points="19 12 12 19 5 12"/>
          </svg>
        </div>
      </div>

      <div className="container" style={styles.container}>
        <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="h2" style={styles.title}>
            Existem situações que não<br className="desktop-only-br"/> podemos <span style={styles.highlight}>deixar para depois</span>
          </h2>
          <p style={styles.subtitle}>
            Adiar a busca pelos seus direitos pode te causar grandes prejuízos e a perda da indenização.
          </p>
        </div>
        
        <div style={{ ...styles.grid, gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '60px' : '60px 24px' }}>
          {services.map((svc, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={(idx + 1) * 100} style={{ ...styles.card }}>
              <div style={styles.iconWrapper}>
                {svc.icon}
              </div>
              <h3 style={styles.cardTitle}>{svc.title}</h3>
              <p style={styles.cardDesc}>{svc.desc}</p>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" style={styles.ctaContainer}>
            <a href="#formulario" className="btn-pill">
              QUERO AVALIAR MEU CASO
              <div className="btn-wa-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
            </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#FFFFFF',
    position: 'relative' as const,
    paddingTop: '80px',
    paddingBottom: '100px',
  },
  notchContainer: {
    position: 'absolute' as const,
    top: '-24px', // Half the circle height
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    width: '48px',
    height: '48px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // Inverted border radius to mimic the smooth curve from the image
    boxShadow: '0 -10px 20px -10px rgba(0,0,0,0.15)',
  },
  notchCircle: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  header: {
    textAlign: 'center' as const,
    maxWidth: '800px',
    margin: '0 auto 64px auto',
  },
  title: {
    fontSize: 'clamp(28px, 4vw, 36px)',
    color: '#334155',
    fontWeight: 500,
    lineHeight: 1.3,
    marginBottom: '16px',
    fontFamily: 'var(--font-h)',
  },
  highlight: {
    color: '#1E3A8A', 
    fontWeight: 700,
  },
  subtitle: {
    fontSize: '16px',
    color: '#64748B',
    fontFamily: 'var(--font-p)',
  },
  grid: {
    display: 'grid',
  },
  card: {
    background: '#F8FAFC',
    borderRadius: '12px',
    padding: '40px 32px 32px 32px',
    position: 'relative' as const,
    border: '1px solid #E2E8F0',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  },
  iconWrapper: {
    position: 'absolute' as const,
    top: '-24px', 
    left: '24px',
    width: '64px',
    height: '64px',
    background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    boxShadow: '0 8px 16px rgba(30, 58, 138, 0.2)',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: '12px',
    marginTop: '16px', 
    fontFamily: 'var(--font-h)',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#64748B',
    lineHeight: 1.6,
    fontFamily: 'var(--font-p)',
  },
  ctaContainer: {
    marginTop: '60px',
    textAlign: 'center' as const,
  },
  btnCustom: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E3A8A', 
    color: '#FFFFFF',
    fontFamily: 'var(--font-p)',
    fontWeight: 600,
    fontSize: '14px',
    padding: '16px 40px',
    borderRadius: '40px',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(30, 58, 138, 0.4)',
    transition: 'all 0.3s ease',
  },
};
