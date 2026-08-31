import { smartvoz } from "@/lib/smartvoz";

/**
 * Rodapé simplificado para páginas internas.
 *
 * Mostra apenas CNPJ e copyright, sem as colunas de navegação,
 * atendimento e redes sociais (que já estão no header e na home).
 */
export function SmartVozFooterSimples() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-screen-2xl px-5 py-6 sm:px-6">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-muted-foreground">CNPJ: {smartvoz.cnpj}</p>
          <p className="text-sm text-muted-foreground sm:mx-auto sm:-translate-x-1/2 sm:text-center">
            © 2026 SmartVoz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
