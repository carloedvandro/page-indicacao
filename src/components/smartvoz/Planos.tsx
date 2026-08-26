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
  Smartphone,
  Signal,
  Zap,
} from "lucide-react";

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
      {/* cabeçalho com arte 3D */}
      <div
        className={`relative overflow-hidden px-5 pb-8 pt-6 sm:px-8 ${
          premium ? "bg-gradient-gold" : "bg-gradient-primary"
        }`}
      >
        {/* decoração 3D */}
        <div
          className={`plan-data-disc ${premium ? "plan-data-disc-gold" : "plan-data-disc-purple"}`}
        >
          <Signal className="size-7" aria-hidden="true" />
        </div>
        <div
          className={`plan-phone-3d ${premium ? "plan-phone-3d-gold" : "plan-phone-3d-purple"}`}
        >
          <Smartphone className="size-8" aria-hidden="true" />
        </div>

        <p className="text-center">
          <span
            className={`inline-block rounded-full px-5 py-1.5 font-display text-xs font-extrabold tracking-[0.18em] ${
              premium
                ? "bg-ink/15 text-ink"
                : "bg-white/20 text-primary-foreground"
            }`}
          >
            {premium ? "SMART PREMIUM" : "SMART SENIOR"}
          </span>
        </p>

        <p className="mt-5 text-center font-display text-4xl font-extrabold text-white sm:text-5xl">
          R$ {preco}
          <span className="text-2xl font-bold">,90</span>
          <span className="block text-base font-semibold tracking-wide opacity-90 sm:text-lg">
            /mês
          </span>
        </p>

        <p className="mt-4 text-center text-sm font-medium text-white/90 sm:text-base">
          {gb} GB + 20 GB de bônus
        </p>
      </div>

      {/* benefícios */}
      <div className="grid gap-5 px-5 py-6 sm:px-8">
        <div className="flex items-start gap-3">
          <span
            className={`plan-icon-3d size-12 shrink-0 ${premium ? "plan-icon-3d-gold" : "plan-icon-3d-purple"}`}
          >
            <Wifi
              className={`size-6 ${premium ? "text-ink" : "text-primary-foreground"}`}
              aria-hidden="true"
            />
          </span>
          <div>
            <p className="font-display text-sm font-extrabold tracking-wide text-ink">
              INTERNET MÓVEL
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {gb} GB + 20 GB de bônus para navegar com liberdade.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span
            className={`plan-icon-3d size-12 shrink-0 ${premium ? "plan-icon-3d-gold" : "plan-icon-3d-purple"}`}
          >
            <ShieldCheck
              className={`size-6 ${premium ? "text-ink" : "text-primary-foreground"}`}
              aria-hidden="true"
            />
          </span>
          <div>
            <p className="font-display text-sm font-extrabold tracking-wide text-ink">
              CONEXÃO RÁPIDA E ESTÁVEL
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Use onde estiver, com qualidade e estabilidade.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span
            className={`plan-icon-3d size-12 shrink-0 ${premium ? "plan-icon-3d-gold" : "plan-icon-3d-purple"}`}
          >
            <Zap
              className={`size-6 ${premium ? "text-ink" : "text-primary-foreground"}`}
              aria-hidden="true"
            />
          </span>
          <div>
            <p className="font-display text-sm font-extrabold tracking-wide text-ink">
              SEM CONSULTA AO SPC/SERASA
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Aprovação simples e descomplicada.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span
            className={`plan-icon-3d size-12 shrink-0 ${premium ? "plan-icon-3d-gold" : "plan-icon-3d-purple"}`}
          >
            <GraduationCap
              className={`size-6 ${premium ? "text-ink" : "text-primary-foreground"}`}
              aria-hidden="true"
            />
          </span>
          <div>
            <p
              className={`font-display text-sm font-extrabold tracking-wide ${
                premium ? "text-gold-deep" : "text-primary"
              }`}
            >
              SMART ACADEMY
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Treinamentos para você crescer pessoal e profissionalmente.
            </p>
          </div>
        </div>

        <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {academy.map((item) => (
            <li key={item} className="flex min-w-0 items-center gap-2">
              <CircleCheck
                className={`size-4 shrink-0 ${premium ? "text-gold-deep" : "text-primary"}`}
                aria-hidden="true"
              />
              <span className="min-w-0 text-xs font-medium leading-snug text-ink sm:text-sm">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div
          className={`flex items-start gap-3 rounded-2xl p-4 ${
            premium ? "bg-gold-soft" : "bg-primary-soft"
          }`}
        >
          <Users
            className={`size-7 shrink-0 ${premium ? "text-gold-deep" : "text-primary"}`}
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
              ? "bg-gradient-gold text-ink shadow-gold"
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
