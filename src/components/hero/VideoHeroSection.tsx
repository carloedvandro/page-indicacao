import { useState } from "react";
import { HeroBackground } from "./HeroBackground";
import { VideoPlayer } from "./VideoPlayer";

/**
 * Seção principal (Hero) da página SmartVoz.
 *
 * Seção FIXA — não é carrossel. Sem setas, bolinhas, indicadores ou autoplay
 * de slides.
 *
 * Desktop: duas colunas (texto à esquerda, vídeo à direita, botão abaixo do
 * texto).
 * Mobile: uma coluna na ordem texto superior → título → pergunta → vídeo →
 * botão centralizado.
 */
export function VideoHeroSection() {
  const [tocando, setTocando] = useState(false);

  const tocarVideo = () => {
    setTocando(true);
    document.getElementById("video")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="px-4 pb-6 pt-4 sm:px-5 sm:pb-8 sm:pt-6">
      <div className="relative mx-auto min-h-[480px] w-full max-w-[1540px] overflow-hidden rounded-[26px] lg:min-h-[440px] lg:w-[95%]">
        <HeroBackground />

        <div className="relative grid h-full min-h-[480px] w-full px-5 py-8 sm:px-9 sm:py-10 lg:min-h-[440px] lg:grid-cols-[47%_minmax(0,1fr)] lg:px-12 lg:py-5 xl:gap-8">
          {/* Coluna esquerda — texto */}
          <div className="rise-in order-1 self-start text-left lg:hero-text-offset">
            {/* Texto superior */}
            <p className="max-[380px]:whitespace-normal whitespace-nowrap font-display text-[clamp(0.78rem,1vw,1rem)] font-bold uppercase leading-snug tracking-[0.02em] text-ink">
              O PODER DA <span className="text-[#7C3AED]">RECORRÊNCIA</span> E DA{" "}
              <span className="text-[#F97316]">MULTIPLICAÇÃO</span>
            </p>

            {/* Título principal
                Tamanho fluido: acompanha a largura da coluna para não estourar
                a linha em telas ~1536px (Windows 1920x1200 com escala 125% e
                zoom 100%). As quebras fixas só entram no xl, onde há espaço;
                abaixo disso o texto quebra naturalmente e equilibrado. */}
            <h1 className="mt-6 text-pretty text-[clamp(1.7rem,2.6vw,2.7rem)] font-extrabold leading-[1.12] text-ink lg:mt-7">
              Todo mundo que você
              <br className="hidden xl:block" /> conhece já paga internet
              <br className="hidden xl:block" /> todos os meses.
            </h1>

            {/* Pergunta */}
            <p className="mt-6 font-display text-[clamp(1.05rem,1.3vw,1.35rem)] font-semibold text-ink lg:mt-7">
              A pergunta é:
            </p>
            <p
              className="mt-2 bg-clip-text text-pretty font-display text-[clamp(1.25rem,1.75vw,1.8rem)] font-bold leading-[1.18] text-transparent lg:whitespace-nowrap"
              style={{
                backgroundImage: "linear-gradient(100deg, #A855F7, #7C3AED)",
              }}
            >
              por que você ainda não ganha com isso?
            </p>
          </div>

          {/* Coluna direita — vídeo */}
          <div className="rise-in order-2 w-full self-center">
            <VideoPlayer tocando={tocando} onPlay={() => setTocando(true)} />
          </div>

          {/* Botão ASSISTA AO VÍDEO
              Mobile: fica abaixo do vídeo (order-3) e centralizado.
              Desktop: retorna à coluna da esquerda, abaixo do texto. */}
          <div className="rise-in order-3 flex w-full justify-center lg:col-start-1 lg:row-start-2 lg:justify-start">
            <button
              type="button"
              onClick={tocarVideo}
              aria-label="Assista ao vídeo e entenda como funciona"
              className="group mt-5 flex w-full max-w-[19rem] items-center gap-3.5 rounded-[16px] bg-white px-4.5 py-3 text-left shadow-[0_10px_30px_-14px_rgba(8,3,16,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-14px_rgba(8,3,16,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:max-w-[20rem] sm:px-5 lg:mt-8"
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
        </div>
      </div>
    </section>
  );
}
