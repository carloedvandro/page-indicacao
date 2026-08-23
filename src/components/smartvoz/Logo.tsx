type LogoProps = {
  className?: string;
};

/** Marca SMARTVOZ: "SMART" em degradê quente + "VOZ" em violeta com onda sonora. */
export function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex select-none items-end font-display text-2xl font-extrabold tracking-tight sm:text-[1.75rem] ${className}`}
      aria-label="SmartVoz"
    >
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, oklch(0.58 0.22 28), oklch(0.72 0.19 52))",
        }}
      >
        SMART
      </span>
      <span className="relative text-primary">
        <svg
          viewBox="0 0 60 18"
          className="absolute -top-[0.62em] left-1/2 h-[0.6em] w-[2.1em] -translate-x-1/2 text-primary"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 15 L8 15 L13 3 L18 16 L23 7 L28 15 L34 2 L40 15 L47 11 L59 11"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        VOZ
      </span>
    </span>
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
