import { Search } from "lucide-react";

type HelpSearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  /** Tamanho maior para a Central de Ajuda. */
  grande?: boolean;
  ariaLabel?: string;
};

/**
 * Campo de busca da Central de Ajuda e do FAQ.
 *
 * Acessível por teclado, com aria-label e label visual oculta.
 */
export function HelpSearch({
  value,
  onChange,
  placeholder = "Pesquise sua dúvida...",
  grande = false,
  ariaLabel = "Pesquisar dúvida",
}: HelpSearchProps) {
  return (
    <div className={`relative mx-auto w-full ${grande ? "max-w-2xl" : "max-w-xl"}`}>
      <label htmlFor="help-search" className="sr-only">
        {ariaLabel}
      </label>
      <Search
        className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground ${
          grande ? "size-5" : "size-4"
        }`}
        aria-hidden="true"
      />
      <input
        id="help-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className={`w-full rounded-full border border-border bg-card pr-4 text-ink shadow-soft transition-colors placeholder:text-muted-foreground focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
          grande ? "h-14 pl-12 text-base sm:text-lg" : "h-11 pl-11 text-sm sm:text-base"
        }`}
      />
    </div>
  );
}
