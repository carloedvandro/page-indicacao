import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Globe, Headphones, Mail, ShieldCheck, ChevronDown } from "lucide-react";

import { Logo } from "@/components/smartvoz/Logo";
import { smartvoz } from "@/lib/smartvoz";
import { footerNavigation } from "@/lib/footer-navigation";
import { FooterColumn } from "./FooterColumn";
import { FooterSocial } from "./FooterSocial";
import { FooterSecurityBadges } from "./FooterSecurityBadges";

const atendimento = [
  { icone: Mail, titulo: "E-mail", valor: smartvoz.email, href: `mailto:${smartvoz.email}` },
  {
    icone: Headphones,
    titulo: "Horário de Atendimento",
    valor: smartvoz.horario,
  },
];

/**
 * Rodapé institucional SmartVoz.
 *
 * Layout responsivo:
 * - Desktop: 4 colunas (Institucional, Informações, Suporte, Atendimento)
 * - Tablet: 2 colunas por linha
 * - Mobile: accordion fechado por padrão
 *
 * Mantém a identidade visual roxa/clean existente. Todos os links são rotas
 * reais (sem "#"). E-mail usa mailto:.
 */
export function SmartVozFooter() {
  const [aberto, setAberto] = useState<string | null>(null);

  const alternar = (col: string) => setAberto((atual) => (atual === col ? null : col));

  return (
    <footer className="waves-bg px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
      <div className="mx-auto max-w-screen-2xl">
        {/* Bloco principal: desktop 4 colunas / tablet 2 / mobile accordion */}
        <div className="grid gap-8 px-1 py-3 sm:px-2 sm:py-4 lg:grid-cols-[1.15fr_repeat(3,0.75fr)_1fr]">
          {/* Coluna 0: marca + texto + selo escudo + CNPJ */}
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <Logo className="h-12 sm:h-16 lg:h-16" />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
              Conectamos pessoas a serviços e oportunidades por meio de tecnologia, relacionamento e
              uma experiência digital simples e transparente.
            </p>
            <span className="h-px w-full bg-border" />
            <div className="flex w-full flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left lg:items-start lg:text-left">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary-soft">
                <ShieldCheck className="size-6 text-primary" aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Empresa constituída e comprometida com segurança, transparência, boas práticas e
                cumprimento das normas aplicáveis às suas atividades.
              </p>
            </div>
            <p className="text-sm text-muted-foreground sm:text-base">
              CNPJ: <strong className="text-ink">{smartvoz.cnpj}</strong>
            </p>
          </div>

          {/* Colunas de navegação — desktop/tablet: visíveis; mobile: accordion */}
          {/* Mobile: accordion */}
          <div className="lg:hidden">
            <MobileColumn
              titulo="INSTITUCIONAL"
              aberto={aberto === "institucional"}
              onToggle={() => alternar("institucional")}
              links={footerNavigation.institucional}
            />
            <MobileColumn
              titulo="INFORMAÇÕES"
              aberto={aberto === "informacoes"}
              onToggle={() => alternar("informacoes")}
              links={footerNavigation.informacoes}
            />
            <MobileColumn
              titulo="SUPORTE"
              aberto={aberto === "suporte"}
              onToggle={() => alternar("suporte")}
              links={footerNavigation.suporte}
            />

            {/* Atendimento no mobile */}
            <div className="mt-2 border-t border-border pt-4">
              <h3 className="font-display text-sm font-bold tracking-wide text-ink">ATENDIMENTO</h3>
              <span className="mt-2 block h-0.5 w-10 bg-primary" aria-hidden="true" />
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
                      <span className="block text-base font-bold text-ink">{a.titulo}</span>
                      {a.href ? (
                        <a
                          href={a.href}
                          className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {a.valor}
                        </a>
                      ) : (
                        <span className="block text-sm text-muted-foreground">{a.valor}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-7 text-center font-display text-sm font-bold tracking-wide text-ink">
                SIGA NOSSAS REDES
              </h3>
              <span className="mx-auto mt-2 block h-0.5 w-10 bg-primary" aria-hidden="true" />
              <div className="mt-4">
                <FooterSocial />
              </div>
            </div>
          </div>

          {/* Desktop/tablet: colunas fixas */}
          <div className="hidden lg:block">
            <FooterColumn titulo="INSTITUCIONAL" links={footerNavigation.institucional} />
          </div>
          <div className="hidden lg:block">
            <FooterColumn titulo="INFORMAÇÕES" links={footerNavigation.informacoes} />
          </div>
          <div className="hidden lg:block">
            <FooterColumn titulo="SUPORTE" links={footerNavigation.suporte} />
          </div>

          {/* Coluna Atendimento — desktop/tablet */}
          <div className="hidden text-left lg:block">
            <h3 className="font-display text-sm font-bold tracking-wide text-ink">ATENDIMENTO</h3>
            <span className="mt-2 block h-0.5 w-10 bg-primary" aria-hidden="true" />
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
                    <span className="block text-base font-bold text-ink">{a.titulo}</span>
                    {a.href ? (
                      <a
                        href={a.href}
                        className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {a.valor}
                      </a>
                    ) : (
                      <span className="block text-sm text-muted-foreground">{a.valor}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="mt-7 text-center font-display text-sm font-bold tracking-wide text-ink lg:text-left">
              SIGA NOSSAS REDES
            </h3>
            <span className="mx-auto mt-2 block h-0.5 w-10 bg-primary lg:mx-0" aria-hidden="true" />
            <div className="mt-4">
              <FooterSocial />
            </div>
          </div>
        </div>

        {/* Selos inferiores */}
        <FooterSecurityBadges />

        {/* Copyright */}
        <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground sm:text-base">
          <Globe className="size-4 text-primary" aria-hidden="true" />© 2026{" "}
          <Link to="/" className="font-bold text-primary transition-colors hover:text-primary-deep">
            SmartVoz
          </Link>
          . Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

/** Coluna em accordion para o mobile. Inicia fechada. */
function MobileColumn({
  titulo,
  links,
  aberto,
  onToggle,
}: {
  titulo: string;
  links: { label: string; href: string }[];
  aberto: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={aberto}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="font-display text-sm font-bold tracking-wide text-ink">{titulo}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
            aberto ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          aberto ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="min-h-0 space-y-3 pb-4">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="text-base text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
