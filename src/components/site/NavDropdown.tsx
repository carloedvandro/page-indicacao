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

  const colClasses: Record<number, string> = {
    2: "grid-cols-2 min-w-[36rem]",
    3: "grid-cols-3 min-w-[48rem]",
    4: "grid-cols-4 min-w-[56rem]",
    5: "grid-cols-5 min-w-[72rem]",
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
              ? "fixed left-1/2 top-16 -translate-x-1/2"
              : "absolute left-1/2 top-full -translate-x-1/2 pt-2"
          }`}
        >
          <div
            className={`max-w-[98vw] overflow-hidden rounded-none border border-border bg-card py-2 shadow-card ${
              multiGrupo ? `grid ${colClasses[totalGrupos]}` : "min-w-72"
            }`}
          >
            {menu.grupos.map((grupo, gIdx) => (
              <div
                key={grupo.titulo ?? `grupo-${gIdx}`}
                className={`px-2.5 py-2 ${gIdx > 0 && multiGrupo ? "border-l border-border" : ""}`}
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
      ) : null}
    </div>
  );
}
