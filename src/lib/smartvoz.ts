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
  youtubeVideo: "",
  videoDuracao: "06:24",
  whatsappNumero: "5521999999999",
  whatsappExibicao: "(21) 99999-9999",
  email: "contato@smartvoz.com.br",
  horario: "Seg a Sex, das 9h às 18h",
};

/** Extrai o ID do vídeo de uma URL do YouTube ou devolve o próprio ID. */
export function youtubeId(valor: string): string {
  const bruto = valor.trim();
  if (!bruto) return "";
  const match = bruto.match(
    /(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{6,})/,
  );
  return match ? match[1] : bruto;
}

export const whatsappLink = (mensagem: string) =>
  `https://wa.me/${smartvoz.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
