import { ArrowRight, Lock } from "lucide-react";
import { whatsappLink } from "@/lib/smartvoz";

const METEORS = [
  { top: "12%", left: "4%", len: 110, dur: 2.6, delay: 0.2, gold: false },
  { top: "28%", left: "18%", len: 80, dur: 3.1, delay: 1.4, gold: true },
  { top: "8%", left: "55%", len: 130, dur: 2.3, delay: 2.1, gold: false },
  { top: "42%", left: "62%", len: 90, dur: 2.8, delay: 0.7, gold: false },
  { top: "18%", left: "80%", len: 100, dur: 3.4, delay: 3.0, gold: true },
  { top: "52%", left: "36%", len: 75, dur: 2.0, delay: 1.1, gold: false },
  { top: "34%", left: "88%", len: 120, dur: 2.5, delay: 0.5, gold: false },
];

const SPARKS = [
  { x: "22%", dur: 0.9, drift: "-6px", delay: 0.1 },
  { x: "38%", dur: 0.7, drift: "4px", delay: 0.3 },
  { x: "52%", dur: 1.0, drift: "-3px", delay: 0.5 },
  { x: "66%", dur: 0.8, drift: "7px", delay: 0.2 },
  { x: "28%", dur: 0.9, drift: "-5px", delay: 0.7 },
  { x: "46%", dur: 0.7, drift: "2px", delay: 0.4 },
  { x: "60%", dur: 1.1, drift: "-8px", delay: 0.6 },
  { x: "74%", dur: 0.8, drift: "5px", delay: 0.9 },
  { x: "34%", dur: 0.9, drift: "-4px", delay: 1.0 },
  { x: "56%", dur: 0.7, drift: "6px", delay: 1.2 },
];

export function HeroCta() {
  return (
    <div
      className="rise-in relative mt-4 w-full overflow-hidden rounded-[2.75rem] text-primary-foreground sm:mt-5"
      style={{
        isolation: "isolate",
        minHeight: 250,
        backgroundImage:
          "radial-gradient(circle at 78% 22%, rgba(177,70,255,.20), transparent 25%), linear-gradient(115deg, #16002d 0%, #23003f 48%, #2a004c 74%, #1a0032 100%)",
        boxShadow:
          "0 24px 58px rgba(57,0,105,.20), inset 0 1px 0 rgba(255,255,255,.05)",
      }}
    >
      <style>{`
        .hero-cta-star-field {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(206,160,255,.26) 1px, transparent 1px),
            radial-gradient(circle, rgba(255,255,255,.10) .8px, transparent .8px);
          background-size: 20px 20px, 34px 34px;
          background-position: 0 0, 8px 10px;
          opacity: .70;
          mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 96%, transparent 100%);
        }
        .hero-cta-meteor {
          position: absolute;
          top: var(--top);
          left: var(--left);
          width: var(--len);
          height: 2px;
          border-radius: 999px;
          transform: rotate(-28deg);
          transform-origin: left center;
          background: linear-gradient(90deg,
            rgba(255,255,255,0) 0%,
            rgba(205,158,255,.25) 28%,
            rgba(182,102,255,.78) 72%,
            rgba(255,255,255,.98) 100%);
          filter: drop-shadow(0 0 8px rgba(179,91,255,.65));
          opacity: 0;
          animation: heroCtaMeteorFall var(--dur) ease-in var(--delay) infinite;
        }
        .hero-cta-meteor.gold {
          background: linear-gradient(90deg,
            rgba(255,255,255,0) 0%,
            rgba(246,199,86,.20) 30%,
            rgba(246,199,86,.78) 75%,
            #fff7cf 100%);
          filter: drop-shadow(0 0 8px rgba(246,199,86,.52));
        }
        .hero-cta-meteor::after {
          content: "";
          position: absolute;
          right: -2px;
          top: 50%;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #fff;
          transform: translateY(-50%);
          box-shadow: 0 0 9px rgba(255,255,255,.95);
        }
        .hero-cta-glow {
          position: absolute;
          right: 30px;
          top: 10px;
          width: 340px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(172,60,255,.18), transparent 72%);
          filter: blur(28px);
          pointer-events: none;
          z-index: 2;
        }
        .hero-cta-rocket {
          animation: heroCtaRocketFloat 2.2s ease-in-out infinite;
          filter: drop-shadow(0 12px 10px rgba(0,0,0,.30)) drop-shadow(0 0 12px rgba(158,72,245,.22));
        }
        .hero-cta-flame-outer {
          animation: heroCtaFlameA .10s ease-in-out infinite alternate;
        }
        .hero-cta-flame-mid {
          animation: heroCtaFlameB .075s ease-in-out infinite alternate;
        }
        .hero-cta-flame-core {
          animation: heroCtaFlameC .06s ease-in-out infinite alternate;
        }
        .hero-cta-flame-glow {
          animation: heroCtaFlameGlow .14s ease-in-out infinite alternate;
        }
        .hero-cta-spark {
          position: absolute;
          top: 20px;
          left: var(--x);
          width: 3px;
          height: 5px;
          border-radius: 50%;
          background: #90e0ff;
          box-shadow: 0 0 7px #4bb9ff;
          opacity: 0;
          animation: heroCtaSparkDrop var(--dur) linear infinite;
          animation-delay: var(--delay);
        }
        .hero-cta-btn-shine {
          position: absolute;
          top: -50%;
          left: -34%;
          width: 24%;
          height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.68), transparent);
          transform: rotate(18deg);
          animation: heroCtaBtnShine 3.3s ease-in-out infinite;
        }
        @keyframes heroCtaMeteorFall {
          0% { opacity: 0; transform: translate3d(0,0,0) rotate(-28deg) scaleX(.7); }
          8% { opacity: 1; }
          45% { opacity: 1; }
          100% { opacity: 0; transform: translate3d(340px,170px,0) rotate(-28deg) scaleX(1.08); }
        }
        @keyframes heroCtaRocketFloat {
          0%, 100% { transform: translateX(-50%) translateY(6px) rotate(-1.2deg); }
          50% { transform: translateX(-50%) translateY(-11px) rotate(1.2deg); }
        }
        @keyframes heroCtaFlameA {
          from { transform: translateX(-50%) scaleX(.86) scaleY(.90); }
          to { transform: translateX(-50%) scaleX(1.10) scaleY(1.15); }
        }
        @keyframes heroCtaFlameB {
          from { transform: translateX(-50%) scaleX(.88) scaleY(.92); }
          to { transform: translateX(-50%) scaleX(1.08) scaleY(1.12); }
        }
        @keyframes heroCtaFlameC {
          from { transform: translateX(-50%) scaleY(.86); }
          to { transform: translateX(-50%) scaleY(1.18); }
        }
        @keyframes heroCtaFlameGlow {
          from { opacity: .52; transform: translateX(-50%) scale(.92); }
          to { opacity: .96; transform: translateX(-50%) scale(1.08); }
        }
        @keyframes heroCtaSparkDrop {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          16% { opacity: 1; }
          100% { transform: translateY(42px) translateX(var(--drift)) scale(.2); opacity: 0; }
        }
        @keyframes heroCtaBtnShine {
          0%, 55% { left: -34%; }
          85%, 100% { left: 124%; }
        }
        .hero-cta-grid {
          grid-template-areas: "rocket" "copy" "mid" "actions";
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .hero-cta-grid {
            grid-template-areas: "rocket copy copy" "rocket mid actions";
            grid-template-columns: 120px 1fr 1fr;
          }
        }
        @media (min-width: 1280px) {
          .hero-cta-grid {
            grid-template-areas: "rocket copy mid actions";
            grid-template-columns: 150px 1.5fr 1fr 1.28fr;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-cta-meteor, .hero-cta-rocket, .hero-cta-flame-outer, .hero-cta-flame-mid,
          .hero-cta-flame-core, .hero-cta-flame-glow, .hero-cta-spark, .hero-cta-btn-shine {
            animation: none !important;
          }
        }
      `}</style>

      {/* Fundo estrelado */}
      <span aria-hidden="true" className="hero-cta-star-field" />

      {/* Meteoros */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        {METEORS.map((m, i) => (
          <span
            key={i}
            className={`hero-cta-meteor ${m.gold ? "gold" : ""}`}
            style={{
              ["--top" as string]: m.top,
              ["--left" as string]: m.left,
              ["--len" as string]: `${m.len}px`,
              ["--dur" as string]: `${m.dur}s`,
              ["--delay" as string]: `${m.delay}s`,
            }}
          />
        ))}
      </span>

      {/* Brilho ambiente atrás do botão */}
      <span aria-hidden="true" className="hero-cta-glow" />

      {/* Conteúdo */}
      <div
        className="hero-cta-grid relative z-10 min-h-[250px] items-center gap-5 px-5 py-7 text-center sm:px-6 lg:gap-7 lg:px-8 lg:py-9 lg:text-left"
      >
        {/* Foguete sem círculo */}
        <div
          className="relative mx-auto h-[154px] w-32 lg:h-[168px] lg:w-32"
          style={{ gridArea: "rocket" }}
        >
          <div className="hero-cta-rocket absolute left-1/2 top-3 w-20 lg:w-[82px]">
            <svg
              viewBox="0 0 120 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="ctaBodyGrad" x1="60" y1="0" x2="60" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#f3e7ff" />
                  <stop offset=".35" stopColor="#ffffff" />
                  <stop offset=".75" stopColor="#d9c2ff" />
                  <stop offset="1" stopColor="#b388ff" />
                </linearGradient>
                <linearGradient id="ctaNoseGrad" x1="60" y1="0" x2="60" y2="44" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset=".55" stopColor="#e4ccff" />
                  <stop offset="1" stopColor="#a66bff" />
                </linearGradient>
                <linearGradient id="ctaFinGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#8e24e6" />
                  <stop offset="1" stopColor="#4a0e8a" />
                </linearGradient>
                <linearGradient id="ctaWindowGrad" x1="38" y1="24" x2="62" y2="52" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#e8f8ff" />
                  <stop offset=".35" stopColor="#b8ecff" />
                  <stop offset="1" stopColor="#4bb9ff" />
                </linearGradient>
              </defs>
              <path d="M24 86 L2 124 C1 127 3 129 6 128 L28 118 L30 92 Z" fill="url(#ctaFinGrad)" />
              <path d="M96 86 L118 124 C119 127 117 129 114 128 L92 118 L90 92 Z" fill="url(#ctaFinGrad)" />
              <path d="M46 96 L60 142 L74 96 Z" fill="url(#ctaFinGrad)" />
              <path d="M60 0 C34 0 24 52 24 88 C24 112 36 122 60 122 C84 122 96 112 96 88 C96 52 86 0 60 0 Z" fill="url(#ctaBodyGrad)" />
              <path d="M60 0 C44 0 37 28 36 46 C48 38 72 38 84 46 C83 28 76 0 60 0 Z" fill="url(#ctaNoseGrad)" />
              <circle cx="60" cy="46" r="16" fill="#38006b" stroke="#5a109e" strokeWidth="2" />
              <circle cx="60" cy="46" r="12" fill="url(#ctaWindowGrad)" />
              <ellipse cx="56" cy="40" rx="4" ry="2.5" fill="#fff" opacity="0.8" />
              <path d="M60 122 C36 122 24 112 24 96 L24 100 C24 118 38 128 60 128 C82 128 96 118 96 100 L96 96 C96 112 84 122 60 122 Z" fill="#000" opacity="0.12" />
              <path d="M60 58 L60 108" stroke="#7a35c9" strokeWidth="1.5" opacity="0.35" />
              <path d="M44 74 L76 74" stroke="#7a35c9" strokeWidth="1.5" opacity="0.25" />
            </svg>
          </div>

          {/* Chamas */}
          <div className="pointer-events-none absolute left-1/2 top-[88px] w-10 -translate-x-1/2">
            <span className="hero-cta-flame-glow absolute left-1/2 top-px h-[58px] w-[54px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(78,178,255,.32),transparent_68%)] blur-[5px]" />
            <span
              className="hero-cta-flame-outer absolute left-1/2 h-[58px] w-[30px] -translate-x-1/2"
              style={{
                borderRadius: "50% 50% 72% 72% / 18% 18% 82% 82%",
                mixBlendMode: "screen",
                background:
                  "linear-gradient(180deg,#fff 0 7%,#d9f5ff 10%,#7ed8ff 27%,#168bff 53%,#0545c8 73%,rgba(5,69,200,0) 100%)",
                filter: "drop-shadow(0 7px 11px rgba(19,129,255,.45))",
              }}
            />
            <span
              className="hero-cta-flame-mid absolute left-1/2 h-11 w-[19px] -translate-x-1/2"
              style={{
                borderRadius: "50% 50% 72% 72% / 18% 18% 82% 82%",
                mixBlendMode: "screen",
                background:
                  "linear-gradient(180deg,#fff 0 14%,#dff7ff 25%,#8fddff 47%,#278fff 72%,rgba(39,143,255,0) 100%)",
              }}
            />
            <span
              className="hero-cta-flame-core absolute left-1/2 h-[30px] w-2 -translate-x-1/2"
              style={{
                borderRadius: "50% 50% 72% 72% / 18% 18% 82% 82%",
                mixBlendMode: "screen",
                background:
                  "linear-gradient(180deg,#fff 0 46%,#c8f5ff 59%,#8ee3ff 73%,rgba(142,227,255,0) 100%)",
              }}
            />
          </div>

          {/* Fagulhas */}
          {SPARKS.map((s, i) => (
            <span
              key={i}
              className="hero-cta-spark"
              style={{
                ["--x" as string]: s.x,
                ["--dur" as string]: `${s.dur}s`,
                ["--drift" as string]: s.drift,
                ["--delay" as string]: `${s.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Título */}
        <div style={{ gridArea: "copy" }}>
          <p className="font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-extrabold leading-[1.05] tracking-tight">
            Pronto para começar a construir{" "}
            <span style={{ color: "#c992ff" }}>sua carteira?</span>
          </p>
        </div>

        {/* Descrição */}
        <div
          className="mx-auto max-w-sm border-t border-primary-foreground/10 pt-5 lg:mx-0 lg:max-w-none lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"
          style={{ gridArea: "mid" }}
        >
          <p className="text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Junte-se a milhares de parceiros que já transformaram indicações em{" "}
            <span className="font-semibold" style={{ color: "#f6c756" }}>
              liberdade financeira
            </span>
            .
          </p>
        </div>

        {/* Ações */}
        <div className="flex flex-col gap-3" style={{ gridArea: "actions" }}>
          <a
            href={whatsappLink("Olá! Quero começar agora.")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative isolate flex h-[62px] items-center justify-center gap-3 overflow-hidden rounded-full px-7 font-display text-base font-extrabold tracking-wide text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 sm:h-[74px] sm:text-lg"
            style={{
              backgroundImage: "linear-gradient(180deg,#b954ff,#8e24e6 50%,#7214c9 100%)",
              border: "1px solid rgba(255,255,255,.28)",
              boxShadow:
                "0 12px 28px rgba(119,22,210,.40), 0 0 24px rgba(179,68,255,.24), inset 0 2px 0 rgba(255,255,255,.24)",
            }}
          >
            <span className="hero-cta-btn-shine" />
            <span className="relative z-10">QUERO COMEÇAR AGORA</span>
            <ArrowRight className="relative z-10 size-5" aria-hidden="true" />
          </a>
          <p className="flex items-center justify-center gap-2 text-xs text-primary-foreground/70 sm:text-sm">
            <Lock className="size-3.5" aria-hidden="true" />
            Ambiente seguro e 100% online
          </p>
        </div>
      </div>
    </div>
  );
}
