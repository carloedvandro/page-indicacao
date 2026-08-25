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
    <section className="waves-bg px-3 pb-6 pt-2 sm:px-6 lg:pb-10 lg:pt-4">
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
            O PODER DA <span className="text-primary">MULTIPLICAÇÃO!</span>
          </h2>
          <p className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-ink sm:text-lg">
            INDIQUE <span className="text-primary">5 PESSOAS,</span> CADA UMA
            INDICA <span className="text-primary">MAIS 5.</span>
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {/* ETAPA 1 */}
          <article className="surface-card relative overflow-hidden p-6">
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
              <PessoaIcone className="size-14" />
              <span className="mt-1 font-display text-[0.62rem] font-bold tracking-[0.14em] text-ink">
                VOCÊ
              </span>
              <span className="h-4 w-px bg-primary/40" />
              <span className="h-px w-[80%] bg-primary/40" />
              <div className="flex w-full justify-between px-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span key={n} className="flex flex-col items-center">
                    <span className="h-3 w-px bg-primary/40" />
                    <span className="flex size-9 items-center justify-center rounded-full border border-border bg-card shadow-soft">
                      <User className="size-4 text-primary" aria-hidden="true" />
                    </span>
                    <span className="mt-1 text-[0.7rem] font-semibold text-muted-foreground">
                      {n}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-secondary/70 p-4">
              <Users className="size-7 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm font-semibold leading-tight text-ink">
                Você indica 5 pessoas
                <span className="block font-normal text-muted-foreground">
                  (Nível 1)
                </span>
              </p>
            </div>

            <div className="mt-3 flex items-center gap-4 rounded-2xl bg-secondary/70 p-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
                <Coins className="size-5 text-primary-foreground" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <p className="font-display text-[0.68rem] font-bold tracking-[0.1em] text-primary">
                  SEU GANHO NO NÍVEL 1
                </p>
                <div className="mt-1 flex items-center gap-3">
                  <span className="whitespace-nowrap font-display text-lg font-extrabold text-ink sm:text-xl">
                    5 x R$ 20,00 =
                  </span>
                  <span className="whitespace-nowrap rounded-xl bg-gradient-primary px-3 py-1.5 font-display text-base font-extrabold text-primary-foreground sm:text-lg">
                    R$ 100,00
                  </span>
                </div>
                <p className="mt-1 font-display text-[0.62rem] font-bold tracking-[0.1em] text-muted-foreground">
                  DE COMISSÃO RECORRENTE{" "}
                  <span className="float-right normal-case">/mês</span>
                </p>
              </div>
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 font-display text-[0.66rem] font-bold tracking-[0.35em] text-primary">
              <InfinityIcon className="size-5" aria-hidden="true" />
              RENDA RECORRENTE
            </p>
            <p className="mt-4 text-center">
              <span className="inline-block rounded-full border border-border bg-card px-4 py-1 text-xs font-semibold text-muted-foreground">
                1/3
              </span>
            </p>
          </article>

          {/* ETAPA 2 */}
          <article className="surface-card p-6">
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

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-secondary/70 p-4">
              <Users className="size-7 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm font-semibold leading-tight text-ink">
                Total de 25 pessoas
                <span className="block font-normal text-muted-foreground">
                  (Nível 2)
                </span>
              </p>
            </div>

            <div className="mt-3 flex items-center gap-4 rounded-2xl bg-secondary/70 p-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
                <Coins className="size-5 text-primary-foreground" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <p className="font-display text-[0.68rem] font-bold tracking-[0.1em] text-primary">
                  SEU GANHO NO NÍVEL 2
                </p>
                <div className="mt-1 flex items-center gap-3">
                  <span className="whitespace-nowrap font-display text-lg font-extrabold text-ink sm:text-xl">
                    25 x R$ 5,00 =
                  </span>
                  <span className="whitespace-nowrap rounded-xl bg-gradient-primary px-3 py-1.5 font-display text-base font-extrabold text-primary-foreground sm:text-lg">
                    R$ 125,00
                  </span>
                </div>
                <p className="mt-1 font-display text-[0.62rem] font-bold tracking-[0.1em] text-muted-foreground">
                  DE COMISSÃO RECORRENTE{" "}
                  <span className="float-right normal-case">/mês</span>
                </p>
              </div>
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 font-display text-[0.66rem] font-bold tracking-[0.35em] text-primary">
              <InfinityIcon className="size-5" aria-hidden="true" />
              RENDA RECORRENTE
            </p>
            <p className="mt-4 text-center">
              <span className="inline-block rounded-full border border-border bg-card px-4 py-1 text-xs font-semibold text-muted-foreground">
                2/3
              </span>
            </p>
          </article>

          {/* ETAPAS 3, 4 E 5 — bloco dourado */}
          <article className="shadow-gold relative overflow-hidden rounded-3xl border border-gold/60 bg-ink p-6">
            <span
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 0%, oklch(0.79 0.15 82 / 0.35), transparent 55%), radial-gradient(circle at 0% 100%, oklch(0.49 0.26 283 / 0.4), transparent 55%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-center">
                <span className="inline-block rounded-full bg-gradient-gold px-5 py-2 font-display text-[0.68rem] font-bold tracking-[0.14em] text-ink">
                  ETAPAS 3, 4 E 5
                </span>
              </p>
              <h3 className="mt-5 text-center font-display text-2xl font-extrabold uppercase leading-tight">
                <span className="text-gradient-gold">A MULTIPLICAÇÃO</span>
                <span className="block text-primary-foreground">NÃO PARA!</span>
              </h3>
              <p className="mt-2 text-center text-sm text-primary-foreground/80">
                Veja o poder nos{" "}
                <span className="font-semibold text-gold">próximos níveis:</span>
              </p>

              <ul className="mt-5 space-y-3">
                {proximosNiveis.map((n) => (
                  <li
                    key={n.nivel}
                    className="grid grid-cols-[2.75rem_minmax(0,1fr)_8.5rem] items-center gap-3 rounded-2xl border border-gold/25 bg-primary-foreground/[0.06] p-3"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
                      <Users
                        className="size-5 text-primary-foreground"
                        aria-hidden="true"
                      />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-[0.68rem] font-bold tracking-[0.1em] text-primary-foreground/85">
                        {n.nivel}
                      </p>
                      <p className="whitespace-nowrap font-display text-base font-extrabold text-primary-foreground">
                        {n.pessoas}{" "}
                        <span className="text-xs font-semibold text-primary-foreground/70">
                          pessoas
                        </span>
                      </p>
                      <span className="mt-1 inline-block rounded-md bg-primary/70 px-2 py-0.5 text-[0.65rem] font-semibold text-primary-foreground">
                        {n.calculo}
                      </span>
                    </div>
                    <span className="border-l border-gold/30 pl-3 text-right">
                      <span className="block whitespace-nowrap font-display text-[1.05rem] font-extrabold tabular-nums text-gold">
                        {n.valor}
                      </span>
                      <span className="text-xs font-semibold text-primary-foreground/70">
                        /mês
                      </span>
                    </span>
                  </li>

                ))}
              </ul>

              <div className="mt-4 grid grid-cols-[2.75rem_minmax(0,1fr)_8.5rem] items-center gap-3 rounded-2xl border-2 border-gold/70 bg-primary-foreground/[0.06] p-3">
                <Trophy className="size-11 shrink-0 text-gold" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-primary-foreground/85">
                    Total em 5 níveis:
                  </p>
                  <p className="whitespace-nowrap font-display text-base font-extrabold text-primary-foreground">
                    3.905{" "}
                    <span className="text-xs font-semibold text-primary-foreground/70">
                      pessoas
                    </span>
                  </p>
                </div>
                <span className="border-l border-gold/30 pl-3 text-right">
                  <span className="block whitespace-nowrap font-display text-[1.05rem] font-extrabold tabular-nums text-gold">
                    R$ 20.500,00
                  </span>
                  <span className="text-xs font-semibold text-primary-foreground/70">
                    /mês
                  </span>
                </span>
              </div>


              <p className="mt-6 text-center">
                <span className="flex items-center justify-center gap-2 font-display text-[0.66rem] font-bold tracking-[0.35em] text-primary-foreground/85">
                  <InfinityIcon className="size-5" aria-hidden="true" />
                  RENDA RECORRENTE
                </span>
                <span className="mt-1 block font-display text-xl font-extrabold tracking-tight text-primary">
                  EM ESCALA
                </span>
              </p>
              <p className="mt-4 text-center">
                <span className="inline-block rounded-full border border-gold/40 bg-primary-foreground/10 px-4 py-1 text-xs font-semibold text-primary-foreground/80">
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
