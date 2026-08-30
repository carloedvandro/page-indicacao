/**
 * Dados das Perguntas Frequentes (FAQ) SmartVoz.
 *
 * Organizados por categoria, consumidos pela página /perguntas-frequentes.
 */
import type { LucideIcon } from "lucide-react";
import { UserCircle, Share2, CircleDollarSign, LifeBuoy } from "lucide-react";

export type FaqItem = {
  pergunta: string;
  resposta: string;
};

export type FaqCategoria = {
  id: string;
  titulo: string;
  icone: LucideIcon;
  itens: FaqItem[];
};

export const faqCategorias: FaqCategoria[] = [
  {
    id: "conta-e-cadastro",
    titulo: "Conta e Cadastro",
    icone: UserCircle,
    itens: [
      {
        pergunta: "Como faço meu cadastro?",
        resposta:
          "O cadastro é realizado diretamente pela plataforma SmartVoz mediante o preenchimento das informações solicitadas.",
      },
      {
        pergunta: "Como altero meus dados?",
        resposta:
          "Acesse sua conta e utilize a área destinada aos dados cadastrais. Caso precise de auxílio, entre em contato com o atendimento.",
      },
      {
        pergunta: "Esqueci minha senha. O que faço?",
        resposta: "Utilize a opção de recuperação de senha disponível na tela de acesso.",
      },
    ],
  },
  {
    id: "indicacoes",
    titulo: "Indicações",
    icone: Share2,
    itens: [
      {
        pergunta: "Como faço uma indicação?",
        resposta:
          "Usuários elegíveis podem utilizar o link ou código de indicação disponibilizado em sua conta.",
      },
      {
        pergunta: "Quando uma indicação é considerada válida?",
        resposta:
          "Uma indicação é considerada válida quando atende aos requisitos previstos no Regulamento do Programa.",
      },
      {
        pergunta: "Onde acompanho minhas indicações?",
        resposta: "As informações podem ser consultadas na área de acompanhamento da sua conta.",
      },
    ],
  },
  {
    id: "comissoes",
    titulo: "Comissões",
    icone: CircleDollarSign,
    itens: [
      {
        pergunta: "Onde vejo minhas comissões?",
        resposta:
          "As comissões podem ser consultadas no painel financeiro ou na área correspondente dentro da plataforma.",
      },
      {
        pergunta: "Quando uma comissão é considerada elegível?",
        resposta:
          "Após o cumprimento das regras previstas para aquela indicação e das demais condições estabelecidas pelo programa.",
      },
      {
        pergunta: "Por que um valor pode aparecer como pendente?",
        resposta:
          "Alguns valores podem depender de validação, processamento ou cumprimento de critérios do programa antes de serem disponibilizados.",
      },
    ],
  },
  {
    id: "suporte",
    titulo: "Suporte",
    icone: LifeBuoy,
    itens: [
      {
        pergunta: "Como falar com a SmartVoz?",
        resposta:
          "Utilize a Central de Ajuda, o formulário de atendimento ou os canais oficiais disponibilizados no site.",
      },
    ],
  },
];
