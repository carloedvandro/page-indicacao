import { createFileRoute } from "@tanstack/react-router";
import {
  User,
  Wallet,
  FileText,
  Search,
  ArrowRight,
  QrCode,
  Receipt,
  CheckCircle2,
  Clock,
  AlertCircle,
  Loader2,
  ChevronRight,
} from "lucide-react";

import { SiteChrome } from "@/components/site/SiteChrome";
import { PageHeader } from "@/components/institutional/PageHeader";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/ajuda/segunda-via")({
  head: () => ({
    meta: [
      { title: "SmartVoz | 2ª via de fatura" },
      {
        name: "description",
        content:
          "Consulte sua 2ª via de fatura SmartVoz de forma rápida, simples e segura pelo Escritório Virtual.",
      },
    ],
  }),
  component: SegundaViaFatura,
});

const passos = [
  {
    numero: "01",
    titulo: "Acesse o Escritório Virtual",
    texto: "Entre na sua conta SmartVoz utilizando seus dados de acesso.",
    icone: User,
  },
  {
    numero: "02",
    titulo: "Abra o menu Financeiro",
    texto: "No Escritório Virtual, acesse a área Financeiro.",
    icone: Wallet,
  },
  {
    numero: "03",
    titulo: "Selecione Minha Fatura",
    texto: "Consulte a cobrança atual ou escolha uma fatura anterior no histórico.",
    icone: FileText,
  },
  {
    numero: "04",
    titulo: "Visualize os detalhes",
    texto: "Confira valor, vencimento, período, situação e formas de pagamento disponíveis.",
    icone: Search,
  },
];

const informacoesDisponiveis = [
  "Plano contratado",
  "Período da cobrança",
  "Data de vencimento",
  "Valor da mensalidade",
  "Valor proporcional, quando aplicável",
  "Descontos ou ajustes, quando existirem",
  "Valor total",
  "Situação da fatura",
  "Forma de pagamento",
  "Data do pagamento",
  "Comprovante, quando disponível",
];

const faqItens = [
  {
    pergunta: "Como acessar minha 2ª via?",
    resposta:
      "Faça login no Escritório Virtual SmartVoz, acesse Financeiro e selecione Minha Fatura. Você poderá consultar a cobrança atual e o histórico.",
  },
  {
    pergunta: "Posso consultar uma fatura antiga?",
    resposta:
      "Sim. Acesse o Histórico de Faturas para visualizar cobranças anteriores disponíveis na sua conta.",
  },
  {
    pergunta: "Como pagar minha fatura?",
    resposta:
      "Abra a cobrança pendente e consulte as formas de pagamento disponibilizadas para aquela fatura.",
  },
  {
    pergunta: "Como pagar com Pix?",
    resposta:
      'Se a opção estiver disponível, abra a fatura e selecione "Pagar com Pix". Utilize o QR Code ou Pix Copia e Cola gerado pelo sistema.',
  },
  {
    pergunta: "Minha fatura já foi paga. Onde vejo o comprovante?",
    resposta: 'Abra a fatura com status Pago e selecione "Ver comprovante".',
  },
  {
    pergunta: "Posso usar o saldo do Escritório Virtual?",
    resposta:
      "Quando essa funcionalidade estiver disponível e houver saldo elegível, o sistema poderá utilizar o saldo do Escritório Virtual conforme as regras da sua conta.",
  },
  {
    pergunta: "Não encontrei minha fatura. O que faço?",
    resposta:
      "Confirme se você está acessando a conta correta. Caso a cobrança ainda não apareça, entre em contato com o atendimento SmartVoz.",
  },
];

const relacionados = [
  {
    titulo: "Entenda sua fatura",
    descricao: "Conheça cada informação apresentada na sua cobrança.",
  },
  {
    titulo: "Pagamentos",
    descricao: "Veja as formas disponíveis para pagamento.",
  },
  {
    titulo: "Fatura Digital",
    descricao: "Saiba como acompanhar suas cobranças digitalmente.",
  },
  {
    titulo: "Débito Automático",
    descricao:
      "Entenda como funciona o pagamento automático utilizando o saldo do Escritório Virtual.",
  },
];

function SegundaViaFatura() {
  return (
    <SiteChrome>
      {/* Cabeçalho */}
      <PageHeader
        eyebrow="AJUDA · MINHA FATURA"
        titulo="2ª via de fatura SmartVoz"
        subtitulo="Consulte sua fatura de forma rápida, simples e segura."
      />

      {/* Texto + botões */}
      <section className="mx-auto max-w-3xl px-5 py-8 text-center sm:px-6 sm:py-10">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Precisa consultar novamente sua cobrança?
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Pelo Escritório Virtual SmartVoz você pode visualizar sua fatura atual, consultar
          cobranças anteriores, verificar o vencimento, acompanhar o pagamento e acessar seus
          comprovantes.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-display text-sm font-extrabold tracking-wide text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
          >
            VISUALIZAR MINHA FATURA
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-display text-sm font-bold tracking-wide text-ink shadow-soft transition-colors hover:bg-primary-soft hover:text-primary sm:w-auto"
          >
            VER HISTÓRICO DE FATURAS
          </button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Ao clicar, você será direcionado para o Escritório Virtual SmartVoz.
        </p>
      </section>

      {/* Como acessar — passo a passo */}
      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-12">
        <h2 className="text-center font-display text-2xl font-bold text-ink sm:text-3xl">
          Como acessar sua 2ª via
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((passo) => (
            <div key={passo.numero} className="surface-card flex flex-col gap-3 p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft">
                  <passo.icone className="size-6 text-primary" aria-hidden="true" />
                </span>
                <span className="font-display text-2xl font-extrabold text-primary/30">
                  {passo.numero}
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-ink">{passo.titulo}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{passo.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Informações disponíveis */}
      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-12">
        <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
          Informações disponíveis na sua fatura
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {informacoesDisponiveis.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-lg border border-border bg-card px-3.5 py-2.5 shadow-soft"
            >
              <ChevronRight className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm leading-snug text-ink sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          As informações são exibidas conforme os dados disponíveis na sua conta.
        </p>
      </section>

      {/* Pagamento da fatura */}
      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-12">
        <div className="surface-card p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
              <Receipt className="size-5 text-primary" aria-hidden="true" />
            </span>
            <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
              Precisa pagar sua fatura?
            </h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Quando houver uma cobrança pendente, você poderá consultar as formas de pagamento
            disponíveis diretamente na sua fatura.
          </p>

          {/* Botão Pix */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 font-display text-sm font-bold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              <QrCode className="size-4" aria-hidden="true" />
              PAGAR COM PIX
            </button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            O QR Code e o código Pix são gerados pelo sistema financeiro no momento da cobrança.
          </p>
        </div>
      </section>

      {/* Saldo do Escritório Virtual + Débito Automático */}
      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Saldo SmartVoz */}
          <div className="surface-card p-6">
            <h3 className="font-display text-base font-bold text-ink">
              Pagamento com saldo SmartVoz
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Sua mensalidade também poderá ser quitada utilizando saldo elegível disponível no
              Escritório Virtual, conforme as regras da sua conta.
            </p>
          </div>

          {/* Débito Automático */}
          <div className="surface-card p-6">
            <div className="flex items-center gap-2">
              <h3 className="font-display text-base font-bold text-ink">Débito Automático</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-bold text-primary">
                <CheckCircle2 className="size-3.5" aria-hidden="true" />
                ATIVADO
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              O Débito Automático SmartVoz utiliza o saldo do Escritório Virtual. Não é débito em
              conta bancária.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Próximo débito:</span>
                <span className="font-medium text-ink">—</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Valor previsto:</span>
                <span className="font-medium text-ink">—</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saldo reservado:</span>
                <span className="font-medium text-ink">—</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Histórico de faturas */}
      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-12">
        <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
          Histórico de faturas
        </h2>

        {/* Desktop — tabela */}
        <div className="mt-6 hidden overflow-hidden rounded-xl border border-border bg-card shadow-soft sm:block">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-left">
                <th className="px-4 py-3 font-bold text-ink">Referência</th>
                <th className="px-4 py-3 font-bold text-ink">Vencimento</th>
                <th className="px-4 py-3 font-bold text-ink">Valor</th>
                <th className="px-4 py-3 font-bold text-ink">Status</th>
                <th className="px-4 py-3 font-bold text-ink">Forma de pagamento</th>
                <th className="px-4 py-3 font-bold text-ink">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-muted-foreground">
                  Você ainda não possui faturas anteriores disponíveis.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile — mensagem */}
        <div className="mt-6 rounded-xl border border-border bg-card p-5 text-center shadow-soft sm:hidden">
          <p className="text-sm text-muted-foreground">
            Você ainda não possui faturas anteriores disponíveis.
          </p>
        </div>

        {/* Legenda de status */}
        <div className="mt-6 flex flex-wrap gap-3">
          <StatusLegenda icone={CheckCircle2} label="Pago" cor="text-primary" />
          <StatusLegenda icone={Clock} label="Pendente" cor="text-amber-500" />
          <StatusLegenda icone={AlertCircle} label="Vencido" cor="text-red-500" />
          <StatusLegenda icone={Loader2} label="Processando" cor="text-blue-500" />
        </div>
      </section>

      {/* Exemplos de status de fatura */}
      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-12">
        <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">Situações da fatura</h2>
        <div className="mt-6 grid gap-5">
          {/* Pago */}
          <div className="surface-card p-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary">
                <CheckCircle2 className="size-4" aria-hidden="true" />
                PAGO
              </span>
            </div>
            <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              <Campo label="Valor pago" />
              <Campo label="Data" />
              <Campo label="Hora" />
              <Campo label="Forma de pagamento" />
            </div>
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-ink shadow-soft transition-colors hover:bg-primary-soft hover:text-primary"
            >
              VER COMPROVANTE
            </button>
          </div>

          {/* Pendente */}
          <div className="surface-card p-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-600">
                <Clock className="size-4" aria-hidden="true" />
                AGUARDANDO PAGAMENTO
              </span>
            </div>
            <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              <Campo label="Valor" />
              <Campo label="Vencimento" />
              <Campo label="Forma de pagamento disponível" />
            </div>
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              PAGAR FATURA
            </button>
          </div>

          {/* Vencido */}
          <div className="surface-card p-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
                <AlertCircle className="size-4" aria-hidden="true" />
                FATURA VENCIDA
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Esta cobrança está após a data de vencimento. Consulte as opções disponíveis para
              regularização.
            </p>
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-ink shadow-soft transition-colors hover:bg-primary-soft hover:text-primary"
            >
              VER OPÇÕES DE PAGAMENTO
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-12">
        <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">Tire suas dúvidas</h2>
        <Accordion type="single" collapsible className="mt-6 space-y-3">
          {faqItens.map((item, i) => (
            <AccordionItem
              key={item.pergunta}
              value={`faq-${i}`}
              className="surface-card border-b-0 px-5 sm:px-6"
            >
              <AccordionTrigger className="font-display text-base font-bold text-ink hover:no-underline">
                {item.pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {item.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Conteúdos relacionados */}
      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-12">
        <h2 className="text-center font-display text-xl font-bold text-ink sm:text-2xl">
          Você também pode se interessar por
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {relacionados.map((item) => (
            <div key={item.titulo} className="surface-card flex flex-col gap-3 p-5">
              <h3 className="font-display text-base font-bold text-ink">{item.titulo}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.descricao}</p>
              <button
                type="button"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary/80"
              >
                ACESSAR
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}

function StatusLegenda({
  icone: Icone,
  label,
  cor,
}: {
  icone: React.ComponentType<{ className?: string }>;
  label: string;
  cor: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
      <Icone className={`size-4 ${cor}`} aria-hidden="true" />
      {label}
    </span>
  );
}

function Campo({ label }: { label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <span className="mt-0.5 font-medium text-ink">—</span>
    </div>
  );
}
