import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { AcademyAreaPage } from "@/components/academy/AcademyAreaPage";
import { academyAreas } from "@/lib/academy-content";

export const Route = createFileRoute("/academy/desenvolvimento-pessoal")({
  head: () => ({
    meta: [
      { title: "SmartVoz Academy | Desenvolvimento Pessoal" },
      {
        name: "description",
        content:
          "Desenvolva competências que melhoram sua vida profissional e seus relacionamentos.",
      },
    ],
  }),
  component: DesenvolvimentoPessoalRoute,
});

function DesenvolvimentoPessoalRoute() {
  const area = academyAreas[6];
  return (
    <SiteChrome>
      <AcademyAreaPage area={area} />
    </SiteChrome>
  );
}
