import { Star, ShieldCheck, Trophy } from "lucide-react";
import etapa1Art from "@/assets/etapa-1.png.asset.json";
import etapa2Art from "@/assets/etapa-2.png.asset.json";
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

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {/* ETAPA 1 — arte oficial */}
          <article className="relative flex h-full flex-col">
            <img
              src={etapa1Art.url}
              alt="Etapa 1 — Você começa indicando 5 pessoas. Seu ganho no Nível 1: 5 x R$ 20 = R$ 100,00 por mês de comissão recorrente."
              className="w-full rounded-[2rem] object-contain drop-shadow-xl"
              loading="lazy"
            />
            <p className="mt-2 text-center font-display text-sm font-bold text-primary">NÍVEL 1 · 20% · R$ 20,00 por pessoa</p>
          </article>


          {/* ETAPA 2 — arte oficial */}
          <article className="relative flex h-full flex-col">
            <img
              src={etapa2Art.url}
              alt="Etapa 2 — Cada uma das 5 indica mais 5. Total de 25 pessoas. Seu ganho no Nível 2: 25 x R$ 5 = R$ 125,00 por mês de comissão recorrente."
              className="w-full rounded-[2rem] object-contain drop-shadow-xl"
              loading="lazy"
            />
            <p className="mt-2 text-center font-display text-sm font-bold text-primary">NÍVEL 2 · 5% · R$ 5,00 por pessoa</p>
          </article>


          {/* Dados vivos preservam o estilo roxo e dourado da terceira arte. */}
          <article aria-label="Etapas 3 a 8" className="multiplication-panel flex h-full min-w-0 flex-col rounded-[2rem] px-4 py-5 shadow-card sm:px-5">
            <div className="text-center">
              <span className="rounded-full border border-gold/70 px-4 py-1 font-display text-xs font-bold text-primary-foreground">ETAPAS 3 A 8</span>
              <h3 className="mt-3 font-display text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
                <span className="text-gradient-gold">A MULTIPLICAÇÃO</span><br />
                <span className="text-primary-foreground">NÃO </span><span className="text-multiplication-highlight">PARA!</span>
              </h3>
              <p className="mt-2 text-xs text-primary-foreground">Veja o poder nos próximos níveis:</p>
            </div>
            <ol className="mt-4 flex flex-1 flex-col justify-center divide-y divide-gold/30">
              {commissionLevels.slice(2).map((row) => (
                <li key={row.level} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 py-2.5">
                  <div className="min-w-0">
                    <p className="font-display text-xs font-bold text-multiplication-highlight">NÍVEL {row.level} <span className="ml-1 text-gold">· {row.percentage}%</span></p>
                    <p className="text-primary-foreground"><strong className="font-display text-lg">{formatPeople(row.people)}</strong> <span className="text-xs">pessoas</span></p>
                    <p className="text-[0.65rem] text-primary-foreground/80">{formatPeople(row.people)} × {formatBRL(row.commission)}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-base font-extrabold tabular-nums text-gold sm:text-lg">{formatBRL(row.monthly)}</p>
                    <p className="text-xs text-primary-foreground">/mês</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-3 flex items-center gap-2 border-y border-gold/60 py-3">
              <Trophy className="size-8 shrink-0 text-gold" aria-hidden="true" />
              <div className="min-w-0 flex-1 text-primary-foreground">
                <p className="text-[0.65rem]">Total em 8 níveis:</p>
                <p className="font-display text-lg font-extrabold">{formatPeople(commissionTotals.people)} <span className="text-xs font-normal">pessoas</span></p>
              </div>
              <p className="text-right font-display text-base font-extrabold tabular-nums text-gold sm:text-lg">{formatBRL(commissionTotals.monthly)}<span className="block text-xs font-normal text-primary-foreground">/mês</span></p>
            </div>
            <p className="mt-3 text-center font-display text-[0.65rem] font-bold text-primary-foreground">RENDA RECORRENTE <span className="text-multiplication-highlight">EM ESCALA</span></p>
            <p className="mt-2 text-center text-[0.65rem] text-gold">3/3</p>
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
