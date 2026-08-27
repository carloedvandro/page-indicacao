import {
  Globe,
  Headphones,
  Instagram,
  Lock,
  Mail,
  MessageCircle,
  ShieldCheck,
  Users,
  Youtube,
  Facebook,
  Music2,
  BadgeCheck,
  Heart,
  Settings,
  FileText,
  Shield,
  ClipboardList,
  TrendingUp,
  HelpCircle,
  LifeBuoy,
  BookOpen,
  Eye,
  Activity,
} from "lucide-react";

import { Logo } from "./Logo";
import { smartvoz } from "@/lib/smartvoz";

const colunas = [
  {
    titulo: "INSTITUCIONAL",
    itens: [
      { label: "Quem somos", icone: Users },
      { label: "Missão e Valores", icone: Heart },
      { label: "Como funciona", icone: Settings },
      { label: "Fale conosco", icone: MessageCircle },
    ],
  },
  {
    titulo: "INFORMAÇÕES",
    itens: [
      { label: "Termos e Condições", icone: FileText },
      { label: "Política de Privacidade", icone: Shield },
      { label: "Regulamento do Programa", icone: ClipboardList },
      { label: "Plano de Carreira", icone: TrendingUp },
      { label: "Perguntas Frequentes", icone: HelpCircle },
    ],
  },
  {
    titulo: "SUPORTE",
    itens: [
      { label: "Central de Ajuda", icone: LifeBuoy },
      { label: "Tutoriais e Guias", icone: BookOpen },
      { label: "Acompanhamento", icone: Eye },
      { label: "Status do Sistema", icone: Activity },
      { label: "Atendimento", icone: Headphones },
    ],
  },
];

const atendimento = [
  {
    icone: MessageCircle,
    titulo: "WhatsApp",
    valor: smartvoz.whatsappExibicao,
  },
  { icone: Mail, titulo: "E-mail", valor: smartvoz.email },
  {
    icone: Headphones,
    titulo: "Horário de Atendimento",
    valor: smartvoz.horario,
  },
];

const redes = [
  { icone: Instagram, nome: "Instagram" },
  { icone: Youtube, nome: "YouTube" },
  { icone: Facebook, nome: "Facebook" },
  { icone: Music2, nome: "TikTok" },
];

const selos = [
  { icone: ShieldCheck, texto: "Ambiente seguro e 100% online" },
  { icone: Lock, texto: "Seus dados protegidos e confidenciais" },
  { icone: BadgeCheck, texto: "Programa transparente e em conformidade" },
  { icone: Users, texto: "Milhares de pessoas conectadas em todo o Brasil" },
];

export function Rodape() {
  return (
    <footer className="waves-bg px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-8 px-1 py-3 sm:px-2 sm:py-4 lg:grid-cols-[1.15fr_repeat(3,0.75fr)_1fr]">
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <Logo className="h-12 sm:h-16 lg:h-16" />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
              Conectamos pessoas a oportunidades reais de{" "}
              <span className="font-semibold text-primary">
                gerar renda recorrente
              </span>{" "}
              através de indicações inteligentes.
            </p>
            <span className="h-px w-full bg-border" />
            <div className="flex w-full flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left lg:items-start lg:text-left">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary-soft">
                <ShieldCheck className="size-6 text-primary" aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Empresa regularizada, seguindo todas as normas e diretrizes do
                programa e da legislação vigente.
              </p>
            </div>
            <p className="text-sm text-muted-foreground sm:text-base">
              CNPJ: <strong className="text-ink">66.856.703/0001-24</strong>
            </p>
          </div>

          {colunas.map((coluna) => (
            <nav
              key={coluna.titulo}
              className="text-left"
              aria-label={coluna.titulo}
            >
              <h3 className="font-display text-sm font-bold tracking-wide text-ink">
                {coluna.titulo}
              </h3>
              <span className="mt-2 block h-0.5 w-10 bg-primary" />
              <ul className="mt-4 flex w-full flex-col items-start gap-3 text-left">
                {coluna.itens.map((item) => (
                  <li key={item.label}>
                    <span className="inline-flex items-center gap-3 text-base text-muted-foreground transition-colors hover:text-primary">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft">
                        <item.icone className="size-4 text-primary" aria-hidden="true" />
                      </span>
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="text-left">
            <h3 className="font-display text-sm font-bold tracking-wide text-ink">
              ATENDIMENTO
            </h3>
            <span className="mt-2 block h-0.5 w-10 bg-primary" />
            <ul className="mt-4 grid w-full gap-4 text-left">
              {atendimento.map((a) => (
                <li
                  key={a.titulo}
                  className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
                    <a.icone className="size-5 text-primary" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block text-base font-bold text-ink">
                      {a.titulo}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {a.valor}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="mt-7 text-center font-display text-sm font-bold tracking-wide text-ink lg:text-left">
              SIGA NOSSAS REDES
            </h3>
            <span className="mx-auto mt-2 block h-0.5 w-10 bg-primary lg:mx-0" />
            <div className="mt-4 flex w-full items-center justify-center gap-3 lg:justify-start">
              {redes.map((r) => (
                <span
                  key={r.nome}
                  aria-label={r.nome}
                  className="flex size-11 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary-soft"
                >
                  <r.icone className="size-5" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 px-1 py-3 sm:px-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {selos.map((s) => (
            <div
              key={s.texto}
              className="grid w-full grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-3 text-left lg:px-5"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
                <s.icone
                  className="size-5 text-primary-foreground"
                  aria-hidden="true"
                />
              </span>
              <p className="text-sm leading-snug text-muted-foreground">
                {s.texto}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground sm:text-base">
          <Globe className="size-4 text-primary" aria-hidden="true" />© 2026{" "}
          <strong className="text-primary">SmartVoz</strong>. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
