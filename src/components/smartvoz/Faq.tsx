import { useState } from "react";
import {
  MessageCircle,
  User,
  CircleDollarSign,
  Users,
  Calendar,
  Wifi,
  ShieldCheck,
  CreditCard,
  HelpCircle,
  ChevronDown,
  Rocket,
  ArrowRight,
  Lock,
} from "lucide-react";

import { whatsappLink } from "@/lib/smartvoz";

const perguntas = [
  {
    icone: User,
    pergunta: "Preciso vender para participar?",
    resposta:
      "Não. Você pode usar os benefícios como parceiro SmartVoz e indicar quando quiser para construir sua carteira.",
  },
  {
    icone: CircleDollarSign,
    pergunta: "Como recebo minhas comissões?",
    resposta:
      "Suas comissões são pagas mensalmente via PIX, diretamente na sua conta cadastrada.",
  },
  {
    icone: Users,
    pergunta: "Como funcionam os 5 níveis?",
    resposta:
      "Você ganha R$ 50 na adesão e R$ 20 de recorrência dos seus clientes diretos (nível 1) e R$ 5 dos níveis 2 até o 5, conforme regras do programa.",
  },
  {
    icone: Calendar,
    pergunta: "O que acontece se meu cliente cancelar?",
    resposta:
      "A recorrência é paga enquanto seu cliente direto permanecer ativo, adimplente e elegível.",
  },
  {
    icone: Wifi,
    pergunta: "Como funciona a internet?",
    resposta:
      "Você recebe um chip com 100 GB + 20 GB de bônus para usar onde precisar, com a qualidade da rede Vivo.",
  },
  {
    icone: ShieldCheck,
    pergunta: "Existe fidelidade?",
    resposta:
      "Não. Você pode cancelar seu plano quando quiser, sem multas ou taxas.",
  },
  {
    icone: CreditCard,
    pergunta: "O que está incluído nos R$ 99,90?",
    resposta:
      "Internet móvel, Smart Academy, benefícios exclusivos (incluindo auxílio funeral*) e o programa de indicações.",
  },
  {
    icone: HelpCircle,
    pergunta: "Preciso montar equipe para ganhar mais?",
    resposta:
      "Não. Você pode construir sua carteira no seu ritmo. Mas sua rede pode chegar até 5 níveis.",
  },
];

export function Faq() {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <section id="faq" className="waves-bg px-3 pb-6 pt-2 sm:px-6 lg:pb-10 lg:pt-4">
      <div className="mx-auto max-w-screen-2xl">
        <div className="relative flex flex-col items-center gap-6 lg:block lg:text-center">
          <p className="eyebrow-pill">
            <MessageCircle className="size-4 text-primary" aria-hidden="true" />
            <span className="text-primary">DÚVIDAS FREQUENTES</span>
          </p>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-[2rem] font-extrabold leading-[1.08] text-ink sm:text-5xl">
            Ainda tem dúvidas?{" "}
            <span className="text-primary">A gente clareia tudo.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Respostas rápidas para você{" "}
            <strong className="text-primary">decidir com segurança.</strong>
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {perguntas.map((p, i) => {
            const ativa = aberta === i;
            return (
              <div key={p.pergunta} className="surface-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setAberta(ativa ? null : i)}
                  aria-expanded={ativa}
                  className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4 p-5 text-left"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-soft sm:size-12">
                    <p.icone className="size-6 text-primary" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-base font-bold text-ink">
                      {p.pergunta}
                    </span>
                    <span
                      className={`grid overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-300 ${
                        ativa
                          ? "mt-2 grid-rows-[1fr] opacity-100"
                          : "mt-0 grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="min-h-0 overflow-hidden">
                        {p.resposta}
                      </span>
                    </span>
                  </span>
                  <ChevronDown
                    className={`mt-1 size-5 shrink-0 text-primary transition-transform duration-300 ${
                      ativa ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground sm:text-sm">
          *Conforme regras, condições e disponibilidade dos benefícios.
        </p>

        <div
          className="relative mt-10 flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] p-6 text-center lg:flex-row lg:p-10 lg:text-left"
          style={{
            backgroundImage:
              "radial-gradient(1200px 400px at 85% 50%, oklch(0.3 0.18 300 / 0.75), transparent 70%), linear-gradient(120deg, oklch(0.16 0.09 300), oklch(0.2 0.13 300) 55%, oklch(0.13 0.07 300))",
          }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(oklch(0.72 0.18 303 / 0.55) 1px, transparent 1.2px)",
              backgroundSize: "12px 12px",
              maskImage:
                "radial-gradient(900px 320px at 70% 50%, black, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(900px 320px at 70% 50%, black, transparent 75%)",
            }}
          />

          <span className="relative flex size-[4.5rem] shrink-0 items-center justify-center rounded-full border border-primary/60 bg-primary-deep/60 shadow-[0_0_28px_oklch(0.6_0.26_303/0.55)] sm:size-20">
            <span className="pulse-ring absolute inset-0 rounded-full" />
            <Rocket
              className="size-9 text-primary-foreground drop-shadow-[0_0_10px_oklch(0.72_0.2_303/0.9)]"
              aria-hidden="true"
            />
          </span>

          <p className="relative font-display text-2xl font-extrabold leading-tight text-primary-foreground sm:text-3xl">
            Pronto para começar a construir{" "}
            <span className="text-[oklch(0.75_0.17_303)]">sua carteira?</span>
          </p>

          <span className="relative hidden h-20 w-px bg-primary-foreground/25 lg:block" />

          <p className="relative text-sm leading-relaxed text-primary-foreground/75 lg:max-w-xs">
            Junte-se a milhares de parceiros que já transformaram indicações em{" "}
            <span className="font-semibold text-[oklch(0.75_0.17_303)]">
              liberdade financeira
            </span>
            .
          </p>

          <div className="relative lg:ml-auto">
            <a
              href={whatsappLink("Olá! Quero começar agora.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-full px-7 py-4 font-display text-[0.95rem] font-extrabold tracking-wide text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:text-base"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, oklch(0.66 0.24 303), oklch(0.5 0.26 303))",
                boxShadow:
                  "0 0 0 1px oklch(0.78 0.16 303 / 0.6), 0 0 34px oklch(0.6 0.26 303 / 0.65), 0 1px 0 oklch(1 0 0 / 0.35) inset",
              }}
            >
              QUERO COMEÇAR AGORA
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-primary-foreground/70">
              <Lock className="size-3.5" aria-hidden="true" />
              Ambiente seguro e 100% online
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
