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
      {/* A geometria abaixo espelha o card do Hero (VideoHeroSection) para que
          o logo e o Login fiquem alinhados com as bordas da arte. */}
      <div className="px-4 sm:px-5">
        <div className="mx-auto flex h-[68px] w-full max-w-[1540px] items-center gap-4 lg:h-[82px] lg:w-[95%]">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Ir para a página inicial da SmartVoz"
            className="flex shrink-0 items-center lg:pl-6"
          >
            <Logo className="h-9 sm:h-10 lg:h-11" />
          </Link>

          {/* Menus centrais (desktop) — próximos à esquerda, junto à logo */}
          <div className="lg:ml-10">
            <DesktopNavigation />
          </div>

          {/* Login (desktop) — alinhado com a borda direita do card do Hero */}
          <div className="ml-auto hidden shrink-0 items-center lg:flex lg:pr-6">
            <LoginLink compacto />
          </div>

          {/* Hamburger (mobile) */}
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
