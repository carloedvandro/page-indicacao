import capaVideo from "@/assets/video-capa.jpg";

/**
 * Thumbnail personalizada do vídeo institucional.
 *
 * Fundo escuro (não preto) com o mapa digital de conexões da SmartVoz.
 * À esquerda: INDIQUE. / CONSTRUA. / RECEBA.
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

      {/* INDIQUE. CONSTRUA. RECEBA. — canto superior esquerdo */}
      <span className="absolute left-0 top-0 px-3 pt-4 text-left font-display text-[1.05rem] font-extrabold leading-[1.35] tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:px-4 sm:pt-5 sm:text-[1.2rem] lg:px-5 lg:pt-6 lg:text-[1.35rem]">
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
    </button>
  );
}
