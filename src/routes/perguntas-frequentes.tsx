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
      { property: "og:title", content: "SmartVoz | Perguntas Frequentes" },
      { property: "og:description", content: "Encontre rapidamente respostas sobre a SmartVoz: conta, cadastro, indicações, comissões e suporte." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
