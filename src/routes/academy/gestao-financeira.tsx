import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { AcademyAreaPage } from "@/components/academy/AcademyAreaPage";
import { getAcademyAreaBySlug } from "@/lib/academy-content";

export const Route = createFileRoute("/academy/gestao-financeira")({
  head: () => ({
    meta: [
      { title: "SmartVoz Academy | Gestão Financeira" },
      {
        name: "description",
        content: "Organize os números para tomar decisões com mais clareza.",
      },
    ],
  }),
  component: GestaoFinanceiraRoute,
});

function GestaoFinanceiraRoute() {
  const area = getAcademyAreaBySlug("gestao-financeira");
  return (
    <SiteChrome>
      <AcademyAreaPage area={area} />
    </SiteChrome>
  );
}
