import type { ReactNode } from "react";

type PageHeaderProps = {
  /** Texto pequeno exibido acima do título (eyebrow-pill). */
  eyebrow?: string;
  /** Título principal (H1). */
  titulo: string;
  /** Subtítulo exibido abaixo do título. */
  subtitulo?: string;
  /** Conteúdo extra abaixo do subtítulo (ex: campo de busca). */
  children?: ReactNode;
};

/**
 * Cabeçalho padrão das páginas institucionais.
 *
 * Mantém a identidade visual: eyebrow-pill opcional, H1 com tipografia display
 * e subtítulo em texto secundário. Centralizado, com animação rise-in.
 */
export function PageHeader({ eyebrow, titulo, subtitulo, children }: PageHeaderProps) {
  return (
    <div className="rise-in mx-auto max-w-3xl px-5 pb-2 pt-10 text-center sm:px-6 sm:pt-14 lg:pt-16">
      {eyebrow ? <p className="eyebrow-pill mx-auto">{eyebrow}</p> : null}

      <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.08] text-ink sm:text-4xl lg:text-[2.75rem]">
        {titulo}
      </h1>

      {subtitulo ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitulo}
        </p>
      ) : null}

      {children ? <div className="mt-8">{children}</div> : null}
    </div>
  );
}
