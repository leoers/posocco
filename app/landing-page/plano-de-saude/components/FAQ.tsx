"use client";

import React, { useState } from 'react';

const faqs = [
  { q: 'O plano de saúde pode negar tratamento indicado pelo médico?', a: 'Não. Se o tratamento é prescrito por um profissional habilitado e é necessário para sua saúde, o plano não pode recusar sem justificativa legal. Você pode exigir seu direito judicialmente.' },
  { q: 'É possível obrigar o plano a cobrir medicamentos de alto custo ou fora do rol da ANS?', a: 'Sim. A Justiça já reconhece que o rol da ANS é exemplificativo. Se o medicamento é necessário e foi prescrito, é possível conseguir a liberação com urgência.' },
  { q: 'O que fazer se o plano cancelou meu contrato sem aviso?', a: 'O cancelamento unilateral, principalmente em casos de doenças graves ou durante tratamentos, é ilegal. Você pode entrar com ação para reativar o plano e pedir indenização.' },
  { q: 'Sofri um reajuste abusivo no meu plano. Posso contestar?', a: 'Sim. Muitos reajustes, especialmente em planos por faixa etária ou coletivos, são considerados abusivos. É possível pedir a revisão e até o reembolso em dobro do valor pago a mais.' },
  { q: 'O plano está demorando muito para marcar consultas e exames. Isso é ilegal?', a: 'Sim. A demora excessiva fere seu direito à saúde e à dignidade. Com o apoio de um advogado, é possível exigir o agendamento imediato via ação judicial.' },
  { q: 'Posso conseguir uma liminar para autorizar o tratamento rapidamente?', a: 'Sim. Em casos urgentes, é possível entrar com pedido de liminar para que o plano seja obrigado a autorizar o tratamento ou medicamento em poucos dias.' },
  { q: 'Preciso pagar para vocês analisarem meu caso?', a: 'Os honorários advocatícios são tratados de forma individual e transparente, sempre em conformidade com o Código de Ética da OAB e com a tabela da seccional. Na primeira conversa, antes de qualquer contratação, você recebe todas as informações sobre a forma de cobrança aplicável à sua situação, para decidir livremente se deseja prosseguir. Nenhum valor é cobrado sem prévio e expresso acordo.' }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" style={styles.section}>
      <div className="container" style={styles.container}>
        
        <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={styles.badge}>
            TIRE AS SUAS DÚVIDAS
          </div>
          <h2 className="h2" style={styles.title}>FAQ - Perguntas Frequentes</h2>
        </div>

        <div style={styles.accordionWrapper}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} data-aos="fade-up" data-aos-delay={(idx + 1) * 100} style={{ ...styles.item }}>
                <button style={styles.header} onClick={() => toggle(idx)}>
                  <span>{faq.q}</span>
                  <div style={styles.iconCircle}>
                    <svg 
                      viewBox="0 0 24 24" 
                      width="14" 
                      height="14" 
                      fill="none" 
                      stroke="#FFFFFF" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{ 
                        transition: 'transform 400ms ease-in-out',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                <div style={{ ...styles.content, maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0, paddingBottom: isOpen ? '24px' : '0' }}>
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div data-aos="zoom-in" style={styles.ctaContainer}>
            <a href="#formulario" className="btn-pill">
              Quero falar com um advogado
              <div className="btn-wa-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
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
    backgroundColor: '#F4F4F5', 
    position: 'relative' as const,
    paddingTop: '80px',
    paddingBottom: '100px',
    marginTop: '-28px',
    zIndex: 2,
    WebkitMaskImage: 'radial-gradient(circle at 50% 0px, transparent 28px, black 28.5px)',
    maskImage: 'radial-gradient(circle at 50% 0px, transparent 28px, black 28.5px)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#E4E4E7',
    color: '#52525B',
    padding: '8px 24px',
    borderRadius: '30px',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
    marginBottom: '24px',
    fontFamily: 'var(--font-p)',
  },
  title: {
    fontSize: 'clamp(28px, 4vw, 36px)',
    color: '#0F172A',
    fontWeight: 800,
    fontFamily: 'var(--font-h)',
    letterSpacing: '-1px',
  },
  accordionWrapper: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  item: {
    border: '1px solid #707e94', // Adjusted to match the image border color roughly
    borderRadius: '4px',
    marginBottom: '12px',
    backgroundColor: '#F4F4F5', // Same as section background
    padding: '0 24px',
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 0',
    background: 'none',
    border: 'none',
    color: '#1E293B',
    fontFamily: 'var(--font-p)',
    fontSize: '15px',
    fontWeight: 500,
    textAlign: 'left' as const,
    cursor: 'pointer',
  },
  iconCircle: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#0F172A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginLeft: '16px',
  },
  content: {
    overflow: 'hidden',
    transition: 'all 400ms ease-in-out',
    color: '#475569',
    paddingRight: '40px',
  },
  ctaContainer: {
    marginTop: '56px',
    textAlign: 'center' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  ctaSubtitle: {
    fontSize: '13px',
    color: '#52525B',
    marginTop: '16px',
    fontWeight: 500,
  }
};
