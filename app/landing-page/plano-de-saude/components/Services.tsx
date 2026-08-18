"use client";

import React, { useState, useEffect } from 'react';

const services = [
  {
    title: 'Reajustes abusivos',
    desc: 'Analisamos os aumentos aplicados ao seu plano de saúde, especialmente em contratos por faixa etária ou coletivos, buscando a correção e eventual devolução dos valores pagos a mais.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    )
  },
  {
    title: 'Medicações de Alto Custo',
    desc: 'Seu plano de saúde tem a obrigação de fornecer os medicamentos essenciais para o seu tratamento, sem custos adicionais para você.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.5 9.5h13"/>
      </svg>
    )
  },
  {
    title: 'Negativas de cobertura',
    desc: 'Quando o plano se recusa a cobrir tratamentos, exames, cirurgias ou medicamentos prescritos, bem como dificulta ou demora excessivamente para agendar consultas, exames ou procedimentos, nossa equipe atua para buscar a autorização.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    )
  },
  {
    title: 'Home care negado ou atrasado',
    desc: 'Se o plano de saúde dificulta, atrasa ou nega a disponibilização do tratamento domiciliar prescrito, podemos buscar judicialmente esse direito.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    )
  },
  {
    title: 'Cancelamento unilateral',
    desc: 'Se o plano foi cancelado sem aviso ou justificativa, especialmente em casos de doenças graves, entramos com ação urgente para reativar o contrato.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
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
        <div className="animate-fade-up" style={styles.header}>
          <h2 className="h2" style={styles.title}>
            Como podemos <span style={styles.highlight}>ajudar você?</span>
          </h2>
          <p style={styles.subtitle}>
            Atuamos com agilidade para buscar seus direitos e impedir abusos cometidos por operadoras de saúde.
          </p>
        </div>
        
        <div style={{ ...styles.grid, gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)', gap: isMobile ? '60px' : '60px 24px' }}>
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
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#334155', marginBottom: '24px' }}>
              Se você passou por alguma dessas situações, saiba que você tem direitos!
            </p>
            <a href="#formulario" className="btn-pill">
              Quero avaliar meu caso
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
