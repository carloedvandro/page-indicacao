import { useState } from "react";

import { smartvoz, youtubeId } from "@/lib/smartvoz";
import { VideoThumbnail } from "./VideoThumbnail";

/**
 * Player do vídeo institucional.
 *
 * Inicialmente exibe apenas a thumbnail personalizada + botão Play. O iframe
 * do YouTube só é carregado APÓS o clique do usuário — nunca no carregamento
 * da página.
 */
export function VideoPlayer() {
  const [tocando, setTocando] = useState(false);
  const id = youtubeId(smartvoz.youtubeVideo);

  return (
    <div
      id="video"
      className="relative aspect-video w-full overflow-hidden rounded-[1.25rem] shadow-[0_24px_60px_-24px_rgba(8,3,16,0.7)] sm:rounded-[1.5rem]"
      style={{ backgroundColor: "#0D0717" }}
    >
      {tocando && id ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title="Assista ao vídeo SmartVoz"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <VideoThumbnail onPlay={() => setTocando(true)} />
      )}
    </div>
  );
}
