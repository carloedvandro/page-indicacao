/**
 * Navegação principal do header SmartVoz.
 *
 * Cada menu de topo abre um dropdown/mega-menu no desktop e um acordeão no
 * mobile. Itens podem ter `href` definido ou ficar preparados (`href` vazio)
 * para destinos futuros.
 */
export type NavSubItem = {
  label: string;
  href?: string;
};

export type NavGrupo = {
  titulo?: string;
  itens: NavSubItem[];
};

export type NavMenu = {
  label: string;
  grupos: NavGrupo[];
};

export const headerNavigation: NavMenu[] = [
  {
    label: "Para Você",
    grupos: [
      {
        itens: [
          { label: "Conheça os planos", href: "/#planos" },
          { label: "Como funciona", href: "/como-funciona" },
          { label: "Contratar agora", href: "/#planos" },
        ],
      },
    ],
  },
  {
    label: "Produtos e Serviços",
    grupos: [
      {
        titulo: "Planos de celular",
        itens: [{ label: "Plano Smart Senior de 100 GB" }, { label: "Smart Premium de 120 GB" }],
      },
      {
        titulo: "Serviços digitais Academy",
        itens: [
          { label: "Marketing Digital." },
          { label: "Tráfego Pago e Orgânico." },
          { label: "Vendas." },
          { label: "Gestão Financeira." },
          { label: "Empreendedorismo." },
          { label: "Mentalidade." },
          { label: "Desenvolvimento Pessoal." },
        ],
      },
    ],
  },
  {
    label: "Sobre a SmartVoz",
    grupos: [
      {
        itens: [
          { label: "Quem somos", href: "/quem-somos" },
          { label: "Missão e Valores", href: "/missao-e-valores" },
          { label: "Como funciona a SmartVoz", href: "/como-funciona" },
          { label: "Fale conosco", href: "/fale-conosco" },
        ],
      },
    ],
  },
  {
    label: "Informações",
    grupos: [
      {
        itens: [
          { label: "Termos e Condições", href: "/termos-e-condicoes" },
          { label: "Política de Privacidade", href: "/politica-de-privacidade" },
          { label: "Regulamento do Programa", href: "/regulamento-programa" },
        ],
      },
    ],
  },
];
