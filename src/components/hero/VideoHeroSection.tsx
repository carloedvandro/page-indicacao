import { HeroBackground } from "./HeroBackground";
import { VideoPlayer } from "./VideoPlayer";

/**
 * Seção principal (Hero) da página SmartVoz.
 *
 * Seção FIXA — não é carrossel. Sem setas, bolinhas, indicadores ou autoplay
 * de slides.
 *
 * Desktop: duas colunas (texto à esquerda, vídeo à direita).
 * Mobile: uma coluna na ordem texto superior → título → pergunta → botão →
 * vídeo.
 */
export function VideoHeroSection() {
  const irParaVideo = () => {
    document.getElementById("video")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="px-4 pb-6 pt-4 sm:px-5 sm:pb-8 sm:pt-6">
      <div className="relative mx-auto w-full max-w-[1540px] overflow-hidden rounded-[26px] lg:w-[95%]">
        <HeroBackground />

        <div className="relative grid items-center gap-8 px-5 py-10 sm:px-9 sm:py-12 lg:min-h-[620px] lg:grid-cols-[43%_minmax(0,1fr)] lg:items-center lg:gap-10 lg:px-12 lg:py-14 xl:gap-14">
          {/* Coluna esquerda — texto */}
          <div className="rise-in order-1 text-left">
            {/* Texto superior */}
            <p className="max-[380px]:whitespace-normal whitespace-nowrap font-display text-[0.82rem] font-bold uppercase leading-snug tracking-[0.02em] text-white sm:text-[0.95rem] lg:text-[1rem]">
              O PODER DA <span className="text-[#C084FC]">RECORRÊNCIA</span> E DA{" "}
              <span className="text-[#F97316]">MULTIPLICAÇÃO</span>
            </p>

            {/* Título principal */}
            <h1 className="mt-6 text-[1.8rem] font-extrabold leading-[1.12] text-white sm:text-[2.3rem] lg:mt-7 lg:text-[2.7rem] xl:text-[2.9rem]">
              Todo mundo que você
              <br /> conhece já paga internet
              <br /> todos os meses.
            </h1>

            {/* Pergunta */}
            <p className="mt-6 font-display text-[1.1rem] font-semibold text-white sm:text-[1.25rem] lg:mt-7 lg:text-[1.35rem]">
              A pergunta é:
            </p>
            <p
              className="mt-2 bg-clip-text font-display text-[1.35rem] font-bold leading-[1.18] text-transparent sm:text-[1.6rem] lg:text-[1.8rem]"
              style={{
                backgroundImage: "linear-gradient(100deg, #A855F7, #7C3AED)",
              }}
            >
              por que você ainda não
              <br /> ganha com isso?
            </p>

            {/* Botão ASSISTA AO VÍDEO */}
            <button
              type="button"
              onClick={irParaVideo}
              aria-label="Assista ao vídeo e entenda como funciona"
              className="group mt-7 flex w-full max-w-[19rem] items-center gap-3.5 rounded-[16px] bg-white px-4.5 py-3 text-left shadow-[0_10px_30px_-14px_rgba(8,3,16,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-14px_rgba(8,3,16,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:max-w-[20rem] sm:px-5 lg:mt-8"
            >
              {/* Play estilo YouTube */}
              <span
                className="flex size-10 shrink-0 items-center justify-center rounded-full sm:size-11"
                style={{ backgroundColor: "#FF0000" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="ml-0.5 size-4.5 sm:size-5"
                  fill="#FFFFFF"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>

              <span className="min-w-0">
                <span className="block whitespace-nowrap font-display text-[0.88rem] font-extrabold tracking-[0.02em] text-[#1B0A2A] sm:text-[0.95rem]">
                  ASSISTA AO VÍDEO
                </span>
                <span className="mt-0.5 block whitespace-nowrap font-display text-[0.58rem] font-semibold tracking-[0.14em] text-[#5B21B6] sm:text-[0.64rem]">
                  E ENTENDA COMO FUNCIONA
                </span>
              </span>
            </button>
          </div>

          {/* Coluna direita — vídeo */}
          <div className="rise-in order-2 w-full lg:pt-1">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </section>
  );
}
