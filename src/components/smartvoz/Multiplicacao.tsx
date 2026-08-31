import { Star, ShieldCheck } from "lucide-react";
import etapa1Art from "@/assets/etapa-1.png.asset.json";
import etapa2Art from "@/assets/etapa-2.png.asset.json";
import etapa3Art from "@/assets/etapa-3-4-5.png.asset.json";



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
          <article className="relative h-full">
            <img
              src={etapa1Art.url}
              alt="Etapa 1 — Você começa indicando 5 pessoas. Seu ganho no Nível 1: 5 x R$ 20 = R$ 100,00 por mês de comissão recorrente."
              className="h-full w-full rounded-[2rem] object-contain drop-shadow-xl"
              loading="lazy"
            />
          </article>


          {/* ETAPA 2 — arte oficial */}
          <article className="relative h-full">
            <img
              src={etapa2Art.url}
              alt="Etapa 2 — Cada uma das 5 indica mais 5. Total de 25 pessoas. Seu ganho no Nível 2: 25 x R$ 5 = R$ 125,00 por mês de comissão recorrente."
              className="h-full w-full rounded-[2rem] object-contain drop-shadow-xl"
              loading="lazy"
            />
          </article>


          {/* ETAPAS 3, 4 E 5 — arte oficial */}
          <article className="relative h-full">
            <img
              src={etapa3Art.url}
              alt="Etapas 3, 4 e 5 — Nível 3: 125 pessoas, R$ 625,00 por mês. Nível 4: 625 pessoas, R$ 3.125,00 por mês. Nível 5: 3.125 pessoas, R$ 15.625,00 por mês. Total em 5 níveis: 3.905 pessoas, R$ 19.600,00 por mês. Renda recorrente em escala."
              className="h-full w-full rounded-[2rem] object-contain drop-shadow-xl"
              loading="lazy"
            />
          </article>


        </div>

        <p className="mt-8 flex items-center justify-center gap-3 text-center text-xs text-muted-foreground sm:text-sm lg:text-base">
          <span aria-hidden="true" className="hidden h-[2px] w-16 rounded-full bg-border sm:block lg:w-24" />
          <ShieldCheck className="size-4 shrink-0 text-primary lg:size-5" aria-hidden="true" />
          Valores referentes às comissões elegíveis conforme regras do programa.
          <span aria-hidden="true" className="hidden h-[2px] w-16 rounded-full bg-border sm:block lg:w-24" />
        </p>
      </div>
    </section>
  );
}
