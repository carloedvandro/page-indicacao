import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { AcademyAreaPage } from "@/components/academy/AcademyAreaPage";
import { getAcademyAreaBySlug } from "@/lib/academy-content";

export const Route = createFileRoute("/academy/vendas")({
  head: () => ({
    meta: [
      { title: "SmartVoz Academy | Vendas" },
      {
        name: "description",
        content: "Transforme atendimento improvisado em um processo comercial organizado.",
      },
    ],
  }),
  component: VendasRoute,
});

function VendasRoute() {
  const area = getAcademyAreaBySlug("vendas");
  return (
    <SiteChrome>
      <AcademyAreaPage area={area} />
    </SiteChrome>
  );
}
