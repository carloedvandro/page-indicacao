import { Link } from "@tanstack/react-router";
import { LifeBuoy, BookOpen, Eye, HelpCircle, Mail, Clock, MessageCircle } from "lucide-react";

import { smartvoz } from "@/lib/smartvoz";
import { footerNavigation } from "@/lib/footer-navigation";
import { FooterSocial } from "./FooterSocial";
import { FooterSecurityBadges } from "./FooterSecurityBadges";

/** Ícones da coluna "Ajuda e Suporte", na ordem dos links. */
const iconesAjuda = [LifeBuoy, BookOpen, Eye, HelpCircle];

/**
 * Rodapé institucional SmartVoz.
 *
 * Estrutura:
 * - Faixa de selos de segurança acima
 * - Três colunas: Ajuda e Suporte / Atendimento / Siga nossas redes
 * - Base com CNPJ à esquerda e copyright centralizado
 *
 * Os links institucionais (Quem somos, Termos, etc.) ficam nos menus do
 * header. Layout responsivo: 3 colunas no desktop, 2 no tablet, 1 no mobile.
 */
export function SmartVozFooter() {
  return (
    <footer>
      {/* Faixa de selos */}
      <div className="border-t border-border bg-background">
        <FooterSecurityBadges />
      </div>

      {/* Corpo do rodapé */}
      <div className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-screen-2xl px-5 py-10 sm:px-6 sm:py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {/* Coluna 1 — Ajuda e Suporte */}
            <nav aria-label="Ajuda e Suporte">
              <h3 className="font-display text-sm font-bold tracking-[0.06em] text-ink">
                AJUDA E SUPORTE
              </h3>
              <ul className="mt-5 space-y-3.5">
                {footerNavigation.ajudaESuporte.map((item, i) => {
                  const Icone = iconesAjuda[i] ?? HelpCircle;
                  return (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className="group inline-flex items-center gap-3 text-[0.95rem] text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Icone
                          className="size-[1.15rem] shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Coluna 2 — Atendimento */}
            <div>
              <h3 className="font-display text-sm font-bold tracking-[0.06em] text-ink">
                ATENDIMENTO
              </h3>
              <ul className="mt-5 space-y-3.5">
                <li>
                  <a
                    href={`mailto:${smartvoz.email}`}
                    className="inline-flex items-center gap-3 text-[0.95rem] text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Mail className="size-[1.15rem] shrink-0 text-primary" aria-hidden="true" />
                    {smartvoz.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-[0.95rem] text-muted-foreground">
                  <Clock
                    className="mt-0.5 size-[1.15rem] shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>
                    Segunda a sexta-feira
                    <br />
                    Horário comercial
                  </span>
                </li>
                <li>
                  <Link
                    to="/fale-conosco"
                    className="inline-flex items-center gap-3 text-[0.95rem] text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <MessageCircle
                      className="size-[1.15rem] shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    Fale conosco
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 3 — Redes sociais */}
            <div>
              <h3 className="font-display text-sm font-bold tracking-[0.06em] text-ink">
                SIGA NOSSAS REDES
              </h3>
              <div className="mt-5">
                <FooterSocial />
              </div>
            </div>
          </div>

          {/* Base: CNPJ + copyright */}
          <div className="mt-10 border-t border-border pt-6 sm:mt-12">
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="text-sm text-muted-foreground">CNPJ: {smartvoz.cnpj}</p>
              <p className="text-sm text-muted-foreground sm:mx-auto sm:-translate-x-1/2 sm:text-center">
                © 2026 SmartVoz. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
