import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { VideoHeroSection } from "@/components/hero/VideoHeroSection";
import { Depoimentos } from "@/components/smartvoz/Depoimentos";
import { ComoGanha } from "@/components/smartvoz/ComoGanha";
import { Multiplicacao } from "@/components/smartvoz/Multiplicacao";
import { Planos } from "@/components/smartvoz/Planos";
import { HeroCta } from "@/components/hero/HeroCta";
import { Faq } from "@/components/smartvoz/Faq";

const titulo = "SmartVoz | O Poder da Recorrência e da Multiplicação";
const descricao =
  "Indique, construa sua carteira e receba comissões todos os meses: R$ 50 na adesão, R$ 20/mês de recorrência e rede de até 5 níveis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PaginaOficial,
});

function PaginaOficial() {
  return (
    <SiteChrome>
      <VideoHeroSection />
      <Depoimentos />
      <ComoGanha />
      <Multiplicacao />
      <Planos />
      <section className="waves-bg px-4 pb-2 pt-2 sm:px-5 sm:pb-3 sm:pt-4 lg:px-8 lg:pb-4 lg:pt-6">
        <HeroCta />
      </section>
      <Faq />
    </SiteChrome>
  );
}
