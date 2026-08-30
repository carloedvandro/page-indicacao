type TocItem = {
  id: string;
  ordem: string;
  titulo: string;
};

type LegalTableOfContentsProps = {
  itens: TocItem[];
};

/**
 * Sumário clicável de um documento legal.
 *
 * Cada item rola suavemente até a seção correspondente (scroll suave já
 * configurado no CSS global). Acessível por teclado.
 */
export function LegalTableOfContents({ itens }: LegalTableOfContentsProps) {
  return (
    <nav aria-label="Sumário do documento" className="surface-card p-5 sm:p-6">
      <h2 className="font-display text-sm font-bold tracking-wide text-ink">SUMÁRIO</h2>
      <span className="mt-2 block h-0.5 w-10 bg-primary" aria-hidden="true" />
      <ol className="mt-4 space-y-1.5">
        {itens.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-baseline gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="font-display text-xs font-bold tabular-nums text-primary">
                {item.ordem}
              </span>
              <span className="leading-snug">{item.titulo}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
