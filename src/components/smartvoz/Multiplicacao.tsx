import {
  Star,
  User,
  Users,
  Coins,
  Trophy,
  Infinity as InfinityIcon,
  ShieldCheck,
} from "lucide-react";
import etapa1Art from "@/assets/etapa-1.png.asset.json";

const proximosNiveis = [
  { nivel: "NÍVEL 3", pessoas: "125", calculo: "125 x R$ 5", valor: "R$ 625" },
  { nivel: "NÍVEL 4", pessoas: "625", calculo: "625 x R$ 5", valor: "R$ 3.125" },
  {
    nivel: "NÍVEL 5",
    pessoas: "3.125",
    calculo: "3.125 x R$ 5",
    valor: "R$ 15.625",
  },
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
    <span className="flex size-9 items-center justify-center rounded-full bg-gradient-primary shadow-[0_0_0_3px_white,0_2px_8px_oklch(0.43_0.25_302_/_0.35)] sm:size-10">
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
    <div className="mt-4 flex items-start gap-3 rounded-2xl bg-primary-soft/60 p-3.5">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary">
        <Coins className="size-6 text-primary-foreground" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.1em] text-primary">
          {titulo}
        </p>
        <div className="mt-1 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3">
          <span className="whitespace-nowrap font-display text-xl font-extrabold tabular-nums text-ink">
            {formula}
          </span>
          <span className="whitespace-nowrap rounded-xl bg-gradient-primary px-3.5 py-1.5 text-center font-display text-lg font-extrabold tabular-nums text-primary-foreground">
            {valor}
          </span>
          <span className="mt-1 font-display text-[0.62rem] font-bold uppercase tracking-[0.1em] text-muted-foreground">
            De comissão recorrente
          </span>
          <span className="mt-1 text-right text-xs font-semibold text-muted-foreground">
            /mês
          </span>
        </div>
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
                      <span className="size-2 rounded-full bg-primary shadow-[0_0_0_2px_white]" />
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
          {/* ETAPA 1 — arte oficial */}
          <article className="relative h-full">
            <img
              src={etapa1Art.url}
              alt="Etapa 1 — Você começa indicando 5 pessoas. Seu ganho no Nível 1: 5 x R$ 20 = R$ 100,00 por mês de comissão recorrente."
              className="h-full w-full rounded-[2rem] object-contain drop-shadow-xl"
              loading="lazy"
            />
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
                formula="25 x R$ 5 ="
                valor="R$ 125"
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
            className="relative flex h-full flex-col overflow-hidden rounded-[2rem] p-5 sm:p-6"
            style={{
              backgroundImage:
                "radial-gradient(120% 70% at 50% 0%, oklch(0.22 0.12 300 / 0.9), transparent 60%), linear-gradient(180deg, oklch(0.13 0.05 300), oklch(0.09 0.03 300))",
              boxShadow:
                "inset 0 0 0 1px oklch(0.8 0.16 84 / 0.55), inset 0 0 70px oklch(0.5 0.24 303 / 0.22)",
            }}
          >
            {/* estrelinhas nos cantos */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(oklch(0.95 0.02 300 / 0.55) 1px, transparent 1.3px)",
                backgroundSize: "110px 110px",
                maskImage:
                  "radial-gradient(130% 100% at 50% 0%, black, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(130% 100% at 50% 0%, black, transparent 70%)",
              }}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 animate-pulse"
              style={{
                background:
                  "radial-gradient(600px 300px at 50% 10%, oklch(0.6 0.26 303 / 0.22), transparent 65%)",
              }}
            />

            <div className="relative z-10 flex flex-1 flex-col">
              <p className="text-center">
                <span
                  className="inline-block rounded-full px-6 py-1.5 font-display text-[0.72rem] font-bold tracking-[0.2em] text-gold"
                  style={{
                    border: "1px solid oklch(0.8 0.16 84 / 0.85)",
                    background: "oklch(0.12 0.05 300)",
                    boxShadow: "0 0 16px oklch(0.8 0.16 84 / 0.3)",
                  }}
                >
                  ETAPAS 3, 4 E 5
                </span>
              </p>

              <h3 className="mt-4 text-center font-display font-extrabold uppercase leading-[1.05]">
                <span
                  className="block text-[1.75rem] sm:text-[2.15rem]"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, oklch(0.93 0.11 92), oklch(0.76 0.15 80))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    textShadow: "0 0 28px oklch(0.8 0.16 84 / 0.4)",
                  }}
                >
                  A MULTIPLICAÇÃO
                </span>
                <span
                  className="block text-[1.75rem] sm:text-[2.15rem]"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, oklch(0.93 0.11 92), oklch(0.76 0.15 80))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    textShadow: "0 0 28px oklch(0.8 0.16 84 / 0.4)",
                  }}
                >
                  NÃO PARA!
                </span>
              </h3>

              <p className="mt-3 text-center text-sm font-medium text-primary-foreground/85">
                Veja o poder nos{" "}
                <span
                  className="font-bold"
                  style={{ color: "oklch(0.78 0.19 303)" }}
                >
                  próximos níveis:
                </span>
              </p>

              <ul className="mt-4 space-y-3">
                {proximosNiveis.map((n) => (
                  <li
                    key={n.nivel}
                    className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-3 py-3"
                    style={{
                      background: "oklch(0.11 0.04 300)",
                      border: "1px solid oklch(0.55 0.2 303 / 0.35)",
                    }}
                  >
                    <span
                      className="flex size-12 shrink-0 items-center justify-center rounded-full"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, oklch(0.58 0.26 303), oklch(0.4 0.24 301))",
                        boxShadow: "0 0 20px oklch(0.55 0.26 303 / 0.7)",
                      }}
                    >
                      <Users
                        className="size-6 text-primary-foreground"
                        aria-hidden="true"
                      />
                    </span>

                    <div className="min-w-0">
                      <p
                        className="font-display text-[0.78rem] font-bold tracking-[0.12em]"
                        style={{ color: "oklch(0.78 0.19 303)" }}
                      >
                        {n.nivel}
                      </p>
                      <p className="font-display text-lg font-extrabold leading-tight text-primary-foreground">
                        {n.pessoas}{" "}
                        <span className="text-sm font-medium text-primary-foreground/70">
                          pessoas
                        </span>
                      </p>
                      <span
                        className="mt-1 inline-block rounded-full px-2.5 py-[0.15rem] text-[0.68rem] font-semibold text-primary-foreground/90"
                        style={{ background: "oklch(0.42 0.22 302 / 0.85)" }}
                      >
                        {n.calculo}
                      </span>
                    </div>

                    <span
                      className="pl-3 text-right"
                      style={{
                        borderLeft: "1px solid oklch(0.55 0.2 303 / 0.35)",
                      }}
                    >
                      <span
                        className="block whitespace-nowrap font-display text-[1.35rem] font-extrabold tabular-nums text-gold sm:text-[1.5rem]"
                        style={{
                          textShadow: "0 0 16px oklch(0.8 0.16 84 / 0.5)",
                        }}
                      >
                        {n.valor}
                      </span>
                      <span className="block text-xs font-medium text-primary-foreground/70">
                        /mês
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              {/* TOTAL */}
              <div
                className="mt-4 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl px-3 py-3"
                style={{
                  background: "oklch(0.1 0.035 300)",
                  border: "1px solid oklch(0.8 0.16 84 / 0.8)",
                  boxShadow:
                    "inset 0 0 24px oklch(0.8 0.16 84 / 0.12), 0 0 20px oklch(0.8 0.16 84 / 0.15)",
                }}
              >
                <Trophy
                  className="size-14 shrink-0 text-gold sm:size-16"
                  strokeWidth={1.3}
                  fill="oklch(0.82 0.16 84 / 0.55)"
                  style={{
                    filter:
                      "drop-shadow(0 0 10px oklch(0.8 0.16 84 / 0.85)) drop-shadow(0 0 26px oklch(0.8 0.16 84 / 0.45))",
                  }}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="text-center text-sm font-semibold text-primary-foreground">
                    Total em 5 níveis:
                  </p>
                  <div className="mt-1 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <span className="text-center font-display text-[1.5rem] font-extrabold leading-none text-primary-foreground">
                      3.905
                      <span className="mt-0.5 block text-xs font-medium text-primary-foreground/70">
                        pessoas
                      </span>
                    </span>
                    <span
                      className="pl-3 text-right"
                      style={{
                        borderLeft: "1px solid oklch(0.8 0.16 84 / 0.35)",
                      }}
                    >
                      <span
                        className="block whitespace-nowrap font-display text-[1.5rem] font-extrabold leading-none tabular-nums text-gold sm:text-[1.7rem]"
                        style={{
                          textShadow: "0 0 18px oklch(0.8 0.16 84 / 0.55)",
                        }}
                      >
                        R$ 20.500
                      </span>
                      <span className="mt-0.5 block text-xs font-medium text-primary-foreground/70">
                        /mês
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-5 text-center">
                <span className="flex items-center justify-center gap-3">
                  <InfinityIcon
                    className="size-7 text-primary-foreground"
                    style={{
                      filter: "drop-shadow(0 0 8px oklch(0.75 0.2 303 / 0.9))",
                    }}
                    aria-hidden="true"
                  />
                  <span className="font-display text-[0.85rem] font-bold tracking-[0.22em] text-primary-foreground">
                    RENDA RECORRENTE
                  </span>
                </span>
                <span
                  className="mt-1 block font-display text-[1.9rem] font-extrabold leading-tight tracking-tight sm:text-[2.1rem]"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, oklch(0.86 0.13 303), oklch(0.6 0.25 303))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  EM ESCALA
                </span>
                <p className="mt-3">
                  <span
                    className="inline-block rounded-full px-4 py-1 text-xs font-semibold text-primary-foreground/80"
                    style={{
                      border: "1px solid oklch(1 0 0 / 0.25)",
                    }}
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
