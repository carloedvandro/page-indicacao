import {
  ShieldCheck,
  MessageCircle,
  Mail,
  Clock,
  Instagram,
  Youtube,
  Facebook,
  Music2,
  Lock,
  Award,
  Users,
} from "lucide-react";

import { LogoAssociacao } from "./Logo";
import { smartvoz, whatsappLink } from "@/lib/smartvoz";

const colunas = [
  {
    titulo: "INSTITUCIONAL",
    itens: [
      "Quem somos",
      "Missão e Valores",
      "Como funciona",
      "Seja um Associado",
      "Fale conosco",
    ],
  },
  {
    titulo: "INFORMAÇÕES",
    itens: [
      "Termos e Condições",
      "Política de Privacidade",
      "Regulamento do Programa",
      "Plano de Carreira",
      "Perguntas Frequentes",
    ],
  },
  {
    titulo: "SUPORTE",
    itens: [
      "Central de Ajuda",
      "Tutoriais e Guias",
      "Acompanhamento",
      "Status do Sistema",
      "Atendimento",
    ],
  },
];

const selos = [
  { icone: ShieldCheck, texto: "Ambiente seguro\ne 100% online", destaque: true },
  { icone: Lock, texto: "Seus dados protegidos\ne confidenciais" },
  { icone: Award, texto: "Programa transparente\ne em conformidade" },
  { icone: Users, texto: "Milhares de associados\nem todo o Brasil" },
];

const redes = [
  { icone: Instagram, nome: "Instagram" },
  { icone: Youtube, nome: "YouTube" },
  { icone: Facebook, nome: "Facebook" },
  { icone: Music2, nome: "TikTok" },
];

export function Rodape() {
  return (
    <footer className="waves-bg px-5 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="surface-card grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.85fr_0.9fr_0.8fr_1.1fr]">


          {colunas.map((c) => (
            <nav key={c.titulo} aria-label={c.titulo}>
              <h3 className="font-display text-sm font-extrabold tracking-[0.06em] text-ink">
                {c.titulo}
              </h3>
              <span className="mt-3 block h-0.5 w-6 rounded-full bg-primary" />
              <ul className="mt-5 space-y-4">
                {c.itens.map((item) => (
                  <li key={item}>
                    <a
                      href={whatsappLink(`Olá! Gostaria de saber sobre: ${item}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="font-display text-sm font-extrabold tracking-[0.06em] text-ink">
              ATENDIMENTO
            </h3>
            <span className="mt-3 block h-0.5 w-6 rounded-full bg-primary" />

            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft">
                  <MessageCircle className="size-5 text-primary" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-sm font-bold text-ink">
                    WhatsApp
                  </span>
                  <a
                    href={whatsappLink("Olá! Vim pela página oficial da SmartVoz.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {smartvoz.whatsappExibicao}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft">
                  <Mail className="size-5 text-primary" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-sm font-bold text-ink">
                    E-mail
                  </span>
                  <a
                    href={`mailto:${smartvoz.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {smartvoz.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft">
                  <Clock className="size-5 text-primary" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-sm font-bold text-ink">
                    Horário de Atendimento
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {smartvoz.horario}
                  </span>
                </span>
              </li>
            </ul>

            <span className="mt-6 block h-px w-full bg-border" />

            <h3 className="mt-6 font-display text-sm font-extrabold tracking-[0.06em] text-ink">
              SIGA NOSSAS REDES
            </h3>
            <span className="mt-3 block h-0.5 w-6 rounded-full bg-primary" />
            <div className="mt-5 flex gap-3">
              {redes.map((r) => (
                <a
                  key={r.nome}
                  href={whatsappLink(`Olá! Onde encontro a SmartVoz no ${r.nome}?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={r.nome}
                  className="flex size-11 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary-soft"
                >
                  <r.icone className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <ul className="surface-card mt-6 grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {selos.map((s) => (
            <li key={s.texto} className="flex items-center gap-4 lg:px-4">
              <span
                className={`flex size-12 shrink-0 items-center justify-center rounded-full ${
                  s.destaque ? "bg-gradient-primary" : "bg-primary-soft"
                }`}
              >
                <s.icone
                  className={`size-6 ${
                    s.destaque ? "text-primary-foreground" : "text-primary"
                  }`}
                  aria-hidden="true"
                />
              </span>
              <span className="whitespace-pre-line text-sm leading-snug text-muted-foreground">
                {s.texto}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <p className="font-display text-sm font-extrabold tracking-[0.06em] text-ink">
            SMARTVOZ ASSOCIAÇÃO
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            CNPJ: <strong className="text-ink">66.856.703/0001-24</strong>
          </p>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            © 2026 <strong className="text-primary">SmartVoz</strong> Associação.
            Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
