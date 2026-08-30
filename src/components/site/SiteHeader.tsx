import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Logo } from "@/components/smartvoz/Logo";

/**
 * Header mínimo compartilhado entre as páginas internas.
 *
 * Mantém a identidade visual da SmartVoz: logo à esquerda e link "Voltar à
 * home" à direita. Fundo branco com borda inferior sutil, sticky e discreto.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
        <Link
          to="/"
          aria-label="Ir para a página inicial da SmartVoz"
          className="flex items-center"
        >
          <Logo className="h-9 sm:h-11" />
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-display text-xs font-bold tracking-wide text-ink transition-colors hover:border-primary/40 hover:text-primary sm:text-sm"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span className="whitespace-nowrap">Voltar à home</span>
        </Link>
      </div>
    </header>
  );
}
