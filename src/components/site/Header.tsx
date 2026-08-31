import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/smartvoz/Logo";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation, LoginLink } from "./MobileNavigation";

/**
 * Header principal SmartVoz.
 *
 * Barra superior branca, fixa (sticky) e clean, com ~82px de altura no
 * desktop. Logo à esquerda, menus com dropdown ao centro e Login à direita.
 * No mobile: logo + hamburger (Login dentro do menu).
 *
 * Ao rolar a página, mantém o fundo branco e ganha apenas uma sombra muito
 * discreta. O conteúdo passa por baixo do header.
 */
export function Header() {
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        rolou ? "shadow-[0_1px_12px_oklch(0.2_0.05_300/0.08)]" : "border-b border-border/60"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-screen-2xl items-center justify-between gap-4 px-5 sm:px-6 lg:h-[82px]">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Ir para a página inicial da SmartVoz"
          className="flex shrink-0 items-center"
        >
          <Logo className="h-9 sm:h-10 lg:h-11" />
        </Link>

        {/* Menus centrais (desktop) */}
        <DesktopNavigation />

        {/* Login (desktop) */}
        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <span className="h-8 w-px bg-border" aria-hidden="true" />
          <LoginLink compacto />
        </div>

        {/* Hamburger (mobile) */}
        <MobileNavigation />
      </div>
    </header>
  );
}
