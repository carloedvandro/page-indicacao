import { createFileRoute } from "@tanstack/react-router";
import { MonitorSmartphone, Headphones, Eye, ClipboardList, ShieldCheck } from "lucide-react";

import { SiteChrome } from "@/components/site/SiteChrome";
import { PageHeader } from "@/components/institutional/PageHeader";
import { ContentSection } from "@/components/institutional/ContentSection";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "SmartVoz | Quem Somos" },
      {
        name: "description",
        content:
          "Conheça a SmartVoz: uma empresa brasileira que conecta pessoas, tecnologia e oportunidades.",
      },
    ],
  }),
  component: QuemSomos,
});

function QuemSomos() {
  return (
    <SiteChrome>
      <PageHeader
        eyebrow="INSTITUCIONAL"
        titulo="Quem somos"
        subtitulo="Conectando pessoas, tecnologia e oportunidades."
      />

      <ContentSection
        paragrafos={[
          "A SmartVoz é uma empresa brasileira que conecta pessoas, tecnologia e oportunidades por meio de uma experiência digital simples, transparente e acessível.",
          "Nosso objetivo é criar um ambiente em que clientes e parceiros possam utilizar nossos serviços, compartilhar oportunidades e acompanhar suas indicações e benefícios de maneira organizada.",
          "A SmartVoz utiliza tecnologia para facilitar processos, centralizar informações e proporcionar mais autonomia aos seus usuários.",
          "Trabalhamos com foco em relacionamento de longo prazo, clareza nas informações, segurança e evolução contínua da experiência oferecida aos nossos clientes e parceiros.",
          "Acreditamos que boas conexões podem gerar valor quando são construídas com responsabilidade, transparência e relacionamento.",
        ]}
        destaques={[
          { icone: MonitorSmartphone, texto: "Experiência digital" },
          { icone: Headphones, texto: "Atendimento e suporte" },
          { icone: Eye, texto: "Acompanhamento pelo sistema" },
          { icone: ClipboardList, texto: "Programa de indicação com regras claras" },
          { icone: ShieldCheck, texto: "Segurança e transparência" },
        ]}
      />
    </SiteChrome>
  );
}
