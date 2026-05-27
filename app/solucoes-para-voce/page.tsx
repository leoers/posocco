import TemplateSolucoes from "@/app/solucoes/page";

export default function PaginaVoce() {
  const dadosVoce = [
    {
      id: "bancario",
      categoria: "Direito Bancário e Financeiro",
      imagemCard: "/images/carousel/c-financeiro.png",
      resumo: "Combate a Abusos em Contratos Bancários.",
      accordions: [
        {
          titulo: "Juros e Tarifas",
          itens: ["Juros abusivos", "Tarifas e taxas indevidas", "Revisão de contratos de empréstimo e financiamento"]
        },
        {
          titulo: "Fraudes e Falhas de Segurança",
          itens: ["Fraudes com cartão de crédito e débito", "Golpes bancários (Pix, engenharia social)", "Acesso indevido a contas (phishing)"]
        },
        {
          titulo: "Cadastros e Investimentos",
          itens: ["Exclusão de Cadastros de Inadimplentes (Inscrição indevida)", "Recuperação de Valores do Investidor", "Bloqueios judiciais (Bacen Jud)"]
        },
        {
          titulo: "Execuções e Dívidas",
          itens: ["Defesa em ações de execução", "Plano de reestruturação de superendividamento"]
        }
      ]
    },
    {
      id: "civil",
      categoria: "Direito Civil",
      imagemCard: "/images/carousel/c-direito-civil.png",
      resumo: "Relações Contratuais e Obrigações.",
      accordions: [
        {
          titulo: "Contratos e Cobranças",
          itens: ["Elaboração e análise de contratos", "Atuação em casos de quebra de contratos", "Cobrança de dívidas"]
        },
        {
          titulo: "Indenizações",
          itens: ["Danos morais e materiais", "Erros profissionais"]
        },
        {
          titulo: "Propriedade e Personalidade",
          itens: ["Disputas de propriedade", "Conflitos entre vizinhos", "Alteração de nome/gênero", "Proteção da imagem e honra"]
        }
      ]
    },
    {
      id: "condominial",
      categoria: "Direito Condominial",
      imagemCard: "/images/carousel/c-direito-condominial.png",
      resumo: "Assessoria completa para condomínios e moradores.",
      accordions: [
        {
          titulo: "Gestão e Conflitos",
          itens: [
            "Assessoria ao síndico e administradora",
            "Cobrança de inadimplentes",
            "Regulamentação e aplicação de normas",
            "Participação e orientação em assembleias",
            "Resolução de conflitos e mediação"
          ]
        }
      ]
    },
    {
      id: "consumidor",
      categoria: "Direito do Consumidor",
      imagemCard: "/images/carousel/c-direito-consumidor.png",
      resumo: "Proteção Contratual e Garantia de Direitos.",
      accordions: [
        {
          titulo: "Proteção Contratual",
          itens: ["Revisão de contrato e redução de juros", "Anulação de cláusulas abusivas", "Reembolso de valores pagos"]
        },
        {
          titulo: "Reparação de Danos",
          itens: ["Serviços mal prestados (Telefonia, Bancos, Saúde)", "Defesa em acidentes de consumo", "Produto ou serviço com vícios (defeitos)"]
        },
        {
          titulo: "Publicidade e Cobrança",
          itens: ["Defesa contra publicidade enganosa", "Venda casada", "Cobrança de forma vexatória"]
        }
      ]
    },
    {
      id: "digital",
      categoria: "Direito Digital",
      imagemCard: "/images/carousel/c-direito-digital.png",
      resumo: "Proteção de Dados e Crimes Cibernéticos.",
      accordions: [
        {
          titulo: "Privacidade (LGPD)",
          itens: ["Defesa em vazamento de dados", "Acesso, correção e eliminação de dados"]
        },
        {
          titulo: "Crimes e Responsabilidade",
          itens: ["Fraudes online e roubo de identidade", "Calúnia e difamação online", "Remoção de conteúdo e Direito ao Esquecimento"]
        },
        {
          titulo: "Propriedade e E-commerce",
          itens: ["Direitos autorais e proteção de marcas", "Defesa dos direitos em compras online"]
        }
      ]
    },
    {
      id: "familia",
      categoria: "Direito de Família",
      imagemCard: "/images/carousel/c-direito-familia2.png",
      resumo: "Questões Matrimoniais, Filiação e Sucessões.",
      accordions: [
        {
          titulo: "Término de Relacionamento",
          itens: ["Divórcio e Dissolução de união estável", "Partilha de bens"]
        },
        {
          titulo: "Filhos e Pensão",
          itens: ["Guarda e Regulamentação de convívio", "Ação de Pensão Alimentícia (Fixação e Cobrança)", "Investigação de Paternidade"]
        },
        {
          titulo: "Sucessões",
          itens: ["Inventário judicial e extrajudicial", "Testamentos e Doações", "Planejamento sucessório"]
        }
      ]
    },
    {
      id: "imobiliario",
      categoria: "Direito Imobiliário",
      imagemCard: "/images/carousel/c-direito-imobiliario1.png",
      resumo: "Segurança Jurídica em Negócios Imobiliários.",
      accordions: [
        {
          titulo: "Imóveis e Contratos",
          itens: [
            "Transações de compra e venda",
            "Contratos de locação",
            "Regularização de imóveis/usucapião",
            "Atrasos na entrega e falhas na construção",
            "Distratos",
            "Divisão de imóveis em herança/divórcio"
          ]
        }
      ]
    },
    {
      id: "previdenciario",
      categoria: "Direito Previdenciário",
      imagemCard: "/images/carousel/c-direito-previdenciario.png",
      resumo: "Concessão e Revisão de Benefícios.",
      accordions: [
        {
          titulo: "Benefícios",
          itens: ["Aposentadorias e Planejamento", "Auxílio-doença e Acidente", "Pensão por morte", "BPC/LOAS"]
        },
        {
          titulo: "Revisões e Recursos",
          itens: ["Revisões de aposentadoria", "Comprovação de vínculos", "Recursos administrativos contra o INSS"]
        }
      ]
    },
    {
      id: "saude",
      categoria: "Direito da Saúde",
      imagemCard: "/images/carousel/c-direito-saude2.png",
      resumo: "Garantia de Acesso a Tratamentos.",
      accordions: [
        {
          titulo: "Planos de Saúde",
          itens: ["Negativas de tratamento/medicamento", "Reajustes abusivos", "Cancelamento indevido"]
        },
        {
          titulo: "SUS e Paciente",
          itens: ["Ações contra o Poder Público", "Acesso a prontuário", "Falhas no tratamento"]
        }
      ]
    },
    {
      id: "trabalho",
      categoria: "Direito do Trabalho",
      imagemCard: "/images/carousel/c-direito-trabalho.png",
      resumo: "Defesa dos Direitos do Trabalhador.",
      accordions: [
        {
          titulo: "Verbas e FGTS",
          itens: ["Horas extras e Adicionais", "Insalubridade e Periculosidade", "Depósitos de FGTS e Rescisórios"]
        },
        {
          titulo: "Rescisão e Acidentes",
          itens: ["Reversão de Justa Causa", "Rescisão Indireta", "Doenças Ocupacionais e Indenizações"]
        },
        {
          titulo: "Assédio e Sindicatos",
          itens: ["Assédio Moral e Sexual", "Estabilidade da gestante", "Negociações sindicais"]
        }
      ]
    },
    {
      id: "transporte",
      categoria: "Direito de Transporte",
      imagemCard: "/images/carousel/c-direito-transporte.png",
      resumo: "Responsabilidade Civil e Direitos do Passageiro.",
      accordions: [
        {
          titulo: "Passagens e Bagagens",
          itens: ["Atrasos e cancelamentos de voos", "Extravio de bagagem", "Direito de arrependimento e reembolso", "Indenização por acidente"]
        }
      ]
    },
    {
      id: "tributario",
      categoria: "Direito Tributário",
      imagemCard: "/images/carousel/c-direito-tributario.png",
      resumo: "Defesa Administrativa e Judicial Fiscal.",
      accordions: [
        {
          titulo: "Impostos e Multas",
          itens: ["Anulação de débitos fiscais", "Restituição de tributos pagos a mais", "Defesa em execuções fiscais"]
        }
      ]
    },
    {
      id: "arbitragem",
      categoria: "Arbitragem e Mediação",
      imagemCard: "/images/carousel/c-arbitragem.png",
      resumo: "Resolução Alternativa de Conflitos.",
      accordions: [
        {
          titulo: "Procedimento Arbitral",
          itens: ["Cláusulas compromissórias", "Produção de provas técnicas", "Execução de sentenças arbitrais"]
        },
        {
          titulo: "Mediação",
          itens: ["Facilitação de acordos", "Garantia de confidencialidade", "Redação do Termo de Acordo"]
        }
      ]
    }
  ];

  return (
    <TemplateSolucoes 
      titulo="Soluções para você" 
      imagemFundo="/images/carousel/bg-solucoes-vc.png" 
      dados={dadosVoce} 
    />
  );
}