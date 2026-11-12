import { Star, ShieldCheck } from "lucide-react";
import etapa1Art from "@/assets/etapa-1.png.asset.json";
import etapa2Art from "@/assets/etapa-2.png.asset.json";
import headingArt from "@/assets/multiplication-heading.jpg.asset.json";
import peopleArt from "@/assets/multiplication-people.jpg.asset.json";
import trophyArt from "@/assets/multiplication-trophy.jpg.asset.json";
import { commissionLevels, commissionTotals, formatBRL, formatPeople } from "@/lib/commissions";



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
            <span aria-hidden="true" className="hidden h-[2px] w-16 rounded-full bg-primary/40 sm:block lg:w-24" />
            <span>
              INDIQUE <span className="text-primary">5 PESSOAS,</span> CADA UMA
              INDICA <span className="text-primary">MAIS 5.</span>
            </span>
            <span aria-hidden="true" className="hidden h-[2px] w-16 rounded-full bg-primary/40 sm:block lg:w-24" />
          </p>
        </div>

        {/* Etapas 1 e 2 empilhadas à esquerda; painel largo das etapas 3 a 8 à direita, ambos com a mesma altura. */}
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] xl:grid-cols-[minmax(0,35fr)_minmax(0,65fr)] 2xl:grid-cols-[minmax(0,30fr)_minmax(0,70fr)]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:content-between">
            <article className="relative">
              <img
                src={etapa1Art.url}
                alt="Etapa 1 — Você começa indicando 5 pessoas. Seu ganho no Nível 1: 5 x R$ 20 = R$ 100,00 por mês de comissão recorrente."
                className="w-full rounded-[2rem] object-contain drop-shadow-xl"
                loading="lazy"
              />
            </article>
            <article className="relative">
              <img
                src={etapa2Art.url}
                alt="Etapa 2 — Cada uma das 5 indica mais 5. Total de 25 pessoas. Seu ganho no Nível 2: 25 x R$ 5 = R$ 125,00 por mês de comissão recorrente."
                className="w-full rounded-[2rem] object-contain drop-shadow-xl"
                loading="lazy"
              />
            </article>
          </div>

          {/* Arte oficial restaurada, com as linhas dos níveis 3 a 8 em dados ao vivo. */}
          <article aria-label="Etapas 3 a 8" className="multiplication-panel flex min-w-0 flex-col rounded-[2rem] px-3 py-5 shadow-card sm:px-6 lg:px-7 lg:py-6">
            <div className="text-center">
              <span className="multiplication-label inline-block rounded-full border border-gold px-5 py-1 font-display text-sm font-bold tracking-wide text-primary-foreground sm:text-base">ETAPAS 3 A 8</span>
              <h3 className="mx-auto mt-3 w-full max-w-[480px]"><img src={headingArt.url} alt="A MULTIPLICAÇÃO NÃO PARA!" className="w-full mix-blend-screen" /></h3>
              <p className="mt-1 text-sm font-semibold text-primary-foreground sm:text-lg">Veja o poder nos <span className="text-multiplication-highlight">próximos níveis:</span></p>
            </div>
            <ol className="mt-4 flex flex-1 flex-col gap-2">
              {commissionLevels.slice(2).map((row) => (
                <li key={row.level} className="multiplication-row grid flex-1 grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,42%)] items-center rounded-xl border border-gold py-1.5 sm:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,40%)]">
                  <img src={peopleArt.url} alt="" className="mx-auto w-12 mix-blend-screen sm:w-16" />
                  <div className="min-w-0 border-x border-gold px-2 sm:px-4">
                    <p className="font-display text-xs font-extrabold text-multiplication-highlight sm:text-base">NÍVEL {row.level} <span className="text-gold">· {row.percentage}%</span></p>
                    <p className="leading-tight text-primary-foreground"><strong className="font-display text-base font-extrabold sm:text-2xl">{formatPeople(row.people)}</strong> <span className="text-xs sm:text-sm">pessoas</span></p>
                    <p className="multiplication-formula mt-0.5 inline-block rounded-md border border-primary/60 px-2 py-0.5 text-center text-[0.6rem] font-bold text-primary-foreground sm:text-xs">{formatPeople(row.people)} × {formatBRL(row.commission)}</p>
                  </div>
                  <div className="min-w-0 px-2 text-right sm:px-4">
                    <p className="multiplication-amount font-display text-base font-extrabold leading-none tabular-nums text-gradient-gold sm:text-[1.7rem]">{formatBRL(row.monthly)}</p>
                    <p className="text-xs font-semibold text-primary-foreground sm:text-sm">/mês</p>
                  </div>
                </li>
              ))}
              <li className="multiplication-row grid flex-1 grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,42%)] items-center rounded-xl border border-gold py-1.5 sm:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,40%)]">
                <img src={trophyArt.url} alt="" className="mx-auto w-12 mix-blend-screen sm:w-[4.5rem]" />
                <div className="min-w-0 border-x border-gold px-2 text-primary-foreground sm:px-4">
                  <p className="text-xs font-semibold sm:text-sm">Total em 8 níveis:</p>
                  <p className="leading-tight"><strong className="font-display text-base font-extrabold sm:text-2xl">{formatPeople(commissionTotals.people)}</strong> <span className="text-xs sm:text-sm">pessoas</span></p>
                </div>
                <div className="min-w-0 px-2 text-right sm:px-4"><p className="multiplication-amount font-display text-base font-extrabold leading-none tabular-nums text-gradient-gold sm:text-[1.7rem]">{formatBRL(commissionTotals.monthly)}</p><p className="text-xs font-semibold text-primary-foreground sm:text-sm">/mês</p></div>
              </li>
            </ol>
            <p className="multiplication-row mt-2 rounded-xl border border-gold px-2 py-3 text-center font-display text-xs font-extrabold tracking-[0.25em] text-primary-foreground sm:text-base">RENDA RECORRENTE <span className="text-multiplication-highlight">EM ESCALA</span></p>
            <div className="mt-3 flex items-center justify-center gap-2" aria-hidden="true"><span className="h-px w-12 bg-gold" /><span className="multiplication-label rounded-full border border-gold px-5 text-sm font-bold text-primary-foreground">3/3</span><span className="h-px w-12 bg-gold" /></div>
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
