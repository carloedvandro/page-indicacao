/**
 * Estrutura de navegação do rodapé institucional SmartVoz.
 *
 * Centraliza todos os links das colunas Institucional, Informações e Suporte.
 * Cada item aponta para uma rota real da aplicação (sem "#").
 */
export type FooterLink = {
  label: string;
  href: string;
};

export const footerNavigation: {
  institucional: FooterLink[];
  informacoes: FooterLink[];
  suporte: FooterLink[];
} = {
  institucional: [
    { label: "Quem somos", href: "/quem-somos" },
    { label: "Missão e Valores", href: "/missao-e-valores" },
    { label: "Como funciona", href: "/como-funciona" },
    { label: "Fale conosco", href: "/fale-conosco" },
  ],
  informacoes: [
    { label: "Termos e Condições", href: "/termos-e-condicoes" },
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    { label: "Regulamento do Programa", href: "/regulamento-programa" },
    { label: "Perguntas Frequentes", href: "/perguntas-frequentes" },
  ],
  suporte: [
    { label: "Central de Ajuda", href: "/central-de-ajuda" },
    { label: "Tutoriais e Guias", href: "/tutoriais" },
    { label: "Acompanhamento", href: "/acompanhamento" },
    { label: "Atendimento", href: "/atendimento" },
  ],
};
