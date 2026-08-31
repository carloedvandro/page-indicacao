import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import type { NavMenu } from "@/lib/header-navigation";

/**
 * Dropdown de navegação do header (desktop).
 *
 * Abre no hover e também no clique/teclado (acessibilidade). Fecha ao sair com
 * o mouse, ao pressionar Escape ou ao clicar fora.
 *
 * Renderiza um mega-menu com colunas quando o menu possui múltiplos grupos.
 */
export function NavDropdown({ menu }: { menu: NavMenu }) {
  const [aberto, setAberto] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aberto) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    const onClickFora = (e: MouseEvent) => {
      if (!container.current?.contains(e.target as Node)) setAberto(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickFora);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickFora);
    };
  }, [aberto]);

  const multiGrupo = menu.grupos.length > 1;
  const totalGrupos = menu.grupos.length;

  const conteudoClasses = {
    2: "max-w-[36rem] grid-cols-2",
    3: "max-w-[48rem] grid-cols-3",
    4: "max-w-[56rem] grid-cols-4",
    5: "max-w-[72rem] grid-cols-5",
  };

  return (
    <div
      ref={container}
      className="relative"
      onMouseEnter={() => setAberto(true)}
      onMouseLeave={() => setAberto(false)}
    >
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-haspopup="true"
        className="flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-[0.95rem] font-medium text-ink transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {menu.label}
        <ChevronDown
          className={`size-4 text-muted-foreground transition-transform duration-200 ${
            aberto ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {aberto ? (
        <div
          className={`z-50 ${
            multiGrupo
              ? "fixed inset-x-0 top-16"
              : "absolute left-1/2 top-full -translate-x-1/2 pt-2"
          }`}
        >
          <div
            className={`border-y border-border bg-card py-2 shadow-card ${
              multiGrupo ? "w-full" : "rounded-none border-x"
            }`}
          >
            <div
              className={`mx-auto grid overflow-hidden ${
                multiGrupo ? `w-full ${conteudoClasses[totalGrupos]}` : "min-w-72"
              }`}
            >
              {menu.grupos.map((grupo, gIdx) => (
                <div
                  key={grupo.titulo ?? `grupo-${gIdx}`}
                  className={`border-l border-border px-2.5 py-2 ${
                    gIdx === totalGrupos - 1 ? "border-r" : ""
                  }`}
                >
                  {grupo.titulo ? (
                    <p className="mb-1 pt-0.5 text-[0.7rem] font-bold uppercase tracking-wide text-ink">
                      {grupo.titulo}
                    </p>
                  ) : null}
                  <ul>
                    {grupo.itens.map((item) => (
                      <li key={`${menu.label}-${item.label}`}>
                        {item.href ? (
                          <Link
                            to={item.href}
                            onClick={() => setAberto(false)}
                            className="block whitespace-nowrap rounded-md py-1.5 text-[0.8rem] text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:bg-primary-soft focus-visible:text-primary"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="block cursor-pointer whitespace-nowrap rounded-md py-1.5 text-[0.8rem] text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:bg-primary-soft focus-visible:text-primary">
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
        </div>
      ) : null}
    </div>
  );
}
