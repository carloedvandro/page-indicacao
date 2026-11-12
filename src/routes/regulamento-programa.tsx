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
      { property: "og:title", content: "SmartVoz | Regulamento do Programa" },
      { property: "og:description", content: "Regulamento do Programa de Indicação SmartVoz: critérios de elegibilidade, indicações, formação da rede, benefícios e comissões." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
