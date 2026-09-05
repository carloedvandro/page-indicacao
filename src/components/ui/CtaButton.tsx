import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CtaButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

/**
 * Botão principal "QUERO COMEÇAR AGORA".
 *
 * Estilo 3D/roxo com brilho animado. Por padrão rola suavemente até a área
 * de escolha do plano (#escolher-plano).
 */
export function CtaButton({
  children = "QUERO COMEÇAR AGORA",
  className,
  onClick,
  href,
  target,
  rel,
  ariaLabel = "Quero começar agora",
}: CtaButtonProps) {
  const irParaPlanos = () => {
    document
      .getElementById("escolher-plano")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleClick = () => {
    if (onClick) onClick();
    else if (!href) irParaPlanos();
  };

  const baseClasses = cn(
    "relative isolate flex w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-2xl px-6 py-4 font-display text-sm font-extrabold tracking-wide text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 sm:gap-3 sm:text-base",
    className
  );

  const inlineStyle = {
    backgroundImage: "linear-gradient(180deg,#b954ff,#8e24e6 50%,#7214c9 100%)",
    border: "1px solid rgba(255,255,255,.28)",
    boxShadow:
      "0 12px 28px rgba(119,22,210,.40), 0 0 24px rgba(179,68,255,.24), inset 0 2px 0 rgba(255,255,255,.24)",
  } as React.CSSProperties;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={handleClick}
        className={baseClasses}
        style={inlineStyle}
        aria-label={ariaLabel}
      >
        <span className="btn-cta-shine" aria-hidden="true" />
        <span className="relative z-10">{children}</span>
        <ArrowRight className="relative z-10 size-5" aria-hidden="true" />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={baseClasses}
      style={inlineStyle}
      aria-label={ariaLabel}
    >
      <span className="btn-cta-shine" aria-hidden="true" />
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 size-5" aria-hidden="true" />
    </button>
  );
}
