/**
 * Conteúdo da SmartVoz Academy.
 *
 * Cada área de conhecimento possui:
 * - slug (rota)
 * - título, subtítulo, ícone
 * - o que é, para que serve, o que será aprendido
 * - aplicação prática (fluxo)
 * - materiais, treinamentos, ferramentas
 * - o que o participante terá acesso
 *
 * O conteúdo é educacional e não promete resultados.
 */

export type AcademyArea = {
  slug: string;
  titulo: string;
  subtitulo: string;
  icone: string;
  oQueE: string[];
  paraQueServe: string[];
  oQueAprendera: string[];
  aplicacaoPratica: { etapa: string }[];
  materiais: string[];
  treinamentos: string[];
  ferramentas: string[];
  aulasGravadas: string;
  proximosEncontros: string;
  aviso?: string;
};

export const academyAreas: AcademyArea[] = [
  {
    slug: "marketing-digital",
    titulo: "Marketing Digital",
    subtitulo: "Aprenda a construir presença, posicionamento e relacionamento no ambiente digital.",
    icone: "Megaphone",
    oQueE: [
      "Marketing Digital é o conjunto de estratégias utilizadas para divulgar uma marca, produto, serviço ou oportunidade através dos canais digitais.",
      "Ele envolve muito mais do que simplesmente publicar nas redes sociais. Um trabalho estruturado de Marketing Digital ajuda a definir público, construir posicionamento, comunicar uma proposta, gerar atenção, criar relacionamento, atrair potenciais clientes, acompanhar resultados e transformar interesse em oportunidades comerciais.",
    ],
    paraQueServe: [
      "Definir público-alvo e persona",
      "Construir posicionamento e identidade",
      "Comunicar uma proposta de valor",
      "Gerar atenção e relacionamento",
      "Atrair potenciais clientes",
      "Acompanhar resultados e métricas",
      "Transformar interesse em oportunidades comerciais",
    ],
    oQueAprendera: [
      "Fundamentos do Marketing Digital",
      "Posicionamento e identidade",
      "Público-alvo e persona",
      "Proposta de valor",
      "Redes sociais",
      "Produção de conteúdo",
      "Calendário de conteúdo",
      "Conteúdo educativo, de autoridade e comercial",
      "Copywriting",
      "Páginas e geração de leads",
      "Funil de vendas",
      "Relacionamento e métricas",
    ],
    aplicacaoPratica: [
      { etapa: "Estruturar presença digital" },
      { etapa: "Definir público e posicionamento" },
      { etapa: "Criar calendário de conteúdo" },
      { etapa: "Produzir conteúdo educativo e comercial" },
      { etapa: "Gerar leads" },
      { etapa: "Conectar ações ao Funil de Vendas SmartVoz" },
      { etapa: "Acompanhar métricas e ajustar" },
    ],
    materiais: [
      "Modelos de conteúdo",
      "Roteiros de publicação",
      "Exemplos de anúncios",
      "Calendário de publicação",
      "Templates de páginas",
      "Materiais de apoio",
      "Checklists",
    ],
    treinamentos: [
      "Treinamentos ao vivo sobre posicionamento e conteúdo",
      "Encontros práticos de copywriting",
      "Sessões de análise de métricas",
    ],
    ferramentas: [
      "Funil de Vendas SmartVoz",
      "Templates de páginas de captura",
      "Calendário de conteúdo",
      "Modelos de copy",
    ],
    aulasGravadas:
      "Aulas gravadas disponibilizadas conforme a agenda da Academy, cobrindo fundamentos e aplicações práticas.",
    proximosEncontros:
      "Consulte a agenda na página principal da Academy para datas, temas e instrutores.",
  },
  {
    slug: "trafego",
    titulo: "Tráfego Pago e Orgânico",
    subtitulo: "Entenda como atrair pessoas para suas páginas, conteúdos e ofertas.",
    icone: "TrendingUp",
    oQueE: [
      "Tráfego representa as pessoas que chegam até seus canais digitais. Existem duas formas principais trabalhadas na Academy: tráfego orgânico e tráfego pago.",
      "Tráfego orgânico é a geração de alcance e visitas sem pagar diretamente por cada visualização ou clique, através de Instagram, TikTok, YouTube, Facebook, mecanismos de busca, conteúdo, indicações, compartilhamentos e relacionamento.",
      "Tráfego pago é a utilização de plataformas de anúncios para alcançar públicos específicos mediante investimento em mídia, abordando objetivos de campanha, público, segmentação, orçamento, criativos, textos, páginas, leads, métricas e otimização.",
    ],
    paraQueServe: [
      "Atrair visitantes para páginas e conteúdos",
      "Construir audiência orgânica",
      "Ampliar alcance com investimento em mídia",
      "Gerar leads qualificados",
      "Integrar tráfego ao funil de vendas",
      "Otimizar custo por resultado",
    ],
    oQueAprendera: [
      "Diferença entre tráfego pago e orgânico",
      "Definição de objetivos",
      "Estratégia de conteúdo",
      "Geração de audiência",
      "Campanhas e segmentação",
      "Criativos e orçamento",
      "Landing pages",
      "Geração de leads",
      "Integração com o funil",
      "Custo por resultado",
      "Testes, métricas e otimização",
    ],
    aplicacaoPratica: [
      { etapa: "Tráfego (orgânico ou pago)" },
      { etapa: "Página de destino" },
      { etapa: "Lead" },
      { etapa: "Funil de Vendas SmartVoz" },
      { etapa: "Relacionamento" },
      { etapa: "Apresentação" },
      { etapa: "Conversão" },
    ],
    materiais: [
      "Modelos de criativos",
      "Roteiros de anúncios",
      "Exemplos de segmentação",
      "Checklists de campanha",
      "Guias de landing page",
    ],
    treinamentos: [
      "Treinamentos ao vivo sobre campanhas e segmentação",
      "Sessões práticas de criativos",
      "Análise de métricas e otimização",
    ],
    ferramentas: [
      "Funil de Vendas SmartVoz",
      "Modelos de landing pages",
      "Tabelas de controle de investimento",
    ],
    aulasGravadas:
      "Aulas gravadas disponibilizadas conforme a agenda da Academy, cobrindo fundamentos e aplicações práticas.",
    proximosEncontros:
      "Consulte a agenda na página principal da Academy para datas, temas e instrutores.",
    aviso:
      "Anúncios não representam garantia de vendas ou retorno financeiro. Os resultados dependem da execução e das condições individuais de cada participante.",
  },
  {
    slug: "vendas",
    titulo: "Vendas",
    subtitulo: "Transforme atendimento improvisado em um processo comercial organizado.",
    icone: "Handshake",
    oQueE: [
      "Venda é o processo de compreender uma necessidade e apresentar uma solução adequada ao cliente. O treinamento SmartVoz será orientado para uma venda consultiva e profissional.",
    ],
    paraQueServe: [
      "Estruturar o processo comercial",
      "Melhorar a primeira abordagem",
      "Identificar necessidades do cliente",
      "Construir valor na apresentação",
      "Tratar objeções com segurança",
      "Fechar vendas com confiança",
      "Manter relacionamento e fidelização",
      "Gerar indicações",
    ],
    oQueAprendera: [
      "Prospecção e primeira abordagem",
      "Comunicação e escuta ativa",
      "Identificação da necessidade",
      "Apresentação e construção de valor",
      "Tratamento de objeções",
      "Negociação e fechamento",
      "Follow-up e pós-venda",
      "Relacionamento, fidelização e indicação",
    ],
    aplicacaoPratica: [
      { etapa: "Lead recebido" },
      { etapa: "Primeiro contato" },
      { etapa: "Identificação da necessidade" },
      { etapa: "Apresentação" },
      { etapa: "Dúvidas" },
      { etapa: "Tratamento de objeções" },
      { etapa: "Decisão" },
      { etapa: "Contratação" },
      { etapa: "Pós-venda" },
      { etapa: "Relacionamento" },
    ],
    materiais: [
      "Scripts de abordagem",
      "Modelos de mensagens",
      "Roteiros de apresentação",
      "Perguntas de diagnóstico",
      "Respostas para objeções",
      "Estrutura de follow-up",
    ],
    treinamentos: [
      "Treinamentos ao vivo sobre técnicas de vendas",
      "Sessões práticas de role-play",
      "Análise de funil e conversão",
    ],
    ferramentas: [
      "Funil de Vendas SmartVoz",
      "Scripts e modelos de mensagens",
      "Estrutura de follow-up",
      "Acompanhamento do cliente",
    ],
    aulasGravadas:
      "Aulas gravadas disponibilizadas conforme a agenda da Academy, cobrindo fundamentos e aplicações práticas.",
    proximosEncontros:
      "Consulte a agenda na página principal da Academy para datas, temas e instrutores.",
  },
  {
    slug: "gestao-financeira",
    titulo: "Gestão Financeira",
    subtitulo: "Organize os números para tomar decisões com mais clareza.",
    icone: "Wallet",
    oQueE: [
      "Gestão financeira é o processo de organizar, acompanhar e planejar a utilização dos recursos financeiros. O objetivo é desenvolver consciência sobre receitas, despesas e decisões financeiras.",
    ],
    paraQueServe: [
      "Organizar receitas e despesas",
      "Compreender custos e margem",
      "Planejar o orçamento",
      "Definir metas financeiras",
      "Criar reserva",
      "Tomar decisões com clareza",
      "Separar dinheiro pessoal e empresarial",
    ],
    oQueAprendera: [
      "Organização financeira",
      "Receitas, despesas e custos",
      "Fluxo de caixa",
      "Orçamento e planejamento",
      "Metas e controle",
      "Margem e reserva",
      "Indicadores",
      "Diferença entre faturamento e lucro",
      "Separação entre dinheiro pessoal e empresarial",
      "Tomada de decisão",
    ],
    aplicacaoPratica: [
      { etapa: "Entradas" },
      { etapa: "Saídas" },
      { etapa: "Custos" },
      { etapa: "Resultado" },
      { etapa: "Reserva" },
      { etapa: "Planejamento" },
    ],
    materiais: [
      "Planilhas de fluxo de caixa",
      "Checklists de organização",
      "Modelos de orçamento",
      "Exercícios práticos",
      "Exemplos de indicadores",
    ],
    treinamentos: [
      "Treinamentos ao vivo sobre organização financeira",
      "Sessões práticas de fluxo de caixa",
      "Análise de indicadores",
    ],
    ferramentas: ["Planilhas de controle", "Modelos de orçamento", "Checklists de gestão"],
    aulasGravadas:
      "Aulas gravadas disponibilizadas conforme a agenda da Academy, cobrindo fundamentos e aplicações práticas.",
    proximosEncontros:
      "Consulte a agenda na página principal da Academy para datas, temas e instrutores.",
    aviso:
      "O conteúdo possui finalidade educacional e não substitui orientação individual de contador, advogado ou profissional financeiro.",
  },
  {
    slug: "empreendedorismo",
    titulo: "Empreendedorismo",
    subtitulo: "Desenvolva visão de negócio, organização e capacidade de execução.",
    icone: "Rocket",
    oQueE: [
      "Empreendedorismo é a capacidade de identificar oportunidades, desenvolver soluções e organizar recursos para transformar ideias em projetos. Empreender exige mais do que ter uma ideia: é necessário planejar, executar, acompanhar, corrigir e evoluir.",
    ],
    paraQueServe: [
      "Identificar oportunidades",
      "Desenvolver proposta de valor",
      "Estruturar modelo de negócio",
      "Planejar e executar",
      "Organizar processos",
      "Definir metas",
      "Crescer de forma sustentável",
    ],
    oQueAprendera: [
      "Comportamento empreendedor",
      "Identificação de oportunidades",
      "Proposta de valor",
      "Mercado e cliente",
      "Posicionamento",
      "Modelo de negócio",
      "Planejamento e processos",
      "Metas e execução",
      "Liderança e organização",
      "Melhoria contínua",
      "Crescimento sustentável",
    ],
    aplicacaoPratica: [
      { etapa: "Ideia" },
      { etapa: "Oportunidade" },
      { etapa: "Planejamento" },
      { etapa: "Execução" },
      { etapa: "Cliente" },
      { etapa: "Processo" },
      { etapa: "Análise" },
      { etapa: "Melhoria" },
      { etapa: "Crescimento" },
    ],
    materiais: [
      "Modelos de plano de negócio",
      "Canvas de proposta de valor",
      "Checklists de planejamento",
      "Guias de processos",
      "Exemplos de metas",
    ],
    treinamentos: [
      "Treinamentos ao vivo sobre modelo de negócio",
      "Sessões práticas de planejamento",
      "Análise de crescimento",
    ],
    ferramentas: ["Modelos de canvas", "Planilhas de planejamento", "Checklists de execução"],
    aulasGravadas:
      "Aulas gravadas disponibilizadas conforme a agenda da Academy, cobrindo fundamentos e aplicações práticas.",
    proximosEncontros:
      "Consulte a agenda na página principal da Academy para datas, temas e instrutores.",
  },
  {
    slug: "mentalidade",
    titulo: "Mentalidade",
    subtitulo: "Construa comportamentos que sustentem aprendizado, disciplina e execução.",
    icone: "Brain",
    oQueE: [
      "Mentalidade é a maneira como uma pessoa interpreta desafios, oportunidades, responsabilidades e decisões. A SmartVoz Academy tratará esse tema de maneira prática, não utilizando conteúdo baseado apenas em frases motivacionais.",
      "O objetivo é trabalhar clareza, responsabilidade, disciplina, foco, consistência, adaptação, aprendizado e tomada de decisão.",
    ],
    paraQueServe: [
      "Desenvolver clareza e foco",
      "Construir disciplina e constância",
      "Gerenciar expectativas",
      "Adaptar-se a desafios",
      "Tomar decisões com responsabilidade",
      "Sustentar aprendizado contínuo",
    ],
    oQueAprendera: [
      "Definição de objetivos",
      "Disciplina e hábitos",
      "Constância",
      "Gestão de expectativas",
      "Resiliência",
      "Foco e responsabilidade",
      "Organização",
      "Aprendizado contínuo",
      "Execução",
    ],
    aplicacaoPratica: [
      { etapa: "Aprender" },
      { etapa: "Aplicar" },
      { etapa: "Acompanhar" },
      { etapa: "Ajustar" },
      { etapa: "Evoluir" },
    ],
    materiais: [
      "Guias de definição de objetivos",
      "Checklists de hábitos",
      "Modelos de rotina",
      "Exercícios de foco",
    ],
    treinamentos: [
      "Treinamentos ao vivo sobre disciplina e foco",
      "Sessões práticas de definição de objetivos",
      "Encontros de acompanhamento",
    ],
    ferramentas: ["Modelos de rotina", "Checklists de hábitos", "Planilhas de acompanhamento"],
    aulasGravadas:
      "Aulas gravadas disponibilizadas conforme a agenda da Academy, cobrindo fundamentos e aplicações práticas.",
    proximosEncontros:
      "Consulte a agenda na página principal da Academy para datas, temas e instrutores.",
  },
  {
    slug: "desenvolvimento-pessoal",
    titulo: "Desenvolvimento Pessoal",
    subtitulo: "Desenvolva competências que melhoram sua vida profissional e seus relacionamentos.",
    icone: "UserCheck",
    oQueE: [
      "Desenvolvimento pessoal é um processo contínuo de aperfeiçoamento de comportamentos, habilidades e competências. O foco será ajudar o participante a desenvolver habilidades importantes para sua rotina profissional e pessoal.",
    ],
    paraQueServe: [
      "Desenvolver autoconhecimento",
      "Melhorar comunicação",
      "Fortalecer inteligência emocional",
      "Aumentar produtividade",
      "Organizar gestão do tempo",
      "Melhorar relacionamentos",
      "Aprimorar postura profissional",
    ],
    oQueAprendera: [
      "Autoconhecimento",
      "Comunicação",
      "Inteligência emocional",
      "Produtividade e organização",
      "Gestão do tempo",
      "Hábitos e relacionamento",
      "Postura profissional",
      "Liderança pessoal",
      "Resolução de problemas",
      "Tomada de decisão",
      "Capacidade de adaptação",
    ],
    aplicacaoPratica: [
      { etapa: "Autoconhecimento" },
      { etapa: "Clareza" },
      { etapa: "Planejamento" },
      { etapa: "Ação" },
      { etapa: "Avaliação" },
      { etapa: "Evolução" },
    ],
    materiais: [
      "Guias de autoconhecimento",
      "Exercícios de comunicação",
      "Modelos de gestão do tempo",
      "Checklists de produtividade",
    ],
    treinamentos: [
      "Treinamentos ao vivo sobre competências pessoais",
      "Sessões práticas de comunicação",
      "Encontros de inteligência emocional",
    ],
    ferramentas: [
      "Modelos de gestão do tempo",
      "Checklists de produtividade",
      "Exercícios práticos",
    ],
    aulasGravadas:
      "Aulas gravadas disponibilizadas conforme a agenda da Academy, cobrindo fundamentos e aplicações práticas.",
    proximosEncontros:
      "Consulte a agenda na página principal da Academy para datas, temas e instrutores.",
  },
];

export function getAcademyAreaBySlug(slug: string): AcademyArea {
  const area = academyAreas.find((a) => a.slug === slug);
  if (!area) throw new Error(`Academy area not found: ${slug}`);
  return area;
}

/** Itens do menu "O que você terá acesso" — comuns a todas as áreas. */
export const academyAcessoComum = [
  "Treinamentos ao vivo",
  "Equipe especializada",
  "Conteúdos organizados",
  "Ferramentas práticas",
  "Funil de vendas",
  "Automações comerciais",
  "Scripts e modelos",
  "Materiais de apoio",
  "Checklists",
  "Guias",
  "Aulas gravadas, quando disponíveis",
  "Atualizações",
  "Agenda",
  "Espaço para dúvidas",
];

/** Fluxo de integração entre as áreas da Academy e o Funil de Vendas. */
export const academyFunilFluxo = [
  { area: "Marketing Digital", acao: "Gera posicionamento e conteúdo" },
  { area: "Tráfego", acao: "Gera audiência e leads" },
  { area: "Funil de Vendas", acao: "Organiza as oportunidades" },
  { area: "Vendas", acao: "Transforma oportunidades em clientes" },
  { area: "Gestão Financeira", acao: "Organiza resultados" },
  { area: "Empreendedorismo", acao: "Estrutura crescimento" },
  {
    area: "Mentalidade + Desenvolvimento Pessoal",
    acao: "Sustentam disciplina, liderança e evolução",
  },
];

/** Etapas do funil de vendas SmartVoz. */
export const funilEtapas = [
  "Novo Lead",
  "Contato Iniciado",
  "Interessado",
  "Apresentação",
  "Em Negociação",
  "Aguardando Decisão",
  "Contratado",
  "Sem Interesse",
  "Follow-up",
];

/** Automações comerciais — fluxo. */
export const automacaoFluxo = [
  "Novo lead entrou",
  "Registrar lead",
  "Identificar origem",
  "Organizar no funil",
  "Enviar comunicação inicial autorizada",
  "Aguardar interação",
  "Atualizar etapa",
  "Criar lembrete de acompanhamento",
  "Direcionar para oferta ou atendimento",
  "Registrar conversão",
];

/** Treinamentos semanais. */
export const treinamentosSemanais = [
  {
    dia: "Segunda-feira",
    descricao: "Desenvolvimento, estratégia e posicionamento.",
  },
  {
    dia: "Quarta-feira",
    descricao: "Marketing, vendas e aplicação prática.",
  },
  {
    dia: "Sexta-feira",
    descricao: "Performance, acompanhamento, dúvidas e evolução.",
  },
];

/** Ferramentas da SmartVoz Academy. */
export const academyFerramentas = [
  "Funil de Vendas",
  "Automações",
  "Scripts",
  "Materiais",
  "Aulas",
  "Agenda",
];
