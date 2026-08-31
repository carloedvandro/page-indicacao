import { ShieldCheck, Lock, BadgeCheck, Users } from "lucide-react";

const selos = [
  { icone: ShieldCheck, linha1: "Ambiente seguro", linha2: "e 100% online" },
  { icone: Lock, linha1: "Seus dados protegidos", linha2: "e confidenciais" },
  {
    icone: BadgeCheck,
    linha1: "Programa com regras claras",
    linha2: "e acompanhamento digital",
  },
  { icone: Users, linha1: "Pessoas conectadas", linha2: "em todo o Brasil" },
];

/**
 * Faixa de selos de segurança/confiança exibida acima do rodapé.
 *
 * Desktop: 4 colunas com divisórias sutis. Tablet: 2 por linha.
 * Mobile: 1 ou 2 por linha conforme a largura.
 */
export function FooterSecurityBadges() {
  return (
    <div className="mx-auto max-w-screen-2xl px-5 py-7 sm:px-6 sm:py-8">
      <ul className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border">
        {selos.map((s) => (
          <li key={s.linha1} className="flex items-center gap-3 lg:justify-center lg:px-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-soft sm:size-11">
              <s.icone className="size-5 text-primary" aria-hidden="true" />
            </span>
            <p className="text-sm leading-snug text-ink">
              {s.linha1}
              <br className="hidden sm:block" />{" "}
              <span className="text-muted-foreground">{s.linha2}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
