import { ShieldCheck, Lock, BadgeCheck, Users } from "lucide-react";

const selos = [
  { icone: ShieldCheck, texto: "Ambiente seguro e 100% online" },
  { icone: Lock, texto: "Seus dados protegidos e confidenciais" },
  { icone: BadgeCheck, texto: "Programa com regras claras e acompanhamento digital" },
  { icone: Users, texto: "Pessoas conectadas em todo o Brasil" },
];

/**
 * Selos de segurança/confiança exibidos na parte inferior do rodapé.
 *
 * Desktop: 4 colunas. Tablet: 2 por linha. Mobile: 1 por linha em telas
 * estreitas, 2 por linha em telas um pouco maiores.
 */
export function FooterSecurityBadges() {
  return (
    <div className="mt-4 grid gap-4 px-1 py-3 sm:px-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
      {selos.map((s) => (
        <div
          key={s.texto}
          className="grid w-full grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-3 text-left lg:px-5"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
            <s.icone className="size-5 text-primary-foreground" aria-hidden="true" />
          </span>
          <p className="text-sm leading-snug text-muted-foreground">{s.texto}</p>
        </div>
      ))}
    </div>
  );
}
