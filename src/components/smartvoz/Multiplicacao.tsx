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

function AvatarVoce({ size = "size-14" }: { size?: string }) {
  return (
    <span
      className={`flex ${size} items-center justify-center rounded-full bg-gradient-primary shadow-glow`}
    >
      <User className="size-[55%] text-primary-foreground" aria-hidden="true" />
    </span>
  );
}

function MiniAvatar() {
  return (
    <span className="flex size-9 items-center justify-center rounded-full bg-gradient-primary sm:size-10">
      <User className="size-[55%] text-primary-foreground" aria-hidden="true" />
    </span>
  );
}

function WaveRodape() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full"
      viewBox="0 0 400 60"
      preserveAspectRatio="none"
    >
      <path
        d="M0,42 C90,12 310,66 400,26 L400,60 L0,60 Z"
        fill="oklch(0.43 0.25 302 / 0.18)"
      />
      <path
        d="M0,50 C110,24 290,70 400,38 L400,60 L0,60 Z"
        fill="oklch(0.43 0.25 302 / 0.35)"
      />
    </svg>
  );
}

function BlocoGanho({
  titulo,
  formula,
  valor,
}: {
  titulo: string;
  formula: string;
  valor: string;
}) {
  return (
    <div className="mt-5 flex items-center gap-3">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
        <Coins className="size-6 text-primary-foreground" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
          {titulo}
        </p>
        <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1.5">
          <span className="whitespace-nowrap font-display text-base font-extrabold tabular-nums text-ink sm:text-lg">
            {formula}
          </span>
          <span className="inline-flex items-baseline gap-1 whitespace-nowrap rounded-full bg-gradient-primary px-4 py-2 font-display text-base font-extrabold tabular-nums text-primary-foreground sm:text-lg">
            {valor}
            <span className="text-[0.65rem] font-semibold text-primary-foreground/80">
              /mês
            </span>
          </span>
        </div>
        <p className="mt-1.5 font-display text-[0.62rem] font-bold uppercase tracking-[0.1em] text-muted-foreground">
          De comissão recorrente
        </p>
      </div>
    </div>
  );
}

function linhaHorizontal(i: number, total: number) {
  if (i === 0) return "left-1/2 right-0";
  if (i === total - 1) return "left-0 right-1/2";
  return "inset-x-0";
}

/** Árvore de rede com linhas "soldadas" (sem falhas no meio). */
function ArvoreRede({ sub = false }: { sub?: boolean }) {
  return (
    <div className="flex w-full max-w-[17rem] flex-col items-center">
      <AvatarVoce size={sub ? "size-12" : "size-14"} />
      <p className="mt-1 font-display text-xs font-extrabold tracking-wide text-ink">
        VOCÊ
      </p>
      <span aria-hidden="true" className="h-4 w-px bg-primary/50" />
      <div className="grid w-full grid-cols-5">
        {[1, 2, 3, 4, 5].map((n, i) => (
          <div key={n} className="flex flex-col items-center">
            <div aria-hidden="true" className="relative h-4 w-full">
              <span
                className={`absolute top-0 h-px bg-primary/50 ${linhaHorizontal(i, 5)}`}
              />
              <span className="absolute left-1/2 top-0 h-4 w-px bg-primary/50" />
            </div>
            <MiniAvatar />
            <span className="mt-1 text-[0.7rem] font-semibold text-muted-foreground">
              {n}
            </span>
            {sub && (
              <>
                <span aria-hidden="true" className="h-2 w-px bg-primary/50" />
                <div aria-hidden="true" className="grid w-full grid-cols-5">
                  {[0, 1, 2, 3, 4].map((j) => (
                    <div key={j} className="relative flex flex-col items-center">
                      <div className="relative h-2 w-full">
                        <span
                          className={`absolute top-0 h-px bg-primary/50 ${linhaHorizontal(j, 5)}`}
                        />
                        <span className="absolute left-1/2 top-0 h-2 w-px bg-primary/50" />
                      </div>
                      <span className="size-1.5 rounded-full bg-primary/80" />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function RendaRecorrente() {

  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <span className="h-px flex-1 bg-border" />
      <InfinityIcon className="size-5 text-primary" aria-hidden="true" />
      <span className="font-display text-[0.68rem] font-bold tracking-[0.28em] text-primary">
        RENDA RECORRENTE
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export function Multiplicacao() {
  return (
    <section className="waves-bg px-3 pb-6 pt-2 sm:px-6 lg:pb-10 lg:pt-4">
      <div className="mx-auto max-w-screen-2xl">
        <div className="text-center">
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
          <p className="mx-auto mt-4 flex items-center justify-center gap-4 font-display text-sm font-bold uppercase tracking-wide text-ink sm:text-lg lg:text-xl">
            <span aria-hidden="true" className="hidden h-px w-16 bg-primary/40 sm:block lg:w-24" />
            <span>
              INDIQUE <span className="text-primary">5 PESSOAS,</span> CADA UMA
              INDICA <span className="text-primary">MAIS 5.</span>
            </span>
            <span aria-hidden="true" className="hidden h-px w-16 bg-primary/40 sm:block lg:w-24" />
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {/* ETAPA 1 */}
          <article className="surface-card relative flex h-full flex-col overflow-hidden p-6 pb-16 lg:p-7 lg:pb-16">
            <div className="relative z-10 flex flex-1 flex-col">
              <div className="text-center">
                <span className="inline-block rounded-full bg-gradient-primary px-5 py-2 font-display text-[0.68rem] font-bold tracking-[0.14em] text-primary-foreground">
                  ETAPA 1
                </span>
              </div>

              <p className="mt-5 text-center font-display text-xl font-extrabold leading-snug text-ink">
                Você começa indicando{" "}
                <span className="text-primary">5 pessoas.</span>
              </p>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                Simples assim.
              </p>
              <span className="mx-auto mt-3 block h-0.5 w-14 rounded-full bg-primary" />

              {/* árvore nível 1 */}
              <div className="mt-5 flex flex-col items-center">
                <ArvoreRede />
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-primary-soft p-3.5">
                <Users className="size-7 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold leading-tight text-ink">
                    Você indica 5 pessoas
                  </p>
                  <p className="text-xs text-muted-foreground">(Nível 1)</p>
                </div>
              </div>

              <BlocoGanho
                titulo="Seu ganho no Nível 1"
                formula="5 x R$ 20,00 ="
                valor="R$ 100,00"
              />

              <div className="mt-auto">
                <RendaRecorrente />

                <p className="mt-4 text-center">
                  <span className="inline-block rounded-full border border-border bg-card px-4 py-1 text-xs font-semibold text-muted-foreground">
                    1 / 3
                  </span>
                </p>
              </div>
            </div>
            <WaveRodape />
          </article>


          {/* ETAPA 2 */}
          <article className="surface-card relative flex h-full flex-col overflow-hidden p-6 pb-16 lg:p-7 lg:pb-16">
            <div className="relative z-10 flex flex-1 flex-col">
              <div className="text-center">
                <span className="inline-block rounded-full bg-gradient-primary px-5 py-2 font-display text-[0.68rem] font-bold tracking-[0.14em] text-primary-foreground">
                  ETAPA 2
                </span>
              </div>

              <p className="mt-5 text-center font-display text-xl font-extrabold leading-snug text-ink">
                Cada uma das 5 indica{" "}
                <span className="text-primary">mais 5.</span>
              </p>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                O poder da <span className="text-primary">multiplicação!</span>
              </p>
              <span className="mx-auto mt-3 block h-0.5 w-14 rounded-full bg-primary" />

              {/* árvore nível 2 */}
              <div className="mt-5 flex flex-col items-center">
                <ArvoreRede sub />
                <span className="mt-2 inline-block rounded-full bg-primary-soft px-4 py-1 font-display text-xs font-bold text-accent-foreground">
                  25 pessoas
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-primary-soft p-3.5">
                <Users className="size-7 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold leading-tight text-ink">
                    Total de 25 pessoas
                  </p>
                  <p className="text-xs text-muted-foreground">(Nível 2)</p>
                </div>
              </div>

              <BlocoGanho
                titulo="Seu ganho no Nível 2"
                formula="25 x R$ 5,00 ="
                valor="R$ 125,00"
              />

              <div className="mt-auto">
                <RendaRecorrente />

                <p className="mt-4 text-center">
                  <span className="inline-block rounded-full border border-border bg-card px-4 py-1 text-xs font-semibold text-muted-foreground">
                    2 / 3
                  </span>
                </p>
              </div>
            </div>
            <WaveRodape />
          </article>


          {/* ETAPAS 3, 4 E 5 — bloco escuro com brilho roxo e dourado */}
          <article
            className="relative flex h-full flex-col overflow-hidden rounded-[2rem] p-6 sm:p-7"

            style={{
              backgroundImage:
                "radial-gradient(900px 400px at 50% 0%, oklch(0.32 0.19 300 / 0.5), transparent 65%), linear-gradient(165deg, oklch(0.17 0.09 300), oklch(0.13 0.06 300) 60%, oklch(0.11 0.05 300))",
              boxShadow:
                "inset 0 0 60px oklch(0.55 0.25 303 / 0.35), 0 0 0 1px oklch(0.6 0.26 303 / 0.65)",
            }}
          >
            {/* pontos de constelação */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(oklch(0.72 0.18 303 / 0.5) 1.2px, transparent 1.4px)",
                backgroundSize: "90px 90px",
                maskImage:
                  "radial-gradient(120% 90% at 50% 0%, black, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(120% 90% at 50% 0%, black, transparent 75%)",
              }}
            />

            {/* brilho interno pulsante em tempo real */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 animate-pulse rounded-[2rem]"
              style={{
                background:
                  "radial-gradient(700px 350px at 50% 15%, oklch(0.6 0.26 303 / 0.38), transparent 60%)",
              }}
            />

            <div className="relative">
              <p className="text-center">
                <span
                  className="inline-block rounded-full px-6 py-2 font-display text-[0.72rem] font-bold tracking-[0.22em] text-gold"
                  style={{
                    border: "1px solid oklch(0.8 0.16 84 / 0.75)",
                    boxShadow:
                      "0 0 18px oklch(0.8 0.16 84 / 0.35), 0 0 0 1px oklch(0.55 0.25 303 / 0.4)",
                  }}
                >
                  ETAPAS 3, 4 E 5
                </span>
              </p>

              <h3 className="mt-6 text-center font-display font-extrabold uppercase leading-[1.02]">
                <span
                  className="block text-[1.9rem] sm:text-[2.2rem]"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, oklch(0.92 0.1 92), oklch(0.75 0.15 80))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    textShadow: "0 0 30px oklch(0.8 0.16 84 / 0.45)",
                  }}
                >
                  A MULTIPLICAÇÃO
                </span>
                <span className="block text-[1.9rem] text-primary-foreground sm:text-[2.2rem]">
                  NÃO PARA!
                </span>
              </h3>

              <p className="mt-3 text-center text-sm text-primary-foreground/85 sm:text-base">
                Veja o poder nos{" "}
                <span
                  className="font-semibold"
                  style={{ color: "oklch(0.75 0.2 303)" }}
                >
                  próximos níveis:
                </span>
              </p>

              <ul className="mt-6">
                {proximosNiveis.map((n, i) => (
                  <li key={n.nivel}>
                    {i > 0 && (
                      <span className="relative my-4 block h-px w-full bg-primary-foreground/15">
                        <span
                          className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                          style={{
                            background: "oklch(0.75 0.2 303)",
                            boxShadow:
                              "0 0 12px 3px oklch(0.65 0.26 303 / 0.9)",
                          }}
                        />
                      </span>
                    )}
                    <div className="grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-3">
                      <span
                        className="flex size-14 shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, oklch(0.5 0.26 303), oklch(0.34 0.22 301))",
                          boxShadow:
                            "0 0 0 1px oklch(0.72 0.18 303 / 0.7), 0 0 24px oklch(0.55 0.26 303 / 0.8)",
                        }}
                      >
                        <Users
                          className="size-7 text-primary-foreground"
                          aria-hidden="true"
                        />
                      </span>
                      <div className="min-w-0">
                        <p
                          className="font-display text-[0.85rem] font-bold tracking-[0.14em]"
                          style={{ color: "oklch(0.75 0.2 303)" }}
                        >
                          {n.nivel}
                        </p>
                        <p className="whitespace-nowrap font-display text-xl font-extrabold text-primary-foreground">
                          {n.pessoas}{" "}
                          <span className="text-sm font-semibold text-primary-foreground/70">
                            pessoas
                          </span>
                        </p>
                        <span
                          className="mt-1.5 inline-block rounded-full px-3 py-0.5 font-display text-[0.72rem] font-semibold text-gold"
                          style={{
                            border: "1px solid oklch(0.8 0.16 84 / 0.7)",
                          }}
                        >
                          {n.calculo}
                        </span>
                      </div>
                      <span className="border-l border-primary-foreground/15 pl-3 text-right">
                        <span
                          className="block whitespace-nowrap font-display text-[1.25rem] font-extrabold tabular-nums text-gold"
                          style={{
                            textShadow: "0 0 18px oklch(0.8 0.16 84 / 0.55)",
                          }}
                        >
                          {n.valor}
                        </span>
                        <span className="block text-xs font-semibold text-primary-foreground/70">
                          /mês
                        </span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div
                className="mt-5 grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl p-3"
                style={{
                  border: "1px solid oklch(0.8 0.16 84 / 0.45)",
                  background: "oklch(1 0 0 / 0.04)",
                  boxShadow: "0 0 24px oklch(0.55 0.25 303 / 0.3)",
                }}
              >
                <span
                  className="flex size-14 shrink-0 items-center justify-center rounded-full"
                  style={{
                    border: "1px solid oklch(0.8 0.16 84 / 0.65)",
                    background: "oklch(0.8 0.16 84 / 0.1)",
                    boxShadow: "0 0 20px oklch(0.8 0.16 84 / 0.35)",
                  }}
                >
                  <Trophy className="size-7 text-gold" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p
                    className="font-display text-[0.7rem] font-bold tracking-[0.12em]"
                    style={{ color: "oklch(0.78 0.18 303)" }}
                  >
                    TOTAL EM 5 NÍVEIS
                  </p>
                  <p className="whitespace-nowrap font-display text-xl font-extrabold text-primary-foreground">
                    3.905{" "}
                    <span className="text-sm font-semibold text-primary-foreground/70">
                      pessoas
                    </span>
                  </p>
                </div>
                <span className="border-l border-gold/30 pl-3 text-right">
                  <span
                    className="block whitespace-nowrap font-display text-[1.25rem] font-extrabold tabular-nums text-gold"
                    style={{ textShadow: "0 0 18px oklch(0.8 0.16 84 / 0.55)" }}
                  >
                    R$ 20.500,00
                  </span>
                  <span className="block text-xs font-semibold text-primary-foreground/70">
                    /mês
                  </span>
                </span>
              </div>

              <div className="mt-6 text-center">
                <span className="flex items-center justify-center gap-4">
                  <span className="h-px w-14 bg-gold/50" />
                  <InfinityIcon
                    className="size-6 text-gold"
                    style={{
                      filter: "drop-shadow(0 0 8px oklch(0.8 0.16 84 / 0.8))",
                    }}
                    aria-hidden="true"
                  />
                  <span className="h-px w-14 bg-gold/50" />
                </span>
                <span
                  className="mt-3 block font-display text-[0.85rem] font-bold tracking-[0.4em] text-gold"
                  style={{ textShadow: "0 0 16px oklch(0.8 0.16 84 / 0.5)" }}
                >
                  RENDA RECORRENTE
                </span>
                <span
                  className="mt-1 block font-display text-[2.2rem] font-extrabold leading-none tracking-tight sm:text-[2.6rem]"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, oklch(0.85 0.12 303), oklch(0.62 0.24 303))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  EM ESCALA
                </span>
                <p className="mt-4">
                  <span
                    className="inline-block rounded-full px-4 py-1 text-xs font-semibold text-gold"
                    style={{ border: "1px solid oklch(0.8 0.16 84 / 0.6)" }}
                  >
                    3 / 3
                  </span>
                </p>
              </div>
            </div>
          </article>
        </div>

        <p className="mt-8 flex items-center justify-center gap-3 text-center text-xs text-muted-foreground sm:text-sm lg:text-base">
          <span aria-hidden="true" className="hidden h-px w-16 bg-border sm:block lg:w-24" />
          <ShieldCheck className="size-4 shrink-0 text-primary lg:size-5" aria-hidden="true" />
          Valores referentes às comissões elegíveis conforme regras do programa.
          <span aria-hidden="true" className="hidden h-px w-16 bg-border sm:block lg:w-24" />
        </p>
      </div>
    </section>
  );
}
