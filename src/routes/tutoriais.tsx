import { createFileRoute } from "@tanstack/react-router";
import { Play, Clock } from "lucide-react";

import { SiteChrome } from "@/components/site/SiteChrome";
import { PageHeader } from "@/components/institutional/PageHeader";
import { tutoriais } from "@/lib/tutoriais-data";

export const Route = createFileRoute("/tutoriais")({
  head: () => ({
    meta: [
      { title: "SmartVoz | Tutoriais e Guias" },
      {
        name: "description",
        content:
          "Aprenda a utilizar os principais recursos da plataforma SmartVoz por meio de tutoriais rápidos e objetivos.",
      },
    ],
  }),
  component: Tutoriais,
});

function Tutoriais() {
  return (
    <SiteChrome>
      <PageHeader
        eyebrow="SUPORTE"
        titulo="Tutoriais e Guias"
        subtitulo="Aprenda a utilizar os principais recursos da plataforma SmartVoz por meio de tutoriais rápidos e objetivos."
      />

      <section className="mx-auto max-w-4xl px-5 py-8 sm:px-6 sm:py-10">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tutoriais.map((t) => (
            <li key={t.id} className="surface-card flex flex-col overflow-hidden">
              {/* Thumbnail placeholder — sem autoplay */}
              <div className="relative flex aspect-video items-center justify-center bg-gradient-primary-deep">
                <span className="flex size-12 items-center justify-center rounded-full bg-card/90 shadow-card">
                  <Play className="ml-0.5 size-5 fill-current text-primary" aria-hidden="true" />
                </span>
                <span className="absolute bottom-2 right-2 rounded-md bg-ink/80 px-2 py-0.5 text-xs font-medium text-primary-foreground">
                  {t.duracao}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-bold text-ink">{t.titulo}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.descricao}
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 font-display text-xs font-bold tracking-wide text-ink transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Play className="size-4" aria-hidden="true" />
                  Assistir tutorial
                </button>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground sm:text-sm">
          <Clock className="size-4 text-primary" aria-hidden="true" />
          Os vídeos não iniciam automaticamente.
        </p>
      </section>
    </SiteChrome>
  );
}
