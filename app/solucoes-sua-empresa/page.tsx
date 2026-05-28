import TemplateSolucoes from "@/app/solucoes/page";

export default function PaginaEmpresas() {
  const dadosEmpresas = [
    {
      id: "compliance",
      categoria: "Compliance e Anticorrupção",
      imagemCard: "/images/carousel/c-compliance.png",
      resumo: "Implementação e Defesa do Programa de Integridade e Ética Corporativa.",
      accordions: [
        {
          titulo: "Programa de Integridade",
          itens: ["Redação de códigos de ética e conduta", "Estruturação de canais de denúncia", "Treinamento preventivo contra desvios"]
        },
        {
          titulo: "Relações e Terceiros",
          itens: ["Due Diligence de fornecedores e M&A", "Interação com Administração Pública e Licitações", "Defesa em Acordos de Leniência"]
        },
        {
          titulo: "Investigações e Gestão",
          itens: ["Investigações internas e remediação", "Defesa técnica em Processo Administrativo (PAR)", "Defesa pessoal de diretores e gestores"]
        }
      ]
    },
    {
      id: "contratos",
      categoria: "Contratos Empresariais",
      imagemCard: "/images/carousel/c-contratos-empresarias.png",
      resumo: "Segurança Jurídica na Alocação de Riscos e Ativos.",
      accordions: [
        {
          titulo: "Riscos e Garantias",
          itens: ["Matriz de riscos e limitação de responsabilidade", "Implementação de garantias (Penhor, Hipoteca, Alienação)", "Equilíbrio econômico-financeiro e revisões"]
        },
        {
          titulo: "Cláusulas Estratégicas",
          itens: ["Regras de rescisão e cláusulas de Buy-Sell", "Proteção de ativos imateriais (Confidencialidade/Não concorrência)", "Cláusulas anticorrupção e validade digital"]
        },
        {
          titulo: "Resolução de Conflitos",
          itens: ["Defesa em arbitragem", "Métodos alternativos de resolução"]
        }
      ]
    },
    {
      id: "lgpd",
      categoria: "Direito Digital e LGPD",
      imagemCard: "/images/carousel/c-direito-digital-lgpd.png",
      resumo: "Governança de Dados e Defesa em Incidentes Tecnológicos.",
      accordions: [
        {
          titulo: "Conformidade LGPD",
          itens: ["Legalidade no tratamento de dados", "Políticas de privacidade e cookies", "Relatórios de impacto (DPIA)"]
        },
        {
          titulo: "Segurança e E-commerce",
          itens: ["Gestão de crises e fuga de dados", "Contratos de Software (SaaS) e Termos de Uso", "Auditoria digital em fusões e aquisições (M&A)"]
        },
        {
          titulo: "Novas Tecnologias",
          itens: ["Compliance em IA", "Propriedade intelectual digital", "Trabalho em ambiente digital (Home Office)"]
        }
      ]
    },
    {
      id: "esg",
      categoria: "Direito Empresarial ESG",
      imagemCard: "/images/carousel/c-direito-empresarial.png",
      resumo: "Gestão Ambiental, Social e Governança Corporativa.",
      accordions: [
        {
          titulo: "Ambiental e Social",
          itens: ["Licenciamento e créditos de carbono", "Políticas de diversidade e inclusão", "Defesa em danos ambientais e comunidades locais"]
        },
        {
          titulo: "Governança e Investimentos",
          itens: ["Transparência em relatórios de sustentabilidade", "Due Diligence ESG e Green Bonds", "Defesa dos direitos dos acionistas"]
        }
      ]
    },
    {
      id: "falimentar",
      categoria: "Falimentar e Recuperação",
      imagemCard: "/images/carousel/c-recuperacao.png",
      resumo: "Preservação da Empresa e Gestão de Insolvência.",
      accordions: [
        {
          titulo: "Recuperação",
          itens: ["Recuperação Judicial e Extrajudicial", "Suspensão de cobranças e plano de recuperação", "Captação de recursos (DIP Financing)"]
        },
        {
          titulo: "Falência e Credores",
          itens: ["Liquidação ordenada e venda de UPIs", "Habilitação e classificação de créditos", "Blindagem do patrimônio pessoal de sócios"]
        }
      ]
    },
    {
      id: "patrimonial",
      categoria: "Gestão Patrimonial",
      imagemCard: "/images/carousel/c-patrimonial.png",
      resumo: "Estruturação Sucessória e Proteção de Ativos.",
      accordions: [
        {
          titulo: "Holdings e Sucessão",
          itens: ["Holdings patrimoniais e familiares", "Doação com reserva de usufruto", "Protocolos familiares e acordos de sócios"]
        },
        {
          titulo: "Proteção e Eficiência",
          itens: ["Blindagem contra riscos matrimoniais", "Eficiência tributária (ITBI/ITCMD)", "Legalização de ativos imobiliários"]
        }
      ]
    },
    {
      id: "mobilidade",
      categoria: "Mobilidade Global",
      imagemCard: "/images/carousel/c-mobilidade.png",
      resumo: "Vistos, Expatriação e Compliance Internacional.",
      accordions: [
        {
          titulo: "Vistos e Residência",
          itens: ["Vistos para gestores e técnicos estrangeiros", "Visto para Nômade Digital", "Investimento imobiliário e econômico"]
        },
        {
          titulo: "Compliance Internacional",
          itens: ["Naturalização e residência permanente", "Prevenção de dupla tributação previdenciária", "Estruturação de Expatriate Policy"]
        }
      ]
    },
    {
      id: "ppp",
      categoria: "Parceria Público-Privada",
      imagemCard: "/images/carousel/c-pp.png",
      resumo: "Modelagem Jurídica e Gestão de Concessões.",
      accordions: [
        {
          titulo: "Licitação e Contrato",
          itens: ["Estruturação de PMI", "Reequilíbrio econômico-financeiro", "Garantias públicas e pagamentos do Estado"]
        },
        {
          titulo: "Regulação e Conflitos",
          itens: ["Governança perante Tribunais de Contas", "Defesa contra multas e caducidade", "Arbitragem em disputas técnicas"]
        }
      ]
    },
    {
      id: "intelectual",
      categoria: "Propriedade Intelectual",
      imagemCard: "/images/carousel/c-intelectual.png",
      resumo: "Proteção de Marcas, Patentes e Ativos Digitais.",
      accordions: [
        {
          titulo: "Marcas e Patentes",
          itens: ["Registro no INPI e oposição", "Patentes de produtos e desenhos industriais", "Combate à pirataria e contrafação"]
        },
        {
          titulo: "Tecnologia e Inovação",
          itens: ["Proteção de código-fonte e software", "Segredos de negócio (Know-how)", "Licenciamento e transferência de tecnologia"]
        }
      ]
    },
    {
      id: "previdenciario-emp",
      categoria: "Previdenciário Empresarial",
      imagemCard: "/images/carousel/c-prev-emp.png",
      resumo: "Otimização de Encargos e Gestão de Riscos do Trabalho.",
      accordions: [
        {
          titulo: "Gestão de RAT e FAP",
          itens: ["Contestação do FAP e enquadramento do RAT", "Gestão de afastados e Nexo Causal (NTEP)", "Defesa em ações regressivas do INSS"]
        },
        {
          titulo: "Créditos e Compliance",
          itens: ["Recuperação de créditos previdenciários (5 anos)", "Desoneração da folha de pagamento", "Auditoria de eSocial e folha"]
        }
      ]
    },
    {
      id: "consumo",
      categoria: "Relações de Consumo",
      imagemCard: "/images/carousel/c-consumo.png",
      resumo: "Defesa e Gestão de Passivo Consumerista.",
      accordions: [
        {
          titulo: "Contencioso e Defesa",
          itens: ["Ações de responsabilidade civil", "Defesa contra fraudes de consumidores", "Gestão de Recall e crises"]
        },
        {
          titulo: "Preventivo Administrativo",
          itens: ["Resposta a Procon e Senacon", "Termos de Ajustamento de Conduta (TAC)", "Compliance publicitário e de oferta"]
        }
      ]
    },
    {
      id: "societario",
      categoria: "Direito Societário",
      imagemCard: "/images/carousel/c-societario.png",
      resumo: "Governança Corporativa e Operações Estruturadas.",
      accordions: [
        {
          titulo: "Conflitos e Acordos",
          itens: ["Dissolução parcial de sociedade", "Acordos de bloqueio e saída", "Abuso de poder de controle"]
        },
        {
          titulo: "M&A e Governança",
          itens: ["Fusões, Cisões e Incorporações", "Blindagem da responsabilidade pessoal", "Arbitragem societária"]
        }
      ]
    },
    {
      id: "trabalho-emp",
      categoria: "Direito do Trabalho",
      imagemCard: "/images/carousel/c-trab-emp.png",
      resumo: "Compliance Trabalhista e Relações Sindicais.",
      accordions: [
        {
          titulo: "Consultoria e Defesa",
          itens: ["Auditoria e políticas internas", "Defesa em reclamações trabalhistas", "Legalidade da terceirização e PJ"]
        },
        {
          titulo: "Estratégico",
          itens: ["Negociações coletivas e sindicais", "Gestão de SST e Normas Regulamentadoras", "Confidencialidade e não concorrência"]
        }
      ]
    },
    {
      id: "tributario-emp",
      categoria: "Tributário Empresarial",
      imagemCard: "/images/carousel/c-trib-emp.png",
      resumo: "Planejamento Tributário e Recuperação de Créditos.",
      accordions: [
        {
          titulo: "Planejamento e Créditos",
          itens: ["Elisão fiscal e regimes de tributação", "Recuperação com 'Tese do Século'", "Benefícios fiscais (Lei do Bem)"]
        },
        {
          titulo: "Defesa e Reforma",
          itens: ["Contencioso administrativo (CARF)", "Transição para Reforma Tributária (IVA)", "Manutenção de Certidões (CND)"]
        }
      ]
    }
  ];

  return (
    <TemplateSolucoes 
      titulo="Soluções para sua empresa" 
      imagemFundo="/images/carousel/bg-solucoes-empresa.png" 
      dados={dadosEmpresas} 
    />
  );
}