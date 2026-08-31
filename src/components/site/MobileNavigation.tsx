import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, UserRound } from "lucide-react";

import { headerNavigation } from "@/lib/header-navigation";
import { smartvoz } from "@/lib/smartvoz";

/**
 * Navegação mobile do header.
 *
 * Botão hamburger abre um painel com os menus em acordeão. O Login aparece
 * dentro do menu. Acessível por teclado; trava o scroll do body quando aberto.
 */
export function MobileNavigation() {
  const [aberto, setAberto] = useState(false);
  const [expandido, setExpandido] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [aberto]);

  const fechar = () => {
    setAberto(false);
    setExpandido(null);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setAberto(true)}
        aria-label="Abrir menu de navegação"
        aria-expanded={aberto}
        className="flex size-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Menu className="size-6" aria-hidden="true" />
      </button>

      {aberto ? (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
            onClick={fechar}
            aria-hidden="true"
          />

          {/* Painel */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="fixed inset-y-0 right-0 z-50 flex w-full flex-col overflow-y-auto bg-background shadow-card"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-display text-sm font-bold tracking-wide text-ink">MENU</span>
              <button
                type="button"
                onClick={fechar}
                aria-label="Fechar menu de navegação"
                className="flex size-10 items-center justify-center rounded-xl text-ink transition-colors hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Navegação principal" className="flex-1 px-5 py-2">
              <ul>
                {headerNavigation.map((menu) => {
                  const ativo = expandido === menu.label;
                  return (
                    <li key={menu.label} className="border-b border-border">
                      <button
                        type="button"
                        onClick={() => setExpandido(ativo ? null : menu.label)}
                        aria-expanded={ativo}
                        className="flex w-full items-center justify-between py-4 text-left"
                      >
                        <span className="text-base font-semibold text-ink">{menu.label}</span>
                        <ChevronDown
                          className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                            ativo ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <div
                        className={`grid overflow-hidden transition-all duration-300 ${
                          ativo ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="min-h-0 pb-3">
                          {menu.grupos.map((grupo) => (
                            <div key={grupo.titulo ?? menu.label} className="py-1">
                              {grupo.titulo ? (
                                <p className="px-3 py-2 text-xs font-bold uppercase tracking-wide text-ink">
                                  {grupo.titulo}
                                </p>
                              ) : null}
                              <ul className="space-y-1">
                                {grupo.itens.map((item) => (
                                  <li key={`${menu.label}-${item.label}`}>
                                    {item.href ? (
                                      <Link
                                        to={item.href}
                                        onClick={fechar}
                                        className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                                      >
                                        {item.label}
                                      </Link>
                                    ) : (
                                      <span className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground">
                                        {item.label}
                                      </span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Login dentro do menu */}
            <div className="border-t border-border px-5 py-5">
              <LoginLink onNavigate={fechar} />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

/**
 * Link de Login.
 *
 * Usa `smartvoz.loginUrl` quando configurado (abre em nova aba); caso
 * contrário, aponta para a rota /acompanhamento.
 */
export function LoginLink({
  onNavigate,
  compacto = false,
}: {
  onNavigate?: () => void;
  compacto?: boolean;
}) {
  const classe = compacto
    ? "inline-flex items-center gap-2 rounded-lg pl-3 py-2 text-[0.95rem] font-medium text-ink transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    : "flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3.5 font-display text-sm font-extrabold tracking-wide text-primary-foreground shadow-glow";

  const conteudo = (
    <>
      <UserRound className="size-5" aria-hidden="true" />
      Login
    </>
  );

  if (smartvoz.loginUrl) {
    return (
      <a
        href={smartvoz.loginUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={classe}
      >
        {conteudo}
      </a>
    );
  }

  return (
    <Link to="/acompanhamento" onClick={onNavigate} className={classe}>
      {conteudo}
    </Link>
  );
}
