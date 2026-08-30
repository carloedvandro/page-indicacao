import type { ReactNode } from "react";

import { SiteHeader } from "./SiteHeader";
import { SmartVozFooter } from "@/components/footer/SmartVozFooter";
import { BackToTop } from "./BackToTop";

/**
 * Estrutura compartilhada das páginas internas.
 *
 * Envolve o header mínimo, o conteúdo da página e o rodapé institucional.
 * Inclui o botão "Voltar ao topo" flutuante.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SmartVozFooter />
      <BackToTop />
    </div>
  );
}
