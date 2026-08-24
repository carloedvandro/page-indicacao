import { Logo } from "./Logo";

export function Rodape() {
  return (
    <footer className="waves-bg px-3 pb-5 pt-2 sm:px-6 sm:pb-6 sm:pt-3">
      <div className="mx-auto max-w-7xl">
        <div className="surface-card flex flex-col items-center justify-center gap-2 px-4 py-5 text-center sm:gap-3 sm:px-8 sm:py-6">
          <Logo className="h-10 sm:h-14 lg:h-16" />
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
