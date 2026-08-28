import {
  Rocket,
  Users,
  RefreshCcw,
  TrendingUp,
  Gem,
  ArrowRight,
  Lock,
  MapPinned,
  Timer,
  CreditCard,
  Gauge,
  Gift,
  Landmark,
} from "lucide-react";

import { whatsappLink } from "@/lib/smartvoz";
import mapaRoxo from "@/assets/mapa-cobertura-roxo.png";
import mapaDourado from "@/assets/mapa-cobertura-dourado.png";

const passos = [
  {
    icone: Users,
    titulo: "Indique pessoas",
    texto: "Conecte amigos e familiares com um serviço que todos já usam.",
  },
  {
    icone: RefreshCcw,
    titulo: "Receba comissões",
    texto:
      "Ganhe na adesão e continue recebendo na recorrência mês após mês.",
  },
  {
    icone: TrendingUp,
    titulo: "Construa sua carteira",
    texto: "Sua carteira cresce e pode gerar renda para você por muito tempo.",
  },
  {
    icone: Gem,
    titulo: "Viva da liberdade",
    texto:
      "Mais tempo, mais escolha e mais qualidade de vida para você e sua família.",
  },
];

const beneficios = [
  {
    icone: MapPinned,
    titulo: "COBERTURA NACIONAL VIVO",
    texto: "Sinal que conecta você em todo o Brasil.",
  },
  {
    icone: Timer,
    titulo: "ATIVAÇÃO EM ATÉ 24H",
    texto: "Agilidade para você não perder tempo.",
  },
  {
    icone: CreditCard,
    titulo: "eSIM OU SIM CARD",
    texto: "Mais praticidade na forma que você preferir.",
  },
  {
    icone: Gauge,
    titulo: "CONEXÃO RÁPIDA E ESTÁVEL",
    texto: "Mais desempenho para a sua rotina com fluidez.",
  },
  {
    icone: Users,
    titulo: "COMPARTILHE COM QUEM QUISER",
    texto: "Ganhe por indicação e aproveite mais.",
  },
];

type PlanoProps = {
  variante: "senior" | "premium";
};

function Plano({ variante }: PlanoProps) {
  const premium = variante === "premium";

  return (
    <article
      id={premium ? "plano-premium" : "plano-senior"}
      className={`flex flex-col overflow-hidden rounded-[1.75rem] border-2 bg-card shadow-card ${
        premium ? "border-gold/60" : "border-primary/25"
      }`}
    >
      <p className="text-center">
        <span
          className={`inline-block rounded-b-2xl px-8 py-2.5 font-display text-sm font-extrabold tracking-[0.14em] ${
            premium
              ? "bg-gradient-gold text-ink"
              : "bg-gradient-primary text-primary-foreground"
          }`}
        >
          {premium ? "SMART PREMIUM" : "SMART SENIOR"}
        </span>
      </p>

      <div className="px-4 pt-3 text-center sm:px-6">
        <p
          className={`font-display text-[3.4rem] font-extrabold leading-none tracking-tight sm:text-7xl ${
            premium ? "text-gradient-gold" : "text-gradient-primary"
          }`}
        >
          {premium ? "120" : "100"}
          <span className="text-[2.2rem] sm:text-5xl">GB</span>
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          <span
            className={`inline-flex items-baseline gap-1 rounded-xl px-3 py-1.5 font-display text-2xl font-extrabold sm:text-3xl ${
              premium
                ? "bg-gradient-gold text-ink"
                : "bg-gradient-primary text-primary-foreground"
            }`}
          >
            +20
            <span className="text-base sm:text-lg">GB</span>
          </span>
          <span
            className={`rounded-lg border px-2.5 py-1 font-display text-[0.68rem] font-bold tracking-[0.12em] ${
              premium
                ? "border-gold-deep/50 bg-gold-soft text-gold-deep"
                : "border-primary/30 bg-primary-soft text-primary"
            }`}
          >
            DE BÔNUS
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 font-display text-[0.62rem] font-bold tracking-[0.1em] ${
              premium
                ? "border-gold-deep/40 bg-card text-gold-deep"
                : "border-primary/25 bg-card text-primary"
            }`}
          >
            <Landmark className="size-3.5" aria-hidden="true" />
            DÉBITO AUTOMÁTICO
          </span>
        </div>

        <p className="mt-2.5 font-display text-xl font-extrabold text-ink sm:text-2xl">
          de internet{" "}
          <span className={premium ? "text-gold-deep" : "text-primary"}>
            móvel
          </span>
        </p>
      </div>

      <img
        src={premium ? mapaDourado : mapaRoxo}
        alt={
          premium
            ? "Mapa do Brasil com cobertura 4G e 5G do plano Smart Premium"
            : "Mapa do Brasil com cobertura 4G e 5G do plano Smart Senior"
        }
        width={1024}
        height={768}
        loading="lazy"
        className="mx-auto mt-1 w-full max-w-[26rem]"
      />

      <ul className="grid grid-cols-5 gap-1.5 px-2 pb-4 sm:gap-3 sm:px-5">
        {beneficios.map((b) => (
          <li key={b.titulo} className="flex flex-col items-center text-center">
            <span
              className={`flex size-9 items-center justify-center rounded-full sm:size-11 ${
                premium ? "bg-gradient-gold" : "bg-gradient-primary"
              }`}
            >
              <b.icone
                className={`size-4 sm:size-5 ${
                  premium ? "text-ink" : "text-primary-foreground"
                }`}
                aria-hidden="true"
              />
            </span>
            <p className="mt-1.5 font-display text-[0.5rem] font-extrabold leading-tight tracking-[0.03em] text-ink sm:text-[0.62rem]">
              {b.titulo}
            </p>
            <p className="mt-1 text-[0.46rem] leading-snug text-muted-foreground sm:text-[0.58rem]">
              {b.texto}
            </p>
          </li>
        ))}
      </ul>

      <div
        className={`mt-auto flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 px-4 py-4 text-center ${
          premium
            ? "bg-gradient-gold text-ink"
            : "bg-gradient-primary text-primary-foreground"
        }`}
      >
        <span className="font-display text-sm font-bold">Por apenas</span>
        <span className="font-display text-lg font-extrabold">R$</span>
        <span className="font-display text-4xl font-extrabold leading-none tabular-nums sm:text-5xl">
          {premium ? "124" : "99"}
          <span className="text-2xl">,90</span>
        </span>
        <span className="font-display text-base font-bold">/mês</span>
      </div>

      <div className="p-4 sm:p-6">
        <a
          href={whatsappLink(
            premium
              ? "Olá! Quero começar agora (Plano Premium - R$ 124,90/mês)."
              : "Olá! Quero começar agora (Plano Senior - R$ 99,90/mês).",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-4 py-4 font-display text-[0.9rem] font-extrabold tracking-wide transition-transform duration-300 hover:-translate-y-0.5 sm:gap-3 sm:px-6 sm:text-base ${
            premium
              ? "shadow-gold bg-gradient-gold text-ink"
              : "bg-gradient-primary text-primary-foreground shadow-glow"
          }`}
        >
          QUERO COMEÇAR AGORA
          <ArrowRight className="size-5" aria-hidden="true" />
        </a>

        <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
          <Gift
            className={`size-4 shrink-0 ${premium ? "text-gold-deep" : "text-primary"}`}
            aria-hidden="true"
          />
          Bônus de 20 GB ativado com débito automático
        </p>
      </div>
    </article>
  );
}


export function Planos() {
  return (
    <section id="planos" className="waves-bg px-3 pb-6 pt-2 sm:px-6 lg:pb-10 lg:pt-4">
      <div className="mx-auto max-w-screen-2xl">
        <div className="relative flex flex-col items-center gap-6 lg:block lg:text-center">
          <p className="eyebrow-pill">
            <Rocket className="size-4 text-primary" aria-hidden="true" />
            <span className="text-primary">SUA CARTEIRA COMEÇA AGORA</span>
          </p>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-[2rem] font-extrabold leading-[1.08] text-ink sm:text-5xl">
            Tudo começa com uma <span className="text-primary">decisão.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg lg:max-w-none lg:whitespace-nowrap lg:text-xl">
            Milhares de pessoas comuns já estão transformando indicações em{" "}
            <strong className="text-primary">renda recorrente</strong> todos os
            meses.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-[26rem] gap-6 px-3 sm:max-w-none sm:grid-cols-2 sm:px-0 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {passos.map((p) => (
            <li key={p.titulo} className="flex items-start gap-3 sm:gap-4 lg:px-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                <p.icone className="size-6 text-primary" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-base font-bold text-primary">
                  {p.titulo}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {p.texto}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          <Plano variante="senior" />
          <Plano variante="premium" />
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Lock className="size-4 text-primary" aria-hidden="true" />
          Ambiente seguro e 100% online
        </p>
      </div>
    </section>
  );
}
