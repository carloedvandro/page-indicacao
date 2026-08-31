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

        <div className="relative grid items-center gap-8 px-5 py-10 sm:px-9 sm:py-12 lg:min-h-[700px] lg:grid-cols-[43%_minmax(0,1fr)] lg:items-start lg:gap-10 lg:px-12 lg:py-14 xl:gap-14">
          {/* Coluna esquerda — texto */}
          <div className="rise-in order-1 text-left">
            {/* Texto superior */}
            <p className="font-display text-[1.05rem] font-bold uppercase leading-snug tracking-[0.02em] text-white sm:text-[1.35rem] lg:text-[1.45rem]">
              O PODER DA <span className="text-[#C084FC]">RECORRÊNCIA</span> E DA{" "}
              <span className="text-[#F97316]">MULTIPLICAÇÃO</span>
            </p>

            {/* Título principal */}
            <h1 className="mt-7 text-[2.1rem] font-extrabold leading-[1.08] text-white sm:text-[2.9rem] lg:mt-8 lg:text-[3.4rem] xl:text-[3.75rem]">
              Todo mundo que você
              <br className="hidden sm:block" /> conhece já paga internet
              <br className="hidden sm:block" /> todos os meses.
            </h1>

            {/* Pergunta */}
            <p className="mt-7 font-display text-[1.35rem] font-semibold text-white sm:text-[1.7rem] lg:mt-8 lg:text-[1.85rem]">
              A pergunta é:
            </p>
            <p
              className="mt-2 bg-clip-text font-display text-[1.7rem] font-bold leading-[1.16] text-transparent sm:text-[2.2rem] lg:text-[2.55rem]"
              style={{
                backgroundImage: "linear-gradient(100deg, #A855F7, #7C3AED)",
              }}
            >
              por que você ainda não
              <br className="hidden sm:block" /> ganha com isso?
            </p>

            {/* Botão ASSISTA AO VÍDEO */}
            <button
              type="button"
              onClick={irParaVideo}
              aria-label="Assista ao vídeo e entenda como funciona"
              className="group mt-8 flex w-full max-w-[22rem] items-center gap-4 rounded-[18px] bg-white px-5 py-3.5 text-left shadow-[0_10px_30px_-14px_rgba(8,3,16,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-14px_rgba(8,3,16,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:max-w-[24rem] sm:px-6 lg:mt-10"
            >
              {/* Play estilo YouTube */}
              <span
                className="flex size-11 shrink-0 items-center justify-center rounded-full sm:size-12"
                style={{ backgroundColor: "#FF0000" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="ml-0.5 size-5 sm:size-6"
                  fill="#FFFFFF"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>

              <span className="min-w-0">
                <span className="block whitespace-nowrap font-display text-[0.95rem] font-extrabold tracking-[0.02em] text-[#1B0A2A] sm:text-base">
                  ASSISTA AO VÍDEO
                </span>
                <span className="mt-0.5 block whitespace-nowrap font-display text-[0.62rem] font-semibold tracking-[0.14em] text-[#5B21B6] sm:text-[0.7rem]">
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
