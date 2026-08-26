import {
  Rocket,
  Users,
  RefreshCcw,
  TrendingUp,
  Gem,
  ShieldCheck,
  GraduationCap,
  CircleCheck,
  Wifi,
  ArrowRight,
  Lock,
  MapPinned,
  Timer,
  CreditCard,
  Gauge,
  Gift,
} from "lucide-react";

import mapaCobertura from "@/assets/mapa-cobertura.png.asset.json";
import { whatsappLink } from "@/lib/smartvoz";


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

const academy = [
  "Marketing Digital",
  "Empreendedorismo",
  "Tráfego Pago e Orgânico",
  "Mentalidade",
  "Vendas",
  "Desenvolvimento Pessoal",
  "Gestão Financeira",
  "E muito mais",
];


const selos = [
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
    texto: "Mais praticidade na forma que preferir.",
  },
  {
    icone: Gauge,
    titulo: "CONEXÃO RÁPIDA E ESTÁVEL",
    texto: "Mais desempenho para sua rotina com fluidez.",
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
  const gb = premium ? "120" : "100";
  const preco = premium ? "124" : "99";

  return (
    <article
      id={premium ? "plano-premium" : "plano-senior"}
      className={`plan-card-3d overflow-hidden rounded-3xl border bg-card ${
        premium ? "border-gold/60" : "border-border"
      }`}
    >
      {/* arte oficial: números 3D + bônus + mapa de cobertura */}
      <div className="relative overflow-hidden bg-gradient-to-b from-secondary/70 to-card px-5 pb-7 pt-6 sm:px-8">
        <p className="text-center">
          <span
            className={`inline-block rounded-full px-6 py-2 font-display text-xs font-extrabold tracking-[0.18em] ${
              premium
                ? "bg-gradient-gold text-ink shadow-gold"
                : "bg-gradient-primary text-primary-foreground shadow-soft"
            }`}
          >
            {premium ? "SMART PREMIUM" : "SMART SENIOR"}
          </span>
        </p>

        <div className="mt-6 grid items-center gap-6">
          <div className="min-w-0 text-center">
            <p className="flex items-end justify-center gap-1">
              <span
                className={`plan-gb-3d text-[4.2rem] sm:text-[5.6rem] ${premium ? "plan-gb-3d-gold" : ""}`}
              >
                {gb}
              </span>
              <span
                className={`plan-gb-3d text-3xl sm:text-4xl ${premium ? "plan-gb-3d-gold" : ""}`}
              >
                GB
              </span>
            </p>

            <div className="mt-4 flex items-center justify-center gap-2">
              <span
                className={`plan-gb-3d text-3xl sm:text-4xl ${premium ? "plan-gb-3d-gold" : ""}`}
              >
                +
              </span>
              <div className="plan-bonus-frame justify-center">
                <span
                  className={`plan-gb-3d text-3xl sm:text-4xl ${premium ? "plan-gb-3d-gold" : ""}`}
                >
                  20
                  <span className="text-xl sm:text-2xl">GB</span>
                </span>
                <span className="flex flex-col items-start gap-1.5">
                  <span className="plan-chip-deep text-[0.7rem] sm:text-xs">
                    <Gift className="size-3.5 text-gold" aria-hidden="true" />
                    DE BÔNUS
                  </span>
                  <span className="plan-chip-gold text-[0.62rem] sm:text-[0.7rem]">
                    <CreditCard className="size-3.5" aria-hidden="true" />
                    DÉBITO AUTOMÁTICO
                  </span>
                </span>
              </div>
            </div>

            <p className="mt-4 font-display text-2xl font-extrabold text-ink sm:text-3xl">
              de internet{" "}
              <span className={premium ? "text-gold-deep" : "text-primary"}>
                móvel
              </span>
            </p>

            <span className="plan-gold-rule mx-auto mt-4 block w-48" />

            <p className="mt-4 font-display text-base font-extrabold leading-snug text-ink sm:text-lg">
              Internet móvel de{" "}
              <span className={premium ? "text-gold-deep" : "text-primary"}>
                alta franquia
              </span>{" "}
              para o que realmente importa.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Mais velocidade, estabilidade e liberdade para você aproveitar
              tudo o que importa: trabalho, estudos, jogos, streaming e muito
              mais,{" "}
              <strong className={premium ? "text-gold-deep" : "text-primary"}>
                sem preocupações e com máxima performance.
              </strong>
            </p>

            {/* valor abaixo, como na arte */}
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Por apenas
            </p>
            <p className="mt-1 flex items-baseline justify-center gap-1 font-display font-extrabold text-ink">
              <span className="text-xl">R$</span>
              <span
                className={`text-5xl tabular-nums sm:text-6xl ${
                  premium ? "text-gold-deep" : "text-primary"
                }`}
              >
                {preco}
                <span className="text-2xl">,90</span>
              </span>
              <span className="text-base font-bold">/mês</span>
            </p>
          </div>

          <img
            src={mapaCobertura.url}
            alt={`Mapa do Brasil com cobertura 4G e 5G Vivo do plano de ${gb} GB`}
            decoding="async"
            className="mx-auto w-full max-w-md"
          />
        </div>
      </div>

      {/* selos de benefícios no estilo das moedas douradas */}
      <ul className="grid grid-cols-1 gap-5 border-y border-border px-5 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-5 lg:divide-x lg:divide-gold/40">
        {selos.map((s) => (
          <li
            key={s.titulo}
            className="flex items-center gap-3 lg:flex-col lg:px-2 lg:text-center"
          >
            <span
              className={`plan-selo-coin shrink-0 ${premium ? "plan-selo-coin-gold" : ""}`}
            >
              <s.icone className="size-6" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-[0.72rem] font-extrabold tracking-[0.08em] text-ink">
                {s.titulo}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                {s.texto}
              </p>
            </div>
          </li>
        ))}
      </ul>


      <div className="grid gap-6 px-5 py-6 sm:px-8 lg:grid-cols-2">
        <div>
          <div className="flex items-start gap-3">
            <span className={`plan-icon-3d size-12 shrink-0 ${premium ? "plan-icon-3d-gold" : "plan-icon-3d-purple"}`}>
              <GraduationCap
                className={`size-6 ${
                  premium ? "text-ink" : "text-primary-foreground"
                }`}
                aria-hidden="true"
              />
            </span>
            <div>
              <p
                className={`font-display text-base font-extrabold tracking-wide ${
                  premium ? "text-gold-deep" : "text-primary"
                }`}
              >
                SMART ACADEMY
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Conteúdos e treinamentos para você crescer pessoal e
                profissionalmente.
              </p>
            </div>
          </div>

          <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-1">
            {academy.map((item) => (
              <li key={item} className="flex min-w-0 items-center gap-2.5">
                <CircleCheck
                  className={`size-5 shrink-0 ${
                    premium ? "text-gold-deep" : "text-primary"
                  }`}
                  aria-hidden="true"
                />
                <span className="min-w-0 text-[0.82rem] font-medium leading-snug text-ink sm:text-sm">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <Wifi
              className={`size-6 shrink-0 ${
                premium ? "text-gold-deep" : "text-primary"
              }`}
              aria-hidden="true"
            />
            <div>
              <p className="font-display text-sm font-bold tracking-wide text-ink">
                INTERNET MÓVEL
              </p>
              <p className="mt-1 font-display text-lg font-extrabold text-ink">
                {gb} GB + 20 GB de bônus
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Bônus ativado com débito automático
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck
              className={`size-6 shrink-0 ${
                premium ? "text-gold-deep" : "text-primary"
              }`}
              aria-hidden="true"
            />
            <div>
              <p className="font-display text-sm font-bold tracking-wide text-ink">
                CONEXÃO RÁPIDA E ESTÁVEL
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Use onde estiver.
              </p>
            </div>
          </div>

          <div
            className={`mt-auto flex items-start gap-3 rounded-2xl p-4 ${
              premium ? "bg-gold-soft" : "bg-primary-soft"
            }`}
          >
            <Users
              className={`size-7 shrink-0 ${
                premium ? "text-gold-deep" : "text-primary"
              }`}
              aria-hidden="true"
            />
            <div>
              <p className="font-display text-sm font-bold tracking-wide text-ink">
                PROGRAMA DE INDICAÇÕES
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ganhe na adesão, na recorrência e na sua rede de até{" "}
                <strong className={premium ? "text-gold-deep" : "text-primary"}>
                  5 níveis
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-6 sm:px-8">
        <a
          href={whatsappLink(
            premium
              ? "Olá! Quero começar agora (Plano Premium - R$ 124,90/mês)."
              : "Olá! Quero começar agora (Plano Senior - R$ 99,90/mês).",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-4 py-4 font-display text-[0.9rem] font-extrabold tracking-wide transition-colors duration-200 hover:brightness-110 sm:gap-3 sm:px-6 sm:text-base ${
            premium
              ? "shadow-gold bg-gradient-gold text-ink"
              : "bg-gradient-primary text-primary-foreground shadow-soft"
          }`}
        >
          QUERO COMEÇAR AGORA
          <ArrowRight className="size-5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function Planos() {
  return (
    <section id="planos" className="waves-bg px-3 pb-6 pt-2 sm:px-6 lg:pb-10 lg:pt-4">
      <div className="mx-auto max-w-7xl">
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
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Milhares de pessoas comuns já estão transformando indicações em{" "}
            <strong className="text-primary">renda recorrente</strong> todos os
            meses.
          </p>
          <span className="mx-auto mt-5 block h-1 w-14 rounded-full bg-primary" />
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {passos.map((p) => (
            <li key={p.titulo} className="flex items-start gap-4 lg:px-4">
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
