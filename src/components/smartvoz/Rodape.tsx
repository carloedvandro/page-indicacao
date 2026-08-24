export function Rodape() {
  return (
    <footer className="waves-bg px-3 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="surface-card flex flex-col items-center justify-center gap-3 px-6 py-8 text-center sm:gap-4 sm:px-10 sm:py-10">
          <p className="font-display text-sm font-extrabold tracking-[0.06em] text-ink sm:text-base">
            SMARTVOZ
          </p>
          <p className="text-sm text-muted-foreground sm:text-base">
            CNPJ: <strong className="text-ink">66.856.703/0001-24</strong>
          </p>
          <p className="text-sm text-muted-foreground sm:text-base">
            © 2026 <strong className="text-primary">SmartVoz</strong>. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>

  );
}
