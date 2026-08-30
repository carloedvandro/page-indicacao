/**
 * Categorias da Central de Ajuda SmartVoz.
 *
 * Cada categoria agrupa artigos relacionados. Consumido pela página
 * /central-de-ajuda.
 */
import type { LucideIcon } from "lucide-react";
import {
  UserCircle,
  UserPlus,
  CreditCard,
  Wallet,
  Share2,
  Network,
  CircleDollarSign,
  Landmark,
  ShieldCheck,
  Ban,
  Headphones,
} from "lucide-react";

export type ArtigoAjuda = {
  titulo: string;
  resumo: string;
};

export type CategoriaAjuda = {
  id: string;
  titulo: string;
  icone: LucideIcon;
  artigos: ArtigoAjuda[];
};

export const categoriasAjuda: CategoriaAjuda[] = [
  {
    id: "minha-conta",
    titulo: "Minha conta",
    icone: UserCircle,
    artigos: [
      { titulo: "Como acessar sua conta", resumo: "Passos para entrar na plataforma." },
      { titulo: "Como alterar seus dados", resumo: "Atualização de informações cadastrais." },
      { titulo: "Como recuperar sua senha", resumo: "Redefinição de acesso." },
    ],
  },
  {
    id: "cadastro",
    titulo: "Cadastro",
    icone: UserPlus,
    artigos: [
      { titulo: "Como criar sua conta", resumo: "Primeiros passos na SmartVoz." },
      { titulo: "Informações necessárias", resumo: "O que é preciso para se cadastrar." },
    ],
  },
  {
    id: "contratacao",
    titulo: "Contratação",
    icone: CreditCard,
    artigos: [
      { titulo: "Como contratar um plano", resumo: "Escolha e contratação de serviços." },
      { titulo: "Condições e valores", resumo: "Onde conferir antes de contratar." },
    ],
  },
  {
    id: "pagamentos",
    titulo: "Pagamentos",
    icone: Wallet,
    artigos: [
      { titulo: "Formas de pagamento", resumo: "Opções disponíveis." },
      { titulo: "Como acompanhar pagamentos", resumo: "Consulta de movimentações." },
    ],
  },
  {
    id: "indicacoes",
    titulo: "Indicações",
    icone: Share2,
    artigos: [
      { titulo: "Como fazer uma indicação", resumo: "Uso do link de indicação." },
      { titulo: "Quando uma indicação é válida", resumo: "Critérios de validação." },
    ],
  },
  {
    id: "minha-rede",
    titulo: "Minha rede",
    icone: Network,
    artigos: [
      { titulo: "Como acompanhar sua rede", resumo: "Visualização dos níveis." },
      { titulo: "Formação da rede", resumo: "Como os níveis são compostos." },
    ],
  },
  {
    id: "comissoes",
    titulo: "Comissões",
    icone: CircleDollarSign,
    artigos: [
      { titulo: "Onde ver suas comissões", resumo: "Consulta no painel." },
      { titulo: "Valores pendentes", resumo: "Por que um valor pode ficar pendente." },
    ],
  },
  {
    id: "financeiro",
    titulo: "Financeiro",
    icone: Landmark,
    artigos: [
      { titulo: "Consulta financeira", resumo: "Movimentações e saldo." },
      { titulo: "Disponibilização de valores", resumo: "Prazos e formas." },
    ],
  },
  {
    id: "seguranca",
    titulo: "Segurança",
    icone: ShieldCheck,
    artigos: [
      { titulo: "Proteção da sua conta", resumo: "Boas práticas de acesso." },
      { titulo: "Como reportar um problema", resumo: "Canais para comunicação." },
    ],
  },
  {
    id: "cancelamento",
    titulo: "Cancelamento",
    icone: Ban,
    artigos: [
      { titulo: "Como cancelar um plano", resumo: "Procedimento de cancelamento." },
      { titulo: "Efeitos do cancelamento", resumo: "O que muda após cancelar." },
    ],
  },
  {
    id: "atendimento",
    titulo: "Atendimento",
    icone: Headphones,
    artigos: [
      { titulo: "Canais de atendimento", resumo: "Como falar com a SmartVoz." },
      { titulo: "Horário de atendimento", resumo: "Quando somos disponíveis." },
    ],
  },
];
