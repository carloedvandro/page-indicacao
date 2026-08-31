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
        itens: [
          { label: "Plano Smart Senior de 100 GB" },
          { label: "Plano Smart Premium de 120 GB" },
        ],
      },
      {
        titulo: "Serviços digitais Academy",
        itens: [
          { label: "Marketing Digital", href: "/academy/marketing-digital" },
          { label: "Tráfego Pago e Orgânico", href: "/academy/trafego" },
          { label: "Vendas", href: "/academy/vendas" },
          { label: "Gestão Financeira", href: "/academy/gestao-financeira" },
          { label: "Empreendedorismo", href: "/academy/empreendedorismo" },
          { label: "Mentalidade", href: "/academy/mentalidade" },
          { label: "Desenvolvimento Pessoal", href: "/academy/desenvolvimento-pessoal" },
        ],
      },
    ],
  },
  {
    label: "Ajuda",
    grupos: [
      {
        titulo: "Sou novo aqui",
        itens: [
          { label: "Portabilidade" },
          { label: "Ativando o chip" },
          { label: "Cadastro no App SmartVoz" },
          { label: "Consumo de internet" },
        ],
      },
      {
        titulo: "Minha fatura",
        itens: [
          { label: "Entenda sua fatura" },
          { label: "2ª via de fatura", href: "/ajuda/segunda-via" },
          { label: "Fatura Digital" },
          { label: "Pagamento" },
          { label: "Débito Automático" },
        ],
      },
      {
        titulo: "Dúvidas",
        itens: [
          { label: "Dúvidas sobre Celular" },
          { label: "Dúvidas sobre Internet" },
          { label: "Dúvidas sobre Serviços Digitais" },
          { label: "Dúvidas sobre Loja Online SmartVoz" },
        ],
      },
      {
        titulo: "Resolva agora",
        itens: [{ label: "Conexão de internet" }, { label: "Mudança de endereço" }],
      },
      {
        titulo: "Fale com a SmartVoz",
        itens: [
          { label: "Aura" },
          { label: "Consultas" },
          { label: "Segurança da Informação" },
          { label: "Canais de Comunicação" },
          { label: "Fale conosco" },
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
