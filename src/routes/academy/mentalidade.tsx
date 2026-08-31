import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { AcademyAreaPage } from "@/components/academy/AcademyAreaPage";
import { academyAreas } from "@/lib/academy-content";

export const Route = createFileRoute("/academy/mentalidade")({
  head: () => ({
    meta: [
      { title: "SmartVoz Academy | Mentalidade" },
      {
        name: "description",
        content: "Construa comportamentos que sustentem aprendizado, disciplina e execução.",
      },
    ],
  }),
  component: MentalidadeRoute,
});

function MentalidadeRoute() {
  const area = academyAreas[5];
  return (
    <SiteChrome>
      <AcademyAreaPage area={area} />
    </SiteChrome>
  );
}
