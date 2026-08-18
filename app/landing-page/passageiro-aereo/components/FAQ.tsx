"use client";

import React, { useState } from 'react';

const faqs = [
  { q: 'Fui impedido de embarcar porque o voo estava lotado. Isso é permitido?', a: 'A venda de passagens além da capacidade da aeronave (overbooking) é uma prática comercial das companhias, mas a preterição de embarque gera consequências jurídicas. A Resolução 400 da ANAC prevê que a empresa deve primeiro buscar voluntários mediante compensação negociada; se o passageiro for preterido contra a sua vontade, tem direito a reacomodação, reembolso ou execução por outra modalidade, além de compensação financeira imediata prevista na norma. A jurisprudência também analisa, caso a caso, a existência de danos indenizáveis além dessa compensação.' },
  { q: 'Fui impedido de embarcar por overbooking. Existe uma "multa" que a companhia deve pagar na hora?', a: 'Sim, existe uma compensação financeira imediata prevista em norma da ANAC — tecnicamente não é uma multa, mas uma compensação devida diretamente ao passageiro. O art. 24 da Resolução 400 prevê, em caso de preterição involuntária, o pagamento imediato de 250 DES (Direitos Especiais de Saque) para voos domésticos e 500 DES para voos internacionais. O DES é uma unidade monetária internacional cujo valor varia conforme o câmbio — a conversão aproximada fica na casa de R$ 1.900 a R$ 2.000 para voos nacionais e o dobro para internacionais, mas o valor exato depende da cotação do dia.\n\nTrês pontos que o passageiro costuma desconhecer: primeiro, essa compensação deve ser paga em dinheiro (transferência ou espécie), e não em voucher, salvo se o passageiro expressamente aceitar outra forma; segundo, ela é devida de forma objetiva, no próprio aeroporto, independentemente de processo judicial; terceiro, a jurisprudência entende que essa compensação tarifada não impede a discussão judicial de danos morais e materiais — as duas verbas são tratadas como cumuláveis, analisando-se caso a caso os transtornos efetivamente sofridos. Se a companhia não pagou a compensação no aeroporto, guarde o cartão de embarque, os protocolos e qualquer comunicação recebida.' },
  { q: 'Perdi o voo de ida. A companhia pode cancelar minha volta?', a: 'Essa é uma prática conhecida como cancelamento por no-show. A jurisprudência majoritária considera abusiva a cláusula que cancela automaticamente o trecho de volta pelo não comparecimento na ida, por colocar o consumidor em desvantagem exagerada. Há decisões, inclusive do STJ, nesse sentido. Como o tema envolve análise do contrato e das circunstâncias, cada situação merece exame individual.' },
  { q: 'Quais documentos devo guardar para uma eventual ação?', a: 'Cartão de embarque (ou comprovante de check-in), passagem e comprovante de compra, comunicações da companhia (e-mails, SMS, notificações do aplicativo), RIB em caso de bagagem, notas fiscais de despesas realizadas por causa do problema (alimentação, hospedagem, transporte, itens de necessidade), fotografias e protocolos de atendimento. Comprovantes de compromissos perdidos (reserva de hotel, ingresso de evento, reunião de trabalho) também são relevantes para demonstrar a extensão dos danos.' },
  { q: 'O voo atrasou por causa do mau tempo. Tenho direito?', a: 'Mesmo em casos de mau tempo (força maior), a companhia aérea tem a obrigação de prestar assistência material (alimentação, comunicação e acomodação) de acordo com o tempo de espera. Se houver falha nessa assistência, cabe indenização.' },
  { q: 'Quanto tempo tenho para entrar com a ação?', a: 'Para voos nacionais, o prazo prescricional costuma ser de 5 anos a partir da data do voo. Para voos internacionais, o prazo é de 2 anos (Convenção de Montreal).' },
  { q: 'A companhia me deu um voucher. Ainda posso buscar indenização?', a: 'Sim. A aceitação de um voucher de alimentação ou desconto em próxima passagem não impede que você busque na justiça uma reparação pelos danos morais e materiais sofridos.' },
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
