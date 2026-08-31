import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Video,
  Wrench,
  FileText,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

import type { AcademyArea } from "@/lib/academy-content";
import { academyAcessoComum } from "@/lib/academy-content";

type AcademyAreaPageProps = {
  area: AcademyArea;
};

/**
 * Página de uma área de conhecimento da Academy.
 *
 * Mostra: o que é, para que serve, o que será aprendido, aplicação prática,
 * materiais, treinamentos, ferramentas, aulas, próximos encontros e o que
 * o participante terá acesso.
 */
export function AcademyAreaPage({ area }: AcademyAreaPageProps) {
  return (
    <>
      {/* Breadcrumb + header */}
      <div className="rise-in mx-auto max-w-4xl px-5 pt-10 sm:px-6 sm:pt-14 lg:pt-16">
        <Link
          to="/academy"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          SmartVoz Academy
        </Link>

        <p className="eyebrow-pill mt-6">SMARTVOZ ACADEMY</p>
        <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.08] text-ink sm:text-4xl lg:text-[2.75rem]">
          {area.titulo}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {area.subtitulo}
        </p>
      </div>

      {/* O que é */}
      <Section titulo="O que é?" icone={GraduationCap}>
        <div className="space-y-4">
          {area.oQueE.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* Para que serve */}
      <Section titulo="Para que serve" icone={CheckCircle2}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {area.paraQueServe.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-soft"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium leading-snug text-ink sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* O que será aprendido */}
      <Section titulo="O que você vai aprender" icone={GraduationCap}>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {area.oQueAprendera.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-lg border border-border bg-card px-3.5 py-2.5 shadow-soft"
            >
              <ChevronRight className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm leading-snug text-ink sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Aplicação prática */}
      <Section titulo="Como aplicar na prática" icone={ArrowLeft}>
        <div className="flex flex-col gap-3">
          {area.aplicacaoPratica.map((passo, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary font-display text-sm font-extrabold text-primary-foreground shadow-glow">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium leading-snug text-ink sm:text-base">
                {passo.etapa}
              </span>
              {i < area.aplicacaoPratica.length - 1 ? (
                <span className="ml-auto text-muted-foreground/40" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      {/* Materiais */}
      <Section titulo="Materiais" icone={FileText}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {area.materiais.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-ink sm:text-base">
              <FileText className="size-5 shrink-0 text-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Treinamentos */}
      <Section titulo="Treinamentos" icone={Calendar}>
        <ul className="space-y-3">
          {area.treinamentos.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-soft"
            >
              <Calendar className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm leading-snug text-ink sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Ferramentas */}
      <Section titulo="Ferramentas" icone={Wrench}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {area.ferramentas.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-ink sm:text-base">
              <Wrench className="size-5 shrink-0 text-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Aulas gravadas */}
      <Section titulo="Aulas gravadas" icone={Video}>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {area.aulasGravadas}
        </p>
      </Section>

      {/* Próximos encontros */}
      <Section titulo="Próximos encontros" icone={Calendar}>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {area.proximosEncontros}
        </p>
      </Section>

      {/* O que o participante terá acesso */}
      <Section titulo="O que você terá acesso" icone={CheckCircle2}>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {academyAcessoComum.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-lg border border-border bg-card px-3.5 py-2.5 shadow-soft"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm leading-snug text-ink sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Aviso */}
      {area.aviso ? (
        <div className="mx-auto max-w-3xl px-5 py-6 sm:px-6">
          <p className="rounded-xl border border-border bg-primary-soft/60 px-5 py-4 text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
            {area.aviso}
          </p>
        </div>
      ) : null}

      {/* Link de volta */}
      <div className="mx-auto max-w-3xl px-5 pb-10 sm:px-6">
        <Link
          to="/academy"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar para SmartVoz Academy
        </Link>
      </div>
    </>
  );
}

/** Seção padrão da Academy com título e ícone. */
function Section({
  titulo,
  icone: Icone,
  children,
}: {
  titulo: string;
  icone: React.ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-8 sm:px-6 sm:py-10">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
          <Icone className="size-5 text-primary" aria-hidden="true" />
        </span>
        <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">{titulo}</h2>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
