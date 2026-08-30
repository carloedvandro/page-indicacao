import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import { regulamento } from "@/lib/legal-documents";

export const Route = createFileRoute("/regulamento-programa")({
  head: () => ({
    meta: [
      { title: "SmartVoz | Regulamento do Programa" },
      {
        name: "description",
        content:
          "Regulamento do Programa de Indicação SmartVoz: critérios de elegibilidade, indicações, formação da rede, benefícios e comissões.",
      },
    ],
  }),
  component: RegulamentoPrograma,
});

function RegulamentoPrograma() {
  return (
    <SiteChrome>
      <LegalDocumentLayout documento={regulamento} />
    </SiteChrome>
  );
}
