import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import { termos } from "@/lib/legal-documents";

export const Route = createFileRoute("/termos-e-condicoes")({
  head: () => ({
    meta: [
      { title: "SmartVoz | Termos e Condições" },
      {
        name: "description",
        content: "Termos e Condições de Uso da plataforma SmartVoz.",
      },
    ],
  }),
  component: TermosCondicoes,
});

function TermosCondicoes() {
  return (
    <SiteChrome>
      <LegalDocumentLayout documento={termos} />
    </SiteChrome>
  );
}
