import { createFileRoute } from "@tanstack/react-router";

import { SiteChrome } from "@/components/site/SiteChrome";
import { PageHeader } from "@/components/institutional/PageHeader";
import { StepList } from "@/components/institutional/StepList";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "SmartVoz | Como Funciona" },
      {
        name: "description",
        content:
          "Entenda como funciona a SmartVoz: do cadastro ao acompanhamento das suas indicações e benefícios.",
      },
    ],
  }),
  component: ComoFunciona,
});

const passos = [
  {
    numero: "01",
    titulo: "Faça seu cadastro",
    descricao: "Crie sua conta e preencha corretamente as informações solicitadas.",
  },
  {
    numero: "02",
    titulo: "Conheça as opções disponíveis",
    descricao: "Consulte os serviços, condições, valores e benefícios disponíveis na plataforma.",
  },
  {
    numero: "03",
    titulo: "Faça sua contratação",
    descricao:
      "Escolha a opção desejada, confira todas as condições e conclua o processo pelo ambiente SmartVoz.",
  },
  {
    numero: "04",
    titulo: "Compartilhe sua indicação",
    descricao:
      "Usuários elegíveis podem utilizar seu link ou código individual para apresentar a SmartVoz a outras pessoas.",
  },
  {
    numero: "05",
    titulo: "Acompanhe suas informações",
    descricao:
      "Pelo painel é possível consultar indicações, movimentações, benefícios e demais informações relacionadas à sua conta.",
  },
  {
    numero: "06",
    titulo: "Receba benefícios elegíveis",
    descricao:
      "Quando uma indicação atender às regras estabelecidas pelo programa, os respectivos benefícios ou comissões poderão ser disponibilizados de acordo com o regulamento vigente.",
  },
];

const aviso =
  "Valores, condições, benefícios e critérios de elegibilidade estão sujeitos às regras vigentes da SmartVoz e ao Regulamento do Programa.";

function ComoFunciona() {
  return (
    <SiteChrome>
      <PageHeader
        eyebrow="INSTITUCIONAL"
        titulo="Como funciona a SmartVoz"
        subtitulo="A SmartVoz foi desenvolvida para oferecer uma experiência simples desde o cadastro até o acompanhamento dos serviços e indicações."
      />

      <StepList passos={passos} aviso={aviso} />
    </SiteChrome>
  );
}
