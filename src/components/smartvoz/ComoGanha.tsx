import {
  CircleDollarSign,
  User,
  RefreshCcw,
  Handshake,
  CalendarClock,
  Infinity as InfinityIcon,
  ShieldCheck,
  MonitorSmartphone,
  Users,
  Plus,
} from "lucide-react";

const niveis = [
  { nivel: "NÍVEL 1", descricao: "Suas indicações diretas", valor: "R$ 50\n+ R$ 20/mês" },
  { nivel: "NÍVEL 2", descricao: "Rede do 2º nível", valor: "R$ 5" },
  { nivel: "NÍVEL 3", descricao: "Rede do 3º nível", valor: "R$ 5" },
  { nivel: "NÍVEL 4", descricao: "Rede do 4º nível", valor: "R$ 5" },
  { nivel: "NÍVEL 5", descricao: "Rede do 5º nível", valor: "R$ 5" },
];

export function ComoGanha() {
  return (
    <section className="waves-bg px-3 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="eyebrow-pill">
            <CircleDollarSign className="size-4 text-primary" aria-hidden="true" />
            <span className="text-primary">SIMPLES. JUSTO. RECORRENTE.</span>
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-[2rem] font-extrabold leading-[1.08] text-ink sm:text-5xl">
            Como você ganha com o Poder da{" "}
            <span className="text-primary">Recorrência.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Indique. Construa sua carteira. Receba comissões todos os meses.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="grid gap-5">
            <div className="relative grid gap-5 sm:grid-cols-2">
              <article className="surface-card p-6 text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 font-display text-[0.68rem] font-bold tracking-[0.12em] text-accent-foreground">
                  <User className="size-4" aria-hidden="true" />
                  NA ADESÃO
                </span>
                <p className="mt-6 font-display text-5xl font-extrabold text-primary">
                  R$ 50
                </p>
                <span className="mt-6 block h-px w-full bg-border" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Você recebe <strong className="text-primary">R$ 50</strong>{" "}
                  quando sua indicação direta realizar a adesão.
                </p>
                <span className="mx-auto mt-6 flex size-20 items-center justify-center rounded-full bg-primary-soft">
                  <Handshake className="size-10 text-primary" aria-hidden="true" />
                </span>
              </article>

              <span className="absolute left-1/2 top-1/2 z-10 hidden size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card shadow-card sm:flex">
                <Plus className="size-5 text-primary" aria-hidden="true" />
              </span>

              <article className="surface-card p-6 text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 font-display text-[0.68rem] font-bold tracking-[0.12em] text-accent-foreground">
                  <RefreshCcw className="size-4" aria-hidden="true" />
                  RECORRÊNCIA MENSAL
                </span>
                <p className="mt-6 font-display text-5xl font-extrabold text-primary">
                  R$ 20
                  <span className="text-xl font-bold">/mês</span>
                </p>
                <span className="mt-6 block h-px w-full bg-border" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Você recebe <strong className="text-primary">R$ 20</strong>{" "}
                  todo mês enquanto seu cliente direto permanecer ativo e
                  elegível.
                </p>
                <span className="mx-auto mt-6 flex size-20 items-center justify-center rounded-full bg-primary-soft">
                  <CalendarClock className="size-10 text-primary" aria-hidden="true" />
                </span>
              </article>
            </div>

            <div className="surface-card flex items-center gap-4 p-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
                <InfinityIcon
                  className="size-7 text-primary-foreground"
                  aria-hidden="true"
                />
              </span>
              <p className="font-display text-sm font-bold leading-snug text-ink sm:text-base">
                Uma única indicação pode gerar comissões na adesão e continuar
                gerando <span className="text-primary">todos os meses</span>.
              </p>
            </div>
          </div>

          <article className="surface-card p-6 sm:p-8">
            <p className="text-center font-display text-sm font-bold tracking-[0.06em] text-ink sm:text-base">
              SUA REDE PODE CHEGAR{" "}
              <span className="text-primary">ATÉ O 5º NÍVEL</span>
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                <User className="size-6 text-primary-foreground" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-extrabold text-ink">
                VOCÊ
              </span>
            </div>

            <ul className="mt-4 space-y-2.5">
              {niveis.map((n) => (
                <li
                  key={n.nivel}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/60 px-3 py-3"
                >
                  <span className="w-20 shrink-0 rounded-xl bg-primary-soft px-2 py-1.5 text-center font-display text-[0.68rem] font-bold tracking-wide text-accent-foreground">
                    {n.nivel}
                  </span>
                  <Users className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="flex-1 text-sm text-muted-foreground">
                    {n.descricao}
                  </span>
                  <span className="whitespace-pre-line text-right font-display text-sm font-extrabold leading-tight text-primary">
                    {n.valor}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
              Valores referentes às comissões elegíveis conforme regras do
              programa.
            </p>
          </article>
        </div>

        <div className="surface-card mt-5 flex flex-col items-center gap-5 p-6 sm:flex-row sm:p-8">
          <ShieldCheck className="size-12 shrink-0 text-primary" aria-hidden="true" />
          <div className="flex-1 text-center sm:text-left">
            <p className="font-display text-base font-bold text-ink sm:text-lg">
              Comissões pagas de forma transparente e recorrente.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Acompanhe tudo pelo seu painel de associado.
            </p>
          </div>
          <span className="hidden h-14 w-px bg-border sm:block" />
          <MonitorSmartphone className="size-12 shrink-0 text-primary" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
