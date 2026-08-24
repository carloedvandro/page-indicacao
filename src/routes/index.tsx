import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/smartvoz/Hero";
import { Depoimentos } from "@/components/smartvoz/Depoimentos";
import { ComoGanha } from "@/components/smartvoz/ComoGanha";
import { Multiplicacao } from "@/components/smartvoz/Multiplicacao";
import { Planos } from "@/components/smartvoz/Planos";
import { Faq } from "@/components/smartvoz/Faq";
import { Rodape } from "@/components/smartvoz/Rodape";

const titulo = "SmartVoz Associação | O Poder da Recorrência";
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
    <main>
      <Hero />
      <Depoimentos />
      <ComoGanha />
      <Multiplicacao />
      <Planos />
      <Faq />
      <Rodape />
    </main>
  );
}
