import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { PageHeader } from "@/components/institutional/PageHeader";
import { FAQAccordion } from "@/components/help/FAQAccordion";

export const Route = createFileRoute("/perguntas-frequentes")({
  head: () => ({
    meta: [
      { title: "SmartVoz | Perguntas Frequentes" },
      {
        name: "description",
        content:
          "Encontre rapidamente respostas sobre a SmartVoz: conta, cadastro, indicações, comissões e suporte.",
      },
    ],
  }),
  component: PerguntasFrequentes,
});

function PerguntasFrequentes() {
  return (
    <SiteChrome>
      <PageHeader
        eyebrow="DÚVIDAS FREQUENTES"
        titulo="Perguntas Frequentes"
        subtitulo="Encontre rapidamente respostas sobre a SmartVoz."
      />
      <FAQAccordion />
    </SiteChrome>
  );
}
