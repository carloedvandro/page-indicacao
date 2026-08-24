import { smartvoz } from "@/lib/smartvoz";

export function Rodape() {
  return (
    <footer className="waves-bg px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="surface-card flex flex-col items-center justify-center gap-4 px-6 py-8 text-center sm:px-10 sm:py-10">
          <p className="font-display text-sm font-extrabold tracking-[0.06em] text-ink sm:text-base">
            SMARTVOZ
          </p>
          <p className="text-sm text-muted-foreground sm:text-base">
            CNPJ:{" "}
            <strong className="text-ink">66.856.703/0001-24</strong>
          </p>
          <p className="text-sm text-muted-foreground sm:text-base">
            © 2026 <strong className="text-primary">SmartVoz</strong>. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
