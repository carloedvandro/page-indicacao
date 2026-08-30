import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { CategoriaAjuda } from "@/lib/help-categories";

type HelpCategoryCardProps = {
  categoria: CategoriaAjuda;
  /** Filtro de busca aplicado aos artigos. */
  busca?: string;
};

/**
 * Card de categoria da Central de Ajuda.
 *
 * Clicar no título expande os artigos relacionados. Acessível por teclado.
 */
export function HelpCategoryCard({ categoria, busca = "" }: HelpCategoryCardProps) {
  const [aberta, setAberta] = useState(false);

  const artigosFiltrados = busca.trim()
    ? categoria.artigos.filter(
        (a) =>
          a.titulo.toLowerCase().includes(busca.toLowerCase()) ||
          a.resumo.toLowerCase().includes(busca.toLowerCase()) ||
          categoria.titulo.toLowerCase().includes(busca.toLowerCase()),
      )
    : categoria.artigos;

  if (busca.trim() && artigosFiltrados.length === 0) return null;

  return (
    <div className="surface-card overflow-hidden">
      <button
        type="button"
        onClick={() => setAberta((v) => !v)}
        aria-expanded={aberta}
        className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary-soft">
          <categoria.icone className="size-5 text-primary" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-base font-bold text-ink sm:text-lg">
            {categoria.titulo}
          </span>
          <span className="mt-0.5 block text-sm text-muted-foreground">
            {categoria.artigos.length} {categoria.artigos.length === 1 ? "artigo" : "artigos"}
          </span>
        </span>
        <ChevronDown
          className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
            aberta ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          aberta ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="min-h-0 space-y-1 px-5 pb-5 sm:px-6 sm:pb-6">
          {artigosFiltrados.map((a) => (
            <li key={a.titulo}>
              <button
                type="button"
                className="flex w-full flex-col gap-1 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="font-display text-sm font-bold text-ink">{a.titulo}</span>
                <span className="text-sm leading-snug text-muted-foreground">{a.resumo}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
