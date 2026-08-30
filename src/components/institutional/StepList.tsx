type Passo = {
  numero: string;
  titulo: string;
  descricao: string;
};

type StepListProps = {
  passos: Passo[];
  /** Aviso final exibido abaixo da lista. */
  aviso?: string;
};

/**
 * Lista numerada de passos (01, 02, ...).
 *
 * Desktop: duas colunas. Mobile: uma coluna. Sem carrossel.
 */
export function StepList({ passos, aviso }: StepListProps) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-8 sm:px-6 sm:py-10">
      <ol className="grid gap-5 lg:grid-cols-2">
        {passos.map((p) => (
          <li key={p.numero} className="surface-card flex gap-4 p-5 sm:p-6">
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary font-display text-lg font-extrabold text-primary-foreground shadow-glow"
              aria-hidden="true"
            >
              {p.numero}
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-base font-bold text-ink sm:text-lg">{p.titulo}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {p.descricao}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {aviso ? (
        <p className="mx-auto mt-8 max-w-2xl rounded-xl border border-border bg-primary-soft/60 px-5 py-4 text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          {aviso}
        </p>
      ) : null}
    </section>
  );
}
