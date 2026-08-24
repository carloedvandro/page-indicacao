import { useRef } from "react";
import { ArrowLeft, ArrowRight, Play, Star, ShieldCheck } from "lucide-react";

import lucas from "@/assets/depoimento-lucas.jpg";
import juliana from "@/assets/depoimento-juliana.jpg";
import rafael from "@/assets/depoimento-rafael.jpg";

const depoimentos = [
  {
    foto: lucas,
    frase: "Em menos de 3 meses minha carteira já mudou meus resultados.",
    nome: "Lucas Martins",
    cidade: "São Paulo - SP",
    clientes: "26 clientes na carteira",
  },
  {
    foto: juliana,
    frase: "A recorrência é o que me dá tranquilidade todo mês.",
    nome: "Juliana Oliveira",
    cidade: "Belo Horizonte - MG",
    clientes: "18 clientes na carteira",
  },
  {
    foto: rafael,
    frase: "Com a SmartVoz construí uma renda que só cresce.",
    nome: "Rafael Costa",
    cidade: "Curitiba - PR",
    clientes: "32 clientes na carteira",
  },
];

export function Depoimentos() {
  const trilha = useRef<HTMLDivElement>(null);

  const mover = (direcao: 1 | -1) => {
    const el = trilha.current;
    if (!el) return;
    el.scrollBy({ left: direcao * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="waves-bg px-3 py-8 sm:px-6 lg:py-12">
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
          <h2 className="text-[2rem] font-extrabold leading-[1.08] text-ink sm:text-5xl">
            Veja quem já começou a construir{" "}
            <span className="text-primary">sua carteira.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Pessoas comuns. Resultados reais. Oportunidade verdadeira.
          </p>
        </div>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => mover(-1)}
            aria-label="Ver depoimento anterior"
            className="absolute -left-1 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-primary shadow-card transition-colors hover:bg-accent lg:-left-6 lg:size-14"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => mover(1)}
            aria-label="Ver próximo depoimento"
            className="absolute -right-1 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-primary shadow-card transition-colors hover:bg-accent lg:-right-6 lg:size-14"
          >
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>

          <div
            ref={trilha}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-8 pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-10"
          >
            {depoimentos.map((d) => (
              <article
                key={d.nome}
                className="relative w-[82%] shrink-0 snap-center overflow-hidden rounded-3xl bg-ink shadow-card lg:w-auto"
              >
                <div className="relative aspect-[3/4.7] w-full sm:aspect-[3/4.15]">
                  <img
                    src={d.foto}
                    alt={`${d.nome}, associado SmartVoz`}
                    width={768}
                    height={1024}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-ink via-ink/90 to-transparent" />

                  <button
                    type="button"
                    aria-label={`Assistir ao depoimento de ${d.nome}`}
                    className="absolute left-1/2 top-[27%] flex size-14 sm:top-[42%] -translate-x-1/2 items-center justify-center rounded-full bg-card shadow-card transition-transform duration-300 hover:scale-110 sm:size-16"
                  >
                    <Play
                      className="ml-0.5 size-6 fill-current text-primary"
                      aria-hidden="true"
                    />
                  </button>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="font-display text-3xl font-extrabold leading-none text-primary">
                      &ldquo;
                    </span>
                    <p className="mt-2 text-[0.98rem] italic leading-snug text-primary-foreground">
                      &ldquo;{d.frase}&rdquo;
                    </p>
                    <span className="mt-5 block h-px w-full bg-primary-foreground/25" />
                    <p className="mt-4 font-display text-base font-bold text-primary-foreground">
                      {d.nome}
                    </p>
                    <p className="mt-1 text-sm text-primary-foreground/75">
                      {d.cidade}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      {d.clientes}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-xs text-muted-foreground sm:text-sm">
          <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
          Resultados individuais podem variar. Não configuram promessa ou
          garantia de ganhos.
        </p>
      </div>
    </section>
  );
}
