import { headerNavigation } from "@/lib/header-navigation";
import { NavDropdown } from "./NavDropdown";

/**
 * Navegação central do header no desktop.
 *
 * Menus com dropdown alinhado conforme a posição na barra: os primeiros
 * alinham o conteúdo à esquerda, os do centro centralizam, os do final
 * alinham à direita.
 */
export function DesktopNavigation() {
  const total = headerNavigation.length;

  const alinhamento = (idx: number): "esquerda" | "centro" | "direita" => {
    if (idx <= total / 2 - 1) return "esquerda";
    if (idx >= total / 2) return "direita";
    return "centro";
  };

  return (
    <nav aria-label="Navegação principal" className="hidden lg:block">
      <ul className="flex items-center gap-1 xl:gap-3">
        {headerNavigation.map((menu, idx) => (
          <li key={menu.label}>
            <NavDropdown menu={menu} alinhamento={alinhamento(idx)} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
