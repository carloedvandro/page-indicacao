import capaVideo from "@/assets/video-capa.jpg";

/**
 * Thumbnail personalizada do vídeo institucional.
 *
 * Fundo escuro (não preto) com o mapa digital de conexões da SmartVoz.
 * À esquerda: INDIQUE. / CONSTRUA. / RECEBA.
 * Ao centro/direita: botão de Play vermelho no estilo YouTube.
 *
 * O player real (iframe) só é carregado após o clique — ver VideoPlayer.
 */
export function VideoThumbnail({ onPlay }: { onPlay: () => void }) {
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label="Reproduzir o vídeo de apresentação da SmartVoz"
      className="group absolute inset-0 size-full cursor-pointer overflow-hidden"
      style={{ backgroundColor: "#0D0717" }}
    >
      {/* Mapa digital de conexões */}
      <img
        src={capaVideo}
        alt="Rede de pessoas conectadas em todo o mundo representando a multiplicação SmartVoz"
        width={1600}
        height={900}
        className="size-full object-cover"
      />

      {/* Áreas mais claras para dar profundidade sem virar preto puro */}
      <span
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 80% at 18% 50%, rgba(27, 10, 42, 0.92), transparent 70%), radial-gradient(70% 90% at 82% 46%, rgba(43, 11, 69, 0.55), transparent 72%)",
        }}
        aria-hidden="true"
      />

      {/* Gradiente à esquerda para legibilidade do texto */}
      <span
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(13, 7, 23, 0.95) 0%, rgba(13, 7, 23, 0.72) 30%, rgba(13, 7, 23, 0.18) 58%, transparent 78%)",
        }}
        aria-hidden="true"
      />

      {/* Logo oficial SmartVoz dentro do vídeo */}
      <img
        src={logoSmartvoz.url}
        alt="SmartVoz"
        className="absolute left-6 top-5 h-6 w-auto drop-shadow-[0_2px_10px_rgba(168,85,247,0.55)] sm:left-8 sm:top-6 sm:h-7 lg:left-10 lg:h-8"
      />

      {/* INDIQUE. CONSTRUA. RECEBA. + Play — centralizados verticalmente */}
      <span className="absolute inset-0 flex items-center gap-4 px-6 sm:gap-6 sm:px-8 lg:gap-8 lg:px-10">
        <span className="text-left font-display text-[1.35rem] font-extrabold leading-[1.4] tracking-tight sm:text-[1.7rem] lg:text-[2rem]">
          <span className="block text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]">
            INDIQUE.
          </span>
          <span className="block text-[#A855F7] drop-shadow-[0_2px_14px_rgba(168,85,247,0.6)]">
            CONSTRUA.
          </span>
          <span className="block text-[#F97316] drop-shadow-[0_2px_14px_rgba(249,115,22,0.55)]">
            RECEBA.
          </span>
        </span>

        {/* Play circular preto com aro branco e brilho roxo */}
        <span
          className="flex size-[3.4rem] shrink-0 items-center justify-center rounded-full border-2 border-white/95 transition-transform duration-300 group-hover:scale-[1.06] sm:size-[4.2rem] lg:size-[5rem]"
          style={{
            backgroundColor: "#08040F",
            boxShadow:
              "0 0 0 6px rgba(168, 85, 247, 0.16), 0 0 34px 8px rgba(168, 85, 247, 0.45)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="ml-0.5 size-6 sm:size-7 lg:size-9"
            fill="#FFFFFF"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
