/**
 * Tutoriais e Guias SmartVoz.
 *
 * Cada item representa um tutorial da plataforma. Consumido pela página
 * /tutoriais. Os vídeos NÃO iniciam automaticamente.
 */
export type Tutorial = {
  id: string;
  titulo: string;
  descricao: string;
  duracao: string;
};

export const tutoriais: Tutorial[] = [
  {
    id: "criar-conta",
    titulo: "Como criar sua conta",
    descricao: "Passo a passo para realizar seu cadastro na SmartVoz.",
    duracao: "02:15",
  },
  {
    id: "acessar-conta",
    titulo: "Como acessar sua conta",
    descricao: "Como entrar na plataforma após o cadastro.",
    duracao: "01:30",
  },
  {
    id: "contratar",
    titulo: "Como contratar",
    descricao: "Escolha e contratação de um plano SmartVoz.",
    duracao: "03:05",
  },
  {
    id: "acompanhar-solicitacao",
    titulo: "Como acompanhar uma solicitação",
    descricao: "Consulta de solicitações na sua conta.",
    duracao: "02:40",
  },
  {
    id: "fazer-indicacao",
    titulo: "Como fazer uma indicação",
    descricao: "Uso do link e código de indicação.",
    duracao: "02:20",
  },
  {
    id: "copiar-link-indicacao",
    titulo: "Como copiar seu link de indicação",
    descricao: "Onde encontrar e compartilhar seu link.",
    duracao: "01:10",
  },
  {
    id: "acompanhar-rede",
    titulo: "Como acompanhar sua rede",
    descricao: "Visualização dos níveis da sua rede.",
    duracao: "02:50",
  },
  {
    id: "consultar-comissoes",
    titulo: "Como consultar suas comissões",
    descricao: "Consulta de comissões no painel.",
    duracao: "02:35",
  },
  {
    id: "acompanhar-pagamentos",
    titulo: "Como acompanhar pagamentos",
    descricao: "Movimentações e status de pagamentos.",
    duracao: "02:25",
  },
  {
    id: "atualizar-dados",
    titulo: "Como atualizar seus dados",
    descricao: "Manter suas informações cadastrais atualizadas.",
    duracao: "01:45",
  },
  {
    id: "solicitar-atendimento",
    titulo: "Como solicitar atendimento",
    descricao: "Como falar com a equipe de suporte.",
    duracao: "01:55",
  },
];
