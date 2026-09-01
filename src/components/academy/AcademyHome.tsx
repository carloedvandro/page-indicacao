import { Link } from "@tanstack/react-router";
import {
  Megaphone,
  TrendingUp,
  Handshake,
  Wallet,
  Rocket,
  Brain,
  UserCheck,
  Calendar,
  Funnel,
  Bot,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import {
  academyAreas,
  treinamentosSemanais,
  academyFerramentas,
  funilEtapas,
  automacaoFluxo,
  academyFunilFluxo,
} from "@/lib/academy-content";

const icones: Record<string, React.ComponentType<{ className?: string }>> = {
  Megaphone,
  TrendingUp,
  Handshake,
  Wallet,
  Rocket,
  Brain,
  UserCheck,
};

/**
 * Página principal da SmartVoz Academy.
 *
 * Mostra: headline, próximos treinamentos, áreas de conhecimento,
 * funil de vendas, automações, ferramentas e integração Academy + Funil.
 */
export function AcademyHome() {
  return (
    <>
      {/* Header */}
      <div className="rise-in mx-auto max-w-4xl px-5 pt-10 text-center sm:px-6 sm:pt-14 lg:pt-16">
        <p className="eyebrow-pill mx-auto">SMARTVOZ ACADEMY</p>
        <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.08] text-ink sm:text-4xl lg:text-[2.75rem]">
          Aprenda. Aplique. Evolua.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Treinamentos, ferramentas e estratégias para desenvolver competências e transformar
          conhecimento em execução.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A SmartVoz Academy é o ambiente de desenvolvimento profissional da comunidade SmartVoz.
          Aqui, os participantes encontram treinamentos, ferramentas, processos e conteúdos voltados
          ao desenvolvimento comercial, digital, financeiro, profissional e pessoal. A proposta da
          Academy não é apresentar apenas teoria — os conteúdos são organizados para que o
          participante possa compreender, aplicar e acompanhar cada estratégia no dia a dia.
        </p>
      </div>

      {/* Treinamentos semanais */}
      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-12">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
            <Calendar className="size-5 text-primary" aria-hidden="true" />
          </span>
          <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
            Treinamentos ao vivo durante a semana
          </h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {treinamentosSemanais.map((t) => (
            <div key={t.dia} className="surface-card flex flex-col gap-2 p-5">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-primary">
                {t.dia}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.descricao}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Os horários, temas e instrutores são administráveis pelo painel. Consulte a agenda para
          detalhes de cada treinamento.
        </p>
      </section>

      {/* Áreas de conhecimento */}
      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-12">
        <h2 className="text-center font-display text-2xl font-bold text-ink sm:text-3xl">
          Áreas de conhecimento
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted-foreground">
          Clique em uma área para ver o conteúdo completo, treinamentos, materiais e ferramentas.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {academyAreas.map((area) => {
            const Icone = icones[area.icone] ?? Megaphone;
            return (
              <Link
                key={area.slug}
                to={`/academy/${area.slug}` as any}
                className="surface-card group flex flex-col gap-3 p-5 transition-shadow hover:shadow-glow"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft">
                  <Icone className="size-6 text-primary" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{area.titulo}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{area.subtitulo}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Ver conteúdo
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Funil de vendas */}
      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-12">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
            <Funnel className="size-5 text-primary" aria-hidden="true" />
          </span>
          <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
            Funil de Vendas pronto para utilização
          </h2>
        </div>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Além dos treinamentos, os participantes da SmartVoz Academy poderão ter acesso a
          estruturas comerciais preparadas para facilitar a execução das estratégias ensinadas. O
          ambiente poderá disponibilizar um Funil de Vendas SmartVoz previamente configurado.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Página de captura",
            "Página de apresentação",
            "Formulário de lead",
            "Organização dos contatos",
            "Acompanhamento do lead",
            "Etapas do processo comercial",
            "Mensagens de acompanhamento",
            "Automações",
            "Recuperação de contatos",
            "Follow-up",
            "Direcionamento para contratação",
            "Histórico das interações",
            "Métricas de conversão",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-lg border border-border bg-card px-3.5 py-2.5 shadow-soft"
            >
              <ChevronRight className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm leading-snug text-ink sm:text-base">{item}</span>
            </li>
          ))}
        </ul>

        {/* Etapas do funil */}
        <h3 className="mt-10 font-display text-lg font-bold text-ink">Etapas do funil</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {funilEtapas.map((etapa, i) => (
            <span
              key={etapa}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-ink shadow-soft"
            >
              <span className="flex size-6 items-center justify-center rounded-md bg-primary-soft text-xs font-bold text-primary">
                {i + 1}
              </span>
              {etapa}
            </span>
          ))}
        </div>
      </section>

      {/* Automações comerciais */}
      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-12">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
            <Bot className="size-5 text-primary" aria-hidden="true" />
          </span>
          <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
            Automação que trabalha junto com sua estratégia
          </h2>
        </div>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          A automação não substitui o relacionamento humano. Ela ajuda a organizar os contatos e
          manter o acompanhamento comercial. Quando configurada e permitida pelo sistema, poderá
          executar ações como:
        </p>
        <div className="mt-6 flex flex-col gap-2">
          {automacaoFluxo.map((passo, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-primary text-xs font-bold text-primary-foreground shadow-glow">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-ink sm:text-base">{passo}</span>
              {i < automacaoFluxo.length - 1 ? (
                <span className="ml-auto text-muted-foreground/40" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Toda comunicação deverá respeitar os canais, autorizações e regras aplicáveis.
        </p>
      </section>

      {/* Ferramentas */}
      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-12">
        <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
          Ferramentas SmartVoz Academy
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {academyFerramentas.map((f) => (
            <span
              key={f}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-ink shadow-soft"
            >
              <ChevronRight className="size-4 text-primary" aria-hidden="true" />
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Integração Academy + Funil */}
      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-12">
        <h2 className="text-center font-display text-2xl font-bold text-ink sm:text-3xl">
          Academy + Funil trabalhando juntos
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted-foreground">
          As áreas de conhecimento trabalham em conjunto para transformar aprendizado em execução.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          {academyFunilFluxo.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
                <span className="text-xs font-bold text-primary">{i + 1}</span>
              </span>
              <div>
                <p className="font-display text-sm font-bold text-ink">{item.area}</p>
                <p className="text-sm text-muted-foreground">{item.acao}</p>
              </div>
              {i < academyFunilFluxo.length - 1 ? (
                <span className="ml-auto text-muted-foreground/40" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Aviso */}
      <div className="mx-auto max-w-3xl px-5 pb-12 sm:px-6">
        <p className="rounded-xl border border-border bg-primary-soft/60 px-5 py-4 text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          Treinamentos e ferramentas são recursos de capacitação. Os resultados dependem da execução
          e das condições individuais de cada participante. Não prometemos ganhos, resultados
          financeiros, vendas garantidas, retorno de anúncios ou crescimento garantido.
        </p>
      </div>
    </>
  );
}
