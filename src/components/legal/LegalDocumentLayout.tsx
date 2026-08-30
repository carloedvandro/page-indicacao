import { Printer } from "lucide-react";

import type { DocumentoLegal } from "@/lib/legal-documents";
import { LegalTableOfContents } from "./LegalTableOfContents";

type LegalDocumentLayoutProps = {
  documento: DocumentoLegal;
  /** Conteúdo extra abaixo do documento (ex: botão de contato). */
  children?: React.ReactNode;
};

/**
 * Layout padrão para documentos legais (Termos, Privacidade, Regulamento).
 *
 * Apresenta título, versão, data de atualização, botões Imprimir/Salvar em PDF,
 * sumário clicável e as seções do documento. Preparado para editar o texto das
 * cláusulas sem alterar o componente visual.
 */
export function LegalDocumentLayout({ documento, children }: LegalDocumentLayoutProps) {
  const imprimir = () => window.print();

  return (
    <div className="mx-auto max-w-screen-2xl px-5 pb-12 pt-8 sm:px-6 sm:pt-12">
      {/* Cabeçalho do documento */}
      <div className="rise-in mx-auto max-w-3xl text-center">
        <h1 className="text-[1.85rem] font-extrabold leading-[1.1] text-ink sm:text-3xl lg:text-[2.25rem]">
          {documento.titulo}
        </h1>

        {documento.subtitulo ? (
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {documento.subtitulo}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="rounded-full border border-border bg-card px-3 py-1 font-medium">
            Versão: <span className="text-ink">{documento.versao}</span>
          </span>
          <span className="rounded-full border border-border bg-card px-3 py-1 font-medium">
            Última atualização: <span className="text-ink">{documento.ultimaAtualizacao}</span>
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={imprimir}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-display text-xs font-bold tracking-wide text-ink transition-colors hover:border-primary/40 hover:text-primary sm:text-sm"
          >
            <Printer className="size-4" aria-hidden="true" />
            Imprimir
          </button>
          <button
            type="button"
            onClick={imprimir}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-display text-xs font-bold tracking-wide text-ink transition-colors hover:border-primary/40 hover:text-primary sm:text-sm"
          >
            <Printer className="size-4" aria-hidden="true" />
            Salvar em PDF
          </button>
        </div>
      </div>

      {/* Aviso de destaque (Regulamento) */}
      {documento.avisoDestaque ? (
        <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-primary/25 bg-primary-soft/70 px-5 py-4 text-center text-sm leading-relaxed text-ink sm:text-base">
          {documento.avisoDestaque}
        </p>
      ) : null}

      {/* Sumário + conteúdo */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-10">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <LegalTableOfContents itens={documento.secoes} />
        </div>

        <article className="max-w-3xl space-y-8">
          {documento.secoes.map((secao) => (
            <section key={secao.id} id={secao.id} className="scroll-mt-24">
              <h2 className="flex items-baseline gap-3 font-display text-lg font-bold text-ink sm:text-xl">
                <span className="font-display text-sm font-extrabold tabular-nums text-primary">
                  {secao.ordem}
                </span>
                {secao.titulo}
              </h2>
              <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-muted-foreground sm:text-lg">
                {secao.corpo}
              </p>
            </section>
          ))}

          {documento.canalPrivacidade ? (
            <section className="surface-card flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {documento.canalPrivacidade}
              </p>
              {children}
            </section>
          ) : null}

          {!documento.canalPrivacidade && children ? <div className="mt-2">{children}</div> : null}
        </article>
      </div>
    </div>
  );
}
