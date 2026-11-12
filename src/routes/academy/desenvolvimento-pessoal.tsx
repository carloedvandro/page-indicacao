import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { AcademyAreaPage } from "@/components/academy/AcademyAreaPage";
import { getAcademyAreaBySlug } from "@/lib/academy-content";

export const Route = createFileRoute("/academy/desenvolvimento-pessoal")({
  head: () => ({
    meta: [
      { title: "SmartVoz Academy | Desenvolvimento Pessoal" },
      {
        name: "description",
        content:
          "Desenvolva competências que melhoram sua vida profissional e seus relacionamentos.",
      },
      { property: "og:title", content: "SmartVoz Academy | Desenvolvimento Pessoal" },
      { property: "og:description", content: "Desenvolva competências que melhoram sua vida profissional e seus relacionamentos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesenvolvimentoPessoalRoute,
});

function DesenvolvimentoPessoalRoute() {
  const area = getAcademyAreaBySlug("desenvolvimento-pessoal");
  return (
    <SiteChrome>
      <AcademyAreaPage area={area} />
    </SiteChrome>
  );
}
