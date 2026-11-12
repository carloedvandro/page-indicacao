import { Star, ShieldCheck } from "lucide-react";
import etapa1Art from "@/assets/etapa-1.png.asset.json";
import etapa2Art from "@/assets/etapa-2.png.asset.json";
import headingArt from "@/assets/multiplication-heading.jpg.asset.json";
import peopleArt from "@/assets/multiplication-people.png.asset.json";
import trophyArt from "@/assets/multiplication-trophy.png.asset.json";
import { commissionLevels, commissionTotals, formatBRL, formatPeople } from "@/lib/commissions";

export function Multiplicacao() {
  return (
    <section className="waves-bg px-3 pb-6 pt-2 sm:px-6 lg:pb-10 lg:pt-4">
      <div className="mx-auto max-w-[1280px]">
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
            <span aria-hidden="true" className="hidden h-[2px] w-16 rounded-full bg-primary/40 sm:block lg:w-24" />
            <span>
              INDIQUE <span className="text-primary">5 PESSOAS,</span> CADA UMA
              INDICA <span className="text-primary">MAIS 5.</span>
            </span>
            <span aria-hidden="true" className="hidden h-[2px] w-16 rounded-full bg-primary/40 sm:block lg:w-24" />
          </p>
        </div>

        {/* Etapas 1 e 2 à esquerda; painel das etapas 3 a 8 à direita. A altura do painel
            manda: as artes da esquerda se ajustam a ela, então cards mais baixos
            não deixam vão embaixo. */}
        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:gap-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:content-start lg:gap-6">
            <article className="min-h-0">
              <img
                src={etapa1Art.url}
                alt="Etapa 1 — Você começa indicando 5 pessoas. Seu ganho no Nível 1: 5 x R$ 20 = R$ 100,00 por mês de comissão recorrente."
                className="w-full rounded-[2rem] object-contain drop-shadow-xl"
                loading="lazy"
              />
            </article>
            <article className="min-h-0">
              <img
                src={etapa2Art.url}
                alt="Etapa 2 — Cada uma das 5 indica mais 5. Total de 25 pessoas. Seu ganho no Nível 2: 25 x R$ 5 = R$ 125,00 por mês de comissão recorrente."
                className="w-full rounded-[2rem] object-contain drop-shadow-xl"
                loading="lazy"
              />
            </article>
          </div>

          {/* Arte oficial restaurada, com as linhas dos níveis 3 a 8 em dados ao vivo. */}
          <article aria-label="Etapas 3 a 8" className="multiplication-panel flex min-w-0 flex-col rounded-[2rem] px-3 py-4 shadow-card sm:px-6 lg:px-6 lg:py-5">
            <div className="text-center">
              <span className="multiplication-label inline-block rounded-full border border-gold px-5 py-1 font-display text-sm font-bold tracking-wide text-primary-foreground sm:text-base">ETAPAS 3 A 8</span>
              <h3 className="mx-auto mt-2 w-full max-w-[440px]"><img src={headingArt.url} alt="A MULTIPLICAÇÃO NÃO PARA!" className="w-full mix-blend-screen" /></h3>
              <p className="mt-1 text-sm font-semibold text-primary-foreground sm:text-lg">Veja o poder nos <span className="multiplication-level">próximos níveis:</span></p>
            </div>
            <ol className="mt-3 flex flex-col gap-2 lg:flex-1 lg:gap-2.5">
              {commissionLevels.slice(2).map((row) => (
                <li key={row.level} className="multiplication-row grid grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-2 rounded-2xl border border-gold px-2 py-1.5 sm:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,40%)] sm:gap-4 sm:px-4 lg:flex-1">
                  <img src={peopleArt.url} alt="" className="mx-auto w-10 sm:w-14" />
                  <div className="min-w-0 border-x border-gold px-2 sm:px-4">
                    <p className="font-display multiplication-level text-[0.75rem] font-extrabold tracking-wide sm:text-lg">NÍVEL {row.level}</p>
                    <div className="mt-0.5 flex flex-col items-start gap-1">
                      <p className="multiplication-people leading-tight text-primary-foreground"><strong className="font-display text-base font-extrabold sm:text-2xl">{formatPeople(row.people)}</strong> <span className="text-xs sm:text-sm">pessoas</span></p>
                      <p className="multiplication-formula inline-block rounded-lg border border-multiplication-highlight/50 px-2.5 py-0.5 text-center text-[0.6rem] font-bold text-primary-foreground sm:text-xs">{formatPeople(row.people)} × {formatBRL(row.commission)}</p>
                    </div>
                  </div>
                  <div className="shrink-0 px-1 text-right sm:px-3">
                    <p className="multiplication-amount font-display text-sm font-extrabold leading-none tabular-nums text-gradient-gold sm:text-[1.7rem]">{formatBRL(row.monthly)}</p>
                    <p className="text-[0.65rem] font-semibold text-primary-foreground sm:text-sm">/mês</p>
                  </div>
                </li>
              ))}
              <li className="multiplication-row grid grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-2 rounded-2xl border border-gold px-2 py-1.5 sm:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,40%)] sm:gap-4 sm:px-4 lg:flex-1">
                <img src={trophyArt.url} alt="" className="mx-auto w-10 sm:w-14" />
                <div className="min-w-0 border-x border-gold px-2 text-primary-foreground sm:px-4">
                  <p className="text-xs font-semibold sm:text-sm">Total em 8 níveis:</p>
                  <p className="multiplication-people leading-tight"><strong className="font-display text-base font-extrabold sm:text-2xl">{formatPeople(commissionTotals.people)}</strong> <span className="text-xs sm:text-sm">pessoas</span></p>
                </div>
                <div className="shrink-0 px-1 text-right sm:px-3"><p className="multiplication-amount font-display text-sm font-extrabold leading-none tabular-nums text-gradient-gold sm:text-[1.7rem]">{formatBRL(commissionTotals.monthly)}</p><p className="text-[0.65rem] font-semibold text-primary-foreground sm:text-sm">/mês</p></div>
              </li>
            </ol>
            <p className="multiplication-row mt-2 rounded-xl border border-gold px-2 py-2 text-center font-display text-xs font-extrabold tracking-[0.25em] text-primary-foreground sm:text-base">RENDA RECORRENTE <span className="multiplication-level">EM ESCALA</span></p>
            <div className="mt-2 flex items-center justify-center gap-2" aria-hidden="true"><span className="h-px w-12 bg-gold" /><span className="multiplication-label rounded-full border border-gold px-5 text-sm font-bold text-primary-foreground">3/3</span><span className="h-px w-12 bg-gold" /></div>
          </article>
        </div>

        <p className="mt-8 flex items-center justify-center gap-3 text-center text-xs text-muted-foreground sm:text-sm lg:text-base">
          <span aria-hidden="true" className="hidden h-[2px] w-16 rounded-full bg-border sm:block lg:w-24" />
          <ShieldCheck className="size-4 shrink-0 text-primary lg:size-5" aria-hidden="true" />
          Projeção ilustrativa de uma matriz completa 5 × 5, não uma garantia de renda. Comissões sujeitas à elegibilidade e às regras do programa.
          <span aria-hidden="true" className="hidden h-[2px] w-16 rounded-full bg-border sm:block lg:w-24" />
        </p>
      </div>
    </section>
  );
}
