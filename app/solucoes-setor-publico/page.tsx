import TemplateSolucoes from "@/app/solucoes/page";

export default function PaginaSetorPublico() {
  const dadosSetorPublico = [
    {
      id: "concursos",
      categoria: "Concursos Públicos",
      imagemCard: "/images/cards/concurso.jpg",
      resumo: "Defesa técnica de candidatos contra ilegalidades e critérios subjetivos.",
      accordions: [
        {
          titulo: "Fases e Avaliações",
          itens: [
            "Questionamento de cláusulas abusivas em editais",
            "Atuação contra reprovação injusta em provas objetivas e discursivas",
            "Defesa contra critérios subjetivos e laudos de inaptidão sem fundamento técnico",
            "Impugnação de critérios desproporcionais em Testes de Aptidão Física (TAF)"
          ]
        },
        {
          titulo: "Direito à Posse",
          itens: [
            "Ações para garantir posse de aprovados dentro do número de vagas",
            "Defesa contra exclusão por antecedentes que não impedem o exercício do cargo",
            "Atuação em casos de preterição arbitrária"
          ]
        }
      ]
    },
    {
      id: "estagio",
      categoria: "Estágio Probatório",
      imagemCard: "/images/cards/estagio.jpg",
      resumo: "Acompanhamento jurídico para garantir transparência e objetividade na avaliação.",
      accordions: [
        {
          titulo: "Defesa e Garantias",
          itens: [
            "Garantia de objetividade em critérios de produtividade e disciplina",
            "Defesa em processo administrativo de exoneração",
            "Atuação contra assédio moral e perseguições políticas",
            "Auxílio em licenças e defesa contra indeferimento irregular de benefícios"
          ]
        }
      ]
    },
    {
      id: "servidor",
      categoria: "Servidor Público",
      imagemCard: "/images/cards/servidor.jpg",
      resumo: "Proteção de direitos remuneratórios, previdenciários e disciplinares.",
      accordions: [
        {
          titulo: "Remuneração e Previdência",
          itens: [
            "Revisão geral anual (data-base) e descompressão salarial",
            "Ações para abono de permanência e contra descontos indevidos",
            "Garantia de integralidade e paridade salarial na aposentadoria",
            "Revisão de cálculos de pensão por morte e regra de pontos"
          ]
        },
        {
          titulo: "Carreira e Disciplina",
          itens: [
            "Defesa em sindicâncias e Processos Administrativos Disciplinares (PAD)",
            "Manutenção de férias e redução de jornada sem perda salarial",
            "Ações para anulação de demissões ilegais e reintegração ao cargo",
            "Pagamento de salários retroativos em casos de anulação judicial"
          ]
        }
      ]
    },
    {
      id: "gestor",
      categoria: "Gestor Público",
      imagemCard: "/images/cards/gestor.jpg",
      resumo: "Defesa estratégica contra improbidade, contas e fiscalização.",
      accordions: [
        {
          titulo: "Probidade e Contas",
          itens: [
            "Defesa da tese de dolo específico para improbidade administrativa",
            "Questionamento de provas (delações e apreensões em dispositivos móveis)",
            "Defesa técnica perante o TSE para aprovação de contas",
            "Atuação em Tribunais de Contas por dolo ou erro grosseiro"
          ]
        },
        {
          titulo: "Prazos e Sanções",
          itens: [
            "Arquivamento de processos por prescrição intercorrente",
            "Unificação de sanções por fatos semelhantes",
            "Defesa baseada na retroatividade de normas mais benéficas"
          ]
        }
      ]
    },
    {
      id: "mandato",
      categoria: "Mandato e Eleitoral",
      imagemCard: "/images/cards/eleitoral.jpg",
      resumo: "Compliance eleitoral e defesa da liberdade de expressão política.",
      accordions: [
        {
          titulo: "Defesa Política",
          itens: [
            "Planejamento de prazos de desincompatibilização na pré-campanha",
            "Defesa contra cassação e causas de inelegibilidade",
            "Atuação em cotas de gênero, raça e liberdade de expressão em redes",
            "Defesa sobre uso da máquina pública e disparos em massa/deepfakes"
          ]
        },
        {
          titulo: "Gestão Preventiva",
          itens: [
            "Compliance em contratações diretas e dispensas de licitação",
            "Assessoria em transições de mandato e prestação de contas de convênios",
            "Pareceres sobre editais, contratos e aditivos para redução de riscos"
          ]
        }
      ]
    }
  ];

  return (
    <TemplateSolucoes 
      titulo="Setor Público" 
      imagemFundo="/images/hero-setor-publico.jpg" 
      dados={dadosSetorPublico} 
    />
  );
}