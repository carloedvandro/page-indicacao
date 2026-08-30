import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type Destaque = {
  icone: LucideIcon;
  texto: string;
};

type ContentSectionProps = {
  /** Parágrafos de texto principal. */
  paragrafos?: string[];
  /** Lista de destaques visuais com ícones discretos (sem cards grandes). */
  destaques?: Destaque[];
  /** Título opcional da seção (H2). */
  titulo?: string;
  /** Conteúdo customizado abaixo. */
  children?: ReactNode;
};

/**
 * Seção de conteúdo institucional.
 *
 * Apresenta parágrafos e destaques com ícones discretos, sem cards grandes,
 * seguindo o padrão visual clean da SmartVoz.
 */
export function ContentSection({
  paragrafos = [],
  destaques = [],
  titulo,
  children,
}: ContentSectionProps) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-8 sm:px-6 sm:py-10">
      {titulo ? (
        <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">{titulo}</h2>
      ) : null}

      {paragrafos.length > 0 ? (
        <div className={titulo ? "mt-4 space-y-4" : "space-y-4"}>
          {paragrafos.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {p}
            </p>
          ))}
        </div>
      ) : null}

      {destaques.length > 0 ? (
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {destaques.map((d) => (
            <li
              key={d.texto}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-soft"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                <d.icone className="size-5 text-primary" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium leading-snug text-ink sm:text-base">
                {d.texto}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}
