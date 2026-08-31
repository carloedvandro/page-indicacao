import { Instagram, Youtube, Facebook, Music2 } from "lucide-react";

import { redesSociais } from "@/lib/smartvoz";

/**
 * Ícones das redes sociais oficiais SmartVoz.
 *
 * As URLs são configuradas em `redesSociais` (src/lib/smartvoz.ts). Enquanto
 * vazias, os ícones ficam sem link, mas acessíveis. Não inventar URLs.
 */
const icones: Record<string, typeof Instagram> = {
  Instagram,
  YouTube: Youtube,
  Facebook,
  TikTok: Music2,
};

const classeBase =
  "flex size-11 items-center justify-center rounded-full border border-primary/35 text-primary transition-colors sm:size-12";

/**
 * Redes sociais do rodapé.
 *
 * Cada ícone possui aria-label, funciona por teclado, hover discreto, abre em
 * nova aba com rel="noopener noreferrer". Centralizado no mobile.
 */
export function FooterSocial() {
  return (
    <div className="flex w-full items-center gap-3 sm:gap-3.5">
      {redesSociais.map((rede) => {
        const Icone = icones[rede.nome] ?? Instagram;
        return rede.href ? (
          <a
            key={rede.nome}
            href={rede.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={rede.nome}
            className={`${classeBase} hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
          >
            <Icone className="size-5" aria-hidden="true" />
          </a>
        ) : (
          <span
            key={rede.nome}
            aria-label={`${rede.nome} (link em breve)`}
            className={`${classeBase} text-primary/60`}
          >
            <Icone className="size-5" aria-hidden="true" />
          </span>
        );
      })}
    </div>
  );
}
