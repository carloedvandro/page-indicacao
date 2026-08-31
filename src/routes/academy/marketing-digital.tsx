import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { AcademyAreaPage } from "@/components/academy/AcademyAreaPage";
import { academyAreas } from "@/lib/academy-content";

export const Route = createFileRoute("/academy/marketing-digital")({
  head: () => ({
    meta: [
      { title: "SmartVoz Academy | Marketing Digital" },
      {
        name: "description",
        content:
          "Aprenda a construir presença, posicionamento e relacionamento no ambiente digital.",
      },
    ],
  }),
  component: MarketingDigitalRoute,
});

function MarketingDigitalRoute() {
  const area = academyAreas[0];
  return (
    <SiteChrome>
      <AcademyAreaPage area={area} />
    </SiteChrome>
  );
}
