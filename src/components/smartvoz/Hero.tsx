import { useRef, useState } from "react";
import { Play, Volume2, Settings, Cast, Maximize } from "lucide-react";

import capaVideo from "@/assets/video-capa.jpg";
import { Logo } from "./Logo";
import { smartvoz, youtubeId } from "@/lib/smartvoz";

export function Hero() {
  const [tocando, setTocando] = useState(false);
  const player = useRef<HTMLDivElement>(null);
  const id = youtubeId(smartvoz.youtubeVideo);

  const abrirPlayer = () => {
    setTocando(true);
    player.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };


  return (
    <header className="waves-bg overflow-hidden px-3 pb-8 pt-6 sm:px-6 sm:pb-10 lg:pb-12">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-center px-4">
        <Logo className="h-[5.5rem] sm:h-24 lg:h-28" />
      </div>

      <div className="mx-auto mt-4 grid max-w-screen-2xl items-center gap-10 sm:mt-8 lg:mt-8 lg:grid-cols-2 lg:items-start lg:gap-14">
        <div className="rise-in">
          <p className="w-full text-center font-display text-[1.15rem] font-extrabold uppercase leading-tight tracking-[0.08em] text-ink sm:text-[1.45rem] sm:tracking-[0.1em] lg:text-left lg:text-[1.3rem] lg:leading-tight">
            O PODER DA <span className="text-primary">RECORRÊNCIA</span> E DA{" "}
            <span className="text-brand-orange">MULTIPLICAÇÃO</span>
          </p>


          <h1 className="mt-6 text-[1.75rem] font-extrabold leading-[1.08] text-ink sm:text-[2.45rem] lg:mt-5 lg:text-[3rem]">
            Todo mundo que você
            <br className="hidden lg:block" /> conhece já paga internet
            <br className="hidden lg:block" /> todos os meses.
          </h1>

          <p className="mt-5 font-display text-xl font-bold leading-[1.35] text-ink sm:text-3xl lg:mt-4">
            <span className="block pb-1">A pergunta é:</span>
            <span className="block pb-1 text-primary">
              por que você ainda não ganha com isso?
            </span>
          </p>
        </div>


        <div
          id="video"
          ref={player}
          className="rise-in overflow-hidden rounded-3xl bg-ink shadow-card scroll-mt-24"
        >
          <div className="relative aspect-video w-full">
            {tocando && id ? (
              <iframe
                className="absolute inset-0 size-full"
                src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                title="Assista ao vídeo SmartVoz"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={abrirPlayer}
                className="group absolute inset-0 size-full cursor-pointer"
                aria-label="Reproduzir o vídeo de apresentação da SmartVoz"
              >
                <img
                  src={capaVideo}
                  alt="Rede de pessoas conectadas representando a recorrência da SmartVoz"
                  width={1600}
                  height={900}
                  className="size-full object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />

                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-left sm:left-9">
                  <span className="block font-display text-lg font-extrabold leading-tight tracking-tight sm:text-2xl">
                    <span className="block text-primary-foreground">
                      INDIQUE.
                    </span>
                    <span
                      className="block bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, oklch(0.62 0.24 292), oklch(0.72 0.2 300))",
                      }}
                    >
                      CONSTRUA.
                    </span>
                    <span
                      className="block bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, oklch(0.66 0.2 45), oklch(0.6 0.24 15))",
                      }}
                    >
                      RECEBA.
                    </span>
                  </span>
                </span>

                <span className="pulse-ring absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary-foreground/90 bg-ink/70 backdrop-blur transition-transform duration-300 group-hover:scale-110 sm:size-20 lg:left-[62%]">
                  <Play
                    className="ml-0.5 size-7 fill-current text-primary-foreground sm:size-9"
                    aria-hidden="true"
                  />
                </span>
              </button>
            )}
          </div>

          <div className="px-4 pb-4 pt-1 sm:px-5">
            <div className="h-1 w-full rounded-full bg-primary-foreground/25">
              <div className="h-1 w-1.5 rounded-full bg-primary" />
            </div>
            <div className="mt-3 flex items-center gap-3 text-primary-foreground/85">
              <Play className="size-4 fill-current" aria-hidden="true" />
              <Volume2 className="size-4" aria-hidden="true" />
              <span className="text-xs font-medium tabular-nums sm:text-sm">
                0:00 / {smartvoz.videoDuracao}
              </span>
              <span className="ml-auto flex items-center gap-3">
                <Settings className="size-4" aria-hidden="true" />
                <Cast className="size-4" aria-hidden="true" />
                <Maximize className="size-4" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-1 flex justify-center lg:col-start-1 lg:-mt-6 lg:justify-start">
          <button
            type="button"
            onClick={abrirPlayer}
            aria-label="Assista ao vídeo e entenda como funciona"
            className="group flex w-full max-w-md items-center justify-center gap-3 rounded-2xl border border-primary/25 bg-card px-6 py-4 text-center shadow-soft transition-colors duration-200 hover:border-primary/50 sm:max-w-lg sm:gap-4 sm:px-8"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#FF0000] shadow-md transition-transform duration-200 ease-out group-hover:scale-110 sm:size-12">
              <Play
                className="ml-0.5 size-5 fill-white text-white sm:size-6"
                aria-hidden="true"
              />
            </span>

            <span className="text-left">
              <span className="block whitespace-nowrap font-display text-base font-extrabold tracking-[0.06em] text-ink sm:text-lg">
                ASSISTA AO VÍDEO
              </span>
              <span className="mt-0.5 block whitespace-nowrap font-display text-[0.6rem] font-semibold tracking-[0.18em] text-muted-foreground sm:text-[0.7rem]">
                E ENTENDA COMO FUNCIONA
              </span>
            </span>
          </button>
        </div>
      </div>




    </header>
  );
}
