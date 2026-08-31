import { headerNavigation } from "@/lib/header-navigation";
import { NavDropdown } from "./NavDropdown";

/**
 * Navegação central do header no desktop.
 *
 * Quatro menus com dropdown: Para Você, Planos e Serviços, Sobre a SmartVoz e
 * Informações.
 */
export function DesktopNavigation() {
  return (
    <nav aria-label="Navegação principal" className="hidden lg:block">
      <ul className="flex items-center gap-1 xl:gap-3">
        {headerNavigation.map((menu) => (
          <li key={menu.label}>
            <NavDropdown menu={menu} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
