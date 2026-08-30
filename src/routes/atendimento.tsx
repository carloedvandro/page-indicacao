import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Mail, Clock, MessageCircle, LifeBuoy, ArrowRight } from "lucide-react";

import { SiteChrome } from "@/components/site/SiteChrome";
import { PageHeader } from "@/components/institutional/PageHeader";
import { smartvoz } from "@/lib/smartvoz";

export const Route = createFileRoute("/atendimento")({
  head: () => ({
    meta: [
      { title: "SmartVoz | Atendimento" },
      {
        name: "description",
        content: "Atendimento SmartVoz: nossa equipe está disponível para auxiliar você.",
      },
    ],
  }),
  component: Atendimento,
});

const assuntos = [
  "Cadastro",
  "Conta",
  "Contratação",
  "Pagamentos",
  "Indicações",
  "Comissões",
  "Suporte técnico",
  "Cancelamentos",
  "Outras solicitações",
];

function Atendimento() {
  return (
    <SiteChrome>
      <PageHeader
        eyebrow="SUPORTE"
        titulo="Atendimento SmartVoz"
        subtitulo="Nossa equipe está disponível para auxiliar você em dúvidas relacionadas à utilização da plataforma e aos serviços SmartVoz."
      />

      <section className="mx-auto max-w-3xl px-5 py-8 sm:px-6 sm:py-10">
        {/* Contato */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="surface-card flex items-center gap-4 p-5 sm:p-6">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft">
              <Mail className="size-6 text-primary" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-sm font-bold text-ink">E-MAIL</p>
              <a
                href={`mailto:${smartvoz.email}`}
                className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary sm:text-base"
              >
                {smartvoz.email}
              </a>
            </div>
          </div>

          <div className="surface-card flex items-center gap-4 p-5 sm:p-6">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft">
              <Clock className="size-6 text-primary" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-sm font-bold text-ink">HORÁRIO</p>
              <p className="mt-1 text-sm text-muted-foreground sm:text-base">{smartvoz.horario}</p>
            </div>
          </div>
        </div>

        {/* Assuntos */}
        <div className="mt-8">
          <h2 className="font-display text-sm font-bold tracking-wide text-ink">ASSUNTOS</h2>
          <span className="mt-2 block h-0.5 w-10 bg-primary" aria-hidden="true" />
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {assuntos.map((a) => (
              <li
                key={a}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Botões */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/fale-conosco"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 py-4 font-display text-sm font-extrabold tracking-wide text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            INICIAR ATENDIMENTO
          </Link>
          <Link
            to="/central-de-ajuda"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-4 font-display text-sm font-extrabold tracking-wide text-ink transition-colors hover:border-primary/40 hover:text-primary"
          >
            <LifeBuoy className="size-5" aria-hidden="true" />
            CENTRAL DE AJUDA
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
