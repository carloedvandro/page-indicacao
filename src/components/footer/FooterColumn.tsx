import { Link } from "@tanstack/react-router";

import type { FooterLink } from "@/lib/footer-navigation";

type FooterColumnProps = {
  titulo: string;
  links: FooterLink[];
};

/**
 * Coluna de navegação do rodapé.
 *
 * Links internos usam `<Link>` (navegação SPA). Acessível por teclado.
 */
export function FooterColumn({ titulo, links }: FooterColumnProps) {
  return (
    <nav aria-label={titulo} className="text-left">
      <h3 className="font-display text-sm font-bold tracking-wide text-ink">{titulo}</h3>
      <span className="mt-2 block h-0.5 w-10 bg-primary" aria-hidden="true" />
      <ul className="mt-4 flex w-full flex-col items-start gap-3 text-left">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="text-base text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
