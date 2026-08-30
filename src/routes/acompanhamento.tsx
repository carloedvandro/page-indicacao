import { createFileRoute } from "@tanstack/react-router";
import { LogIn, KeyRound, LayoutDashboard } from "lucide-react";

import { SiteChrome } from "@/components/site/SiteChrome";
import { PageHeader } from "@/components/institutional/PageHeader";

export const Route = createFileRoute("/acompanhamento")({
  head: () => ({
    meta: [
      { title: "SmartVoz | Acompanhamento" },
      {
        name: "description",
        content:
          "Acesse sua conta para consultar solicitações, indicações, movimentações e demais informações.",
      },
    ],
  }),
  component: Acompanhamento,
});

/**
 * Página de Acompanhamento.
 *
 * TODO: Integrar com sistema de autenticação real. Quando o usuário estiver
 * logado, redirecionar para a área de acompanhamento dentro do dashboard.
 * Por enquanto, exibe a tela de não-logado.
 */
function Acompanhamento() {
  return (
    <SiteChrome>
      <PageHeader
        eyebrow="SUPORTE"
        titulo="Acompanhe tudo em um só lugar"
        subtitulo="Entre na sua conta para consultar suas solicitações, indicações, movimentações e demais informações."
      />

      <section className="mx-auto max-w-md px-5 py-10 sm:px-6 sm:py-14">
        <div className="surface-card flex flex-col items-center gap-6 p-8 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-primary-soft">
            <LayoutDashboard className="size-8 text-primary" aria-hidden="true" />
          </span>

          {/* TODO: integrar auth real. Botão placeholder por enquanto. */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 py-4 font-display text-sm font-extrabold tracking-wide text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
          >
            <LogIn className="size-5" aria-hidden="true" />
            ACESSAR MINHA CONTA
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-deep"
          >
            <KeyRound className="size-4" aria-hidden="true" />
            Esqueci minha senha
          </button>
        </div>
      </section>
    </SiteChrome>
  );
}
