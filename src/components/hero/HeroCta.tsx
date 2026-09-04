import { Rocket, ArrowRight, Lock } from "lucide-react";
import { whatsappLink } from "@/lib/smartvoz";

export function HeroCta() {
  return (
    <div
      className="rise-in relative mt-6 flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] p-6 text-center sm:mt-8 lg:flex-row lg:p-10 lg:text-left"
      style={{
        backgroundImage:
          "radial-gradient(1200px 400px at 85% 50%, oklch(0.3 0.18 300 / 0.75), transparent 70%), linear-gradient(120deg, oklch(0.16 0.09 300), oklch(0.2 0.13 300) 55%, oklch(0.13 0.07 300))",
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.72 0.18 303 / 0.55) 1px, transparent 1.2px)",
          backgroundSize: "12px 12px",
          maskImage:
            "radial-gradient(900px 320px at 70% 50%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(900px 320px at 70% 50%, black, transparent 75%)",
        }}
      />

      <span className="relative flex size-[4.5rem] shrink-0 items-center justify-center rounded-full border border-primary/60 bg-primary-deep/60 shadow-[0_0_28px_oklch(0.6_0.26_303/0.55)] sm:size-20">
        <span className="pulse-ring absolute inset-0 rounded-full" />
        <Rocket
          className="size-9 text-primary-foreground drop-shadow-[0_0_10px_oklch(0.72_0.2_303/0.9)]"
          aria-hidden="true"
        />
      </span>

      <p className="relative font-display text-2xl font-extrabold leading-tight text-primary-foreground sm:text-3xl">
        Pronto para começar a construir{" "}
        <span className="text-[oklch(0.75_0.17_303)]">sua carteira?</span>
      </p>

      <span className="relative hidden h-20 w-px bg-primary-foreground/25 lg:block" />

      <p className="relative text-sm leading-relaxed text-primary-foreground/75 lg:max-w-xs">
        Junte-se a milhares de parceiros que já transformaram indicações em{" "}
        <span className="font-semibold text-[oklch(0.75_0.17_303)]">
          liberdade financeira
        </span>
        .
      </p>

      <div className="relative lg:ml-auto">
        <a
          href={whatsappLink("Olá! Quero começar agora.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-full px-7 py-4 font-display text-[0.95rem] font-extrabold tracking-wide text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:text-base"
          style={{
            backgroundImage:
              "linear-gradient(180deg, oklch(0.66 0.24 303), oklch(0.5 0.26 303))",
            boxShadow:
              "0 0 0 1px oklch(0.78 0.16 303 / 0.6), 0 0 34px oklch(0.6 0.26 303 / 0.65), 0 1px 0 oklch(1 0 0 / 0.35) inset",
          }}
        >
          QUERO COMEÇAR AGORA
          <ArrowRight className="size-5" aria-hidden="true" />
        </a>
        <p className="mt-3 flex items-center justify-center gap-2 text-xs text-primary-foreground/70">
          <Lock className="size-3.5" aria-hidden="true" />
          Ambiente seguro e 100% online
        </p>
      </div>
    </div>
  );
}
