import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import type { NavMenu } from "@/lib/header-navigation";

/**
 * Dropdown de navegação do header (desktop).
 *
 * Abre no hover e também no clique/teclado (acessibilidade). Fecha ao sair com
 * o mouse, ao pressionar Escape ou ao clicar fora.
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
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-[0.95rem] font-medium text-ink transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
        <div className="absolute left-0 top-full z-50 pt-2">
          <ul className="min-w-56 overflow-hidden rounded-2xl border border-border bg-card py-2 shadow-card">
            {menu.itens.map((item) => (
              <li key={`${menu.label}-${item.label}`}>
                <Link
                  to={item.href}
                  onClick={() => setAberto(false)}
                  className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:bg-primary-soft focus-visible:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
