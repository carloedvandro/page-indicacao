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
  const gb = premium ? "120" : "100";
  const valor = premium ? "124" : "99";

  return (
    <article
      id={premium ? "plano-premium" : "plano-senior"}
      className={`flex flex-col overflow-hidden rounded-[1.75rem] border bg-card shadow-card ${
        premium ? "border-gold/60" : "border-border"
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

      {/* Bloco da internet — destaque 3D */}
      <div className="bg-gradient-primary-deep px-5 pb-7 pt-6 sm:px-7">
        <div className="flex flex-wrap items-end justify-center gap-x-2 text-center">
          <span className="gb-3d font-display text-[4.25rem] font-extrabold leading-[0.85] sm:text-[5.5rem]">
            {gb}
          </span>
          <span className="gb-3d font-display text-3xl font-extrabold leading-none sm:text-4xl">
            GB
          </span>
        </div>

        <div className="mx-auto mt-5 flex max-w-md flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl border border-gold/60 bg-ink/25 px-4 py-3">
          <span className="gb-3d font-display text-2xl font-extrabold leading-none">
            + 20<span className="text-base">GB</span>
          </span>
          <span className="rounded-full bg-gradient-gold px-3 py-1 font-display text-[0.7rem] font-extrabold tracking-[0.08em] text-ink">
            DE BÔNUS
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 px-3 py-1 font-display text-[0.65rem] font-bold tracking-[0.06em] text-gold">
            <Gift className="size-3.5" aria-hidden="true" />
            DÉBITO AUTOMÁTICO
          </span>
        </div>

        <p className="mt-4 text-center font-display text-xl font-extrabold text-primary-foreground sm:text-2xl">
          de internet <span className="text-gold">móvel</span>
        </p>
        <p className="mt-1 text-center text-sm text-primary-foreground/75">
          Internet móvel de alta franquia para o que realmente importa.
        </p>
      </div>

      {/* Benefícios com divisores dourados */}
      <ul className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-1 lg:divide-y">
        {beneficios.map((b) => (
          <li key={b.titulo} className="flex items-start gap-3 px-5 py-3.5 sm:px-7">
            <span
              className={`flex size-10 shrink-0 items-center justify-center rounded-full border ${
                premium
                  ? "border-gold/60 bg-gold-soft"
                  : "border-primary/25 bg-primary-soft"
              }`}
            >
              <b.icone
                className={`size-5 ${premium ? "text-gold-deep" : "text-primary"}`}
                aria-hidden="true"
              />
            </span>
            <div className="min-w-0">
              <p className="font-display text-[0.78rem] font-extrabold tracking-[0.06em] text-ink">
                {b.titulo}
              </p>
              <p className="mt-0.5 text-[0.8rem] leading-snug text-muted-foreground">
                {b.texto}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Smart Academy */}
      <div className="px-5 pb-2 pt-5 sm:px-7">
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

        <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
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
          className={`mt-5 flex items-start gap-3 rounded-2xl p-4 ${
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

      {/* Valor + CTA no rodapé do card */}
      <div className="mt-auto px-5 pb-6 pt-5 sm:px-7">
        <div
          className={`flex flex-wrap items-end justify-between gap-3 rounded-2xl border px-4 py-4 ${
            premium ? "border-gold/50 bg-gold-soft/60" : "border-border bg-secondary/60"
          }`}
        >
          <div>
            <p className="font-display text-[0.7rem] font-bold tracking-[0.12em] text-muted-foreground">
              POR APENAS
            </p>
            <p className="mt-1 font-display text-4xl font-extrabold leading-none text-ink sm:text-[2.75rem]">
              <span className="align-top text-xl">R$ </span>
              <span className={premium ? "text-gold-deep" : "text-primary"}>
                {valor}
                <span className="text-2xl">,90</span>
              </span>
              <span className="text-lg font-bold text-muted-foreground">/mês</span>
            </p>
          </div>
          <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <ShieldCheck
              className={`size-4 ${premium ? "text-gold-deep" : "text-primary"}`}
              aria-hidden="true"
            />
            Sem fidelidade
          </p>
        </div>

        <a
          href={whatsappLink(
            premium
              ? "Olá! Quero começar agora (Plano Premium - R$ 124,90/mês)."
              : "Olá! Quero começar agora (Plano Senior - R$ 99,90/mês).",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-4 py-4 font-display text-[0.9rem] font-extrabold tracking-wide sm:gap-3 sm:px-6 sm:text-base ${
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
