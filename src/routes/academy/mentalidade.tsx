import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { AcademyAreaPage } from "@/components/academy/AcademyAreaPage";
import { getAcademyAreaBySlug } from "@/lib/academy-content";

export const Route = createFileRoute("/academy/mentalidade")({
  head: () => ({
    meta: [
      { title: "SmartVoz Academy | Mentalidade" },
      {
        name: "description",
        content: "Construa comportamentos que sustentem aprendizado, disciplina e execução.",
      },
      { property: "og:title", content: "SmartVoz Academy | Mentalidade" },
      { property: "og:description", content: "Construa comportamentos que sustentem aprendizado, disciplina e execução." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MentalidadeRoute,
});

function MentalidadeRoute() {
  const area = getAcademyAreaBySlug("mentalidade");
  return (
    <SiteChrome>
      <AcademyAreaPage area={area} />
    </SiteChrome>
  );
}
