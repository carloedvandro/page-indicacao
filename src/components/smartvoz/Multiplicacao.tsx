import {
  Star,
  User,
  Users,
  Coins,
  Trophy,
  Infinity as InfinityIcon,
  ShieldCheck,
} from "lucide-react";


const proximosNiveis = [
  { nivel: "NÍVEL 3", pessoas: "125", calculo: "125 x R$ 5,00", valor: "R$ 625,00" },
  { nivel: "NÍVEL 4", pessoas: "625", calculo: "625 x R$ 5,00", valor: "R$ 3.125,00" },
  { nivel: "NÍVEL 5", pessoas: "3.125", calculo: "3.125 x R$ 5,00", valor: "R$ 15.625,00" },
];

function PessoaIcone({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-gradient-primary ${className}`}
    >
      <User className="size-1/2 text-primary-foreground" aria-hidden="true" />
    </span>
  );
}

export function Multiplicacao() {
  return (
    <section className="waves-bg px-1.5 pb-6 pt-2 sm:px-4 lg:pb-10 lg:pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-col items-center gap-6 lg:block lg:text-center">
          <p className="eyebrow-pill">
            <Star className="size-4 text-primary" aria-hidden="true" />
            <span className="text-primary">
              RESULTADOS REAIS. PESSOAS REAIS.
            </span>
          </p>
        </div>

        <div className="mt-8 text-center">
          <h2 className="font-display text-[2rem] font-extrabold uppercase leading-[1.05] text-ink sm:text-[3.4rem]">
            O PODER DA <span className="text-primary">MULTIPLICAÇÃO</span>{" "}
            <span className="text-primary">NÃO PARA!</span>
          </h2>
          <p className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-ink sm:text-lg">
            INDIQUE <span className="text-primary">5 PESSOAS,</span> CADA UMA
            INDICA <span className="text-primary">MAIS 5.</span>
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {/* ETAPA 1 */}
          <article className="relative overflow-hidden px-1 py-6 sm:px-4">
            <div className="text-center">
              <span className="inline-block rounded-full bg-gradient-primary px-5 py-2 font-display text-[0.68rem] font-bold tracking-[0.14em] text-primary-foreground">
                ETAPA 1
              </span>
              <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight text-ink">
                Você começa indicando{" "}
                <span className="text-primary">5 pessoas.</span>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">Simples assim.</p>
              <span className="mx-auto mt-4 block h-1 w-12 rounded-full bg-primary" />
            </div>

            <div className="mt-6 flex flex-col items-center">
              <PessoaIcone className="size-14 pulse-ring icon-float" />
              <span className="mt-1 font-display text-[0.62rem] font-bold tracking-[0.14em] text-ink">
                VOCÊ
              </span>
              <span className="h-4 w-px bg-primary/40" />
              <span className="h-px w-[80%] bg-primary/40" />
              <div className="flex w-full justify-between px-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span key={n} className="flex flex-col items-center">
                    <span className="h-3 w-px bg-primary/40" />
                    <span className="flex size-9 items-center justify-center rounded-full border border-border bg-card shadow-soft icon-float">
                      <User className="size-4 text-primary" aria-hidden="true" />
                    </span>
                    <span className="mt-1 text-[0.7rem] font-semibold text-muted-foreground">
                      {n}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <span className="mx-auto mt-6 block h-px w-[90%] bg-border" />

            <div className="mt-6 flex flex-col items-center text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary-soft">
                <Users className="size-6 text-primary" aria-hidden="true" />
              </span>
              <p className="mt-2 text-base font-semibold leading-tight text-ink">
                Você indica 5 pessoas{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  (Nível 1)
                </span>
              </p>
            </div>

            <span className="mx-auto mt-4 block h-px w-[90%] bg-border" />

            <p className="mt-4 text-center font-display text-sm font-bold uppercase tracking-[0.06em] text-primary">
              Seu ganho no Nível 1
            </p>

            <div className="mt-3 flex flex-col items-center text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                <Coins className="size-6 text-primary-foreground" aria-hidden="true" />
              </span>
              <div className="mt-2 min-w-0">
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                  <span className="whitespace-nowrap font-display text-base font-extrabold tabular-nums text-ink sm:text-lg">
                    5 x R$ 20,00 =
                  </span>
                  <span className="inline-flex items-baseline gap-1 whitespace-nowrap rounded-2xl bg-gradient-primary px-4 py-2 font-display text-base font-extrabold tabular-nums text-primary-foreground shadow-glow ring-2 ring-primary-foreground/30 sm:text-lg">
                    R$ 100,00
                    <span className="text-[0.65rem] font-semibold text-primary-foreground/85">
                      /mês
                    </span>
                  </span>
                </div>
                <p className="mt-2 font-display text-[0.62rem] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                  De comissão recorrente
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                <InfinityIcon className="size-6 text-primary-foreground" aria-hidden="true" />
              </span>
              <div className="mt-2 min-w-0">
                <p className="font-display text-[0.72rem] font-bold tracking-[0.22em] text-primary">
                  RENDA RECORRENTE
                </p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">
                  Ganhos todo mês enquanto sua rede permanece ativa.
                </p>
              </div>
            </div>


            <p className="mt-5 text-center">
              <span className="inline-block rounded-full border border-border bg-card px-4 py-1 text-xs font-semibold text-muted-foreground">
                1 / 3
              </span>
            </p>

          </article>

          {/* ETAPA 2 */}
          <article className="relative overflow-hidden px-1 py-6 sm:px-4">
            <div className="text-center">
              <span className="inline-block rounded-full bg-gradient-primary px-5 py-2 font-display text-[0.68rem] font-bold tracking-[0.14em] text-primary-foreground">
                ETAPA 2
              </span>
              <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight text-ink">
                Cada uma das 5 indica <span className="text-primary">mais 5.</span>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                O poder da <span className="font-semibold text-primary">multiplicação!</span>
              </p>
              <span className="mx-auto mt-4 block h-1 w-12 rounded-full bg-primary" />
            </div>

            <div className="mt-6 flex flex-col items-center">
              <PessoaIcone className="size-12" />
              <span className="mt-1 font-display text-[0.62rem] font-bold tracking-[0.14em] text-ink">
                VOCÊ
              </span>
              <span className="h-4 w-px bg-primary/40" />
              <span className="h-px w-[88%] bg-primary/40" />
              <div className="flex w-full justify-between">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span key={n} className="flex flex-col items-center">
                    <span className="h-3 w-px bg-primary/40" />
                    <PessoaIcone className="size-8" />
                    <span className="mt-1 text-[0.65rem] font-semibold text-muted-foreground">
                      {n}
                    </span>
                    <span className="h-2 w-px bg-primary/40" />
                    <span className="h-px w-6 bg-primary/40" />
                    <span className="mt-1 flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((m) => (
                        <User
                          key={m}
                          className="size-2.5 fill-current text-primary"
                          aria-hidden="true"
                        />
                      ))}
                    </span>
                  </span>
                ))}
              </div>
              <span className="mt-3 rounded-full border border-border bg-card px-4 py-1 text-xs font-semibold text-primary shadow-soft">
                25 pessoas
              </span>
            </div>

            <span className="mx-auto mt-6 block h-px w-[90%] bg-border" />

            <div className="mt-6 flex flex-col items-center text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary-soft">
                <Users className="size-6 text-primary" aria-hidden="true" />
              </span>
              <p className="mt-2 text-base font-semibold leading-tight text-ink">
                Total de 25 pessoas{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  (Nível 2)
                </span>
              </p>
            </div>

            <span className="mx-auto mt-4 block h-px w-[90%] bg-border" />

            <p className="mt-4 text-center font-display text-sm font-bold uppercase tracking-[0.06em] text-primary">
              Seu ganho no Nível 2
            </p>

            <div className="mt-3 flex flex-col items-center text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                <Coins className="size-6 text-primary-foreground" aria-hidden="true" />
              </span>
              <div className="mt-2 min-w-0">
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                  <span className="whitespace-nowrap font-display text-base font-extrabold tabular-nums text-ink sm:text-lg">
                    25 x R$ 5,00 =
                  </span>
                  <span className="inline-flex items-baseline gap-1 whitespace-nowrap rounded-2xl bg-gradient-primary px-4 py-2 font-display text-base font-extrabold tabular-nums text-primary-foreground shadow-glow ring-2 ring-primary-foreground/30 sm:text-lg">
                    R$ 125,00
                    <span className="text-[0.65rem] font-semibold text-primary-foreground/85">
                      /mês
                    </span>
                  </span>
                </div>
                <p className="mt-2 font-display text-[0.62rem] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                  De comissão recorrente
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                <InfinityIcon className="size-6 text-primary-foreground" aria-hidden="true" />
              </span>
              <div className="mt-2 min-w-0">
                <p className="font-display text-[0.72rem] font-bold tracking-[0.22em] text-primary">
                  RENDA RECORRENTE
                </p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">
                  Ganhos todo mês enquanto sua rede permanece ativa.
                </p>
              </div>
            </div>


            <p className="mt-5 text-center">
              <span className="inline-block rounded-full border border-border bg-card px-4 py-1 text-xs font-semibold text-muted-foreground">
                2 / 3
              </span>
            </p>

          </article>

          {/* ETAPAS 3, 4 E 5 */}
          <article className="relative overflow-hidden px-1 py-6 sm:px-4">
            <div className="relative text-center">
              <p>
                <span className="inline-block rounded-full bg-gradient-gold px-5 py-2 font-display text-[0.68rem] font-bold tracking-[0.14em] text-ink">
                  ETAPAS 3, 4 E 5
                </span>
              </p>
              <h3 className="mt-5 font-display text-2xl font-extrabold uppercase leading-tight text-ink">
                <span className="text-gradient-gold">A MULTIPLICAÇÃO NÃO PARA!</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Veja o poder nos{" "}
                <span className="font-semibold text-primary">próximos níveis:</span>
              </p>

              <ul className="mx-auto mt-5 max-w-sm space-y-3">
                {proximosNiveis.map((n) => (
                  <li
                    key={n.nivel}
                    className="grid grid-cols-[3.25rem_1fr_6.5rem] items-center gap-3 rounded-2xl p-2"
                  >
                    <span className="flex size-13 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
                      <Users
                        className="size-6 text-primary-foreground"
                        aria-hidden="true"
                      />
                    </span>
                    <div className="min-w-0 text-left">
                      <p className="font-display text-[0.7rem] font-bold tracking-[0.12em] text-primary">
                        {n.nivel}
                      </p>
                      <p className="whitespace-nowrap font-display text-lg font-extrabold text-ink">
                        {n.pessoas}{" "}
                        <span className="text-xs font-semibold text-muted-foreground">
                          pessoas
                        </span>
                      </p>
                      <span className="mt-1 inline-block rounded-full bg-primary/15 px-2.5 py-0.5 text-[0.65rem] font-semibold text-primary">
                        {n.calculo}
                      </span>
                    </div>
                    <span className="border-l border-border pl-3 text-right">
                      <span className="block whitespace-nowrap font-display text-[1.05rem] font-extrabold tabular-nums text-primary">
                        {n.valor}
                      </span>
                      <span className="block text-xs font-semibold text-muted-foreground">
                        /mês
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mx-auto mt-3 grid max-w-sm grid-cols-[3.25rem_1fr_6.5rem] items-center gap-3 rounded-2xl p-2">
                <span className="flex size-13 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <Trophy className="size-7 text-gold" aria-hidden="true" />
                </span>
                <div className="min-w-0 text-left">
                  <p className="font-display text-[0.7rem] font-bold tracking-[0.12em] text-muted-foreground">
                    TOTAL EM 5 NÍVEIS
                  </p>
                  <p className="whitespace-nowrap font-display text-lg font-extrabold text-ink">
                    3.905{" "}
                    <span className="text-xs font-semibold text-muted-foreground">
                      pessoas
                    </span>
                  </p>
                </div>
                <span className="border-l border-gold/50 pl-3 text-right">
                  <span className="block whitespace-nowrap font-display text-[1.05rem] font-extrabold tabular-nums text-gold">
                    R$ 20.500,00
                  </span>
                  <span className="block text-xs font-semibold text-muted-foreground">
                    /mês
                  </span>
                </span>
              </div>

              <div className="mx-auto mt-3 max-w-sm px-4 py-5 text-center">
                <span className="flex items-center justify-center gap-2 font-display text-[0.66rem] font-bold tracking-[0.35em] text-muted-foreground">
                  <InfinityIcon className="size-5 text-primary" aria-hidden="true" />
                  RENDA RECORRENTE
                </span>
                <span className="mt-1 block font-display text-2xl font-extrabold tracking-tight text-primary">
                  EM ESCALA
                </span>
              </div>

              <p className="mt-4 text-center">
                <span className="inline-block rounded-full border border-border bg-card px-4 py-1 text-xs font-semibold text-muted-foreground">
                  3/3
                </span>
              </p>

            </div>
          </article>
        </div>

        <p className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-xs text-muted-foreground sm:text-sm">
          <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
          Valores referentes às comissões elegíveis conforme regras do programa.
        </p>
      </div>
    </section>
  );
}
