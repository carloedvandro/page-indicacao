import logoOficial from "@/assets/smartvoz-logo.png.asset.json";

type LogoProps = {
  className?: string;
};

/** Marca oficial SMARTVOZ. */
export function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src={logoOficial.url}
      alt="SmartVoz"
      className={`h-9 w-auto shrink-0 select-none object-contain sm:h-11 ${className}`}
    />
  );
}

/** Marca do rodapé: símbolo do infinito + SMARTVOZ ASSOCIAÇÃO. */
export function LogoAssociacao() {
  return (
    <div className="flex items-center gap-4">
      <svg
        viewBox="0 0 64 32"
        className="h-10 w-20 shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="infGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.42 0.26 284)" />
            <stop offset="100%" stopColor="oklch(0.66 0.19 293)" />
          </linearGradient>
        </defs>
        <path
          d="M18 16c0-6 4.5-10 9-10s9 4 14 10c4.5 6 9 10 14 10s9-4 9-10-4-10-9-10-9.5 4-14 10c-5.5 6-9.5 10-14 10s-9-4-9-10Z"
          stroke="url(#infGrad)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      <div className="leading-none">
        <div className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          SMART<span className="text-primary">VOZ</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="h-px w-4 bg-border" />
          <span className="font-display text-[0.62rem] font-semibold tracking-[0.42em] text-muted-foreground">
            ASSOCIAÇÃO
          </span>
          <span className="h-px w-4 bg-border" />
        </div>
      </div>
    </div>
  );
}
