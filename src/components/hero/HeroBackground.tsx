/**
 * Fundo tecnológico da seção Hero.
 *
 * Degradê roxo profundo com ondas de conexão finas e luminosas e alguns
 * pontos de luz (poucos em laranja/dourado). Discreto e corporativo — sem
 * excesso de partículas, neon ou visual gamer.
 */
export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Degradê base roxo profundo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(115deg, #160720 0%, #220837 38%, #310A50 68%, #471171 100%)",
        }}
      />

      {/* Região mais clara em roxo no centro/direita */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(70% 90% at 78% 42%, rgba(139, 46, 209, 0.42), transparent 68%)",
        }}
      />

      {/* Ondas de conexão finas e luminosas */}
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 1540 740"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="hero-wave-a" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="0" />
            <stop offset="45%" stopColor="#C084FC" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E879F9" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="hero-wave-b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0" />
            <stop offset="55%" stopColor="#D946EF" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-wave-c" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.05" />
            <stop offset="60%" stopColor="#C084FC" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ondas inferiores — percorrem discretamente o fundo */}
        <path
          d="M-40 618 C 240 566, 470 664, 742 612 C 1010 560, 1250 470, 1580 424"
          stroke="url(#hero-wave-a)"
          strokeWidth="1.1"
        />
        <path
          d="M-40 664 C 250 614, 500 700, 786 648 C 1060 598, 1300 512, 1580 470"
          stroke="url(#hero-wave-b)"
          strokeWidth="1"
        />
        <path
          d="M-40 578 C 268 528, 452 620, 706 566 C 968 510, 1222 428, 1580 380"
          stroke="url(#hero-wave-c)"
          strokeWidth="0.9"
        />
        <path
          d="M-40 706 C 262 660, 528 736, 830 686 C 1108 640, 1338 556, 1580 518"
          stroke="url(#hero-wave-c)"
          strokeWidth="0.8"
        />

        {/* Ondas superiores muito sutis */}
        <path
          d="M700 -30 C 900 90, 1120 60, 1580 150"
          stroke="url(#hero-wave-c)"
          strokeWidth="0.8"
        />
        <path
          d="M860 -30 C 1040 120, 1240 110, 1580 214"
          stroke="url(#hero-wave-b)"
          strokeWidth="0.7"
        />

        {/* Pontos de luz — poucos, discretos */}
        <g fill="#E9D5FF">
          <circle cx="318" cy="588" r="1.6" opacity="0.75" />
          <circle cx="742" cy="612" r="1.8" opacity="0.7" />
          <circle cx="1088" cy="522" r="1.5" opacity="0.6" />
          <circle cx="1310" cy="452" r="1.4" opacity="0.55" />
          <circle cx="512" cy="656" r="1.3" opacity="0.5" />
          <circle cx="960" cy="140" r="1.3" opacity="0.45" />
          <circle cx="1240" cy="196" r="1.2" opacity="0.4" />
        </g>

        {/* Poucos pontos em laranja/dourado (identidade SmartVoz) */}
        <g fill="#FBA94C">
          <circle cx="1156" cy="576" r="1.9" opacity="0.9" />
          <circle cx="596" cy="602" r="1.5" opacity="0.7" />
          <circle cx="1424" cy="352" r="1.4" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
