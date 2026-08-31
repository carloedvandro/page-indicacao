/**
 * Navegação principal do header SmartVoz.
 *
 * Cada item de menu abre um dropdown no desktop e um acordeão no mobile.
 * Todos os destinos são rotas reais da aplicação (sem "#").
 */
export type NavItem = {
  label: string;
  href: string;
};

export type NavMenu = {
  label: string;
  itens: NavItem[];
};

export const headerNavigation: NavMenu[] = [
  {
    label: "Para Você",
    itens: [
      { label: "Conheça os planos", href: "/#planos" },
      { label: "Como funciona", href: "/como-funciona" },
      { label: "Contratar agora", href: "/#planos" },
    ],
  },
  {
    label: "Planos e Serviços",
    itens: [
      { label: "Internet móvel", href: "/#planos" },
      { label: "Planos disponíveis", href: "/#planos" },
      { label: "Benefícios", href: "/#planos" },
      { label: "Contratação", href: "/#planos" },
    ],
  },
  {
    label: "Sobre a SmartVoz",
    itens: [
      { label: "Quem somos", href: "/quem-somos" },
      { label: "Missão e Valores", href: "/missao-e-valores" },
      { label: "Como funciona a SmartVoz", href: "/como-funciona" },
      { label: "Fale conosco", href: "/fale-conosco" },
    ],
  },
  {
    label: "Informações",
    itens: [
      { label: "Termos e Condições", href: "/termos-e-condicoes" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Regulamento do Programa", href: "/regulamento-programa" },
    ],
  },
];
