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

import { Logo } from "./Logo";
import { whatsappLink } from "@/lib/smartvoz";

const perguntas = [
  {
    icone: User,
    pergunta: "Preciso vender para participar?",
    resposta:
      "Não. Você pode usar os benefícios como Associado e indicar quando quiser para construir sua carteira.",
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
      "Não. Você pode cancelar sua associação quando quiser, sem multas ou taxas.",
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
    <section id="faq" className="waves-bg px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative flex flex-col items-center gap-6 lg:block lg:text-center">
          <div className="lg:absolute lg:left-0 lg:top-0">
            <Logo />
          </div>
          <p className="eyebrow-pill">
            <MessageCircle className="size-4 text-primary" aria-hidden="true" />
            <span className="text-primary">DÚVIDAS FREQUENTES</span>
          </p>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-[2rem] font-extrabold leading-[1.08] text-ink sm:text-5xl">
            Ainda tem dúvidas?
            <span className="block">
              A gente <span className="text-primary">clareia tudo.</span>
            </span>
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
                  className="flex w-full items-start gap-4 p-5 text-left"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                    <p.icone className="size-6 text-primary" aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-base font-bold text-ink">
                      {p.pergunta}
                    </span>
                    <span
                      className={`block text-sm leading-relaxed text-muted-foreground ${
                        ativa ? "mt-2" : "mt-2 line-clamp-2"
                      }`}
                    >
                      {p.resposta}
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
          className="mt-10 flex flex-col items-center gap-6 rounded-3xl bg-primary-deep p-6 text-center lg:flex-row lg:p-9 lg:text-left"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 0%, oklch(0.49 0.26 283 / 0.5), transparent 55%)",
          }}
        >
          <span className="pulse-ring flex size-16 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
            <Rocket className="size-8 text-primary-foreground" aria-hidden="true" />
          </span>

          <p className="font-display text-2xl font-extrabold leading-tight text-primary-foreground sm:text-3xl">
            Pronto para começar a construir{" "}
            <span className="text-primary">sua carteira?</span>
          </p>

          <span className="hidden h-20 w-px bg-primary-foreground/20 lg:block" />

          <p className="text-sm leading-relaxed text-primary-foreground/80 lg:max-w-xs">
            Junte-se a milhares de associados que já transformaram indicações em{" "}
            <span className="font-semibold text-primary">
              liberdade financeira
            </span>
            .
          </p>

          <div className="lg:ml-auto">
            <a
              href={whatsappLink("Olá! Quero ser Associado SmartVoz.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-primary px-7 py-4 font-display text-base font-extrabold tracking-wide text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 sm:text-lg"
            >
              QUERO SER ASSOCIADO
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
