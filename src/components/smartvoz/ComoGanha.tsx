import {
  CircleDollarSign,
  User,
  RefreshCcw,
  CalendarClock,
  Infinity as InfinityIcon,
  ShieldCheck,
  MonitorSmartphone,
  Users,
  Plus,
  Handshake,
} from "lucide-react";

const niveis = [
  { nivel: "NÍVEL 1", descricao: "Suas indicações diretas", valor: "R$ 50,00\n+ R$ 20,00/mês" },
  { nivel: "NÍVEL 2", descricao: "Rede do 2º nível", valor: "R$ 5,00" },
  { nivel: "NÍVEL 3", descricao: "Rede do 3º nível", valor: "R$ 5,00" },
  { nivel: "NÍVEL 4", descricao: "Rede do 4º nível", valor: "R$ 5,00" },
  { nivel: "NÍVEL 5", descricao: "Rede do 5º nível", valor: "R$ 5,00" },
];

export function ComoGanha() {
  return (
    <section className="waves-bg px-3 pb-6 pt-2 sm:px-6 lg:pb-10 lg:pt-4">
      <div className="mx-auto max-w-screen-2xl">
        <div className="text-center">
          <p className="eyebrow-pill">
            <CircleDollarSign className="size-4 text-primary" aria-hidden="true" />
            <span className="text-primary">SIMPLES. JUSTO. RECORRENTE.</span>
          </p>
          <h2 className="mx-auto mt-6 text-[2rem] font-extrabold leading-[1.08] text-ink sm:text-5xl">
            Como você ganha com o Poder da{" "}
            <span className="text-primary">Recorrência.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Indique. Construa sua carteira. Receba comissões todos os meses.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
          <div className="relative grid items-stretch gap-10 sm:grid-cols-2 sm:gap-6">
            <article className="flex h-full flex-col items-center justify-between p-2 text-center sm:p-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-5 py-2 font-display text-[0.7rem] font-bold tracking-[0.14em] text-accent-foreground">
                  <User className="size-4" aria-hidden="true" />
                  NA ADESÃO
                </span>
                <p className="mt-5 whitespace-nowrap font-display text-[2.5rem] font-extrabold tracking-tight text-primary lg:text-[3rem]">
                  R$ 50,00
                </p>
              </div>
              <span className="my-5 block h-px w-full max-w-xs bg-border" />
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Você recebe <strong className="text-primary">R$ 50,00</strong>{" "}
                quando sua indicação direta realizar a adesão.
              </p>
              <span className="mx-auto mt-6 flex size-20 items-center justify-center rounded-full bg-primary-soft">
                <Handshake className="size-10 text-primary" aria-hidden="true" />
              </span>
            </article>

            <span className="absolute left-1/2 top-1/2 z-10 hidden size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card shadow-card sm:flex">
              <Plus className="size-5 text-primary" aria-hidden="true" />
            </span>

            <article className="flex h-full flex-col items-center justify-between p-2 text-center sm:p-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-5 py-2 font-display text-[0.7rem] font-bold tracking-[0.14em] text-accent-foreground">
                  <RefreshCcw className="size-4" aria-hidden="true" />
                  RECORRÊNCIA MENSAL
                </span>
                <p className="mt-5 whitespace-nowrap font-display text-[2.5rem] font-extrabold tracking-tight text-primary lg:text-[3rem]">
                  R$ 20,00
                  <span className="align-baseline text-xl font-bold">/mês</span>
                </p>
              </div>
              <span className="my-5 block h-px w-full max-w-xs bg-border" />
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Você recebe <strong className="text-primary">R$ 20,00</strong>{" "}
                todo mês enquanto seu cliente direto permanecer ativo e
                elegível.
              </p>
              <span className="mx-auto mt-6 flex size-20 items-center justify-center rounded-full bg-primary-soft">
                <CalendarClock className="size-10 text-primary" aria-hidden="true" />
              </span>
            </article>
          </div>

          <article className="p-2 sm:p-4">
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

            <ul className="mt-6 space-y-1">
              {niveis.map((n) => (
                <li
                  key={n.nivel}
                  className="grid grid-cols-[4.5rem_1.5rem_minmax(0,1fr)_auto] items-center gap-2.5 py-2.5"
                >
                  <span className="rounded-full bg-primary-soft px-2 py-1.5 text-center font-display text-[0.62rem] font-bold tracking-wide text-accent-foreground">
                    {n.nivel}
                  </span>
                  <Users className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0 text-[0.82rem] leading-tight text-muted-foreground">
                    {n.descricao}
                  </span>
                  <span className="whitespace-pre-line text-right font-display text-[0.8rem] font-extrabold leading-tight tabular-nums text-primary">
                    {n.valor}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
              Valores referentes às comissões elegíveis conforme regras do
              programa.
            </p>
          </article>
        </div>

        <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-stretch lg:justify-between">
          <div className="flex items-center gap-4 px-2 sm:px-4 lg:flex-1">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
              <InfinityIcon
                className="size-7 text-primary-foreground"
                aria-hidden="true"
              />
            </span>
            <p className="max-w-md font-display text-sm font-bold leading-snug text-ink sm:text-base">
              Uma única indicação pode gerar comissões na adesão e continuar
              gerando <span className="text-primary">todos os meses</span>.
            </p>
          </div>

          <div className="flex items-center gap-5 px-2 sm:px-4 lg:flex-1">
            <ShieldCheck className="size-12 shrink-0 text-primary" aria-hidden="true" />
            <div className="flex-1 text-left">
              <p className="font-display text-base font-bold text-ink sm:text-lg">
                Comissões pagas de forma transparente e recorrente.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Acompanhe tudo pelo seu escritório virtual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
