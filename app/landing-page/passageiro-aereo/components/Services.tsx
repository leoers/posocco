"use client";

import React, { useState, useEffect } from 'react';

const services = [
  {
    title: 'Cancelamento ou atraso de voo',
    desc: 'Você sabia que o cancelamento ou atraso injustificado pode gerar incertezas e transtornos enormes? Isso pode levar a disputas legais e a necessidade de compensação pelos danos causados à sua viagem.',
    icon: (
      <svg viewBox="0 0 512 512" width="28" height="28" fill="currentColor">
        <g transform="translate(0,512) scale(0.1,-0.1)">
          <path d="M1683 4119 c-71 -12 -237 -80 -280 -114 -61 -48 -89 -142 -63 -210 6 -15 153 -234 327 -488 174 -254 316 -468 317 -475 1 -8 -35 -30 -84 -52 -363 -164 -790 -354 -812 -362 -24 -8 -55 7 -310 159 -274 163 -284 168 -338 168 -61 0 -231 -60 -286 -101 -66 -49 -91 -151 -56 -226 20 -44 510 -578 595 -650 74 -61 196 -123 296 -150 92 -24 269 -29 351 -9 30 7 266 92 523 188 257 97 470 174 472 171 2 -2 -39 -170 -91 -373 -108 -422 -112 -455 -57 -522 71 -88 134 -96 322 -39 143 43 188 66 252 133 26 26 230 328 453 669 l407 622 192 72 c106 40 349 130 541 201 194 72 374 145 408 165 149 91 263 256 275 401 5 68 4 77 -26 137 -38 78 -71 107 -176 157 -115 56 -217 79 -370 86 -141 6 -257 -5 -395 -39 -67 -16 -543 -187 -827 -296 l-52 -20 -623 379 c-343 209 -645 388 -673 398 -64 24 -146 31 -212 20z m187 -273 c817 -498 1269 -769 1294 -773 23 -3 119 29 379 126 460 173 531 197 647 221 258 53 611 -8 610 -104 -1 -67 -96 -183 -187 -230 -27 -13 -108 -46 -179 -71 -71 -26 -457 -170 -859 -320 -673 -252 -934 -350 -1895 -713 -190 -72 -374 -136 -410 -142 -121 -22 -268 9 -377 79 -42 27 -132 116 -294 291 -129 138 -235 255 -237 259 -3 9 42 31 64 31 8 0 141 -75 294 -166 153 -91 295 -170 314 -176 37 -12 -36 -43 956 401 135 60 257 120 271 134 33 32 41 71 25 117 -7 19 -162 253 -346 520 -183 267 -333 491 -334 499 -1 8 24 24 59 37 77 31 131 26 205 -20z m1118 -1918 c-138 -211 -284 -434 -325 -495 -56 -86 -83 -117 -111 -131 -46 -23 -131 -47 -138 -39 -5 5 193 804 201 815 4 5 600 230 612 231 7 1 -101 -171 -239 -381z"/>
        </g>
      </svg>
    )
  },
  {
    title: 'Overbooking e embarque negado',
    desc: 'Quando a empresa vende mais lugares do que o disponível, você pode ser impedido de viajar. Isso dificulta seus planos e gera o dever imediato de indenização por parte da companhia aérea.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2Z"/>
        <path d="m9.5 14.5 5-5"/>
        <path d="m9.5 9.5 5 5"/>
      </svg>
    )
  },
  {
    title: 'Problemas com bagagem',
    desc: 'O extravio ou violação da sua bagagem é uma barreira para aproveitar sua viagem, limitando seus recursos longe de casa. A empresa é 100% responsável pelos itens perdidos.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 20h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"/>
        <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"/>
        <path d="M10 20v2"/>
        <path d="M14 20v2"/>
      </svg>
    )
  },
  {
    title: 'Falta de assistência material',
    desc: 'Órgãos governamentais como a ANAC determinam que companhias aéreas devem fornecer alimentação e hotel em esperas longas. Quem não cumpre as regras deve compensar o passageiro.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
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
