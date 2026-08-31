import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { AcademyHome } from "@/components/academy/AcademyHome";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "SmartVoz | Academy" },
      {
        name: "description",
        content:
          "SmartVoz Academy: treinamentos, ferramentas e estratégias para desenvolver competências e transformar conhecimento em execução.",
      },
    ],
  }),
  component: AcademyRoute,
});

function AcademyRoute() {
  return (
    <SiteChrome>
      <AcademyHome />
    </SiteChrome>
  );
}
