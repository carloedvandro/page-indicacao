import {
  Rocket,
  Users,
  RefreshCcw,
  TrendingUp,
  Gem,
  ShieldCheck,
  GraduationCap,
  CircleCheck,
  ArrowRight,
  Lock,
  MapPinned,
  Clock4,
  CreditCard,
  Gauge,
  Share2,
  Gift,
} from "lucide-react";

import { whatsappLink } from "@/lib/smartvoz";

const beneficios = [
  {
    icone: MapPinned,
    titulo: "COBERTURA NACIONAL VIVO",
    texto: "Sinal que conecta você em todo o Brasil.",
  },
  {
    icone: Clock4,
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
    icone: Share2,
    titulo: "COMPARTILHE COM QUEM QUISER",
    texto: "Ganhe por indicação e aproveite mais.",
  },
];


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


type PlanoProps = {
  variante: "senior" | "premium";
};

function Plano({ variante }: PlanoProps) {
  const premium = variante === "premium";

  return (
    <article
      id={premium ? "plano-premium" : "plano-senior"}
      className={`overflow-hidden rounded-3xl border bg-card shadow-card ${
        premium ? "border-gold/50" : "border-border"
      }`}
    >
      <p className="text-center">
        <span
          className={`inline-block rounded-b-2xl px-8 py-2.5 font-display text-sm font-extrabold tracking-[0.1em] ${
            premium
              ? "bg-gradient-gold text-ink"
              : "bg-gradient-primary text-primary-foreground"
          }`}
        >
          {premium ? "SMART PREMIUM" : "SMART SENIOR"}
        </span>
      </p>

      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div
          className={`p-6 ${
            premium ? "bg-gradient-gold/10" : "bg-primary-deep"
          }`}
          style={
            premium
              ? {
                  backgroundImage:
                    "linear-gradient(160deg, oklch(0.32 0.08 62), oklch(0.5 0.12 70))",
                }
              : undefined
          }
        >
          <p className="text-sm font-semibold text-primary-foreground/85">
            Por apenas
          </p>
          <p className="mt-1 font-display text-4xl font-extrabold text-primary-foreground sm:text-5xl">
            <span className="text-2xl">R$</span>
            <span className={premium ? "text-gold" : "text-primary"}>
              {premium ? "124" : "99"}
              <span className="text-2xl">,{premium ? "90" : "90"}</span>
            </span>
            <span className="text-lg font-bold">/mês</span>
          </p>

          <span className="mt-6 block h-px w-full bg-primary-foreground/20" />

          <div className="mt-6 flex items-start gap-3">
            <Wifi
              className="size-6 shrink-0 text-primary-foreground"
              aria-hidden="true"
            />
            <div>
              <p className="font-display text-sm font-bold tracking-wide text-primary-foreground">
                INTERNET MÓVEL
              </p>
              <p className="mt-1 font-display text-lg font-extrabold text-primary-foreground">
                {premium ? "120 GB" : "100 GB"} + 20 GB de bônus
              </p>
              <p className="mt-1 text-xs text-primary-foreground/70">
                Bônus ativado com débito automático
              </p>
            </div>
          </div>

          <span className="mt-6 block h-px w-full bg-primary-foreground/20" />

          <div className="mt-6 flex items-start gap-3">
            <ShieldCheck
              className="size-6 shrink-0 text-primary-foreground"
              aria-hidden="true"
            />
            <div>
              <p className="font-display text-sm font-bold tracking-wide text-primary-foreground">
                CONEXÃO RÁPIDA E ESTÁVEL
              </p>
              <p className="mt-1 text-sm text-primary-foreground/80">
                Use onde estiver.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start gap-3">
            <span
              className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                premium ? "bg-gradient-gold" : "bg-gradient-primary"
              }`}
            >
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

          <span className="mt-5 block h-px w-full bg-border" />

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


          <div
            className={`mt-6 flex items-start gap-3 rounded-2xl p-4 ${
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

      <div className="p-6 pt-0">
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
