import { useRef, useState } from "react";
import { Play, User, Volume2, Settings, Cast, Maximize } from "lucide-react";

import capaVideo from "@/assets/video-capa.jpg";
import { Logo } from "./Logo";
import { smartvoz, whatsappLink, youtubeId } from "@/lib/smartvoz";

export function Hero() {
  const [tocando, setTocando] = useState(false);
  const player = useRef<HTMLDivElement>(null);
  const id = youtubeId(smartvoz.youtubeVideo);

  const abrirPlayer = () => {
    setTocando(true);
    player.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };


  return (
    <header className="waves-bg overflow-hidden px-3 pb-16 pt-6 sm:px-6 sm:pb-20 lg:pb-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Logo />
        <a
          href={whatsappLink("Olá! Já sou cliente SmartVoz e preciso de ajuda.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-ink shadow-soft transition-colors hover:bg-accent sm:px-5"
        >
          <User className="size-4" aria-hidden="true" />
          Já sou cliente
        </a>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-14">
        <div className="rise-in">
          <p
            className="inline-flex max-w-full items-center justify-center rounded-full p-px shadow-soft"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary), var(--brand-orange))",
            }}
          >
            <span className="flex w-full items-center justify-center rounded-full bg-card px-4 py-2.5 text-center font-display text-[0.62rem] font-extrabold uppercase leading-tight tracking-[0.08em] text-ink sm:px-6 sm:text-[0.78rem] sm:tracking-[0.1em]">
              O PODER DA <span className="mx-1 text-primary">RECORRÊNCIA</span> E
              DA <span className="ml-1 text-brand-orange">MULTIPLICAÇÃO</span>
            </span>
          </p>


          <h1 className="mt-6 text-[2.1rem] font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-[3.4rem]">
            Todo mundo que você conhece já paga internet todos os meses.
          </h1>

          <p className="mt-6 font-display text-xl font-bold leading-snug text-ink sm:text-3xl">
            A pergunta é:{" "}
            <span className="text-primary">
              por que você ainda não ganha com isso?
            </span>
          </p>

          <span className="mt-6 block h-1 w-16 rounded-full bg-primary" />
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
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl justify-center">
        <button
          type="button"
          onClick={abrirPlayer}
          className="flex w-full max-w-xl items-center gap-4 rounded-2xl bg-gradient-primary px-6 py-4 text-left shadow-glow transition-transform duration-300 hover:-translate-y-0.5 sm:px-9 sm:py-5"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary-foreground/80 sm:size-14">
            <Play
              className="ml-0.5 size-5 fill-current text-primary-foreground sm:size-6"
              aria-hidden="true"
            />
          </span>
          <span className="text-primary-foreground">
            <span className="block font-display text-lg font-extrabold tracking-tight sm:text-2xl">
              ASSISTA AO VÍDEO
            </span>
            <span className="mt-0.5 block font-display text-[0.7rem] font-semibold tracking-[0.14em] text-primary-foreground/85 sm:text-xs">
              E ENTENDA COMO FUNCIONA
            </span>
          </span>
        </button>
      </div>
    </header>
  );
}
