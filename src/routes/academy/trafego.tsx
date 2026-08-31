import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { AcademyAreaPage } from "@/components/academy/AcademyAreaPage";
import { academyAreas } from "@/lib/academy-content";

export const Route = createFileRoute("/academy/trafego")({
  head: () => ({
    meta: [
      { title: "SmartVoz Academy | Tráfego Pago e Orgânico" },
      {
        name: "description",
        content: "Entenda como atrair pessoas para suas páginas, conteúdos e ofertas.",
      },
    ],
  }),
  component: TrafegoRoute,
});

function TrafegoRoute() {
  const area = academyAreas[1];
  return (
    <SiteChrome>
      <AcademyAreaPage area={area} />
    </SiteChrome>
  );
}
