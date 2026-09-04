import { useEffect, useRef, useState } from "react";
import { ArrowRight, Lock, Satellite, Volume2, VolumeX } from "lucide-react";
import { whatsappLink } from "@/lib/smartvoz";

const METEORS = [
  { top: "12%", left: "4%", len: 110, dur: 6.8, delay: 0.5, gold: false },
  { top: "28%", left: "18%", len: 80, dur: 8.1, delay: 3.6, gold: true },
  { top: "8%", left: "55%", len: 130, dur: 6.0, delay: 5.5, gold: false },
  { top: "42%", left: "62%", len: 90, dur: 7.3, delay: 1.8, gold: false },
  { top: "18%", left: "80%", len: 100, dur: 8.8, delay: 7.8, gold: true },
  { top: "52%", left: "36%", len: 75, dur: 5.2, delay: 2.9, gold: false },
  { top: "34%", left: "88%", len: 120, dur: 6.5, delay: 1.3, gold: false },
];

const SPARKS = [
  { x: "40%", dur: 1.80, drift: "-6px", delay: 0.20 },
  { x: "46%", dur: 1.40, drift: "4px", delay: 0.60 },
  { x: "52%", dur: 2.00, drift: "-3px", delay: 1.00 },
  { x: "58%", dur: 1.60, drift: "7px", delay: 0.40 },
  { x: "43%", dur: 1.80, drift: "-5px", delay: 1.40 },
  { x: "49%", dur: 1.40, drift: "2px", delay: 0.80 },
  { x: "55%", dur: 2.20, drift: "-8px", delay: 1.20 },
  { x: "61%", dur: 1.60, drift: "5px", delay: 1.80 },
  { x: "47%", dur: 1.80, drift: "-4px", delay: 2.00 },
  { x: "53%", dur: 1.40, drift: "6px", delay: 2.40 },
];

/** Som contínuo de propulsão (ruído filtrado) gerado no navegador. */
function useRocketSound() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const stopRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!on) {
      stopRef.current?.();
      stopRef.current = null;
      return;
    }
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const ctx = ctxRef.current ?? new AC();
    ctxRef.current = ctx;
    void ctx.resume();

    const frames = Math.floor(ctx.sampleRate * 2);
    const buffer = ctx.createBuffer(1, frames, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < frames; i++) {
      const white = Math.random() * 2 - 1;
      last = 0.02 * white + 0.98 * last;
      data[i] = last * 3.2;
    }

    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;

    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 620;

    const gain = ctx.createGain();
    gain.gain.value = 0;
    gain.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 0.5);

    src.connect(lp).connect(gain).connect(ctx.destination);
    src.start();

    stopRef.current = () => {
      try {
        gain.gain.cancelScheduledValues(ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
        src.stop(ctx.currentTime + 0.35);
      } catch {
        /* noop */
      }
    };
    return () => stopRef.current?.();
  }, [on]);

  return { on, toggle: () => setOn((v) => !v) };
}

export function HeroCta() {
  const { on, toggle } = useRocketSound();

  return (
    <div
      className="rise-in relative mt-4 w-full overflow-hidden rounded-[2rem] text-primary-foreground sm:mt-5"
      style={{
        isolation: "isolate",
        minHeight: 176,
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
          animation: heroCtaMeteorFall var(--dur) linear var(--delay) infinite;
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
          animation: heroCtaRocketFloat 5.2s ease-in-out infinite;
          filter: drop-shadow(0 12px 10px rgba(0,0,0,.30)) drop-shadow(0 0 12px rgba(158,72,245,.22));
        }
        .hero-cta-flame-outer {
          transform-origin: 50% 0;
          animation: heroCtaFlameA .72s ease-in-out infinite alternate;
        }
        .hero-cta-flame-mid {
          transform-origin: 50% 0;
          animation: heroCtaFlameB .64s ease-in-out infinite alternate;
        }
        .hero-cta-flame-core {
          transform-origin: 50% 0;
          animation: heroCtaFlameC .58s ease-in-out infinite alternate;
        }
        .hero-cta-flame-glow {
          transform-origin: 50% 0;
          animation: heroCtaFlameGlow .9s ease-in-out infinite alternate;
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
        .hero-cta-satellite {
          position: absolute;
          top: 22%;
          left: -12%;
          width: 30px;
          height: 30px;
          color: rgba(226,204,255,.85);
          opacity: .9;
          animation: heroCtaSatellite 26s linear infinite;
          pointer-events: none;
          z-index: 3;
        }
        .hero-cta-satellite-2 {
          top: 66%;
          width: 22px;
          height: 22px;
          opacity: .55;
          animation-duration: 38s;
          animation-delay: 9s;
        }
        @keyframes heroCtaSatellite {
          0% { transform: translate3d(0,0,0) rotate(-8deg); opacity: 0; }
          6% { opacity: .9; }
          92% { opacity: .9; }
          100% { transform: translate3d(120vw,-40px,0) rotate(12deg); opacity: 0; }
        }
        .hero-cta-btn-shine {
          position: absolute;
          top: -50%;
          left: -34%;
          width: 24%;
          height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.68), transparent);
          transform: rotate(18deg);
          animation: heroCtaBtnShine 6.5s ease-in-out infinite;
        }
        @keyframes heroCtaMeteorFall {
          0% { opacity: 0; transform: translate3d(0,0,0) rotate(-28deg) scaleX(.7); }
          8% { opacity: 1; }
          45% { opacity: 1; }
          100% { opacity: 0; transform: translate3d(340px,170px,0) rotate(-28deg) scaleX(1.08); }
        }
        @keyframes heroCtaRocketFloat {
          0%, 100% { transform: translateY(5px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes heroCtaFlameA {
          from { transform: translateX(-50%) scaleY(.96); }
          to { transform: translateX(-50%) scaleY(1.06); }
        }
        @keyframes heroCtaFlameB {
          from { transform: translateX(-50%) scaleY(.97); }
          to { transform: translateX(-50%) scaleY(1.05); }
        }
        @keyframes heroCtaFlameC {
          from { transform: translateX(-50%) scaleY(.98); }
          to { transform: translateX(-50%) scaleY(1.04); }
        }
        @keyframes heroCtaFlameGlow {
          from { opacity: .58; transform: translateX(-50%) scaleY(.98); }
          to { opacity: .82; transform: translateX(-50%) scaleY(1.04); }
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
          display: grid;
          grid-template-areas: "rocket" "copy" "mid" "actions";
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .hero-cta-grid {
            grid-template-areas: "rocket copy mid actions";
            grid-template-columns: 112px 1.3fr 1.05fr 1.25fr;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-cta-rocket, .hero-cta-nebula, .hero-cta-dust, .hero-cta-star-field, .hero-cta-flame-outer, .hero-cta-flame-mid,
          .hero-cta-flame-core, .hero-cta-flame-glow, .hero-cta-spark, .hero-cta-btn-shine {
            animation: none !important;
          }
        }
      `}</style>

      {/* Nebulosa e poeira estelar */}
      <span aria-hidden="true" className="hero-cta-nebula" />
      <span aria-hidden="true" className="hero-cta-dust" />
      <span aria-hidden="true" className="hero-cta-star-field" />
      <span aria-hidden="true" className="hero-cta-star-field hero-cta-star-field-2" />
      <span aria-hidden="true" className="hero-cta-vignette" />

      {/* Brilho ambiente atrás do botão */}
      <span aria-hidden="true" className="hero-cta-glow" />


      {/* Conteúdo */}
      <div
        className="hero-cta-grid relative z-10 min-h-[176px] items-center gap-4 px-5 py-6 text-center sm:px-6 lg:gap-6 lg:px-7 lg:py-6 lg:text-left"
      >
        {/* Foguete sem círculo */}
        <div
          className="relative mx-auto h-[120px] w-24 lg:h-[128px] lg:w-[104px]"
          style={{ gridArea: "rocket" }}
        >
          <button
            type="button"
            onClick={toggle}
            aria-label={on ? "Desligar som do foguete" : "Ligar som do foguete"}
            className="absolute right-0 top-0 z-20 flex size-7 items-center justify-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground/80 backdrop-blur transition hover:bg-primary-foreground/20"
          >
            {on ? <Volume2 className="size-3.5" /> : <VolumeX className="size-3.5" />}
          </button>
          <div className="absolute left-1/2 top-1 w-[58px] -translate-x-1/2 lg:w-[62px]">
          <div className="hero-cta-rocket relative w-full">
            <svg
              viewBox="0 0 120 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-full"
              aria-hidden="true"
            >
              <defs>
                {/* Corpo: volume 3D com luz à esquerda e sombra profunda à direita */}
                <linearGradient id="ctaBodyGrad" x1="24" y1="60" x2="96" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#5d16a6" />
                  <stop offset=".18" stopColor="#b06bfa" />
                  <stop offset=".38" stopColor="#c894ff" />
                  <stop offset=".62" stopColor="#8b2fe0" />
                  <stop offset=".86" stopColor="#4d0f92" />
                  <stop offset="1" stopColor="#31075f" />
                </linearGradient>
                <linearGradient id="ctaNoseGrad" x1="34" y1="6" x2="88" y2="48" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#fff3c4" />
                  <stop offset=".3" stopColor="#ffdb7a" />
                  <stop offset=".62" stopColor="#f0b53c" />
                  <stop offset="1" stopColor="#b8781a" />
                </linearGradient>
                <linearGradient id="ctaFinGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ffe6a3" />
                  <stop offset=".55" stopColor="#eeb43c" />
                  <stop offset="1" stopColor="#9c6212" />
                </linearGradient>
                <radialGradient id="ctaWindowGrad" cx=".38" cy=".32" r=".85">
                  <stop offset="0" stopColor="#eafcff" />
                  <stop offset=".3" stopColor="#8fe4ff" />
                  <stop offset=".7" stopColor="#1e9bd8" />
                  <stop offset="1" stopColor="#0a3f78" />
                </radialGradient>
                <linearGradient id="ctaNozzleGrad" x1="34" y1="120" x2="86" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#3d0b74" />
                  <stop offset=".35" stopColor="#7a2bc4" />
                  <stop offset=".7" stopColor="#400d7a" />
                  <stop offset="1" stopColor="#26054c" />
                </linearGradient>
              </defs>

              {/* Aletas */}
              <path d="M26 84 L3 124 C2 127 4 129 7 128 L29 117 L31 90 Z" fill="url(#ctaFinGrad)" />
              <path d="M26 84 L10 112 L29 117 Z" fill="#000" opacity=".14" />
              <path d="M94 84 L117 124 C118 127 116 129 113 128 L91 117 L89 90 Z" fill="url(#ctaFinGrad)" />
              <path d="M94 84 L110 112 L91 117 Z" fill="#000" opacity=".26" />

              {/* Corpo */}
              <path d="M60 2 C35 2 24 52 24 88 C24 110 36 121 60 121 C84 121 96 110 96 88 C96 52 85 2 60 2 Z" fill="url(#ctaBodyGrad)" />
              {/* Reflexo especular */}
              <path d="M44 24 C37 46 34 72 36 104 C40 106 44 107 47 107 C43 74 45 46 51 22 Z" fill="#fff" opacity=".26" />
              <path d="M84 32 C89 56 90 82 86 106 C83 108 80 109 78 109 C83 84 84 58 79 30 Z" fill="#1c0338" opacity=".35" />

              {/* Bico dourado */}
              <path d="M60 2 C45 2 37 28 36 47 C48 39 72 39 84 47 C83 28 75 2 60 2 Z" fill="url(#ctaNoseGrad)" />
              <path d="M60 2 C53 2 47 16 44 34 C49 31 55 30 59 30 C58 18 59 8 60 2 Z" fill="#fff" opacity=".38" />
              <path d="M36 47 C48 39 72 39 84 47 L84 51 C72 43 48 43 36 51 Z" fill="#8d5a10" opacity=".55" />

              {/* Janela */}
              <circle cx="60" cy="47" r="17" fill="#2b0555" />
              <circle cx="60" cy="47" r="15" fill="url(#ctaWindowGrad)" />
              <circle cx="60" cy="47" r="15" fill="none" stroke="#f6c756" strokeWidth="2.4" opacity=".9" />
              <ellipse cx="54" cy="40" rx="5" ry="3" fill="#fff" opacity=".85" />
              <ellipse cx="65" cy="54" rx="6" ry="3.4" fill="#fff" opacity=".18" />

              {/* Bocal */}
              <path d="M38 112 C46 118 74 118 82 112 L86 128 C74 134 46 134 34 128 Z" fill="url(#ctaNozzleGrad)" />
              <path d="M34 128 C46 134 74 134 86 128 L85 131 C74 137 46 137 35 131 Z" fill="#12002a" opacity=".6" />
              <ellipse cx="60" cy="115" rx="22" ry="5" fill="#1a0333" opacity=".45" />
            </svg>
            {/* Chamas — ancoradas ao foguete (acompanham o movimento) */}
            <div className="pointer-events-none absolute left-1/2 top-[80%] -ml-px w-8 -translate-x-1/2">
              <span className="hero-cta-flame-glow absolute left-1/2 top-px h-[42px] w-[40px] rounded-full bg-[radial-gradient(circle,rgba(78,178,255,.32),transparent_68%)] blur-[5px]" />
              <span
                className="hero-cta-flame-outer absolute left-1/2 h-[46px] w-[19px]"
                style={{
                  borderRadius: "50% 50% 46% 46% / 14% 14% 86% 86%",
                  mixBlendMode: "screen",
                  background:
                    "linear-gradient(180deg,#fff 0 7%,#d9f5ff 10%,#7ed8ff 27%,#168bff 53%,#0545c8 73%,rgba(5,69,200,0) 100%)",
                  filter: "drop-shadow(0 7px 11px rgba(19,129,255,.45))",
                }}
              />
              <span
                className="hero-cta-flame-mid absolute left-1/2 h-[34px] w-[12px]"
                style={{
                  borderRadius: "50% 50% 46% 46% / 14% 14% 86% 86%",
                  mixBlendMode: "screen",
                  background:
                    "linear-gradient(180deg,#fff 0 14%,#dff7ff 25%,#8fddff 47%,#278fff 72%,rgba(39,143,255,0) 100%)",
                }}
              />
              <span
                className="hero-cta-flame-core absolute left-1/2 h-[22px] w-1.5"
                style={{
                  borderRadius: "50% 50% 46% 46% / 14% 14% 86% 86%",
                  mixBlendMode: "screen",
                  background:
                    "linear-gradient(180deg,#fff 0 46%,#c8f5ff 59%,#8ee3ff 73%,rgba(142,227,255,0) 100%)",
                }}
              />

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
          </div>
          </div>
        </div>

        {/* Título */}
        <div style={{ gridArea: "copy" }}>
          <p className="font-display text-[clamp(1.35rem,2.6vw,2rem)] font-extrabold leading-[1.12] tracking-tight">
            Pronto para começar a construir{" "}
            <span style={{ color: "#c992ff" }}>sua carteira?</span>
          </p>
        </div>

        {/* Descrição */}
        <div
          className="mx-auto max-w-sm border-t border-primary-foreground/10 pt-4 lg:mx-0 lg:max-w-none lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"
          style={{ gridArea: "mid" }}
        >
          <p className="text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
            Junte-se a milhares de parceiros que já transformaram indicações em{" "}
            <span className="font-semibold" style={{ color: "#f6c756" }}>
              liberdade financeira
            </span>
            .
          </p>
        </div>

        {/* Ações */}
        <div className="flex flex-col gap-2" style={{ gridArea: "actions" }}>
          <a
            href={whatsappLink("Olá! Quero começar agora.")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative isolate flex h-[52px] items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full px-6 font-display text-sm font-extrabold tracking-wide text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 sm:h-[56px] sm:text-base"
            style={{
              backgroundImage: "linear-gradient(180deg,#b954ff,#8e24e6 50%,#7214c9 100%)",
              border: "1px solid rgba(255,255,255,.28)",
              boxShadow:
                "0 12px 28px rgba(119,22,210,.40), 0 0 24px rgba(179,68,255,.24), inset 0 2px 0 rgba(255,255,255,.24)",
            }}
          >
            <span className="hero-cta-btn-shine" />
            <span className="relative z-10">QUERO COMEÇAR AGORA</span>
            <ArrowRight className="relative z-10 size-4" aria-hidden="true" />
          </a>
          <p className="flex items-center justify-center gap-2 text-xs text-primary-foreground/70">
            <Lock className="size-3.5" aria-hidden="true" />
            Ambiente seguro e 100% online
          </p>
        </div>
      </div>
    </div>
  );
}
