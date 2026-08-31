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

      {/* INDIQUE. CONSTRUA. RECEBA. */}
      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-left sm:left-8 lg:left-10">
        <span className="block font-display text-[1.35rem] font-extrabold leading-[1.35] tracking-tight sm:text-[1.7rem] lg:text-[2rem]">
          <span className="block text-white">INDIQUE.</span>
          <span className="block text-[#A855F7]">CONSTRUA.</span>
          <span className="block text-[#F97316]">RECEBA.</span>
        </span>
      </span>

      {/* Play vermelho estilo YouTube */}
      <span className="absolute left-[58%] top-1/2 -translate-x-1/2 -translate-y-1/2 sm:left-[60%]">
        <span
          className="flex h-[3.1rem] w-[4.4rem] items-center justify-center rounded-[1.1rem] transition-transform duration-300 group-hover:scale-[1.04] sm:h-[3.6rem] sm:w-[5.2rem] lg:h-[4.1rem] lg:w-[5.9rem]"
          style={{
            backgroundColor: "#FF0000",
            boxShadow: "0 8px 26px -8px rgba(255, 0, 0, 0.5)",
          }}
        >
          {/* Triângulo branco centralizado */}
          <svg
            viewBox="0 0 24 24"
            className="ml-0.5 size-6 sm:size-7 lg:size-8"
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
