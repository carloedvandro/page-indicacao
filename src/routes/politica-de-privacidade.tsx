import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";

import { SiteChrome } from "@/components/site/SiteChrome";
import { LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import { privacidade } from "@/lib/legal-documents";
import { smartvoz } from "@/lib/smartvoz";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "SmartVoz | Política de Privacidade" },
      {
        name: "description",
        content:
          "Política de Privacidade SmartVoz: privacidade, transparência e proteção das suas informações.",
      },
    ],
  }),
  component: PoliticaPrivacidade,
});

function PoliticaPrivacidade() {
  return (
    <SiteChrome>
      <LegalDocumentLayout documento={privacidade}>
        <a
          href={`mailto:${smartvoz.email}`}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-6 py-3 font-display text-sm font-extrabold tracking-wide text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
        >
          <Mail className="size-4" aria-hidden="true" />
          ENTRAR EM CONTATO
        </a>
      </LegalDocumentLayout>
    </SiteChrome>
  );
}
