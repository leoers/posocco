"use client";

import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 992;

  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    pergunta1: '',
    pergunta2: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.nome}.%0A%0ADoença: ${formData.pergunta1}%0A%0APossui exame/relatório? ${formData.pergunta2}`;
    window.open(`https://wa.me/5511992175115?text=${text}`, '_blank');
  };

  return (
    <section id="formulario" style={{ ...styles.section, paddingTop: isMobile ? '60px' : '120px' }}>
      <div className="container" style={{ ...styles.grid, gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: isMobile ? '40px' : '80px' }}>
        
        {/* Left Column - Text */}
        <div data-aos="fade-right" style={{ textAlign: isMobile ? 'center' : 'left' }}>
          <span style={styles.tag}>PARA FALAR CONOSCO</span>
          <h2 style={styles.title}>
            Um direcionamento jurídico começa com o primeiro <span className="text-cyan">contato.</span>
          </h2>
          <p style={{ ...styles.subtitle, margin: isMobile ? '0 auto' : '0' }}>
            Basta preencher o formulário e iniciar um atendimento com foco técnico e clareza na condução.
          </p>
        </div>

        {/* Right Column - Form Box */}
        <div style={styles.formContainer} data-aos="fade-left" data-aos-delay="200">
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Nome completo</label>
              <input required type="text" name="nome" value={formData.nome} onChange={handleChange} style={styles.input} placeholder="Seu nome" />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>WhatsApp</label>
              <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} style={styles.input} placeholder="(DDD) 90000-0000" />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Qual dessas doenças você já teve ou tem?</label>
              <select required name="pergunta1" value={formData.pergunta1} onChange={handleChange} style={styles.input}>
                <option value="" disabled>Selecione uma opção</option>
                <option value="AIDS">Síndrome da Imunodeficiência Adquirida (AIDS)</option>
                <option value="Alienação mental">Alienação mental</option>
                <option value="Cardiopatia grave">Cardiopatia grave</option>
                <option value="Cegueira">Cegueira</option>
                <option value="Contaminação por radiação">Contaminação por radiação</option>
                <option value="Doença de Paget">Doença de Paget em estados avançados (osteíte deformante)</option>
                <option value="Doença de Parkinson">Doença de Parkinson</option>
                <option value="Esclerose Múltipla">Esclerose Múltipla</option>
                <option value="Espondiloartrose Anquilosante">Espondiloartrose Anquilosante</option>
                <option value="Fibrose Cística">Fibrose Cística (Mucoviscidose)</option>
                <option value="Hanseníase">Hanseníase</option>
                <option value="Nefropatia grave">Nefropatia grave</option>
                <option value="Hepatopatia grave">Hepatopatia grave</option>
                <option value="Câncer">Neoplasia maligna (câncer)</option>
                <option value="Paralisia">Paralisia irreversível e incapacitante</option>
                <option value="Tuberculose ativa">Tuberculose ativa</option>
                <option value="Moléstia profissional">Moléstia profissional</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Você possui exame ou relatório médico da sua doença?</label>
              <select required name="pergunta2" value={formData.pergunta2} onChange={handleChange} style={styles.input}>
                <option value="" disabled>Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
                <option value="nao-sei">Não sei</option>
              </select>
            </div>

            <div style={{ marginTop: '40px' }}>
              <button type="submit" className="btn-pill btn-pulse" style={{ width: '100%' }}>
                ENVIAR MINHA SOLICITAÇÃO
                <div className="btn-wa-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Notch Arrow */}
      <div style={styles.notchArrow}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <polyline points="19 12 12 19 5 12"/>
        </svg>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#041B3B',
    backgroundImage: `linear-gradient(to right, rgba(4, 27, 59, 0.85), rgba(4, 27, 59, 0.6)), url('/isencao-imposto-renda/isencao-imposto-renda_background-formulario.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'luminosity', // Adds the black and white filter to the image
    padding: '120px 0 148px 0',
    position: 'relative' as const,
    zIndex: 1,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '80px',
    alignItems: 'center',
  },
  tag: {
    display: 'inline-block',
    color: 'var(--accent-cyan)',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
    marginBottom: '24px',
    fontFamily: 'var(--font-h)',
  },
  title: {
    fontSize: 'clamp(28px, 3.5vw, 36px)',
    fontWeight: 600,
    marginBottom: '24px',
    color: '#FFFFFF',
    lineHeight: 1.1,
    fontFamily: 'var(--font-h)',
  },
  subtitle: {
    fontSize: '18px',
    color: '#CBD5E1',
    lineHeight: 1.6,
    fontWeight: 400,
    fontFamily: 'var(--font-p)',
    maxWidth: '450px',
  },
  formContainer: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '30px',
    borderRadius: '8px', 
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
  },
  formGroup: {
    marginBottom: '20px',
    textAlign: 'left' as const,
  },
  label: {
    display: 'block',
    fontWeight: 400,
    marginBottom: '8px',
    color: '#CBD5E1',
    fontSize: '13px',
  },
  input: {
    width: '100%',
    padding: '16px',
    background: '#031023',
    border: 'none',
    borderRadius: '4px',
    color: '#FFFFFF',
    fontFamily: 'var(--font-p)',
    fontSize: '12px', 
    outline: 'none',
  },
  notchArrow: {
    position: 'absolute' as const,
    bottom: '28px',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    width: '56px',
    height: '56px',
    borderRadius: '50%',
  }
};
