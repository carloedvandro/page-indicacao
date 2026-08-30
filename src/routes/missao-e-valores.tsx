import { createFileRoute } from "@tanstack/react-router";
import { Eye, Handshake, Cpu, Scale, Users, TrendingUp } from "lucide-react";

import { SiteChrome } from "@/components/site/SiteChrome";
import { PageHeader } from "@/components/institutional/PageHeader";
import { ContentSection } from "@/components/institutional/ContentSection";

export const Route = createFileRoute("/missao-e-valores")({
  head: () => ({
    meta: [
      { title: "SmartVoz | Missão e Valores" },
      {
        name: "description",
        content:
          "Missão, visão e valores da SmartVoz: transparência, confiança, tecnologia, responsabilidade, relacionamento e evolução.",
      },
    ],
  }),
  component: MissaoValores,
});

const valores = [
  {
    icone: Eye,
    titulo: "Transparência",
    texto: "Mantemos regras, informações e processos apresentados de maneira clara.",
  },
  {
    icone: Handshake,
    titulo: "Confiança",
    texto: "Valorizamos relações duradouras entre empresa, clientes e parceiros.",
  },
  {
    icone: Cpu,
    titulo: "Tecnologia",
    texto: "Utilizamos soluções digitais para simplificar processos e melhorar a experiência.",
  },
  {
    icone: Scale,
    titulo: "Responsabilidade",
    texto: "Conduzimos nossas atividades com organização e respeito às normas aplicáveis.",
  },
  {
    icone: Users,
    titulo: "Relacionamento",
    texto: "Acreditamos que boas conexões são fundamentais para o crescimento sustentável.",
  },
  {
    icone: TrendingUp,
    titulo: "Evolução",
    texto: "Buscamos melhorar continuamente nossos serviços, processos e plataforma.",
  },
];

function MissaoValores() {
  return (
    <SiteChrome>
      <PageHeader eyebrow="INSTITUCIONAL" titulo="Missão e Valores" />

      <ContentSection titulo="Missão">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Conectar pessoas a serviços e oportunidades por meio de tecnologia, relacionamento e uma
          experiência digital simples, transparente e eficiente.
        </p>
      </ContentSection>

      <ContentSection titulo="Visão">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Construir uma empresa reconhecida pela qualidade do atendimento, confiança, inovação e
          capacidade de gerar valor para clientes e parceiros em todo o Brasil.
        </p>
      </ContentSection>

      <ContentSection titulo="Valores">
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {valores.map((v) => (
            <li
              key={v.titulo}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-soft"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                <v.icone className="size-5 text-primary" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-sm font-bold text-ink">
                  {v.titulo.toUpperCase()}
                </span>
                <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                  {v.texto}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </ContentSection>
    </SiteChrome>
  );
}
