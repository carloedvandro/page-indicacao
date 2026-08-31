import type { ReactNode } from "react";

import { Header } from "./Header";
import { SmartVozFooter } from "@/components/footer/SmartVozFooter";
import { BackToTop } from "./BackToTop";

/**
 * Estrutura compartilhada de todas as páginas do site.
 *
 * Envolve o header fixo, o conteúdo da página e o rodapé institucional.
 * Inclui o botão "Voltar ao topo" flutuante.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <SmartVozFooter />
      <BackToTop />
    </div>
  );
}
