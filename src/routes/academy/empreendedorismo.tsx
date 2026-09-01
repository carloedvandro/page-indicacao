import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { AcademyAreaPage } from "@/components/academy/AcademyAreaPage";
import { getAcademyAreaBySlug } from "@/lib/academy-content";

export const Route = createFileRoute("/academy/empreendedorismo")({
  head: () => ({
    meta: [
      { title: "SmartVoz Academy | Empreendedorismo" },
      {
        name: "description",
        content: "Desenvolva visão de negócio, organização e capacidade de execução.",
      },
    ],
  }),
  component: EmpreendedorismoRoute,
});

function EmpreendedorismoRoute() {
  const area = getAcademyAreaBySlug("empreendedorismo");
  return (
    <SiteChrome>
      <AcademyAreaPage area={area} />
    </SiteChrome>
  );
}
