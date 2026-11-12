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
      { property: "og:title", content: "SmartVoz Academy | Empreendedorismo" },
      { property: "og:description", content: "Desenvolva visão de negócio, organização e capacidade de execução." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
