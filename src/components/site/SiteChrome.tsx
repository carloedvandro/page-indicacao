import type { ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";

import { Header } from "./Header";
import { SmartVozFooter } from "@/components/footer/SmartVozFooter";
import { SmartVozFooterSimples } from "@/components/footer/SmartVozFooterSimples";
import { BackToTop } from "./BackToTop";

/**
 * Estrutura compartilhada de todas as páginas do site.
 *
 * Envolve o header fixo, o conteúdo da página e o rodapé institucional.
 * A home usa o rodapé completo; as demais páginas usam o rodapé simples
 * (CNPJ + copyright).
 * Inclui o botão "Voltar ao topo" flutuante.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const ehHome = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {ehHome ? <SmartVozFooter /> : <SmartVozFooterSimples />}
      <BackToTop />
    </div>
  );
}
