import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { AcademyAreaPage } from "@/components/academy/AcademyAreaPage";
import { getAcademyAreaBySlug } from "@/lib/academy-content";

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
  const area = getAcademyAreaBySlug("marketing-digital");
  return (
    <SiteChrome>
      <AcademyAreaPage area={area} />
    </SiteChrome>
  );
}
