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
      { property: "og:title", content: "SmartVoz | Termos e Condições" },
      { property: "og:description", content: "Termos e Condições de Uso da plataforma SmartVoz." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
