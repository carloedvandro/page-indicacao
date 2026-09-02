import capaVideo from "@/assets/video-capa.jpg";

/**
 * Thumbnail personalizada do vídeo institucional.
 *
 * Fundo escuro (não preto) com o mapa digital de conexões da SmartVoz.
 * À esquerda: INDIQUE. / CONSTRUA. / RECEBA.
 * Abaixo, largura total do card: botão de Play estendido.
 *
 * O player real (iframe) só é carregado após o clique — ver VideoPlayer.
 */
export function VideoThumbnail({ onPlay }: { onPlay: () => void }) {
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label="Reproduzir o vídeo de apresentação da SmartVoz"
      className="group absolute inset-0 flex size-full cursor-pointer flex-col overflow-hidden"
      style={{ backgroundColor: "#0D0717" }}
    >
      {/* Mapa digital de conexões */}
      <img
        src={capaVideo}
        alt="Rede de pessoas conectadas em todo o mundo representando a multiplicação SmartVoz"
        width={1600}
        height={900}
        className="absolute inset-0 size-full object-cover"
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

      {/* INDIQUE. CONSTRUA. RECEBA. — alinhado à esquerda, largura do card */}
      <span className="relative z-10 w-full px-5 pt-7 text-left font-display text-[1.05rem] font-extrabold leading-[1.35] tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:px-7 sm:pt-9 sm:text-[1.2rem] lg:px-9 lg:pt-10 lg:text-[1.35rem]">
        <span className="block text-white">
          INDIQUE.
        </span>
        <span className="block text-[#A855F7]">
          CONSTRUA.
        </span>
        <span className="block text-[#F97316]">
          RECEBA.
        </span>
      </span>

      {/* Play estendido na largura do card */}
      <span className="relative z-10 mt-auto w-full px-5 pb-6 sm:px-7 sm:pb-8 lg:px-9">
        <span
          className="flex w-full items-center justify-center gap-2 rounded-full py-3 transition-transform duration-300 group-hover:scale-[1.01] sm:gap-3 sm:py-3.5 lg:py-4"
          style={{
            backgroundColor: "#08040F",
            border: "2px solid rgba(255, 255, 255, 0.95)",
            boxShadow:
              "0 0 0 5px rgba(168, 85, 247, 0.16), 0 0 28px 6px rgba(168, 85, 247, 0.45)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="ml-0.5 size-5 sm:size-6 lg:size-7"
            fill="#FFFFFF"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="font-display text-[0.85rem] font-extrabold uppercase tracking-[0.06em] text-white sm:text-[0.95rem] lg:text-[1.05rem]">
            Assista ao vídeo
          </span>
        </span>
      </span>
    </button>
  );
}
