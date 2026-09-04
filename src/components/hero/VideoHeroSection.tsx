import { useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { HeroCta } from "./HeroCta";

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
    <section className="px-4 pb-2 pt-6 sm:px-5 sm:pb-3 sm:pt-8">
      <div className="relative mx-auto min-h-[460px] w-full max-w-[1540px] lg:min-h-[420px] lg:w-[95%]">
        <div className="relative grid h-full min-h-[460px] w-full py-3 sm:px-9 sm:py-5 lg:min-h-[420px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-12 lg:px-12 lg:py-2 lg:mt-[76px] xl:gap-16">
          {/* Coluna esquerda — texto */}
          <div className="rise-in order-1 min-w-0 self-start text-left px-1 sm:px-0 lg:pl-6">
            {/* Texto superior */}
            <p className="max-[380px]:whitespace-normal whitespace-nowrap font-display text-[clamp(0.85rem,1.1vw,1rem)] font-bold uppercase leading-snug tracking-[0.02em] text-ink">
              O PODER DA <span className="text-[#7C3AED]">RECORRÊNCIA</span> E DA{" "}
              <span className="text-[#F97316]">MULTIPLICAÇÃO</span>
            </p>

            {/* Título principal
                Tamanho fluido: acompanha a largura da coluna para não estourar
                a linha em telas ~1536px (Windows 1920x1200 com escala 125% e
                zoom 100%). As quebras fixas só entram no xl, onde há espaço;
                abaixo disso o texto quebra naturalmente e equilibrado. */}
            <h1 className="mt-6 text-pretty text-[clamp(1.85rem,2.9vw,2.7rem)] font-extrabold leading-[1.12] text-ink lg:mt-7 lg:text-[clamp(1.9rem,2.9vw,3rem)]">
              Todo mundo que você
              <br className="hidden xl:block" /> conhece já paga internet
              <br className="hidden xl:block" /> todos os meses.
            </h1>

            {/* Pergunta */}
            <p className="mt-6 font-display text-[clamp(1.1rem,1.4vw,1.35rem)] font-semibold text-ink lg:mt-7 lg:text-[clamp(1.15rem,1.5vw,1.55rem)]">
              A pergunta é:
            </p>
            <p
              className="mt-2 bg-clip-text font-display text-[clamp(0.95rem,4.5vw,1.55rem)] font-bold leading-[1.18] text-transparent whitespace-nowrap lg:text-[clamp(1.05rem,3vw,1.75rem)]"
              style={{
                backgroundImage: "linear-gradient(100deg, #A855F7, #7C3AED)",
              }}
            >
              por que você ainda não ganha com isso?
            </p>
          </div>

          {/* Coluna direita — vídeo */}
          <div className="rise-in order-2 mt-8 min-w-0 w-full self-center lg:mt-0 lg:self-start">
            <VideoPlayer tocando={tocando} onPlay={() => setTocando(true)} />
          </div>

        </div>
      </div>

      <HeroCta />
    </section>
  );
}
