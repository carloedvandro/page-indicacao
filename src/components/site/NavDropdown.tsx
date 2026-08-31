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
export function NavDropdown({
  menu,
  alinhamento = "centro",
}: {
  menu: NavMenu;
  alinhamento?: "esquerda" | "centro" | "direita";
}) {
  const [aberto, setAberto] = useState(false);
  const [deslocamento, setDeslocamento] = useState<number | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const botao = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelarFechamento = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const agendarFechamento = () => {
    cancelarFechamento();
    timeoutRef.current = setTimeout(() => setAberto(false), 200);
  };

  useEffect(() => {
    return () => cancelarFechamento();
  }, []);

  useEffect(() => {
    if (!aberto) return;

    // Alinha o conteudo abaixo do botao para menus pequenos (1 ou 2 colunas).
    if (botao.current && menu.grupos.length <= 2) {
      const rect = botao.current.getBoundingClientRect();
      const viewport = window.innerWidth;
      const margemSeguranca = 16;
      const maxWidth = menu.grupos.length === 2 ? 576 : 224;
      let left = rect.left;

      // Garante que o mega-menu nao ultrapasse as bordas da tela.
      if (left + maxWidth > viewport - margemSeguranca) {
        left = Math.max(margemSeguranca, viewport - maxWidth - margemSeguranca);
      }
      if (left < margemSeguranca) {
        left = margemSeguranca;
      }

      setDeslocamento(left);
    } else {
      setDeslocamento(null);
    }

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
  }, [aberto, menu.grupos.length]);

  const totalGrupos = menu.grupos.length;

  const conteudoClasses: Record<number, string> = {
    1: "max-w-56 grid-cols-1",
    2: "max-w-[36rem] grid-cols-2",
    3: "max-w-[48rem] grid-cols-3",
    4: "max-w-[56rem] grid-cols-4",
    5: "max-w-[72rem] grid-cols-5",
  };

  const alinhamentoClasse = {
    esquerda: "mr-auto",
    centro: "mx-auto",
    direita: "ml-auto",
  };

  return (
    <div
      ref={container}
      className="relative"
      onMouseEnter={() => {
        cancelarFechamento();
        setAberto(true);
      }}
      onMouseLeave={agendarFechamento}
    >
      <button
        ref={botao}
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-haspopup="true"
        className="group flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-[0.95rem] font-medium text-ink transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
          className="fixed inset-x-0 top-[66px] z-50"
          onMouseEnter={cancelarFechamento}
          onMouseLeave={agendarFechamento}
        >
          <div className="w-full border-y border-border bg-card py-2 shadow-card">
            <div
              className={`grid w-full overflow-hidden ${
                deslocamento != null ? "" : alinhamentoClasse[alinhamento]
              } ${conteudoClasses[totalGrupos]}`}
              style={{ marginLeft: deslocamento ?? undefined }}
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
                            className="mx-[-10px] block whitespace-nowrap rounded px-2.5 py-1.5 text-[0.8rem] text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:bg-primary-soft focus-visible:text-primary"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="mx-[-10px] block cursor-pointer whitespace-nowrap rounded px-2.5 py-1.5 text-[0.8rem] text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:bg-primary-soft focus-visible:text-primary">
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
