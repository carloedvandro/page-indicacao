/**
 * Configurações da página oficial SmartVoz.
 *
 * VÍDEO PRINCIPAL:
 * Cole aqui o ID (ou a URL) do vídeo do YouTube. Enquanto estiver vazio, o
 * player fica aberto com a capa e o botão de play, pronto para receber o link.
 * Exemplos válidos:
 *   youtubeVideo: "dQw4w9WgXcQ"
 *   youtubeVideo: "https://youtu.be/dQw4w9WgXcQ"
 *   youtubeVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
 */
export const smartvoz = {
  youtubeVideo: "https://youtu.be/Qb0utsp_uks",
  videoDuracao: "06:24",
  whatsappNumero: "5521999999999",
  whatsappExibicao: "(21) 99999-9999",
  email: "atendimento@smartvoz.com.br",
  horario: "Segunda a sexta-feira, em horário comercial",
  /** CNPJ exibido no rodapé. */
  cnpj: "66.856.703/0001-24",
  /**
   * URL do Escritório Virtual / área de login já existente em produção.
   *
   * TODO (programador): preencher com a URL real do sistema. Enquanto estiver
   * vazia, o botão "Login" do header aponta para /acompanhamento.
   * Exemplo: "https://escritorio.smartvoz.com.br/login"
   */
  loginUrl: "",
};

/**
 * Redes sociais oficiais SmartVoz.
 * As URLs estão vazias por padrão — preencha com os links reais quando
 * disponíveis. Não inventar URLs.
 */
export const redesSociais: { nome: string; href: string }[] = [
  { nome: "Instagram", href: "" },
  { nome: "YouTube", href: "" },
  { nome: "Facebook", href: "" },
  { nome: "TikTok", href: "" },
];

/** Extrai o ID do vídeo de uma URL do YouTube ou devolve o próprio ID. */
export function youtubeId(valor: string): string {
  const bruto = valor.trim();
  if (!bruto) return "";
  const match = bruto.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{6,})/);
  return match?.[1] ?? bruto;
}

export const whatsappLink = (mensagem: string) =>
  `https://wa.me/${smartvoz.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
